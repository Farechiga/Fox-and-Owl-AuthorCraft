// CraftAppreciation.js
// Runtime renderer for AuthorCraft Appreciation (no scoring UI).
// Fixes: no attractor clutter, pair-match shuffle, buckets drag/drop, spotlights selection, slider scope support.

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* ---------------------------
   State
----------------------------*/
const state = {
  source: "film",               // "film" | "literature"
  modeKey: "pairMatch",         // "pairMatch" | "sliders" | "rankBuckets" | "interpretiveTakes"
  pack: null,
  usedIds: new Set(),

  pair: { selectedLeftId: null, placed: new Map() },     // leftId -> rightId
  buckets: { selectedCardId: null, placed: new Map() },  // cardId -> bucketId
  slidersTouched: new Set(),
  spotlightsSelected: new Set(),

  // per-pack randomized ordering so items don’t line up by row
  shuffled: { left: [], right: [], bucketCards: [], spotlights: [] },
};

/* ---------------------------
   DOM helpers
----------------------------*/
const $ = (id) => document.getElementById(id);

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text ?? "";
}

function clear(id) {
  const el = $(id);
  if (el) el.innerHTML = "";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeChip(text, { onClick, selected = false, disabled = false } = {}) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = text;

  if (selected) {
    el.classList.add("selected");
  }
  if (disabled) {
    el.classList.add("disabled");
  } else if (onClick) {
    el.style.cursor = "pointer";
    el.addEventListener("click", onClick);
  }

  return el;
}

/* ---------------------------
   Pack selection
----------------------------*/
function getPool() {
  return state.source === "film" ? FILM_PACKS : LIT_PACKS;
}

function pickNextPack() {
  const pool = getPool();
  if (!Array.isArray(pool) || pool.length === 0) return null;

  const available = pool.filter((p) => !state.usedIds.has(p.id));
  const choicePool = available.length ? available : pool;

  const pack = choicePool[Math.floor(Math.random() * choicePool.length)];

  if (!available.length) state.usedIds.clear();
  state.usedIds.add(pack.id);

  return pack;
}

/* ---------------------------
   Header/meta render
----------------------------*/
function renderHeader(pack) {
  // REMOVE ATTRACTORS FROM UI (editor-only metadata)
  setText("scene-title", `Scene — ${pack?.sceneTitle || ""}`);
  setText("scene-text", pack?.scene || "");
  setText("tier-label", pack?.tier || "");

  // If your HTML has an attractors line container, blank it so it never shows.
  const gateIcons = $("gate-icons");
  if (gateIcons) gateIcons.innerHTML = "";
}

/* ---------------------------
   Slider scope helper
----------------------------*/
function sliderScopeLabel(pack) {
  const m = pack?.modes?.sliders;
  // Generation should supply one of: "Scene", "Judy", "Nick", "Judy ↔ Nick", etc.
  // Field name: scope (string)
  const scope = (m?.scope || "").trim();
  if (!scope) return ""; // keep UI clean if missing
  return `Scope: ${scope}`;
}

function setPrompt(text, pack) {
  const scope = state.modeKey === "sliders" ? sliderScopeLabel(pack) : "";
  setText("mode-prompt", scope ? `${text}  •  ${scope}` : (text ?? ""));
}

function getPrompt(pack) {
  const m = pack?.modes?.[state.modeKey];
  return m?.prompt || "";
}

/* ---------------------------
   Mode state reset
----------------------------*/
function resetModeState(modeKey) {
  if (modeKey === "pairMatch") {
    state.pair.selectedLeftId = null;
    state.pair.placed = new Map();
  }
  if (modeKey === "rankBuckets") {
    state.buckets.selectedCardId = null;
    state.buckets.placed = new Map();
  }
  if (modeKey === "sliders") {
    state.slidersTouched = new Set();
  }
  if (modeKey === "interpretiveTakes") {
    state.spotlightsSelected = new Set();
  }
}

/* ---------------------------
   Completion-based advance (no correctness)
----------------------------*/
function maybeAdvanceAfterCompletion() {
  // If you want to slow down/disable auto-advance, this is the switch.
  // For now: keep it simple and advance on completion.
  loadNewPack();
}

/* ---------------------------
   Randomize ordering per pack + mode
----------------------------*/
function computeShuffles(pack) {
  const pm = pack?.modes?.pairMatch;
  const rb = pack?.modes?.rankBuckets;
  const sp = pack?.modes?.interpretiveTakes;

  state.shuffled.left = pm?.leftCards ? shuffle(pm.leftCards) : [];
  state.shuffled.right = pm?.rightCards ? shuffle(pm.rightCards) : []; // IMPORTANT: independent shuffle

  state.shuffled.bucketCards = rb?.cards ? shuffle(rb.cards) : [];
  state.shuffled.spotlights = sp?.takes ? shuffle(sp.takes) : [];
}

/* ---------------------------
   Pair Match renderer
----------------------------*/
function renderPairMatch(pack) {
  clear("pair-left");
  clear("pair-right");

  const m = pack?.modes?.pairMatch;
  if (!m) return;

  const leftWrap = $("pair-left");
  const rightWrap = $("pair-right");
  if (!leftWrap || !rightWrap) return;

  const left = state.shuffled.left;
  const right = state.shuffled.right;

  const oneMovePerRight = !!m?.guardrails?.oneMovePerRightCard;

  left.forEach((card) => {
    const assigned = state.pair.placed.get(card.id);
    const selected = state.pair.selectedLeftId === card.id;

    leftWrap.appendChild(
      makeChip(card.text + (assigned ? " ✓" : ""), {
        selected,
        onClick: () => {
          state.pair.selectedLeftId = card.id;
          render();
        },
      })
    );
  });

  right.forEach((card) => {
    const isUsed = oneMovePerRight
      ? Array.from(state.pair.placed.values()).includes(card.id)
      : false;

    rightWrap.appendChild(
      makeChip(card.text, {
        disabled: isUsed,
        onClick: () => {
          if (!state.pair.selectedLeftId) return;
          if (isUsed) return;

          state.pair.placed.set(state.pair.selectedLeftId, card.id);
          state.pair.selectedLeftId = null;
          render();

          // completion = all left placed
          if (left.length > 0 && state.pair.placed.size >= left.length) {
            maybeAdvanceAfterCompletion();
          }
        },
      })
    );
  });
}

/* ---------------------------
   Sliders renderer
----------------------------*/
function renderSliders(pack) {
  clear("sliders-container");
  const m = pack?.modes?.sliders;
  if (!m) return;

  const wrap = $("sliders-container");
  if (!wrap) return;

  const axes = m.sliders || [];

  axes.forEach((axis) => {
    const row = document.createElement("div");
    row.className = "slider-row";

    const labels = document.createElement("div");
    labels.className = "slider-axis";

    const left = document.createElement("span");
    left.textContent = axis.leftLabel || "";
    const right = document.createElement("span");
    right.textContent = axis.rightLabel || "";

    labels.appendChild(left);
    labels.appendChild(right);

    const input = document.createElement("input");
    input.type = "range";
    input.min = "0";
    input.max = "100";
    input.value = String(axis.defaultValue ?? 50);

    input.addEventListener("input", () => {
      state.slidersTouched.add(axis.id);
      if (axes.length > 0 && state.slidersTouched.size >= axes.length) {
        maybeAdvanceAfterCompletion();
      }
    });

    row.appendChild(labels);
    row.appendChild(input);
    wrap.appendChild(row);
  });
}

/* ---------------------------
   Buckets renderer (true drag/drop + click fallback)
----------------------------*/
function renderBuckets(pack) {
  clear("bucket-elements");
  clear("bucket-engine");
  clear("bucket-support");
  clear("bucket-spice");

  const m = pack?.modes?.rankBuckets;
  if (!m) return;

  const elementsWrap = $("bucket-elements");
  const engineWrap = $("bucket-engine");
  const supportWrap = $("bucket-support");
  const spiceWrap = $("bucket-spice");
  if (!elementsWrap || !engineWrap || !supportWrap || !spiceWrap) return;

  const cards = state.shuffled.bucketCards;

  function place(cardId, bucketId) {
    if (!cardId) return;
    state.buckets.placed.set(cardId, bucketId);
    state.buckets.selectedCardId = null;
    render();

    if (cards.length > 0 && state.buckets.placed.size >= cards.length) {
      maybeAdvanceAfterCompletion();
    }
  }

  function makeDropTarget(el, bucketId) {
    el.classList.add("dropzone");

    el.addEventListener("dragover", (e) => {
      e.preventDefault();
      el.classList.add("dragover");
    });

    el.addEventListener("dragleave", () => el.classList.remove("dragover"));

    el.addEventListener("drop", (e) => {
      e.preventDefault();
      el.classList.remove("dragover");
      const cardId = e.dataTransfer.getData("text/cardId");
      place(cardId, bucketId);
    });

    // click fallback: if a card is selected, clicking bucket places it
    el.addEventListener("click", () => {
      if (state.buckets.selectedCardId) place(state.buckets.selectedCardId, bucketId);
    });
  }

  makeDropTarget(engineWrap, "engine");
  makeDropTarget(supportWrap, "support");
  makeDropTarget(spiceWrap, "spice");

  // Unplaced element chips (draggable)
  cards.forEach((c) => {
    if (state.buckets.placed.has(c.id)) return;

    const chip = makeChip(c.text, {
      selected: state.buckets.selectedCardId === c.id,
      onClick: () => {
        state.buckets.selectedCardId = c.id;
        render();
      },
    });

    chip.setAttribute("draggable", "true");
    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/cardId", c.id);
      e.dataTransfer.effectAllowed = "move";
      chip.classList.add("dragging");
    });
    chip.addEventListener("dragend", () => chip.classList.remove("dragging"));

    elementsWrap.appendChild(chip);
  });

  // Placed chips inside buckets (click to unplace)
  cards.forEach((c) => {
    const bucketId = state.buckets.placed.get(c.id);
    if (!bucketId) return;

    const node = makeChip(c.text, {
      onClick: () => {
        state.buckets.placed.delete(c.id);
        render();
      },
    });

    if (bucketId === "engine") engineWrap.appendChild(node);
    if (bucketId === "support") supportWrap.appendChild(node);
    if (bucketId === "spice") spiceWrap.appendChild(node);
  });
}

/* ---------------------------
   Spotlights renderer (selection + visual)
----------------------------*/
function renderSpotlights(pack) {
  clear("spotlights-container");
  const m = pack?.modes?.interpretiveTakes;
  if (!m) return;

  const wrap = $("spotlights-container");
  if (!wrap) return;

  const takes = state.shuffled.spotlights;

  takes.forEach((t) => {
    const el = document.createElement("div");
    el.className = "spotlight";
    el.textContent = t.text;
    el.tabIndex = 0;

    const selected = state.spotlightsSelected.has(t.id);
    if (selected) el.classList.add("selected");

    function toggle() {
      if (state.spotlightsSelected.has(t.id)) state.spotlightsSelected.delete(t.id);
      else state.spotlightsSelected.add(t.id);

      render();

      // completion = at least one selected
      if (state.spotlightsSelected.size >= 1) {
        maybeAdvanceAfterCompletion();
      }
    }

    el.addEventListener("click", toggle);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") toggle();
    });

    wrap.appendChild(el);
  });
}

/* ---------------------------
   Main render
----------------------------*/
function render() {
  if (!state.pack) return;

  renderHeader(state.pack);
  setPrompt(getPrompt(state.pack), state.pack);

  if (state.modeKey === "pairMatch") renderPairMatch(state.pack);
  if (state.modeKey === "sliders") renderSliders(state.pack);
  if (state.modeKey === "rankBuckets") renderBuckets(state.pack);
  if (state.modeKey === "interpretiveTakes") renderSpotlights(state.pack);
}

/* ---------------------------
   Load new pack
----------------------------*/
function loadNewPack() {
  state.pack = pickNextPack();
  computeShuffles(state.pack);
  resetModeState(state.modeKey);
  render();
}

/* ---------------------------
   Events from index.html
----------------------------*/
document.addEventListener("sourcechange", (e) => {
  const source = e?.detail?.source;
  if (source === "film" || source === "literature") {
    state.source = source;
    state.usedIds.clear();
    loadNewPack();
  }
});

document.addEventListener("modechange", (e) => {
  const mk = e?.detail?.modeKey;
  if (mk) {
    state.modeKey = mk;
    resetModeState(mk);
    render();
  }
});

document.addEventListener("scenenext", () => {
  loadNewPack();
});

/* ---------------------------
   Boot
----------------------------*/
loadNewPack();

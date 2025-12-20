// CraftAppreciation.js
// Runtime renderer for AuthorCraft Appreciation (no scoring UI).
// Renders into index.html containers: pair-left/right, sliders-container, bucket-* and spotlights-container.
//
// Requires ES module exports:
//   - filmPacks.js exporting FILM_PACKS
//   - litPacks.js exporting LIT_PACKS

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* ---------------------------
   State
----------------------------*/
const state = {
  source: "film",          // "film" | "literature"
  modeKey: "pairMatch",    // "pairMatch" | "sliders" | "rankBuckets" | "interpretiveTakes"
  pack: null,
  usedIds: new Set(),

  pair: { selectedLeftId: null, placed: new Map() },     // leftId -> rightId
  buckets: { selectedCardId: null, placed: new Map() },  // cardId -> bucketId
  slidersTouched: new Set(),
  spotlightsSelected: new Set(),
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

function makeChip(text, { onClick, selected = false, disabled = false } = {}) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = text;

  if (selected) {
    el.style.outline = "2px solid rgba(189,155,64,0.9)";
    el.style.outlineOffset = "2px";
  }
  if (disabled) {
    el.style.opacity = "0.45";
  } else if (onClick) {
    el.style.cursor = "pointer";
    el.addEventListener("click", onClick);
  }

  return el;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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
  setText("scene-title", `Scene — ${pack?.sceneTitle || ""}`);
  setText("scene-text", pack?.scene || "");
  setText("tier-label", pack?.tier || "");

  const iconsWrap = $("gate-icons");
  if (iconsWrap) {
    iconsWrap.innerHTML = "";
    const ats = pack?.passageSelector?.attractors || [];
    if (ats.length) {
      const label = document.createElement("span");
      label.style.color = "rgba(189,155,64,0.9)";
      label.style.fontSize = "0.9rem";
      label.textContent = `Attractors: ${ats.join(" · ")}`;
      iconsWrap.appendChild(label);
    }
  }
}

function setPrompt(text) {
  setText("mode-prompt", text ?? "");
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
   Auto-advance (completion-based)
----------------------------*/
async function maybeAdvance() {
  await sleep(300);
  loadNewPack();
}

/* ---------------------------
   Renderers per mode
----------------------------*/
function renderPairMatch(pack) {
  const m = pack?.modes?.pairMatch;
  clear("pair-left");
  clear("pair-right");
  if (!m) return;

  const leftWrap = $("pair-left");
  const rightWrap = $("pair-right");
  if (!leftWrap || !rightWrap) return;

  const left = m.leftCards || [];
  const right = m.rightCards || [];
  const oneMovePerRight = !!m?.guardrails?.oneMovePerRightCard;

  // Left list
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

  // Right list
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

          if (state.pair.placed.size >= left.length && left.length > 0) {
            maybeAdvance();
          }
        },
      })
    );
  });
}

function renderSliders(pack) {
  const m = pack?.modes?.sliders;
  clear("sliders-container");
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
        maybeAdvance();
      }
    });

    row.appendChild(labels);
    row.appendChild(input);
    wrap.appendChild(row);
  });
}

function renderBuckets(pack) {
  const m = pack?.modes?.rankBuckets;
  clear("bucket-elements");
  clear("bucket-engine");
  clear("bucket-support");
  clear("bucket-spice");
  if (!m) return;

  const elementsWrap = $("bucket-elements");
  const engineWrap = $("bucket-engine");
  const supportWrap = $("bucket-support");
  const spiceWrap = $("bucket-spice");
  if (!elementsWrap || !engineWrap || !supportWrap || !spiceWrap) return;

  const cards = m.cards || [];

  function place(bucketId) {
    const cardId = state.buckets.selectedCardId;
    if (!cardId) return;
    state.buckets.placed.set(cardId, bucketId);
    state.buckets.selectedCardId = null;
    render();

    if (cards.length > 0 && state.buckets.placed.size >= cards.length) {
      maybeAdvance();
    }
  }

  // Make bucket panels clickable drop targets
  engineWrap.onclick = () => place("engine");
  supportWrap.onclick = () => place("support");
  spiceWrap.onclick = () => place("spice");

  // Unplaced elements list
  cards.forEach((c) => {
    if (state.buckets.placed.has(c.id)) return;
    const selected = state.buckets.selectedCardId === c.id;

    elementsWrap.appendChild(
      makeChip(c.text, {
        selected,
        onClick: () => {
          state.buckets.selectedCardId = c.id;
          render();
        },
      })
    );
  });

  // Placed chips inside buckets (click to unplace)
  cards.forEach((c) => {
    const b = state.buckets.placed.get(c.id);
    if (!b) return;

    const node = makeChip(c.text, {
      onClick: () => {
        state.buckets.placed.delete(c.id);
        render();
      },
    });

    if (b === "engine") engineWrap.appendChild(node);
    if (b === "support") supportWrap.appendChild(node);
    if (b === "spice") spiceWrap.appendChild(node);
  });
}

function renderSpotlights(pack) {
  const m = pack?.modes?.interpretiveTakes;
  clear("spotlights-container");
  if (!m) return;

  const wrap = $("spotlights-container");
  if (!wrap) return;

  const takes = m.takes || [];
  takes.forEach((t) => {
    const el = document.createElement("div");
    el.className = "spotlight";
    el.textContent = t.text;

    if (state.spotlightsSelected.has(t.id)) el.classList.add("selected");

    el.addEventListener("click", () => {
      if (state.spotlightsSelected.has(t.id)) state.spotlightsSelected.delete(t.id);
      else state.spotlightsSelected.add(t.id);

      render();

      // completion: first selection
      if (state.spotlightsSelected.size >= 1) {
        maybeAdvance();
      }
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
  setPrompt(getPrompt(state.pack));

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

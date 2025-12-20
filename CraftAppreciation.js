// CraftAppreciation.js
// Runtime for AuthorCraft Appreciation (no scoring, no notes, no reset buttons)
//
// Requires:
// - filmPacks.js exporting FILM_PACKS
// - litPacks.js exporting LIT_PACKS
//
// index.html must load this as: <script type="module" src="CraftAppreciation.js"></script>

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* ---------------------------
   State
----------------------------*/
const state = {
  source: "film",         // "film" | "literature"
  modeKey: "pairMatch",   // "pairMatch" | "sliders" | "rankBuckets" | "interpretiveTakes"
  pack: null,
  usedIds: new Set(),
  // interaction state per mode
  pair: { selectedLeftId: null, placed: new Map() },           // leftId -> rightId
  buckets: { selectedCardId: null, placed: new Map() },        // cardId -> bucketId
  slidersTouched: new Set(),
  spotlightsSelected: new Set()
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

function chip(text, { onClick, selected = false } = {}) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = text;
  if (selected) {
    el.style.outline = "2px solid rgba(189,155,64,0.9)";
    el.style.outlineOffset = "2px";
  }
  if (onClick) {
    el.style.cursor = "pointer";
    el.addEventListener("click", onClick);
  }
  return el;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/* ---------------------------
   Pack selection
----------------------------*/
function getPool() {
  return state.source === "film" ? FILM_PACKS : LIT_PACKS;
}

function pickNextPack() {
  const pool = getPool();
  if (!pool || pool.length === 0) return null;

  // naive non-repeating until exhausted
  const available = pool.filter(p => !state.usedIds.has(p.id));
  const choicePool = available.length ? available : pool;

  const idx = Math.floor(Math.random() * choicePool.length);
  const pack = choicePool[idx];

  if (available.length === 0) state.usedIds.clear();
  state.usedIds.add(pack.id);

  return pack;
}

/* ---------------------------
   Render: header + meta
----------------------------*/
function renderHeader(pack) {
  setText("scene-title", `Scene — ${pack.sceneTitle || ""}`);
  setText("scene-text", pack.scene || "");
  setText("tier-label", pack.tier ? pack.tier : "");

  const iconsWrap = $("gate-icons");
  if (iconsWrap) {
    iconsWrap.innerHTML = "";
    const ats = pack?.passageSelector?.attractors || [];
    // just show "Attractors:" label if any; icons can be mapped later
    if (ats.length) {
      const label = document.createElement("span");
      label.style.color = "rgba(189,155,64,0.9)";
      label.style.fontSize = "0.9rem";
      label.textContent = `Attractors: ${ats.join(" · ")}`;
      iconsWrap.appendChild(label);
    }
  }
}

/* ---------------------------
   Mode prompt
----------------------------*/
function modePrompt(modeKey, pack) {
  const m = pack?.modes?.[modeKey];
  if (m?.prompt) return m.prompt;

  // fallback prompts (kept short; no dev language)
  switch (modeKey) {
    case "pairMatch": return "Match micro-moments to why they land.";
    case "sliders": return "Set your read using descriptive axes.";
    case "rankBuckets": return "Sort the elements by what drives the scene.";
    case "interpretiveTakes": return "Choose spotlights that can coexist.";
    default: return "";
  }
}

function setPrompt(text) {
  setText("mode-prompt", text);
}

/* ---------------------------
   Reset per-mode interaction state
----------------------------*/
function resetModeState(modeKey) {
  if (modeKey === "pairMatch") {
    state.pair.selectedLeftId = null;
    state.pair.placed = new Map();
  } else if (modeKey === "rankBuckets") {
    state.buckets.selectedCardId = null;
    state.buckets.placed = new Map();
  } else if (modeKey === "sliders") {
    state.slidersTouched = new Set();
  } else if (modeKey === "interpretiveTakes") {
    state.spotlightsSelected = new Set();
  }
}

/* ---------------------------
   Completion + auto-advance
   (no correctness; completion = "done enough")
----------------------------*/
async function maybeAdvance() {
  // Small delay so the user can see their last action register
  await sleep(350);

  // Advance = load a new pack, keep current medium & mode
  loadNewPack();
}

/* ---------------------------
   Mode renderers
----------------------------*/
function renderPairMatch(pack) {
  const m = pack?.modes?.pairMatch;
  clear("pair-left");
  clear("pair-right");

  if (!m) return;

  const leftWrap = $("pair-left");
  const rightWrap = $("pair-right");

  const left = m.leftCards || [];
  const right = m.rightCards || [];

  // Left: click-select a left card
  left.forEach(card => {
    const selected = state.pair.selectedLeftId === card.id;
    const assignedRightId = state.pair.placed.get(card.id);
    const suffix = assignedRightId ? " ✓" : "";
    leftWrap.appendChild(
      chip(card.text + suffix, {
        selected,
        onClick: () => {
          state.pair.selectedLeftId = card.id;
          render(); // re-render highlights
        }
      })
    );
  });

  // Right: click to assign selected left -> this right
  right.forEach(card => {
    const isUsed = Array.from(state.pair.placed.values()).includes(card.id);
    rightWrap.appendChild(
      chip(card.text, {
        selected: false,
        onClick: () => {
          if (!state.pair.selectedLeftId) return;

          // enforce oneMovePerRightCard: don’t allow reuse
          if (isUsed) return;

          state.pair.placed.set(state.pair.selectedLeftId, card.id);
          state.pair.selectedLeftId = null;
          render();

          // completion: all left cards assigned
          if (state.pair.placed.size >= left.length) {
            maybeAdvance();
          }
        }
      })
    );
  });
}

function renderSliders(pack) {
  const m = pack?.modes?.sliders;
  clear("sliders-container");
  if (!m) return;

  const wrap = $("sliders-container");

  const axes = m.sliders || [];
  axes.forEach(axis => {
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
      // completion: touched all sliders once
      if (state.slidersTouched.size >= axes.length) {
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

  const cards = m.cards || [];

  // helper to place selected card into bucket
  function place(bucketId) {
    const cardId = state.buckets.selectedCardId;
    if (!cardId) return;
    state.buckets.placed.set(cardId, bucketId);
    state.buckets.selectedCardId = null;
    render();

    // completion: all cards placed somewhere
    if (state.buckets.placed.size >= cards.length) {
      maybeAdvance();
    }
  }

  // Elements list: click to select
  cards.forEach(c => {
    // show only unplaced in the elements list
    if (state.buckets.placed.has(c.id)) return;

    const selected = state.buckets.selectedCardId === c.id;
    elementsWrap.appendChild(
      chip(c.text, {
        selected,
        onClick: () => {
          state.buckets.selectedCardId = c.id;
          render();
        }
      })
    );
  });

  // Bucket panels: click on bucket area to place selected card
  engineWrap.addEventListener("click", () => place("engine"), { once: true });
  supportWrap.addEventListener("click", () => place("support"), { once: true });
  spiceWrap.addEventListener("click", () => place("spice"), { once: true });

  // Render placed chips into buckets
  for (const c of cards) {
    const b = state.buckets.placed.get(c.id);
    if (!b) continue;
    const node = chip(c.text, { onClick: () => {
      // allow “unplace” by clicking
      state.buckets.placed.delete(c.id);
      render();
    }});
    if (b === "engine") engineWrap.appendChild(node);
    if (b === "support") supportWrap.appendChild(node);
    if (b === "spice") spiceWrap.appendChild(node);
  }
}

function renderSpotlights(pack) {
  const m = pack?.modes?.interpretiveTakes;
  clear("spotlights-container");
  if (!m) return;

  const wrap = $("spotlights-container");
  const takes = m.takes || [];

  takes.forEach(t => {
    const el = document.createElement("div");
    el.className = "spotlight";
    el.textContent = t.text;

    const selected = state.spotlightsSelected.has(t.id);
    if (selected) el.classList.add("selected");

    el.addEventListener("click", async () => {
      if (state.spotlightsSelected.has(t.id)) state.spotlightsSelected.delete(t.id);
      else state.spotlightsSelected.add(t.id);

      render();

      // completion: at least one selection
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
  setPrompt(modePrompt(state.modeKey, state.pack));

  // Render only active mode contents (containers are toggled by index.html)
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
   Event wiring from index.html
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

// Optional external trigger, if you ever want to advance from elsewhere:
document.addEventListener("advance", () => {
  loadNewPack();
});

/* ---------------------------
   Boot: if index.html enters game before this loads,
   scenenext will be fired; but we also safe-init.
----------------------------*/
(function boot() {
  // if user lands directly on game (or Play already clicked),
  // pick a pack so UI isn't blank.
  if (!state.pack) loadNewPack();
})();

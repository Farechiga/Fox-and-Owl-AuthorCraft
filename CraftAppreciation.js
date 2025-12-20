// CraftAppreciation.js
// Runtime for AuthorCraft Appreciation
// Requires ES module exports:
//   - filmPacks.js exporting FILM_PACKS
//   - litPacks.js exporting LIT_PACKS

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* ---------------------------
   Fixed scene workflow
----------------------------*/
const MODE_ORDER = ["pairMatch", "sliders", "rankBuckets", "interpretiveTakes"];
const MODE_LABELS = {
  pairMatch: "Pair Match",
  sliders: "Sliders",
  rankBuckets: "Buckets",
  interpretiveTakes: "Spotlights",
};

/* ---------------------------
   State
----------------------------*/
const state = {
  // "film" | "literature"
  source: "film",

  // step index into MODE_ORDER
  stepIndex: 0,

  // current pack
  pack: null,
  usedIds: new Set(),

  // scoring
  scenesCompleted: 0,

  // interaction state
  pair: {
    selectedLeftId: null,
    placed: new Map(), // leftId -> rightId
    correctLeftIds: new Set(),
    wrongAttempts: 0,
  },

  sliders: {
    touchedIds: new Set(),
  },

  buckets: {
    placed: new Map(), // cardId -> bucketId
  },

  spotlights: {
    // rank slots: [takeId, takeId, takeId]
    top3: [null, null, null],
  },
};

/* ---------------------------
   DOM helpers
----------------------------*/
const $ = (id) => document.getElementById(id);

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text ?? "";
}

function setHTML(id, html) {
  const el = $(id);
  if (el) el.innerHTML = html ?? "";
}

function show(id) {
  const el = $(id);
  if (el) el.style.display = "";
}

function hide(id) {
  const el = $(id);
  if (el) el.style.display = "none";
}

function clear(id) {
  const el = $(id);
  if (el) el.innerHTML = "";
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
   Scene lifecycle
----------------------------*/
function currentModeKey() {
  return MODE_ORDER[state.stepIndex] || "pairMatch";
}

function resetForNewScene() {
  state.stepIndex = 0;

  state.pair.selectedLeftId = null;
  state.pair.placed = new Map();
  state.pair.correctLeftIds = new Set();
  state.pair.wrongAttempts = 0;

  state.sliders.touchedIds = new Set();

  state.buckets.placed = new Map();

  state.spotlights.top3 = [null, null, null];
}

function loadNewScene() {
  state.pack = pickNextPack();
  resetForNewScene();
  renderAll();
}

/* ---------------------------
   Header / chrome
----------------------------*/
function renderHeader(pack) {
  setText("scene-title", `Scene — ${pack?.sceneTitle || ""}`);
  setText("scene-text", pack?.scene || "");
  setText("tier-label", pack?.tier || "");

  // remove attractors from UI (editor-only metadata)
  clear("gate-icons");

  setText("score-label", `Scenes completed: ${state.scenesCompleted}`);

  renderModeProgress();
  renderModePills();
}

function renderModeProgress() {
  const wrap = $("mode-progress");
  if (!wrap) return;

  wrap.innerHTML = "";

  MODE_ORDER.forEach((mk, idx) => {
    const step = document.createElement("div");
    step.className = "step";

    const done = idx < state.stepIndex;
    const active = idx === state.stepIndex;

    if (done) step.classList.add("done");
    if (active) step.classList.add("active");

    step.textContent = MODE_LABELS[mk] || mk;
    wrap.appendChild(step);
  });
}

function renderModePills() {
  // pills are shown but locked to current step (you can’t skip ahead)
  const pills = [
    ["mode-pill-pair", "pairMatch"],
    ["mode-pill-sliders", "sliders"],
    ["mode-pill-buckets", "rankBuckets"],
    ["mode-pill-spotlights", "interpretiveTakes"],
  ];

  pills.forEach(([id, mk]) => {
    const el = $(id);
    if (!el) return;

    const active = mk === currentModeKey();
    el.classList.toggle("active", active);

    // lock: only allow going back to earlier completed steps if you want (optional).
    // For now: hard-lock to current step for a clean 4-step flow.
    el.onclick = () => {};
    el.style.cursor = "default";
    el.style.opacity = active ? "1" : "0.85";
  });
}

/* ---------------------------
   Completion + step advance
----------------------------*/
async function advanceStepOrScene() {
  await sleep(250);

  if (state.stepIndex < MODE_ORDER.length - 1) {
    state.stepIndex += 1;

    // reset mode-specific transient selection on step change
    state.pair.selectedLeftId = null;

    renderAll();
    return;
  }

  // completed scene
  state.scenesCompleted += 1;
  loadNewScene();
}

function setHint(text) {
  const el = $("hint-line");
  if (!el) return;
  el.textContent = text || "";
}

/* ---------------------------
   Mode renderers
----------------------------*/
function renderPairMatch(pack) {
  const m = pack?.modes?.pairMatch;
  if (!m) return;

  setText("mode-prompt", m.prompt || "Match the micro-moments to why they land.");

  // build answer key from pairs
  const key = new Map((m.pairs || []).map((p) => [p.leftId, p.rightId]));

  // shuffle both columns
  const left = shuffle(m.leftCards || []);
  const right = shuffle(m.rightCards || []);

  const leftWrap = $("pair-left");
  const rightWrap = $("pair-right");
  if (!leftWrap || !rightWrap) return;

  leftWrap.innerHTML = "";
  rightWrap.innerHTML = "";

  setHint("");

  // Left list
  left.forEach((card) => {
    const row = document.createElement("div");
    row.className = "chip";
    row.textContent = card.text;

    const isCorrectDone = state.pair.correctLeftIds.has(card.id);
    const isSelected = state.pair.selectedLeftId === card.id;

    if (isCorrectDone) row.classList.add("done");
    if (isSelected) row.classList.add("selected");

    row.onclick = () => {
      if (isCorrectDone) return;
      state.pair.selectedLeftId = card.id;
      setHint("Now choose the best match on the right.");
      renderAll();
    };

    leftWrap.appendChild(row);
  });

  // Right list
  right.forEach((card) => {
    const row = document.createElement("div");
    row.className = "chip";
    row.textContent = card.text;

    // optional: prevent using same right card multiple times
    const usedRight = Array.from(state.pair.placed.values()).includes(card.id);
    if (usedRight) row.classList.add("disabled");

    row.onclick = () => {
      const leftId = state.pair.selectedLeftId;
      if (!leftId) {
        setHint("Pick a micro-moment on the left first.");
        return;
      }
      if (state.pair.correctLeftIds.has(leftId)) return;
      if (usedRight) return;

      const correctRightId = key.get(leftId);

      if (card.id === correctRightId) {
        state.pair.placed.set(leftId, card.id);
        state.pair.correctLeftIds.add(leftId);
        state.pair.selectedLeftId = null;
        setHint("✓ Nice. Next one.");

        // completion
        const needed = (m.leftCards || []).length;
        if (needed > 0 && state.pair.correctLeftIds.size >= needed) {
          setHint("✓ Pair Match complete.");
          advanceStepOrScene();
        } else {
          renderAll();
        }
      } else {
        state.pair.wrongAttempts += 1;
        setHint("Not quite — try a different ‘why it lands.’");
        // subtle shake, no red/green
        row.classList.add("shake");
        setTimeout(() => row.classList.remove("shake"), 260);
      }
    };

    rightWrap.appendChild(row);
  });
}

function renderSliders(pack) {
  const m = pack?.modes?.sliders;
  if (!m) return;

  // REQUIRED: declare scope (scene vs character vs relationship)
  const scope = m.scopeLabel ? `Scope: ${m.scopeLabel}. ` : "";
  setText("mode-prompt", `${scope}${m.prompt || "Set your read using descriptive axes."}`);

  const wrap = $("sliders-container");
  if (!wrap) return;
  wrap.innerHTML = "";

  setHint("Move each slider at least once.");

  const axes = m.sliders || [];
  axes.forEach((axis) => {
    const row = document.createElement("div");
    row.className = "slider-row";

    const labels = document.createElement("div");
    labels.className = "slider-axis";
    labels.innerHTML = `<span>${axis.leftLabel || ""}</span><span>${axis.rightLabel || ""}</span>`;

    const input = document.createElement("input");
    input.type = "range";
    input.min = "0";
    input.max = "100";

    // OPTIONAL: range limits for “keep it coherent”
    // If you set axis.minValue/maxValue in pack, we clamp the starting point + movement.
    const minV = Number.isFinite(axis.minValue) ? axis.minValue : 0;
    const maxV = Number.isFinite(axis.maxValue) ? axis.maxValue : 100;

    // native <input range> can’t have dynamic min/max per-axis while still being 0-100 visually,
    // so we set min/max directly.
    input.min = String(minV);
    input.max = String(maxV);

    const def = Number.isFinite(axis.defaultValue) ? axis.defaultValue : 50;
    input.value = String(Math.min(maxV, Math.max(minV, def)));

    input.addEventListener("input", () => {
      state.sliders.touchedIds.add(axis.id);

      if (axes.length > 0 && state.sliders.touchedIds.size >= axes.length) {
        setHint("✓ Sliders complete.");
        advanceStepOrScene();
      }
    });

    row.appendChild(labels);
    row.appendChild(input);
    wrap.appendChild(row);
  });
}

function renderBuckets(pack) {
  const m = pack?.modes?.rankBuckets;
  if (!m) return;

  setText("mode-prompt", m.prompt || "Sort the craft elements by what drives the scene.");

  const elementsWrap = $("bucket-elements");
  const colsWrap = $("bucket-cols");
  if (!elementsWrap || !colsWrap) return;

  elementsWrap.innerHTML = "";
  colsWrap.innerHTML = "";

  setHint("Drag each element into a bucket.");

  const buckets = m.buckets || [
    { id: "engine", label: "Engine" },
    { id: "support", label: "Support" },
    { id: "spice", label: "Spice" },
  ];

  const cards = m.cards || [];

  // build columns
  buckets.forEach((b) => {
    const col = document.createElement("div");
    col.className = "bucket-col";
    col.dataset.bucketId = b.id;

    const title = document.createElement("div");
    title.className = "bucket-title";
    title.textContent = b.label || b.id;

    const drop = document.createElement("div");
    drop.className = "bucket-drop";

    drop.addEventListener("dragover", (e) => {
      e.preventDefault();
      drop.classList.add("dragover");
    });
    drop.addEventListener("dragleave", () => drop.classList.remove("dragover"));
    drop.addEventListener("drop", (e) => {
      e.preventDefault();
      drop.classList.remove("dragover");

      const cardId = e.dataTransfer.getData("text/cardId");
      if (!cardId) return;

      state.buckets.placed.set(cardId, b.id);
      renderAll();

      if (cards.length > 0 && state.buckets.placed.size >= cards.length) {
        setHint("✓ Buckets complete.");
        advanceStepOrScene();
      }
    });

    col.appendChild(title);
    col.appendChild(drop);
    colsWrap.appendChild(col);
  });

  // unplaced list
  cards.forEach((c) => {
    if (state.buckets.placed.has(c.id)) return;

    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = c.text;
    chip.draggable = true;

    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/cardId", c.id);
      e.dataTransfer.effectAllowed = "move";
    });

    elementsWrap.appendChild(chip);
  });

  // placed chips inside buckets
  cards.forEach((c) => {
    const bucketId = state.buckets.placed.get(c.id);
    if (!bucketId) return;

    const col = colsWrap.querySelector(`.bucket-col[data-bucket-id="${bucketId}"] .bucket-drop`);
    if (!col) return;

    const chip = document.createElement("div");
    chip.className = "chip placed";
    chip.textContent = c.text;

    // click to unplace
    chip.onclick = () => {
      state.buckets.placed.delete(c.id);
      renderAll();
    };

    col.appendChild(chip);
  });
}

function renderSpotlights(pack) {
  const m = pack?.modes?.interpretiveTakes;
  if (!m) return;

  // gameplay change per your note:
  setText("mode-prompt", m.prompt || "Rank the top three decisions that make the scene memorable.");

  const wrap = $("spotlights-container");
  if (!wrap) return;

  wrap.innerHTML = "";
  setHint("Drag your top 3 into the slots (1–3). Leave at least one unpicked.");

  const takes = m.takes || [];

  // Top 3 slots
  const slots = document.createElement("div");
  slots.className = "top3";

  function slotEl(idx) {
    const slot = document.createElement("div");
    slot.className = "top3-slot";
    slot.dataset.slotIndex = String(idx);

    const label = document.createElement("div");
    label.className = "top3-label";
    label.textContent = `#${idx + 1}`;

    const body = document.createElement("div");
    body.className = "top3-body";

    const takeId = state.spotlights.top3[idx];
    if (takeId) {
      const take = takes.find((t) => t.id === takeId);
      const chip = document.createElement("div");
      chip.className = "spotlight selected";
      chip.textContent = take?.text || "";

      chip.draggable = true;
      chip.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/takeId", takeId);
        e.dataTransfer.setData("text/fromSlot", String(idx));
        e.dataTransfer.effectAllowed = "move";
      });

      // click removes from slot
      chip.onclick = () => {
        state.spotlights.top3[idx] = null;
        renderAll();
      };

      body.appendChild(chip);
    } else {
      body.classList.add("empty");
      body.textContent = "Drop here";
    }

    body.addEventListener("dragover", (e) => {
      e.preventDefault();
      body.classList.add("dragover");
    });
    body.addEventListener("dragleave", () => body.classList.remove("dragover"));
    body.addEventListener("drop", (e) => {
      e.preventDefault();
      body.classList.remove("dragover");

      const takeId = e.dataTransfer.getData("text/takeId");
      if (!takeId) return;

      // if it already exists in another slot, remove there
      const existingIdx = state.spotlights.top3.findIndex((x) => x === takeId);
      if (existingIdx >= 0) state.spotlights.top3[existingIdx] = null;

      // if dragging from a slot, clear that slot
      const fromSlot = e.dataTransfer.getData("text/fromSlot");
      if (fromSlot !== "") {
        const fs = Number(fromSlot);
        if (Number.isFinite(fs) && fs >= 0 && fs <= 2) {
          state.spotlights.top3[fs] = null;
        }
      }

      state.spotlights.top3[idx] = takeId;
      renderAll();

      // completion: all 3 filled
      if (state.spotlights.top3.every(Boolean)) {
        setHint("✓ Scene complete.");
        advanceStepOrScene();
      }
    });

    slot.appendChild(label);
    slot.appendChild(body);
    return slot;
  }

  slots.appendChild(slotEl(0));
  slots.appendChild(slotEl(1));
  slots.appendChild(slotEl(2));
  wrap.appendChild(slots);

  // Remaining takes list
  const list = document.createElement("div");
  list.className = "spotlight-list";

  takes.forEach((t) => {
    const alreadyPicked = state.spotlights.top3.includes(t.id);

    const item = document.createElement("div");
    item.className = "spotlight";
    item.textContent = t.text;
    item.draggable = !alreadyPicked;

    if (alreadyPicked) item.classList.add("disabled");

    item.addEventListener("dragstart", (e) => {
      if (alreadyPicked) return;
      e.dataTransfer.setData("text/takeId", t.id);
      e.dataTransfer.setData("text/fromSlot", "");
      e.dataTransfer.effectAllowed = "move";
    });

    // click-to-quick-fill next empty slot
    item.onclick = () => {
      if (alreadyPicked) return;
      const emptyIdx = state.spotlights.top3.findIndex((x) => !x);
      if (emptyIdx === -1) return; // already full

      state.spotlights.top3[emptyIdx] = t.id;
      renderAll();

      if (state.spotlights.top3.every(Boolean)) {
        setHint("✓ Scene complete.");
        advanceStepOrScene();
      }
    };

    list.appendChild(item);
  });

  wrap.appendChild(list);
}

/* ---------------------------
   Main render
----------------------------*/
function renderModeContainers() {
  // show only current mode section
  const mk = currentModeKey();

  const ids = [
    ["mode-pair", "pairMatch"],
    ["mode-sliders", "sliders"],
    ["mode-buckets", "rankBuckets"],
    ["mode-spotlights", "interpretiveTakes"],
  ];

  ids.forEach(([id, key]) => {
    if (key === mk) show(id);
    else hide(id);
  });
}

function renderAll() {
  if (!state.pack) return;

  renderHeader(state.pack);
  renderModeContainers();

  const mk = currentModeKey();

  // clear hint line before mode render (mode sets it)
  setHint("");

  if (mk === "pairMatch") renderPairMatch(state.pack);
  if (mk === "sliders") renderSliders(state.pack);
  if (mk === "rankBuckets") renderBuckets(state.pack);
  if (mk === "interpretiveTakes") renderSpotlights(state.pack);
}

/* ---------------------------
   Events from index.html
----------------------------*/
document.addEventListener("sourcechange", (e) => {
  const source = e?.detail?.source;
  if (source === "film" || source === "literature") {
    state.source = source;

    // abandoning current run per your rule:
    state.usedIds.clear();
    loadNewScene();
  }
});

document.addEventListener("play", () => {
  hide("landing");
  show("app");
  if (!state.pack) loadNewScene();
});

/* ---------------------------
   Boot
----------------------------*/
(function boot() {
  // default to film
  state.source = "film";

  // show landing first
  show("landing");
  hide("app");

  // pre-load a scene so play is instant (optional)
  state.pack = pickNextPack();
  resetForNewScene();
})();

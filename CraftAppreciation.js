// CraftAppreciation.js
// AuthorCraft Appreciation — runtime (clean, full replacement)
// Works with the provided index.html IDs.
// ES module imports:
//   filmPacks.js exports: export const FILM_PACKS = [ ... ];
//   litPacks.js exports:  export const LIT_PACKS  = [ ... ];
//
// Core behavior:
// - Landing "Play" button enters game
// - Film/Literature toggle abandons current run and loads a fresh scene from that mode
// - 4-step locked scene flow: Pair Match → Sliders → Buckets → Spotlights
// - Auto-advance only (no Next button)
// - Scoring: Scenes completed increments only when a full scene completes all 4 steps
// - Pair Match: correctness required + SHUFFLED + capped to 4 pairs
// - Sliders: explicit scope line; completion advances to Buckets (fixes jump/reset)
// - Buckets: visible labeled buckets + drag/drop
// - Spotlights: rank top 3; selected highlight uses dusty rose via .spotlight.selected CSS

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   DOM helpers
========================= */
const $ = (id) => document.getElementById(id);
const setHidden = (el, hidden) => {
  if (!el) return;
  el.classList.toggle("hidden", !!hidden);
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* =========================
   State
========================= */
const state = {
  mode: "film", // "film" | "literature"
  stepIndex: 0, // 0..3
  currentPack: null,

  scenesCompleted: 0,

  usedFilm: new Set(),
  usedLit: new Set(),

  // Step-advance lock to prevent double-fire bugs
  _advanceLock: false,

  // Pair Match
  pair: {
    selectedLeftId: null,
    selectedRightId: null,
    matchedLeft: new Set(),
    matchedRight: new Set(),
    pairMap: new Map(), // leftId -> rightId (only for the 4 chosen pairs)
  },

  // Sliders
  sliders: {
    touched: new Set(), // axis ids
  },

  // Buckets
  buckets: {
    placement: new Map(), // elementId -> bucketId
  },

  // Spotlights (rank top 3)
  spotlights: {
    rank: [null, null, null], // takeIds
  },
};

/* =========================
   Elements (must match index.html)
========================= */
const els = {
  // Screens
  landingScreen: $("landingScreen"),
  gameScreen: $("gameScreen"),

  // Landing
  playBtn: $("playBtn"),

  // Mode toggle
  btnFilm: $("btnFilm"),
  btnLiterature: $("btnLiterature"),

  // Header / scene
  sceneTitle: $("sceneTitle"),
  tierPill: $("tierPill"),
  sceneText: $("sceneText"),
  scenesCompleted: $("scenesCompleted"),

  // Stepper
  stepPair: $("stepPair"),
  stepSliders: $("stepSliders"),
  stepBuckets: $("stepBuckets"),
  stepSpotlights: $("stepSpotlights"),

  // Panels
  panelPairMatch: $("panelPairMatch"),
  panelSliders: $("panelSliders"),
  panelBuckets: $("panelBuckets"),
  panelSpotlights: $("panelSpotlights"),

  // Pair Match
  pairPrompt: $("pairPrompt"),
  pairLeft: $("pairLeft"),
  pairRight: $("pairRight"),

  // Sliders
  slidersPrompt: $("slidersPrompt"),
  slidersScope: $("slidersScope"),
  slidersContainer: $("slidersContainer"),

  // Buckets
  bucketsPrompt: $("bucketsPrompt"),
  bucketsContainer: $("bucketsContainer"),

  // Spotlights
  spotlightsPrompt: $("spotlightsPrompt"),
  spotlightsList: $("spotlightsList"),
};

/* =========================
   Boot
========================= */
function safeWarnMissing() {
  const requiredIds = [
    "landingScreen",
    "gameScreen",
    "playBtn",
    "btnFilm",
    "btnLiterature",
    "sceneTitle",
    "tierPill",
    "sceneText",
    "scenesCompleted",
    "stepPair",
    "stepSliders",
    "stepBuckets",
    "stepSpotlights",
    "panelPairMatch",
    "panelSliders",
    "panelBuckets",
    "panelSpotlights",
    "pairPrompt",
    "pairLeft",
    "pairRight",
    "slidersPrompt",
    "slidersScope",
    "slidersContainer",
    "bucketsPrompt",
    "bucketsContainer",
    "spotlightsPrompt",
    "spotlightsList",
  ];

  const missing = requiredIds.filter((k) => !els[k]);
  if (missing.length) {
    // This is the #1 cause of “Play doesn’t work”: JS errors due to null elements.
    console.warn("[CraftAppreciation] Missing DOM elements:", missing);
  }
}

function init() {
  safeWarnMissing();

  // Ensure we start on landing
  document.body.classList.add("landing");
  document.body.classList.remove("mode-film", "mode-literature");
  setHidden(els.landingScreen, false);
  setHidden(els.gameScreen, true);

  updateScenesCompletedUI();

  // Landing → Game
  if (els.playBtn) {
    els.playBtn.addEventListener("click", () => {
      enterGame();
    });
  }

  // Mode toggle (abandon run)
  if (els.btnFilm) els.btnFilm.addEventListener("click", () => switchMode("film"));
  if (els.btnLiterature) els.btnLiterature.addEventListener("click", () => switchMode("literature"));
}

window.addEventListener("DOMContentLoaded", init);

/* =========================
   Mode / Navigation
========================= */
function enterGame() {
  // Show game
  setHidden(els.landingScreen, true);
  setHidden(els.gameScreen, false);

  // Default mode (film) unless already set
  state.mode = state.mode || "film";
  updateModeUI();

  // Load a scene
  loadNewScene();
}

function switchMode(mode) {
  if (state.mode === mode) return;

  state.mode = mode;
  updateModeUI();
  loadNewScene();
}

function updateModeUI() {
  // Body overlay (index.html uses body::before with .mode-film/.mode-literature)
  document.body.classList.remove("landing");
  document.body.classList.toggle("mode-film", state.mode === "film");
  document.body.classList.toggle("mode-literature", state.mode === "literature");

  // Toggle buttons
  if (els.btnFilm) {
    els.btnFilm.classList.toggle("active", state.mode === "film");
    els.btnFilm.setAttribute("aria-selected", state.mode === "film" ? "true" : "false");
  }
  if (els.btnLiterature) {
    els.btnLiterature.classList.toggle("active", state.mode === "literature");
    els.btnLiterature.setAttribute("aria-selected", state.mode === "literature" ? "true" : "false");
  }
}

/* =========================
   Packs
========================= */
function getPackListForMode() {
  return state.mode === "film" ? FILM_PACKS : LIT_PACKS;
}
function getUsedSetForMode() {
  return state.mode === "film" ? state.usedFilm : state.usedLit;
}

function pickNextPack() {
  const packs = getPackListForMode() || [];
  const used = getUsedSetForMode();

  // Guardrail: only AuthorCraft if provided
  const eligible = packs.filter((p) => !p.momentType || p.momentType === "AuthorCraft");
  const remaining = eligible.filter((p) => !used.has(p.id));

  const pool = remaining.length ? remaining : eligible;
  if (!pool.length) return null;

  if (!remaining.length) used.clear();

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  used.add(chosen.id);
  return chosen;
}

/* =========================
   Scene lifecycle
========================= */
function loadNewScene() {
  const pack = pickNextPack();
  if (!pack) {
    console.warn("[CraftAppreciation] No pack available for mode:", state.mode);
    return;
  }

  state.currentPack = pack;
  resetSceneInteractionState();
  renderSceneHeader(pack);

  // Start at Pair Match
  goToStep(0);
}

function resetSceneInteractionState() {
  state.stepIndex = 0;
  state._advanceLock = false;

  // Pair
  state.pair.selectedLeftId = null;
  state.pair.selectedRightId = null;
  state.pair.matchedLeft = new Set();
  state.pair.matchedRight = new Set();
  state.pair.pairMap = new Map();

  // Sliders
  state.sliders.touched = new Set();

  // Buckets
  state.buckets.placement = new Map();

  // Spotlights
  state.spotlights.rank = [null, null, null];
}

function renderSceneHeader(pack) {
  if (els.sceneTitle) els.sceneTitle.textContent = `Scene — ${pack.sceneTitle || ""}`.trim();
  if (els.tierPill) els.tierPill.textContent = pack.tier || "Lantern";
  if (els.sceneText) els.sceneText.textContent = pack.scene || "";
}

/* =========================
   Stepper + panels
========================= */
function goToStep(stepIndex) {
  state.stepIndex = stepIndex;
  updateStepperUI(stepIndex);

  setHidden(els.panelPairMatch, stepIndex !== 0);
  setHidden(els.panelSliders, stepIndex !== 1);
  setHidden(els.panelBuckets, stepIndex !== 2);
  setHidden(els.panelSpotlights, stepIndex !== 3);

  // Render
  if (stepIndex === 0) renderPairMatch();
  if (stepIndex === 1) renderSliders();
  if (stepIndex === 2) renderBuckets();
  if (stepIndex === 3) renderSpotlights();
}

function updateStepperUI(stepIndex) {
  const steps = [els.stepPair, els.stepSliders, els.stepBuckets, els.stepSpotlights];
  steps.forEach((el, i) => {
    if (!el) return;
    el.classList.toggle("active", i === stepIndex);
    el.classList.toggle("done", i < stepIndex);
  });
}

function lockAdvance(ms = 400) {
  state._advanceLock = true;
  setTimeout(() => (state._advanceLock = false), ms);
}

function completeCurrentStep() {
  // Prevent double-fire (fixes “sliders completes then resets to pair”)
  if (state._advanceLock) return;
  lockAdvance(400);

  const next = state.stepIndex + 1;

  if (next <= 3) {
    goToStep(next);
    return;
  }

  // Scene complete
  state.scenesCompleted += 1;
  updateScenesCompletedUI();
  loadNewScene();
}

function updateScenesCompletedUI() {
  if (els.scenesCompleted) els.scenesCompleted.textContent = String(state.scenesCompleted);
}

/* =========================
   STEP 1: Pair Match
   - correctness required
   - shuffle columns
   - cap to 4 pairs
   - stronger selection/matched highlighting
========================= */
function renderPairMatch() {
  const pack = state.currentPack;
  const mode = pack?.modes?.pairMatch;

  if (!mode) {
    completeCurrentStep();
    return;
  }

  if (els.pairPrompt) els.pairPrompt.textContent = mode.prompt || "Pair Match";

  // Choose only 4 pairs
  const allPairs = mode.pairs || [];
  const pairs = allPairs.slice(0, 4);

  // Build answer key
  state.pair.pairMap = new Map(pairs.map((p) => [p.leftId, p.rightId]));

  // Only show cards referenced by chosen pairs
  const leftNeeded = new Set(pairs.map((p) => p.leftId));
  const rightNeeded = new Set(pairs.map((p) => p.rightId));

  const leftCardsRaw = (mode.leftCards || []).filter((c) => leftNeeded.has(c.id));
  const rightCardsRaw = (mode.rightCards || []).filter((c) => rightNeeded.has(c.id));

  // Shuffle both sides
  const leftCards = shuffle(leftCardsRaw);
  const rightCards = shuffle(rightCardsRaw);

  if (els.pairLeft) els.pairLeft.innerHTML = "";
  if (els.pairRight) els.pairRight.innerHTML = "";

  // Render left
  leftCards.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.side = "left";
    card.dataset.id = c.id;
    card.textContent = c.text;

    card.addEventListener("click", () => onPairCardClick("left", c.id));
    els.pairLeft?.appendChild(card);
  });

  // Render right
  rightCards.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.side = "right";
    card.dataset.id = c.id;
    card.textContent = c.text;

    card.addEventListener("click", () => onPairCardClick("right", c.id));
    els.pairRight?.appendChild(card);
  });
}

function onPairCardClick(side, id) {
  // ignore matched
  if (side === "left" && state.pair.matchedLeft.has(id)) return;
  if (side === "right" && state.pair.matchedRight.has(id)) return;

  // clear previous selection on that side
  clearPairSelection(side);

  // set selection
  if (side === "left") state.pair.selectedLeftId = id;
  if (side === "right") state.pair.selectedRightId = id;

  // apply stronger selection highlight (dusty rose)
  const el = getPairCardEl(side, id);
  if (el) {
    el.classList.add("selected");
    el.style.outline = "3px solid rgba(181,133,183,0.95)";
    el.style.boxShadow = "0 0 0 4px rgba(181,133,183,0.18), 0 10px 18px rgba(0,0,0,0.55)";
  }

  // if both selected evaluate
  if (state.pair.selectedLeftId && state.pair.selectedRightId) {
    evaluatePairSelection();
  }
}

function getPairCardEl(side, id) {
  const container = side === "left" ? els.pairLeft : els.pairRight;
  if (!container) return null;
  return container.querySelector(`.card[data-id="${CSS.escape(id)}"]`);
}

function clearPairSelection(side) {
  const container = side === "left" ? els.pairLeft : els.pairRight;
  if (!container) return;

  container.querySelectorAll(".card.selected").forEach((n) => {
    n.classList.remove("selected");
    n.style.outline = "none";
    n.style.boxShadow = "none";
  });

  if (side === "left") state.pair.selectedLeftId = null;
  if (side === "right") state.pair.selectedRightId = null;
}

function evaluatePairSelection() {
  const leftId = state.pair.selectedLeftId;
  const rightId = state.pair.selectedRightId;

  const correctRight = state.pair.pairMap.get(leftId);
  const isCorrect = correctRight === rightId;

  const leftEl = getPairCardEl("left", leftId);
  const rightEl = getPairCardEl("right", rightId);

  if (isCorrect) {
    state.pair.matchedLeft.add(leftId);
    state.pair.matchedRight.add(rightId);

    // Mark matched with strong gold outline
    [leftEl, rightEl].forEach((node) => {
      if (!node) return;
      node.classList.remove("selected");
      node.classList.add("matched");
      node.style.outline = "3px solid rgba(189,155,64,0.92)";
      node.style.boxShadow = "0 0 0 4px rgba(189,155,64,0.18), 0 10px 18px rgba(0,0,0,0.55)";
      node.style.pointerEvents = "none";
      node.style.opacity = "1";
    });

    state.pair.selectedLeftId = null;
    state.pair.selectedRightId = null;

    // complete when all selected pairs matched
    const totalPairs = state.pair.pairMap.size;
    if (totalPairs > 0 && state.pair.matchedLeft.size >= totalPairs) {
      setTimeout(() => completeCurrentStep(), 250);
    }
  } else {
    // Gentle “wrong”: clear highlights and selection; no harsh UI
    [leftEl, rightEl].forEach((node) => {
      if (!node) return;
      node.classList.remove("selected");
      node.style.outline = "none";
      node.style.boxShadow = "none";
    });

    state.pair.selectedLeftId = null;
    state.pair.selectedRightId = null;
  }
}

/* =========================
   STEP 2: Sliders
   - prompt + explicit scope line come from pack
   - completion must advance to Buckets (fix)
========================= */
function renderSliders() {
  const pack = state.currentPack;
  const mode = pack?.modes?.sliders;

  if (!mode) {
    completeCurrentStep();
    return;
  }

  // IMPORTANT: do not hardcode “set the axes” — use pack prompt/scope
  if (els.slidersPrompt) els.slidersPrompt.textContent = mode.prompt || "Sliders";
  const scopeText = mode.scope ? (mode.scope.startsWith("Scope:") ? mode.scope : `Scope: ${mode.scope}`) : "Scope: the scene overall";
  if (els.slidersScope) els.slidersScope.textContent = scopeText;

  if (els.slidersContainer) els.slidersContainer.innerHTML = "";

  const axes = mode.sliders || [];
  if (!axes.length) {
    completeCurrentStep();
    return;
  }

  // Reset touched for this step (safety)
  state.sliders.touched = new Set();

  axes.forEach((axis) => {
    const row = document.createElement("div");
    row.className = "slider-row";

    const left = document.createElement("div");
    left.className = "slider-label";
    left.textContent = axis.leftLabel || "";

    const input = document.createElement("input");
    input.type = "range";
    input.min = axis.min ?? 0;
    input.max = axis.max ?? 100;
    input.step = axis.step ?? 1;
    input.value = axis.defaultValue ?? 50;
    input.dataset.axisId = axis.id;

    input.addEventListener("input", () => {
      state.sliders.touched.add(axis.id);

      // Only advance if we are still on sliders step (prevents weird step resets)
      if (state.stepIndex === 1 && state.sliders.touched.size >= axes.length) {
        setTimeout(() => completeCurrentStep(), 150);
      }
    });

    const right = document.createElement("div");
    right.className = "slider-label";
    right.style.textAlign = "right";
    right.textContent = axis.rightLabel || "";

    row.appendChild(left);
    row.appendChild(input);
    row.appendChild(right);

    els.slidersContainer?.appendChild(row);
  });
}

/* =========================
   STEP 3: Buckets
   - visible labeled buckets
   - drag/drop
========================= */
function renderBuckets() {
  const pack = state.currentPack;
  const mode = pack?.modes?.rankBuckets;

  if (!mode) {
    completeCurrentStep();
    return;
  }

  if (els.bucketsPrompt) els.bucketsPrompt.textContent = mode.prompt || "Buckets";

  const buckets = mode.buckets || [
    { id: "makes_the_scene", label: "Makes the scene" },
    { id: "strong_support", label: "Strong support" },
    { id: "nice_touches", label: "Nice touches" },
  ];

  const elements = mode.cards || mode.elements || mode.items || [];
  if (els.bucketsContainer) els.bucketsContainer.innerHTML = "";

  state.buckets.placement = new Map();

  // Elements bank (full width)
  const bank = document.createElement("div");
  bank.className = "bucket";
  bank.style.gridColumn = "1 / -1";

  const bankTitle = document.createElement("h4");
  bankTitle.textContent = "Elements";
  bank.appendChild(bankTitle);

  const bankList = document.createElement("div");
  bankList.className = "card-list";
  bank.appendChild(bankList);

  elements.forEach((e) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = e.text;
    card.draggable = true;
    card.dataset.elementId = e.id;

    card.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.setData("text/plain", e.id);
      ev.dataTransfer.effectAllowed = "move";
    });

    bankList.appendChild(card);
  });

  els.bucketsContainer?.appendChild(bank);

  // Buckets
  buckets.forEach((b) => {
    const bucket = document.createElement("div");
    bucket.className = "bucket";
    bucket.dataset.bucketId = b.id;

    const h = document.createElement("h4");
    h.textContent = b.label || b.id;
    bucket.appendChild(h);

    const dropZone = document.createElement("div");
    dropZone.className = "card-list";
    bucket.appendChild(dropZone);

    bucket.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
    });

    bucket.addEventListener("drop", (ev) => {
      ev.preventDefault();
      const elementId = ev.dataTransfer.getData("text/plain");
      if (!elementId) return;

      const card = els.bucketsContainer?.querySelector(`.card[data-element-id="${CSS.escape(elementId)}"]`);
      if (!card) return;

      dropZone.appendChild(card);
      state.buckets.placement.set(elementId, b.id);

      if (elements.length && state.buckets.placement.size >= elements.length) {
        // Must be on buckets step
        if (state.stepIndex === 2) {
          setTimeout(() => completeCurrentStep(), 200);
        }
      }
    });

    els.bucketsContainer?.appendChild(bucket);
  });

  if (!elements.length) {
    // avoid dead-end
    setTimeout(() => completeCurrentStep(), 200);
  }
}

/* =========================
   STEP 4: Spotlights (rank top 3)
========================= */
function renderSpotlights() {
  const pack = state.currentPack;
  const mode = pack?.modes?.spotlights || pack?.modes?.interpretiveTakes;

  if (!mode) {
    completeCurrentStep();
    return;
  }

  if (els.spotlightsPrompt) {
    els.spotlightsPrompt.textContent =
      mode.prompt || "Rank the top three decisions that make the scene memorable.";
  }

  if (els.spotlightsList) els.spotlightsList.innerHTML = "";
  state.spotlights.rank = [null, null, null];

  const takes = mode.takes || mode.items || [];
  if (!takes.length) {
    completeCurrentStep();
    return;
  }

  // Rank slots UI (simple, injected here)
  const slotsWrap = document.createElement("div");
  slotsWrap.style.display = "grid";
  slotsWrap.style.gridTemplateColumns = "repeat(3, 1fr)";
  slotsWrap.style.gap = "12px";
  slotsWrap.style.margin = "10px 0 14px";

  const slotEls = [0, 1, 2].map((idx) => {
    const slot = document.createElement("div");
    slot.dataset.slotIndex = String(idx);
    slot.style.border = "1px solid rgba(189,155,64,0.55)";
    slot.style.borderRadius = "16px";
    slot.style.padding = "12px";
    slot.style.background = "rgba(0,0,0,0.35)";
    slot.style.minHeight = "78px";
    slot.style.display = "flex";
    slot.style.alignItems = "center";
    slot.style.justifyContent = "center";
    slot.style.textAlign = "center";
    slot.style.fontWeight = "900";
    slot.style.userSelect = "none";
    slot.textContent = `#${idx + 1}`;

    slot.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
    });

    slot.addEventListener("drop", (ev) => {
      ev.preventDefault();
      const takeId = ev.dataTransfer.getData("text/plain");
      if (!takeId) return;
      placeTakeInSlot(takeId, idx, takes);
      refreshSpotlightUI(takes, slotEls);
      checkSpotlightsComplete();
    });

    // click to clear slot
    slot.addEventListener("click", () => {
      if (!state.spotlights.rank[idx]) return;
      state.spotlights.rank[idx] = null;
      refreshSpotlightUI(takes, slotEls);
    });

    return slot;
  });

  slotEls.forEach((s) => slotsWrap.appendChild(s));
  els.spotlightsList?.appendChild(slotsWrap);

  // Takes list
  takes.forEach((t) => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.dataset.takeId = t.id;
    div.textContent = t.text;
    div.draggable = true;

    div.addEventListener("dragstart", (ev) => {
      ev.dataTransfer.setData("text/plain", t.id);
      ev.dataTransfer.effectAllowed = "move";
    });

    div.addEventListener("click", () => {
      toggleTake(t.id);
      refreshSpotlightUI(takes, slotEls);
      checkSpotlightsComplete();
    });

    els.spotlightsList?.appendChild(div);
  });

  refreshSpotlightUI(takes, slotEls);
}

function toggleTake(takeId) {
  const existing = state.spotlights.rank.findIndex((x) => x === takeId);
  if (existing >= 0) {
    state.spotlights.rank[existing] = null;
    return;
  }
  const empty = state.spotlights.rank.findIndex((x) => !x);
  if (empty >= 0) state.spotlights.rank[empty] = takeId;
}

function placeTakeInSlot(takeId, slotIndex) {
  // remove from any existing slot
  const existing = state.spotlights.rank.findIndex((x) => x === takeId);
  if (existing >= 0) state.spotlights.rank[existing] = null;

  state.spotlights.rank[slotIndex] = takeId;
}

function refreshSpotlightUI(takes, slotEls) {
  const selected = new Set(state.spotlights.rank.filter(Boolean));

  // Update slots with preview text
  slotEls.forEach((slotEl, idx) => {
    const takeId = state.spotlights.rank[idx];
    if (!takeId) {
      slotEl.textContent = `#${idx + 1}`;
      slotEl.style.color = "#bd9b40";
      slotEl.style.borderColor = "rgba(189,155,64,0.55)";
      slotEl.style.boxShadow = "none";
      slotEl.style.background = "rgba(0,0,0,0.35)";
      return;
    }

    const take = takes.find((t) => t.id === takeId);
    slotEl.textContent = `#${idx + 1} — ${take ? take.text : takeId}`;
    slotEl.style.color = "#f7efe3";
    slotEl.style.borderColor = "rgba(181,133,183,0.98)";
    slotEl.style.boxShadow = "0 0 0 2px rgba(181,133,183,0.18)";
    slotEl.style.background = "rgba(181,133,183,0.18)";
  });

  // Update list highlight (CSS uses dusty rose for .spotlight.selected)
  els.spotlightsList?.querySelectorAll(".spotlight").forEach((el) => {
    const tid = el.dataset.takeId;
    el.classList.toggle("selected", selected.has(tid));
  });
}

function checkSpotlightsComplete() {
  const filled = state.spotlights.rank.filter(Boolean).length;
  if (filled >= 3 && state.stepIndex === 3) {
    setTimeout(() => completeCurrentStep(), 220);
  }
}

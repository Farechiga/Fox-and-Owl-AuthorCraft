// CraftAppreciation.js
// Runtime for AuthorCraft Appreciation
// Loads packs from filmPacks.js / litPacks.js (ES modules)
// Implements: Landing → Game, Film/Literature toggle, 4-step scene flow, scoring (scenes completed),
// PairMatch correctness (with shuffle), Sliders with explicit scope line, Buckets with visible labels + drag/drop,
// Spotlights = rank top 3 with dusty-rose highlight (#b585b7), auto-advance (no Next button).

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   DOM helpers
========================= */
const $ = (id) => document.getElementById(id);
const setHidden = (el, hidden) => el.classList.toggle("hidden", !!hidden);

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

  // PairMatch interaction
  pair: {
    selectedLeftId: null,
    selectedRightId: null,
    matchedLeft: new Set(),
    matchedRight: new Set(),
    pairMap: new Map(), // leftId -> rightId
  },

  // Sliders interaction
  sliders: {
    touched: new Set(), // axis ids touched
  },

  // Buckets interaction
  buckets: {
    placement: new Map(), // elementId -> bucketId
  },

  // Spotlights interaction
  spotlights: {
    rank: [null, null, null], // take ids ranked 1..3
  },
};

/* =========================
   Elements (from index.html)
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
   Init
========================= */
function init() {
  // Landing: start in landing mode (no overlay)
  document.body.classList.add("landing");
  document.body.classList.remove("mode-film", "mode-literature");

  // Button bindings
  els.playBtn.addEventListener("click", () => {
    enterGame();
  });

  els.btnFilm.addEventListener("click", () => switchMode("film"));
  els.btnLiterature.addEventListener("click", () => switchMode("literature"));

  // Set initial counter
  updateScenesCompletedUI();

  // Keep on landing until Play
  setHidden(els.landingScreen, false);
  setHidden(els.gameScreen, true);
}

window.addEventListener("DOMContentLoaded", init);

/* =========================
   Navigation / Mode
========================= */
function enterGame() {
  // Show game screen
  setHidden(els.landingScreen, true);
  setHidden(els.gameScreen, false);

  // Default mode = film
  state.mode = "film";
  updateModeUI();

  // Load first scene
  loadNewScene();
}

function switchMode(mode) {
  if (state.mode === mode) return;

  // Switching mode abandons current run (as requested)
  state.mode = mode;
  updateModeUI();
  loadNewScene();
}

function updateModeUI() {
  // Body overlay
  document.body.classList.remove("landing");
  document.body.classList.toggle("mode-film", state.mode === "film");
  document.body.classList.toggle("mode-literature", state.mode === "literature");

  // Toggle button states
  els.btnFilm.classList.toggle("active", state.mode === "film");
  els.btnFilm.setAttribute("aria-selected", state.mode === "film" ? "true" : "false");

  els.btnLiterature.classList.toggle("active", state.mode === "literature");
  els.btnLiterature.setAttribute("aria-selected", state.mode === "literature" ? "true" : "false");
}

/* =========================
   Scene Selection / Header
========================= */
function getPackListForMode() {
  return state.mode === "film" ? FILM_PACKS : LIT_PACKS;
}
function getUsedSetForMode() {
  return state.mode === "film" ? state.usedFilm : state.usedLit;
}

function pickNextPack() {
  const packs = getPackListForMode();
  const used = getUsedSetForMode();

  // Filter by momentType AuthorCraft if present (guardrail)
  const eligible = packs.filter((p) => !p.momentType || p.momentType === "AuthorCraft");
  const remaining = eligible.filter((p) => !used.has(p.id));

  const pool = remaining.length ? remaining : eligible;
  if (!pool.length) return null;

  // If exhausted, reset used set
  if (!remaining.length) used.clear();

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  used.add(chosen.id);
  return chosen;
}

function loadNewScene() {
  const pack = pickNextPack();
  if (!pack) return;

  state.currentPack = pack;

  // Reset per-scene interaction state
  resetSceneInteractionState();

  // Render header
  renderSceneHeader(pack);

  // Start at step 0 (Pair Match)
  goToStep(0);
}

function resetSceneInteractionState() {
  state.stepIndex = 0;

  state.pair.selectedLeftId = null;
  state.pair.selectedRightId = null;
  state.pair.matchedLeft = new Set();
  state.pair.matchedRight = new Set();
  state.pair.pairMap = new Map();

  state.sliders.touched = new Set();

  state.buckets.placement = new Map();

  state.spotlights.rank = [null, null, null];
}

function renderSceneHeader(pack) {
  els.sceneTitle.textContent = `Scene — ${pack.sceneTitle || ""}`.trim();
  els.tierPill.textContent = pack.tier || "Lantern";
  els.sceneText.textContent = pack.scene || "";
}

/* =========================
   Stepper / Panels
========================= */
const STEPS = ["pairMatch", "sliders", "rankBuckets", "spotlights"];

function goToStep(stepIndex) {
  state.stepIndex = stepIndex;
  updateStepperUI(stepIndex);

  // Hide all panels, show current
  setHidden(els.panelPairMatch, stepIndex !== 0);
  setHidden(els.panelSliders, stepIndex !== 1);
  setHidden(els.panelBuckets, stepIndex !== 2);
  setHidden(els.panelSpotlights, stepIndex !== 3);

  // Render current step
  if (stepIndex === 0) renderPairMatch();
  if (stepIndex === 1) renderSliders();
  if (stepIndex === 2) renderBuckets();
  if (stepIndex === 3) renderSpotlights();
}

function updateStepperUI(stepIndex) {
  const stepEls = [els.stepPair, els.stepSliders, els.stepBuckets, els.stepSpotlights];

  stepEls.forEach((el, i) => {
    el.classList.toggle("active", i === stepIndex);
    el.classList.toggle("done", i < stepIndex);
  });
}

function completeCurrentStep() {
  const next = state.stepIndex + 1;

  if (next <= 3) {
    goToStep(next);
    return;
  }

  // Completed Spotlights -> scene complete -> score++ -> auto-advance
  state.scenesCompleted += 1;
  updateScenesCompletedUI();
  loadNewScene();
}

function updateScenesCompletedUI() {
  els.scenesCompleted.textContent = String(state.scenesCompleted);
}

/* =========================
   STEP 1: Pair Match (with correctness + shuffle)
========================= */
function renderPairMatch() {
  const pack = state.currentPack;
  const mode = pack?.modes?.pairMatch;
  if (!mode) {
    // If a pack is missing this mode, skip forward
    completeCurrentStep();
    return;
  }
  // Build pair map (leftId -> rightId)
  const allPairs = mode.pairs || [];

  // ✅ HARD CAP: only 4 pairs
  const pairs = allPairs.slice(0, 4);

  state.pair.pairMap = new Map(pairs.map((p) => [p.leftId, p.rightId]));

  // Only include the cards referenced by these 4 pairs
  const leftNeeded = new Set(pairs.map(p => p.leftId));
  const rightNeeded = new Set(pairs.map(p => p.rightId));

  const leftCardsRaw = (mode.leftCards || []).filter(c => leftNeeded.has(c.id));
  const rightCardsRaw = (mode.rightCards || []).filter(c => rightNeeded.has(c.id));

  // Shuffle display order (critical fix: no row-by-row alignment)
  const leftCards = shuffle(leftCardsRaw);
  const rightCards = shuffle(rightCardsRaw);

   
  // Prompt
  els.pairPrompt.textContent = mode.prompt || "Pair Match";

  // Build pair map (leftId -> rightId)
  state.pair.pairMap = new Map((mode.pairs || []).map((p) => [p.leftId, p.rightId]));

  // Shuffle display order (critical fix: no row-by-row alignment)
  const leftCards = shuffle(mode.leftCards || []);
  const rightCards = shuffle(mode.rightCards || []);

  // Reset containers
  els.pairLeft.innerHTML = "";
  els.pairRight.innerHTML = "";

  // Render left
  leftCards.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.side = "left";
    card.dataset.id = c.id;
    card.textContent = c.text;

    card.addEventListener("click", () => onPairCardClick("left", c.id, card));
    els.pairLeft.appendChild(card);
  });

  // Render right
  rightCards.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.side = "right";
    card.dataset.id = c.id;
    card.textContent = c.text;

    card.addEventListener("click", () => onPairCardClick("right", c.id, card));
    els.pairRight.appendChild(card);
  });
}

function onPairCardClick(side, id, el) {
  // Ignore already matched
  if (side === "left" && state.pair.matchedLeft.has(id)) return;
  if (side === "right" && state.pair.matchedRight.has(id)) return;

  // Clear previous selection on that side
  clearPairSelection(side);

  // Select this
  el.classList.add("selected");
  if (side === "left") state.pair.selectedLeftId = id;
  if (side === "right") state.pair.selectedRightId = id;

  // If both selected, evaluate
  if (state.pair.selectedLeftId && state.pair.selectedRightId) {
    evaluatePairSelection();
  }
}

function clearPairSelection(side) {
  const container = side === "left" ? els.pairLeft : els.pairRight;
  container.querySelectorAll(".card.selected").forEach((n) => n.classList.remove("selected"));

  if (side === "left") state.pair.selectedLeftId = null;
  if (side === "right") state.pair.selectedRightId = null;
}

function evaluatePairSelection() {
  const leftId = state.pair.selectedLeftId;
  const rightId = state.pair.selectedRightId;

  const correctRight = state.pair.pairMap.get(leftId);
  const isCorrect = correctRight === rightId;

  const leftEl = els.pairLeft.querySelector(`.card[data-id="${CSS.escape(leftId)}"]`);
  const rightEl = els.pairRight.querySelector(`.card[data-id="${CSS.escape(rightId)}"]`);

  if (isCorrect) {
    // Mark matched
    state.pair.matchedLeft.add(leftId);
    state.pair.matchedRight.add(rightId);

    leftEl?.classList.remove("selected");
    rightEl?.classList.remove("selected");

    leftEl?.classList.add("matched");
    rightEl?.classList.add("matched");

    // Disable further interaction for matched cards
    if (leftEl) leftEl.style.pointerEvents = "none";
    if (rightEl) rightEl.style.pointerEvents = "none";

    // Clear selection state
    state.pair.selectedLeftId = null;
    state.pair.selectedRightId = null;

    // If all pairs matched, step complete
    const totalPairs = state.pair.pairMap.size;
    if (state.pair.matchedLeft.size >= totalPairs && totalPairs > 0) {
      // small pause so it feels earned
      setTimeout(() => completeCurrentStep(), 250);
    }
  } else {
    // Gentle wrong feedback (no harsh red/green UI)
    // Briefly deselect both after a short pause
    if (leftEl) leftEl.classList.remove("selected");
    if (rightEl) rightEl.classList.remove("selected");

    state.pair.selectedLeftId = null;
    state.pair.selectedRightId = null;
  }
}

/* =========================
   STEP 2: Sliders (scope line required)
========================= */
function renderSliders() {
  const pack = state.currentPack;
  const mode = pack?.modes?.sliders;
  if (!mode) {
    completeCurrentStep();
    return;
  }

  els.slidersPrompt.textContent = mode.prompt || "Sliders";

  // Scope requirement: must be explicit; if not present, we show a safe fallback.
  // Recommended pack field: modes.sliders.scope (string)
  const scope = mode.scope || "Scope: the scene overall";
  els.slidersScope.textContent = scope.startsWith("Scope:") ? scope : `Scope: ${scope}`;

  els.slidersContainer.innerHTML = "";

  const axes = mode.sliders || [];
  if (!axes.length) {
    completeCurrentStep();
    return;
  }

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

    // Touch detection: you must move each axis at least once
    input.addEventListener("input", () => {
      state.sliders.touched.add(axis.id);
      if (state.sliders.touched.size >= axes.length) {
        // Auto-advance once all sliders have been touched
        setTimeout(() => completeCurrentStep(), 220);
      }
    });

    const right = document.createElement("div");
    right.className = "slider-label";
    right.style.textAlign = "right";
    right.textContent = axis.rightLabel || "";

    row.appendChild(left);
    row.appendChild(input);
    row.appendChild(right);

    els.slidersContainer.appendChild(row);
  });
}

/* =========================
   STEP 3: Buckets (labels + drag/drop)
========================= */
function renderBuckets() {
  const pack = state.currentPack;
  const mode = pack?.modes?.rankBuckets;
  if (!mode) {
    completeCurrentStep();
    return;
  }

  els.bucketsPrompt.textContent = mode.prompt || "Buckets";

  // Expected pack fields:
  // mode.buckets: [{id,label}, ...]
  // mode.cards OR mode.elements: [{id,text}, ...]
  const buckets = mode.buckets || [];
  const elements = mode.cards || mode.elements || mode.items || [];

  els.bucketsContainer.innerHTML = "";

  // Build "Elements" bank that spans full width (visible, not sr-only)
  const bank = document.createElement("div");
  bank.className = "bucket";
  bank.style.gridColumn = "1 / -1";
  const bankTitle = document.createElement("h4");
  bankTitle.textContent = "Elements";
  bank.appendChild(bankTitle);

  const bankList = document.createElement("div");
  bankList.className = "card-list";
  bank.appendChild(bankList);

  // Render draggable element cards into bank
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

  els.bucketsContainer.appendChild(bank);

  // Render labeled buckets (fix: previously labels missing)
  buckets.forEach((b) => {
    const bucket = document.createElement("div");
    bucket.className = "bucket";
    bucket.dataset.bucketId = b.id;

    const h = document.createElement("h4");
    h.textContent = b.label || b.id;
    bucket.appendChild(h);

    const dropZone = document.createElement("div");
    dropZone.className = "card-list";
    dropZone.dataset.dropZone = "true";
    bucket.appendChild(dropZone);

    // Drag-over / drop handlers
    bucket.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
    });

    bucket.addEventListener("drop", (ev) => {
      ev.preventDefault();
      const elementId = ev.dataTransfer.getData("text/plain");
      if (!elementId) return;

      const card = els.bucketsContainer.querySelector(`.card[data-element-id="${CSS.escape(elementId)}"]`);
      if (!card) return;

      // Move card into this bucket
      dropZone.appendChild(card);

      // Save placement
      state.buckets.placement.set(elementId, b.id);

      // Completion when all elements have a bucket placement
      if (elements.length && state.buckets.placement.size >= elements.length) {
        setTimeout(() => completeCurrentStep(), 220);
      }
    });

    els.bucketsContainer.appendChild(bucket);
  });

  // If no bucket labels exist, we can still proceed—but this would be a content issue.
  if (!buckets.length) {
    // Avoid dead-end
    setTimeout(() => completeCurrentStep(), 250);
  }
}

/* =========================
   STEP 4: Spotlights (rank top 3)
========================= */
function renderSpotlights() {
  const pack = state.currentPack;
  const mode = pack?.modes?.spotlights;
  if (!mode) {
    completeCurrentStep();
    return;
  }

  // Gameplay change: rank top 3
  els.spotlightsPrompt.textContent =
    mode.prompt || "Rank the top three decisions that make the scene memorable.";

  els.spotlightsList.innerHTML = "";

  // Add rank slots UI (inline styling to avoid needing index.html edits)
  const slotsWrap = document.createElement("div");
  slotsWrap.style.display = "grid";
  slotsWrap.style.gridTemplateColumns = "repeat(3, 1fr)";
  slotsWrap.style.gap = "12px";
  slotsWrap.style.margin = "10px 0 14px";

  const makeSlot = (idx) => {
    const slot = document.createElement("div");
    slot.dataset.slotIndex = String(idx);
    slot.style.border = "1px solid rgba(189,155,64,0.55)";
    slot.style.borderRadius = "16px";
    slot.style.padding = "12px";
    slot.style.background = "rgba(0,0,0,0.35)";
    slot.style.minHeight = "68px";
    slot.style.display = "flex";
    slot.style.alignItems = "center";
    slot.style.justifyContent = "center";
    slot.style.textAlign = "center";
    slot.style.color = "#bd9b40";
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
      placeTakeInRank(takeId, idx);
      refreshSpotlightSelectionUI();
      checkSpotlightsComplete();
    });

    slot.addEventListener("click", () => {
      // Clicking a filled slot clears it
      const takeId = state.spotlights.rank[idx];
      if (!takeId) return;
      state.spotlights.rank[idx] = null;
      refreshSpotlightSelectionUI();
    });

    return slot;
  };

  const slotEls = [makeSlot(0), makeSlot(1), makeSlot(2)];
  slotEls.forEach((s) => slotsWrap.appendChild(s));
  els.spotlightsList.appendChild(slotsWrap);

  // Takes list
  const takes = mode.takes || mode.items || [];
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
      // Click places into first empty slot; clicking again removes from slot
      toggleTakeRank(t.id);
      refreshSpotlightSelectionUI();
      checkSpotlightsComplete();
    });

    els.spotlightsList.appendChild(div);
  });

  // Store rank slot elements for refresh
  els.spotlightsList._rankSlotEls = slotEls;

  // Initial refresh
  refreshSpotlightSelectionUI();
}

function toggleTakeRank(takeId) {
  // If already ranked, remove it
  const idx = state.spotlights.rank.findIndex((id) => id === takeId);
  if (idx >= 0) {
    state.spotlights.rank[idx] = null;
    return;
  }

  // Otherwise place into first empty slot
  const empty = state.spotlights.rank.findIndex((id) => !id);
  if (empty >= 0) {
    placeTakeInRank(takeId, empty);
  }
}

function placeTakeInRank(takeId, slotIndex) {
  // Remove from any existing slot first
  const existing = state.spotlights.rank.findIndex((id) => id === takeId);
  if (existing >= 0) state.spotlights.rank[existing] = null;

  // If slot occupied, swap out (simple behavior)
  state.spotlights.rank[slotIndex] = takeId;
}

function refreshSpotlightSelectionUI() {
  const slotEls = els.spotlightsList._rankSlotEls || [];
  const rank = state.spotlights.rank;

  // Update slot text
  slotEls.forEach((slotEl, i) => {
    const id = rank[i];
    slotEl.textContent = id ? `#${i + 1}` : `#${i + 1}`;
    slotEl.style.color = id ? "#f7efe3" : "#bd9b40";
    slotEl.style.borderColor = id ? "rgba(181,133,183,0.95)" : "rgba(189,155,64,0.55)";
    slotEl.style.boxShadow = id ? "0 0 0 2px rgba(181,133,183,0.18)" : "none";
    slotEl.style.background = id ? "rgba(181,133,183,0.18)" : "rgba(0,0,0,0.35)";

    // If filled, also show a short preview (without needing extra UI)
    if (id) {
      const takeEl = els.spotlightsList.querySelector(`.spotlight[data-take-id="${CSS.escape(id)}"]`);
      const preview = takeEl ? takeEl.textContent : id;
      slotEl.textContent = `#${i + 1} — ${preview}`;
    }
  });

  // Highlight selected takes in list (dusty rose styling provided by index.html)
  const selected = new Set(rank.filter(Boolean));
  els.spotlightsList.querySelectorAll(".spotlight").forEach((el) => {
    const tid = el.dataset.takeId;
    el.classList.toggle("selected", selected.has(tid));
  });
}

function checkSpotlightsComplete() {
  const filled = state.spotlights.rank.filter(Boolean).length;
  if (filled >= 3) {
    setTimeout(() => completeCurrentStep(), 250);
  }
}

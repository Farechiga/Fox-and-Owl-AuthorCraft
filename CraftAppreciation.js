// CraftAppreciation.js
// AuthorCraft Appreciation — Full Comprehensive Runtime
// Standard: Concrete, kid-clear, no seminar jargon

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   1. App State
========================= */
const state = {
  mode: "film", // "film" | "literature"
  stepIndex: 0, 
  currentScene: null,
  scenesCompleted: 0,
  usedIds: new Set(),
  _advanceLock: false,

  // Mode-specific interaction tracking
  pair: { selectedLeft: null, selectedRight: null, matchedCount: 0 },
  slidersTouched: new Set(),
  bucketCount: 0,
  spotlightCount: 0
};

// DOM Helper
const $ = (id) => document.getElementById(id);

/* =========================
   2. Initialization & Navigation
========================= */
function init() {
  // Navigation listeners
  $("playBtn")?.addEventListener("click", enterGame);
  $("btnFilm")?.addEventListener("click", () => switchMode("film"));
  $("btnLiterature")?.addEventListener("click", () => switchMode("literature"));

  // Ensure landing state on load
  document.body.classList.add("landing");
  console.log("Fox & Owl Story Studio: Runtime Initialized.");
}

function enterGame() {
  document.body.classList.remove("landing");
  $("landingScreen").classList.add("hidden");
  $("gameScreen").classList.remove("hidden");
  loadNewScene();
}

function switchMode(mode) {
  if (state.mode === mode) return;
  state.mode = mode;
  state.usedIds.clear(); // Reset history for the new mode
  
  // UI updates for toggle buttons
  $("btnFilm").classList.toggle("active", mode === "film");
  $("btnLiterature").classList.toggle("active", mode === "literature");
  
  // Update body class for background overlays
  document.body.className = mode; 
  loadNewScene();
}

/* =========================
   3. Content Loader
========================= */
function loadNewScene() {
  const pool = state.mode === "film" ? FILM_PACKS : LIT_PACKS;
  
  // Rule: Only AuthorCraft moment types for this fork
  const eligible = pool.filter(p => p.momentType === "AuthorCraft" && !state.usedIds.has(p.id));
  
  // Fallback to pool if all scenes are used
  const source = eligible.length > 0 ? eligible : pool;
  state.currentScene = source[Math.floor(Math.random() * source.length)];
  state.usedIds.add(state.currentScene.id);

  resetSceneState();
  renderHeader();
  goToStep(0); // Always start at Pair Match [cite: 63]
}

function renderHeader() {
  const s = state.currentScene;
  // Display standard: "Source — Scene Title"
  $("sceneTitle").textContent = `${s.source} — ${s.sceneTitle}`;
  $("tierPill").textContent = s.tier || "Lantern";
  $("sceneText").textContent = s.scene;
  $("scenesCompleted").textContent = state.scenesCompleted;
}

function resetSceneState() {
  state.stepIndex = 0;
  state.pair = { selectedLeft: null, selectedRight: null, matchedCount: 0 };
  state.slidersTouched.clear();
  state.bucketCount = 0;
  state.spotlightCount = 0;
}

/* =========================
   4. Step/Panel Controller
========================= */
function goToStep(index) {
  state.stepIndex = index;
  const panels = ["panelPairMatch", "panelSliders", "panelBuckets", "panelSpotlights"];
  const steps = ["stepPair", "stepSliders", "stepBuckets", "stepSpotlights"];

  // Toggle visible panels and stepper styles
  panels.forEach((id, i) => $(id).classList.toggle("hidden", i !== index));
  steps.forEach((id, i) => {
    const el = $(id);
    if (el) {
      el.classList.toggle("active", i === index);
      el.classList.toggle("done", i < index);
    }
  });

  // Load appropriate mode logic
  try {
    if (index === 0) renderPairMatch();
    if (index === 1) renderSliders();
    if (index === 2) renderBuckets();
    if (index === 3) renderSpotlights();
  } catch (err) {
    console.error("Error rendering step:", index, err);
  }
}

function advance() {
  if (state._advanceLock) return;
  state._advanceLock = true;
  
  setTimeout(() => {
    state._advanceLock = false;
    if (state.stepIndex < 3) {
      goToStep(state.stepIndex + 1);
    } else {
      // Scene cycle complete
      state.scenesCompleted++;
      loadNewScene();
    }
  }, 800);
}

/* =========================
   Mode A: Pair Match [cite: 63]
========================= */
function renderPairMatch() {
  const mode = state.currentScene.modes.pairMatch;
  const leftBox = $("pairLeft");
  const rightBox = $("pairRight");
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  $("pairPrompt").textContent = mode.prompt;

  // Shuffle both sides for the match game
  const lefts = [...mode.pairs].sort(() => Math.random() - 0.5);
  const rights = [...mode.pairs].sort(() => Math.random() - 0.5);

  lefts.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = p.left; // Left: Objective Micro-beat [cite: 122]
    card.onclick = () => handlePairClick(card, "left", p.id);
    leftBox.appendChild(card);
  });

  rights.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = p.right; // Right: Why-it-lands [cite: 126]
    card.onclick = () => handlePairClick(card, "right", p.id);
    rightBox.appendChild(card);
  });
}

function handlePairClick(el, side, id) {
  if (el.classList.contains("locked")) return;

  const key = side === "left" ? "selectedLeft" : "selectedRight";
  el.parentElement.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  state.pair[key] = { el, id };

  // Evaluate match
  if (state.pair.selectedLeft && state.pair.selectedRight) {
    if (state.pair.selectedLeft.id === state.pair.selectedRight.id) {
      state.pair.selectedLeft.el.classList.add("locked");
      state.pair.selectedRight.el.classList.add("locked");
      state.pair.matchedCount++;
      if (state.pair.matchedCount === state.currentScene.modes.pairMatch.pairs.length) advance();
    }
    // Cleanup selection
    state.pair.selectedLeft = null;
    state.pair.selectedRight = null;
    setTimeout(() => {
      document.querySelectorAll(".card:not(.locked)").forEach(c => c.classList.remove("selected"));
    }, 400);
  }
}

/* =========================
   Mode B: Tone Sliders [cite: 74]
========================= */
function renderSliders() {
  const mode = state.currentScene.modes.sliders;
  const container = $("slidersContainer");
  container.innerHTML = "";

  $("slidersPrompt").textContent = mode.prompt;
  // Sliders must declare scope [cite: 147]
  $("slidersScope").textContent = mode.scope; 

  // Mapping 'axes' from filmPacks.js / litPacks.js
  const axesPool = mode.axes || mode.sliders || [];

  axesPool.forEach(axis => {
    const row = document.createElement("div");
    row.className = "slider-row";
    row.innerHTML = `
      <div class="slider-label">${axis.left}</div>
      <input type="range" min="0" max="100" value="${axis.defaultValue || 50}">
      <div class="slider-right">${axis.right}</div>
    `;
    
    // Track interactions; advance when all are touched [cite: 78]
    row.querySelector("input").oninput = () => {
      state.slidersTouched.add(axis.id);
      if (state.slidersTouched.size === axesPool.length) advance();
    };
    container.appendChild(row);
  });
}

/* =========================
   Mode C: Rank Buckets [cite: 68]
========================= */
function renderBuckets() {
  const mode = state.currentScene.modes.rankBuckets;
  const container = $("bucketsContainer");
  container.innerHTML = "";
  $("bucketsPrompt").textContent = mode.prompt;

  // Craft Labels [cite: 70, 71, 72]
  const labels = ["Engine", "Support", "Spice"];
  
  // The element bank
  const deck = document.createElement("div");
  deck.className = "card-list";
  deck.style.gridColumn = "1 / -1";
  deck.style.marginBottom = "20px";

  mode.cards.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = c.text;
    card.draggable = true;
    card.ondragstart = (e) => e.dataTransfer.setData("text", c.text);
    deck.appendChild(card);
  });
  container.appendChild(deck);

  // The dropping buckets
  labels.forEach(l => {
    const b = document.createElement("div");
    b.className = "panel";
    b.innerHTML = `<div class="pair-column-title">${l}</div><div class="card-list" style="min-height:80px; border: 1px dashed rgba(189,155,64,0.3)"></div>`;
    
    b.ondragover = (e) => e.preventDefault();
    b.ondrop = (e) => {
      e.preventDefault();
      const txt = e.dataTransfer.getData("text");
      const el = Array.from(document.querySelectorAll(".card")).find(c => c.textContent === txt);
      if (el) {
        b.querySelector(".card-list").appendChild(el);
        state.bucketCount = container.querySelectorAll(".panel .card").length;
        if (state.bucketCount === mode.cards.length) advance();
      }
    };
    container.appendChild(b);
  });
}

/* =========================
   Mode D: Interpretive Spotlights [cite: 79]
========================= */
function renderSpotlights() {
  const mode = state.currentScene.modes.interpretiveTakes;
  const list = $("spotlightsList");
  list.innerHTML = "";
  $("spotlightsPrompt").textContent = mode.prompt;

  // Handle both string arrays and object arrays for flexibility
  const takes = mode.takes || [];

  takes.forEach(t => {
    const text = typeof t === "string" ? t : t.text;
    const div = document.createElement("div");
    div.className = "spotlight";
    div.textContent = text;
    div.onclick = () => {
      div.classList.toggle("selected");
      const selectedCount = list.querySelectorAll(".selected").length;
      
      // Advance when target 'pick' count reached [cite: 80]
      if (selectedCount === (mode.pick || 3)) advance();
    };
    list.appendChild(div);
  });
}

// Start the engine
window.addEventListener("DOMContentLoaded", init);

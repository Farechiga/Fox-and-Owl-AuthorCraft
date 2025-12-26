// CraftAppreciation.js
// AuthorCraft Appreciation — Full Comprehensive Runtime (Final Fix)
// Standard: Concrete, kid-clear, no seminar jargon

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   1. App State
========================= */
const state = {
  mode: "film", 
  stepIndex: 0, 
  currentPack: null,
  currentScene: null,
  scenesCompleted: 0,
  usedIds: new Set(),
  _advanceLock: false,

  pair: { selectedLeft: null, selectedRight: null, matchedCount: 0 },
  slidersTouched: new Set(),
  bucketCount: 0,
  spotlightCount: 0
};

const $ = (id) => document.getElementById(id);

/* =========================
   2. Initialization & Navigation
========================= */
function init() {
  $("playBtn")?.addEventListener("click", enterGame);
  $("btnFilm")?.addEventListener("click", () => switchMode("film"));
  $("btnLiterature")?.addEventListener("click", () => switchMode("literature"));

  document.body.classList.add("landing");
  console.log("Runtime Initialized. Ready to load scenes.");
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
  state.usedIds.clear(); 
  
  $("btnFilm").classList.toggle("active", mode === "film");
  $("btnLiterature").classList.toggle("active", mode === "literature");
  
  document.body.className = mode; 
  loadNewScene();
}

/* =========================
   3. Content Loader
========================= */
function loadNewScene() {
  const pool = state.mode === "film" ? FILM_PACKS : LIT_PACKS;
  
  // Flatten all scenes from all packs into one list
  const allScenes = [];
  pool.forEach(pack => {
    if (pack.scenes && Array.isArray(pack.scenes)) {
      pack.scenes.forEach(scene => {
        allScenes.push({ pack, scene });
      });
    }
  });

  // Filter out used scenes if possible, otherwise reset
  let eligible = allScenes.filter(item => !state.usedIds.has(item.scene.id));
  if (eligible.length === 0) {
    state.usedIds.clear();
    eligible = allScenes;
  }

  const selected = eligible[Math.floor(Math.random() * eligible.length)];
  
  if (!selected) {
    console.error("No scenes found in the current mode pool.");
    return;
  }

  state.currentPack = selected.pack;
  state.currentScene = selected.scene;
  state.usedIds.add(state.currentScene.id);

  resetSceneState();
  renderHeader();
  goToStep(0); 
}

function renderHeader() {
  const p = state.currentPack;
  const s = state.currentScene;
  
  // Requirement: Work name + Scene Label
  $("sceneTitle").textContent = s.displayTitle || `${p.workTitle} — ${s.headerLine || 'Untitled'}`;
  $("tierPill").textContent = s.tier || "Lantern";
  
  // Handle nested scene.summary
  $("sceneText").textContent = s.scene?.summary || "No summary available.";
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

  panels.forEach((id, i) => $(id).classList.toggle("hidden", i !== index));
  steps.forEach((id, i) => {
    const el = $(id);
    if (el) {
      el.classList.toggle("active", i === index);
      el.classList.toggle("done", i < index);
    }
  });

  try {
    if (index === 0) renderPairMatch();
    if (index === 1) renderSliders();
    if (index === 2) renderBuckets();
    if (index === 3) renderSpotlights();
  } catch (err) {
    console.error("Step rendering error:", err);
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
      state.scenesCompleted++;
      loadNewScene();
    }
  }, 800);
}

/* =========================
   Mode A: Pair Match
========================= */
function renderPairMatch() {
  const mode = state.currentScene.modes.pairMatch;
  const leftBox = $("pairLeft");
  const rightBox = $("pairRight");
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  $("pairPrompt").textContent = mode.prompt;

  const lefts = [...mode.pairs].sort(() => Math.random() - 0.5);
  const rights = [...mode.pairs].sort(() => Math.random() - 0.5);

  lefts.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = p.left; 
    card.onclick = () => handlePairClick(card, "left", p.id);
    leftBox.appendChild(card);
  });

  rights.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = p.right; 
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

  if (state.pair.selectedLeft && state.pair.selectedRight) {
    if (state.pair.selectedLeft.id === state.pair.selectedRight.id) {
      state.pair.selectedLeft.el.classList.add("locked");
      state.pair.selectedRight.el.classList.add("locked");
      state.pair.matchedCount++;
      if (state.pair.matchedCount === state.currentScene.modes.pairMatch.pairs.length) advance();
    }
    state.pair.selectedLeft = null;
    state.pair.selectedRight = null;
    setTimeout(() => {
      document.querySelectorAll(".card:not(.locked)").forEach(c => c.classList.remove("selected"));
    }, 400);
  }
}

/* =========================
   Mode B: Tone Sliders
========================= */
function renderSliders() {
  const mode = state.currentScene.modes.sliders;
  const container = $("slidersContainer");
  container.innerHTML = "";

  $("slidersPrompt").textContent = mode.prompt;
  // Use scopeLabel from data
  $("slidersScope").textContent = mode.scopeLabel || ""; 

  const axes = mode.axes || [];

  axes.forEach((axis, idx) => {
    const row = document.createElement("div");
    row.className = "slider-row";
    const axisId = `slider-${idx}`;
    row.innerHTML = `
      <div class="slider-label">${axis.leftLabel}</div>
      <input type="range" min="0" max="100" value="${mode.defaults ? mode.defaults[idx] : 50}">
      <div class="slider-right">${axis.rightLabel}</div>
    `;
    
    row.querySelector("input").oninput = () => {
      state.slidersTouched.add(axisId);
      if (state.slidersTouched.size === axes.length) advance();
    };
    container.appendChild(row);
  });
}

/* =========================
   Mode C: Rank Buckets
========================= */
function renderBuckets() {
  const mode = state.currentScene.modes.buckets; 
  const container = $("bucketsContainer");
  container.innerHTML = "";
  $("bucketsPrompt").textContent = mode.prompt;

  const labels = ["Engine", "Support", "Spice"]; 
  
  const deck = document.createElement("div");
  deck.className = "card-list";
  deck.style.gridColumn = "1 / -1";
  deck.style.marginBottom = "20px";

  const elements = mode.elements || [];

  elements.forEach(txt => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = txt;
    card.draggable = true;
    card.ondragstart = (e) => e.dataTransfer.setData("text", txt);
    deck.appendChild(card);
  });
  container.appendChild(deck);

  labels.forEach(l => {
    const b = document.createElement("div");
    b.className = "panel";
    b.innerHTML = `<div class="pair-column-title">${l}</div><div class="card-list" style="min-height:80px; border: 1px dashed var(--line2)"></div>`;
    b.ondragover = (e) => e.preventDefault();
    b.ondrop = (e) => {
      e.preventDefault();
      const txt = e.dataTransfer.getData("text");
      const el = Array.from(document.querySelectorAll(".card")).find(c => c.textContent === txt);
      if (el) {
        b.querySelector(".card-list").appendChild(el);
        state.bucketCount = container.querySelectorAll(".panel .card").length;
        if (state.bucketCount === elements.length) advance();
      }
    };
    container.appendChild(b);
  });
}

/* =========================
   Mode D: Interpretive Spotlights
========================= */
function renderSpotlights() {
  const mode = state.currentScene.modes.spotlights;
  const list = $("spotlightsList");
  list.innerHTML = "";
  $("spotlightsPrompt").textContent = mode.prompt;

  const options = mode.options || [];

  options.forEach(text => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.textContent = text;
    div.onclick = () => {
      div.classList.toggle("selected");
      const selectedCount = list.querySelectorAll(".selected").length;
      if (selectedCount === 3) advance(); 
    };
    list.appendChild(div);
  });
}

window.addEventListener("DOMContentLoaded", init);

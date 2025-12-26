// CraftAppreciation.js
// AuthorCraft Appreciation — Runtime (Fixed for Data Mapping)
// Standard: Concrete, kid-clear, no seminar jargon [cite: 92, 116, 120]

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   State & Selection
========================= */
const state = {
  mode: "film",
  stepIndex: 0,
  currentScene: null,
  scenesCompleted: 0,
  usedIds: new Set(),
  _advanceLock: false,

  // Mode States
  pair: { selectedLeft: null, selectedRight: null, matchedCount: 0 },
  slidersTouched: new Set(),
  bucketCount: 0,
  spotlightCount: 0
};

const $ = (id) => document.getElementById(id);

/* =========================
   App Lifecycle
========================= */
function init() {
  // Event Listeners for Landing & Navigation [cite: 50, 62]
  $("playBtn")?.addEventListener("click", enterGame);
  $("btnFilm")?.addEventListener("click", () => switchMode("film"));
  $("btnLiterature")?.addEventListener("click", () => switchMode("literature"));

  document.body.classList.add("landing");
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
  
  // Set background overlay class
  document.body.className = mode; 
  loadNewScene();
}

/* =========================
   Data Loading [cite: 51, 61]
========================= */
function loadNewScene() {
  const pool = state.mode === "film" ? FILM_PACKS : LIT_PACKS;
  // Filter for AuthorCraft momentType specifically 
  const eligible = pool.filter(p => p.momentType === "AuthorCraft" && !state.usedIds.has(p.id));
  
  const source = eligible.length > 0 ? eligible : pool;
  state.currentScene = source[Math.floor(Math.random() * source.length)];
  state.usedIds.add(state.currentScene.id);

  resetSceneState();
  renderHeader();
  goToStep(0);
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
   Step Logic [cite: 62]
========================= */
function goToStep(index) {
  state.stepIndex = index;
  const panels = ["panelPairMatch", "panelSliders", "panelBuckets", "panelSpotlights"];
  const steps = ["stepPair", "stepSliders", "stepBuckets", "stepSpotlights"];

  panels.forEach((id, i) => $(id).classList.toggle("hidden", i !== index));
  steps.forEach((id, i) => {
    $(id).classList.toggle("active", i === index);
    $(id).classList.toggle("done", i < index);
  });

  if (index === 0) renderPairMatch();
  if (index === 1) renderSliders();
  if (index === 2) renderBuckets();
  if (index === 3) renderSpotlights();
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
   Mode A: Pair Match [cite: 63, 121]
========================= */
function renderPairMatch() {
  const mode = state.currentScene.modes.pairMatch;
  const leftBox = $("pairLeft");
  const rightBox = $("pairRight");
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  $("pairPrompt").textContent = mode.prompt;

  // Shuffle arrays separately for the match game [cite: 50, 121]
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
   Mode B: Sliders [cite: 74, 139]
========================= */
function renderSliders() {
  const mode = state.currentScene.modes.sliders;
  const container = $("slidersContainer");
  container.innerHTML = "";

  $("slidersPrompt").textContent = mode.prompt;
  $("slidersScope").textContent = mode.scope; // "Judy's experience", etc [cite: 147]

  mode.axes.forEach(axis => {
    const row = document.createElement("div");
    row.className = "slider-row";
    row.innerHTML = `
      <div class="slider-label">${axis.left}</div>
      <input type="range" min="0" max="100" value="${axis.defaultValue || 50}">
      <div class="slider-right">${axis.right}</div>
    `;
    
    row.querySelector("input").oninput = () => {
      state.slidersTouched.add(axis.id);
      if (state.slidersTouched.size === mode.axes.length) advance();
    };
    container.appendChild(row);
  });
}

/* =========================
   Mode C: Buckets [cite: 68, 73]
========================= */
function renderBuckets() {
  const mode = state.currentScene.modes.rankBuckets;
  const container = $("bucketsContainer");
  container.innerHTML = "";
  $("bucketsPrompt").textContent = mode.prompt;

  const labels = ["Engine", "Support", "Spice"];
  const deck = document.createElement("div");
  deck.className = "card-list";
  deck.style.gridColumn = "1 / -1";

  mode.cards.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = c.text;
    card.draggable = true;
    card.ondragstart = (e) => e.dataTransfer.setData("text", c.text);
    deck.appendChild(card);
  });
  container.appendChild(deck);

  labels.forEach(l => {
    const b = document.createElement("div");
    b.className = "panel";
    b.innerHTML = `<div class="pair-column-title">${l}</div><div class="card-list" style="min-height:80px"></div>`;
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
   Mode D: Spotlights [cite: 79, 163]
========================= */
function renderSpotlights() {
  const mode = state.currentScene.modes.interpretiveTakes;
  const list = $("spotlightsList");
  list.innerHTML = "";
  $("spotlightsPrompt").textContent = mode.prompt;

  mode.takes.forEach(t => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.textContent = t;
    div.onclick = () => {
      if (div.classList.toggle("selected")) state.spotlightCount++;
      else state.spotlightCount--;
      
      if (state.spotlightCount === (mode.pick || 3)) advance();
    };
    list.appendChild(div);
  });
}

window.onload = init;

// CraftAppreciation.js
// AuthorCraft Appreciation — Updated Runtime
// Objective: Taste formation over comprehension [cite: 91]
// Standard: Concrete, kid-clear, no seminar jargon [cite: 110, 120]

import { FILM_PACKS } from "./filmPacks.js";
import { LIT_PACKS } from "./litPacks.js";

/* =========================
   State Management
========================= */
const state = {
  mode: "film", 
  stepIndex: 0, 
  currentScene: null,
  scenesCompleted: 0,
  usedIds: new Set(),
  _advanceLock: false,

  // Interaction State
  pair: { selectedLeft: null, selectedRight: null, matchedCount: 0 },
  slidersTouched: new Set(),
  bucketCount: 0,
  spotlightRank: [null, null, null]
};

const $ = (id) => document.getElementById(id);

/* =========================
   Core Initialization
========================= */
function init() {
  // Navigation
  $("playBtn")?.addEventListener("click", enterGame);
  $("btnFilm")?.addEventListener("click", () => switchMode("film"));
  $("btnLiterature")?.addEventListener("click", () => switchMode("literature"));

  // Start on landing
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
  state.usedIds.clear(); // Fresh start for new mode
  
  $("btnFilm").classList.toggle("active", mode === "film");
  $("btnLiterature").classList.toggle("active", mode === "literature");
  document.body.className = mode; 

  loadNewScene();
}

/* =========================
   Scene Logic
========================= */
function loadNewScene() {
  const pool = state.mode === "film" ? FILM_PACKS : LIT_PACKS;
  // Filter for AuthorCraft only [cite: 52]
  const eligible = pool.filter(p => p.momentType === "AuthorCraft" && !state.usedIds.has(p.id));
  
  const source = eligible.length > 0 ? eligible : pool;
  state.currentScene = source[Math.floor(Math.random() * source.length)];
  state.usedIds.add(state.currentScene.id);

  resetUI();
  renderHeader();
  goToStep(0);
}

function renderHeader() {
  const s = state.currentScene;
  // Format: "Source — Scene Title"
  $("sceneTitle").textContent = `${s.source} — ${s.sceneTitle}`;
  $("tierPill").textContent = s.tier || "Lantern";
  $("sceneText").textContent = s.scene;
  $("scenesCompleted").textContent = state.scenesCompleted;
}

function resetUI() {
  state.stepIndex = 0;
  state.pair = { selectedLeft: null, selectedRight: null, matchedCount: 0 };
  state.slidersTouched.clear();
  state.bucketCount = 0;
  state.spotlightRank = [null, null, null];
}

/* =========================
   Step Navigation
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

  // Render specific step
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
  }, 600);
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

  // Shuffle for "Taste Formation" [cite: 50]
  const lefts = [...mode.pairs].sort(() => Math.random() - 0.5);
  const rights = [...mode.pairs].sort(() => Math.random() - 0.5);

  lefts.forEach(p => {
    const card = createCard(p.left, "left", p.id);
    leftBox.appendChild(card);
  });

  rights.forEach(p => {
    const card = createCard(p.right, "right", p.id);
    rightBox.appendChild(card);
  });
}

function createCard(text, side, id) {
  const div = document.createElement("div");
  div.className = "card";
  div.textContent = text;
  div.onclick = () => handlePairClick(div, side, id);
  return div;
}

function handlePairClick(el, side, id) {
  if (el.classList.contains("locked")) return;

  const otherSide = side === "left" ? "right" : "left";
  const selectionKey = side === "left" ? "selectedLeft" : "selectedRight";
  
  // Clear previous side selection
  el.parentElement.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  state.pair[selectionKey] = { el, id };

  // Check Match
  if (state.pair.selectedLeft && state.pair.selectedRight) {
    if (state.pair.selectedLeft.id === state.pair.selectedRight.id) {
      state.pair.selectedLeft.el.classList.add("locked");
      state.pair.selectedRight.el.classList.add("locked");
      state.pair.matchedCount++;
      
      if (state.pair.matchedCount === state.currentScene.modes.pairMatch.pairs.length) {
        advance();
      }
    }
    // Reset selection state
    state.pair.selectedLeft = null;
    state.pair.selectedRight = null;
    setTimeout(() => {
        document.querySelectorAll(".card:not(.locked)").forEach(c => c.classList.remove("selected"));
    }, 300);
  }
}

/* =========================
   Mode B: Sliders [cite: 74]
========================= */
function renderSliders() {
  const mode = state.currentScene.modes.sliders;
  const container = $("slidersContainer");
  container.innerHTML = "";

  $("slidersPrompt").textContent = mode.prompt;
  $("slidersScope").textContent = mode.scope; // Enforce scope 

  mode.axes.forEach(axis => {
    const row = document.createElement("div");
    row.className = "slider-row";
    row.innerHTML = `
      <div class="slider-label">${axis.left}</div>
      <input type="range" min="0" max="100" value="${axis.defaultValue}">
      <div class="slider-right">${axis.right}</div>
    `;
    
    const input = row.querySelector("input");
    input.onchange = () => {
      state.slidersTouched.add(axis.id);
      if (state.slidersTouched.size === mode.axes.length) advance();
    };
    container.appendChild(row);
  });
}

/* =========================
   Mode C: Buckets [cite: 68]
========================= */
function renderBuckets() {
  const mode = state.currentScene.modes.rankBuckets;
  const container = $("bucketsContainer");
  container.innerHTML = "";
  
  $("bucketsPrompt").textContent = mode.prompt;

  // Use standardized buckets [cite: 70, 71, 72]
  const labels = ["Engine (Does the work)", "Support", "Spice (Nice touch)"];
  
  const cardList = document.createElement("div");
  cardList.className = "card-list";
  cardList.style.gridColumn = "1 / -1";
  cardList.style.marginBottom = "20px";

  mode.cards.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = c.text;
    card.draggable = true;
    card.ondragstart = (e) => e.dataTransfer.setData("text", c.id);
    cardList.appendChild(card);
  });
  container.appendChild(cardList);

  labels.forEach(label => {
    const bucket = document.createElement("div");
    bucket.className = "panel";
    bucket.innerHTML = `<div class="pair-column-title">${label}</div><div class="card-list" style="min-height:100px"></div>`;
    
    bucket.ondragover = (e) => e.preventDefault();
    bucket.ondrop = (e) => {
      const id = e.dataTransfer.getData("text");
      const el = document.querySelector(`[draggable="true"]`); // Simplified for demo
      bucket.querySelector(".card-list").appendChild(el);
      state.bucketCount++;
      if (state.bucketCount === mode.cards.length) advance();
    };
    container.appendChild(bucket);
  });
}

/* =========================
   Mode D: Spotlights [cite: 79]
========================= */
function renderSpotlights() {
  const mode = state.currentScene.modes.interpretiveTakes;
  const list = $("spotlightsList");
  list.innerHTML = "";

  $("spotlightsPrompt").textContent = mode.prompt;

  mode.takes.forEach((takeText, i) => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.textContent = takeText;
    div.onclick = () => {
      div.classList.toggle("selected");
      const selected = list.querySelectorAll(".selected");
      if (selected.length === mode.pick) advance();
    };
    list.appendChild(div);
  });
}

window.onload = init;

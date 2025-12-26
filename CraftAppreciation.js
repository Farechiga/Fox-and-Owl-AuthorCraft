// CraftAppreciation.js
// AuthorCraft Appreciation — Robust Runtime
// Standard: Concrete, kid-clear, no seminar jargon [cite: 95, 116]

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
   2. Lifecycle & Navigation
========================= */
function init() {
  // Use a null-check to ensure playBtn exists before adding listener
  const playBtn = $("playBtn");
  if (playBtn) {
    playBtn.onclick = enterGame; // Use direct assignment for robustness
  }

  $("btnFilm")?.addEventListener("click", () => switchMode("film"));
  $("btnLiterature")?.addEventListener("click", () => switchMode("literature"));

  // Ensure landing state on load 
  document.body.classList.add("landing");
  console.log("Fox & Owl Story Studio: Play Button Initialized.");
}

// ... (keep enterGame and switchMode functions as they are) ...

// BOTTOM OF FILE: Replace window.onload or DOMContentLoaded with this:
if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
} else {
  window.addEventListener("DOMContentLoaded", init);
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
   3. The "Deep Scan" Content Loader
========================= */
function loadNewScene() {
  const pool = state.mode === "film" ? FILM_PACKS : LIT_PACKS;
  
  // 1. Flatten all scenes from all packs into a single array
  const allAvailable = [];
  pool.forEach(pack => {
    if (pack.scenes && Array.isArray(pack.scenes)) {
      pack.scenes.forEach(scene => {
        allAvailable.push({ pack, scene });
      });
    }
  });

  if (allAvailable.length === 0) {
    console.error("Critical Error: No scenes found in data files.");
    return;
  }

  // 2. Pick a random scene not yet used
  let eligible = allAvailable.filter(item => !state.usedIds.has(item.scene.id));
  if (eligible.length === 0) {
    state.usedIds.clear();
    eligible = allAvailable;
  }

  const selected = eligible[Math.floor(Math.random() * eligible.length)];
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
  
  // Requirement: "Work Name — Scene Label"
  $("sceneTitle").textContent = s.displayTitle || `${p.workTitle} — ${s.headerLine}`;
  $("tierPill").textContent = s.tier || "Lantern";
  
  // Accessing the nested 'summary' property
  $("sceneText").textContent = s.scene?.summary || "Scene summary missing.";
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
   4. Step Controller
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

  // Safe Mode Execution
  try {
    if (index === 0) renderPairMatch();
    if (index === 1) renderSliders();
    if (index === 2) renderBuckets();
    if (index === 3) renderSpotlights();
  } catch (err) {
    console.error("Step Render Fail:", err);
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
   Mode A: Pair Match [cite: 63]
========================= */
function renderPairMatch() {
  const mode = state.currentScene.modes.pairMatch;
  const leftBox = $("pairLeft");
  const rightBox = $("pairRight");
  leftBox.innerHTML = "";
  rightBox.innerHTML = "";

  $("pairPrompt").textContent = mode.prompt;

  // Shuffle logic for taste formation [cite: 50]
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
  $("slidersScope").textContent = mode.scopeLabel || "The scene overall"; 

  const axes = mode.axes || [];

  axes.forEach((axis, idx) => {
    // 1. Randomly flip the labels to ensure no "correct" side bias
    const flip = Math.random() > 0.5;
    const leftText = flip ? (axis.rightLabel || axis.right) : (axis.leftLabel || axis.left);
    const rightText = flip ? (axis.leftLabel || axis.left) : (axis.rightLabel || axis.right);

    const row = document.createElement("div");
    row.className = "slider-row";
    const axisId = `slider-${idx}`;
    
    // 2. Force default to 50 [cite: 75, 152]
    row.innerHTML = `
      <div class="slider-label">${leftText}</div>
      <input type="range" min="0" max="100" value="50">
      <div class="slider-right">${rightText}</div>
    `;
    
    row.querySelector("input").onchange = () => {
      state.slidersTouched.add(axisId);
      if (state.slidersTouched.size === axes.length) advance();
    };
    container.appendChild(row);
  });
}

  axes.forEach((axis, idx) => {
    const row = document.createElement("div");
    row.className = "slider-row";
    const axisId = `slider-${idx}`;
    row.innerHTML = `
      <div class="slider-label">${axis.leftLabel || axis.left}</div>
      <input type="range" min="0" max="100" value="${mode.defaults ? mode.defaults[idx] : 50}">
      <div class="slider-right">${axis.rightLabel || axis.right}</div>
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
  const mode = state.currentScene.modes.buckets || state.currentScene.modes.rankBuckets; 
  const container = $("bucketsContainer");
  container.innerHTML = "";
  $("bucketsPrompt").textContent = mode.prompt;

  // Set grid to 3 columns for side-by-side layout
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr 1fr";
  container.style.gap = "14px";

  const labels = ["Engine", "Support", "Spice"]; 
  const deck = document.createElement("div");
  deck.className = "card-list";
  deck.style.gridColumn = "1 / -1"; // Element bank spans full width at top
  deck.style.marginBottom = "20px";

  const items = mode.elements || mode.cards || [];

  items.forEach(item => {
    const text = typeof item === "string" ? item : item.text;
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    card.draggable = true;
    card.ondragstart = (e) => e.dataTransfer.setData("text", text);
    deck.appendChild(card);
  });
  container.appendChild(deck);

  labels.forEach(l => {
    const b = document.createElement("div");
    b.className = "panel";
    b.style.marginTop = "0"; // Override default panel margin for alignment
    b.innerHTML = `<div class="pair-column-title">${l}</div><div class="card-list" style="min-height:120px; border: 1px dashed var(--line2)"></div>`;
    
    b.ondragover = (e) => e.preventDefault();
    b.ondrop = (e) => {
      e.preventDefault();
      const txt = e.dataTransfer.getData("text");
      const el = Array.from(document.querySelectorAll(".card")).find(c => c.textContent === txt);
      if (el) {
        b.querySelector(".card-list").appendChild(el);
        // Only advance if the starting deck is now empty
        if (deck.children.length === 0) advance();
      }
    };
    container.appendChild(b);
  });
}

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
        if (state.bucketCount === items.length) advance();
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
  
  // Track ranking order
  state.spotlightRank = []; 

  const options = mode.options || [];

  options.forEach(text => {
    const div = document.createElement("div");
    div.className = "spotlight";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.innerHTML = `<span>${text}</span><strong class="rank-num" style="color:var(--gold); opacity:0">0</strong>`;
    
    div.onclick = () => {
      if (div.classList.contains("selected")) {
        // Remove from rank
        div.classList.remove("selected");
        state.spotlightRank = state.spotlightRank.filter(item => item !== div);
        div.querySelector(".rank-num").style.opacity = "0";
      } else if (state.spotlightRank.length < 3) {
        // Add to rank
        div.classList.add("selected");
        state.spotlightRank.push(div);
      }

      // Update numbers for all selected cards
      state.spotlightRank.forEach((item, index) => {
        const num = item.querySelector(".rank-num");
        num.textContent = index + 1;
        num.style.opacity = "1";
      });

      if (state.spotlightRank.length === 3) advance(); 
    };
    list.appendChild(div);
  });
}

  options.forEach(opt => {
    const text = typeof opt === "string" ? opt : opt.text;
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

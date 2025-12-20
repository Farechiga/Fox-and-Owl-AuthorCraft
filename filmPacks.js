// src/packs/filmPacks.js
// AuthorCraft Appreciation — FILM PACKS (Option A: one big file)
// Each entry must conform to the CraftAppreciation "appreciationPack" schema.

export const FILM_PACKS = [
  // --- ZOOTOPIA ---
  {
    id: "film-zootopia-01-dmv",
    source: "Zootopia",
    medium: "film",
    momentType: "AuthorCraft",
    sceneTitle: "The DMV Gauntlet",
    tier: "Lantern",

    passageSelector: {
      attractors: ["ExpectationInversion", "OverSeriousness", "ToneCollision", "CompressedWorldview"],
      threshold: 2
    },

    scene:
      "Judy and Nick enter the DMV to request vehicle owner information. The clerk working their station is a sloth who moves and speaks extremely slowly while a line waits behind them. Judy tries to keep the interaction polite and efficient as minutes stretch into an ordeal.",

    modes: {
      pairMatch: {
        prompt:
          "Match each micro-moment to the best “why it lands.” No scoring—make the strongest reading you can defend.",
        leftCards: [
          { id: "L1", text: "The DMV looks official and procedural, with numbered stations and a long line." },
          { id: "L2", text: "The sloth clerk turns toward them at a glacial pace, pausing between movements." },
          { id: "L3", text: "Judy holds her polite smile while her eyes track the line and the clock." },
          { id: "L4", text: "Nick stands calmly beside Judy, letting the slowness happen without flinching." },
          { id: "L5", text: "The clerk completes a tiny step, then stops again, as if that was a full effort." },
          { id: "L6", text: "People behind them wait through the delay, trapped in the same public routine." }
        ],
        rightCards: [
          { id: "R1", text: "The setting screams ‘efficiency’… then reality hits you like a wet blanket." },
          { id: "R2", text: "Timing becomes the joke—every beat is stretched past what feels human." },
          { id: "R3", text: "Her face is doing customer-service gymnastics while her brain is sprinting." },
          { id: "R4", text: "He’s basically a zen villain: calmness that makes your urgency look silly." },
          { id: "R5", text: "The effort-to-result ratio is wildly off—and the scene lets you feel it." },
          { id: "R6", text: "Public waiting turns into silent theater—everyone’s forced to participate." }
        ],
        pairs: [
          { leftId: "L1", rightId: "R1" },
          { leftId: "L2", rightId: "R2" },
          { leftId: "L3", rightId: "R3" },
          { leftId: "L4", rightId: "R4" },
          { leftId: "L5", rightId: "R5" },
          { leftId: "L6", rightId: "R6" }
        ],
        guardrails: { standaloneLeftCards: true, oneMovePerRightCard: true, noThesisLanguage: true }
      },

      rankBuckets: {
        prompt:
          "Drag each craft element into Engine / Support / Spice. You’re arguing what matters most—not what’s ‘correct.’",
        buckets: [
          { id: "engine", label: "Engine" },
          { id: "support", label: "Support" },
          { id: "spice", label: "Spice" }
        ],
        cards: [
          { id: "B1", text: "Extreme slowness treated as normal office procedure." },
          { id: "B2", text: "A setting associated with bureaucracy and waiting." },
          { id: "B3", text: "Judy’s polite face vs. internal urgency (visible restraint)." },
          { id: "B4", text: "Nick’s calm presence beside her (contrast in tempo)." },
          { id: "B5", text: "Long holds and tiny movements that make time feel heavy." },
          { id: "B6", text: "A line of people watching the delay happen in public." },
          { id: "B7", text: "The scene turns a mundane task into a high-stakes obstacle." },
          { id: "B8", text: "Micro-pauses that invite anticipation of the next inch of progress." }
        ]
      },

      sliders: {
        prompt: "Use sliders to describe your read. Neutral defaults—no ‘better’ side.",
        items: [
          { id: "S1", text: "Judy’s demeanor" },
          { id: "S2", text: "Nick’s stance" },
          { id: "S3", text: "The DMV line" },
          { id: "S4", text: "The clerk’s pace" }
        ],
        sliders: [
          { id: "A1", leftLabel: "Earnest", rightLabel: "Performative", defaultValue: 50 },
          { id: "A2", leftLabel: "Patient", rightLabel: "Boiling", defaultValue: 50 },
          { id: "A3", leftLabel: "Routine", rightLabel: "Obstacle-course", defaultValue: 50 },
          { id: "A4", leftLabel: "Grounded", rightLabel: "Absurd", defaultValue: 50 }
        ]
      },

      interpretiveTakes: {
        prompt: "Select the spotlights that feel true at the same time. Multiple readings can coexist.",
        interaction: "selectMultiple",
        takes: [
          { id: "T1", text: "The joke isn’t just ‘slow’—the whole room treats the slowness as standard procedure." },
          { id: "T2", text: "Judy’s professionalism becomes a visible mask; you can watch her hold it in place." },
          { id: "T3", text: "Nick’s calm reads like confidence—he’s comfortable in this world while Judy is fighting it." },
          { id: "T4", text: "The line behind them makes the delay public pressure; waiting becomes a group performance." },
          { id: "T5", text: "The scene makes time tangible by isolating tiny motions and forcing you to sit inside the pause." },
          { id: "T6", text: "A mundane civic ritual becomes an initiation test: can you keep composure inside the machine?" }
        ],
        gentleNudge:
          "Pick two spotlights that pull in different directions, then support both with the same concrete moment."
      }
    }
  }

  // ------ add new film scenes here ---------
];

// Optional: quick lookup by id (nice for debugging)
export const FILM_PACKS_BY_ID = Object.fromEntries(FILM_PACKS.map(p => [p.id, p]));

// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS (Option A: one big file)

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
        prompt: "Match each micro-moment to the best “why it lands.”",
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
        ]
      },

      sliders: {
        // ✅ required scope clarity
        scopeLabel: "Judy’s stance in the scene",
        prompt: "Set your read using descriptive axes.",
        sliders: [
          { id: "S1", leftLabel: "Earnest", rightLabel: "Performative", defaultValue: 50, minValue: 20, maxValue: 85 },
          { id: "S2", leftLabel: "Patient", rightLabel: "Boiling", defaultValue: 50, minValue: 0, maxValue: 100 },
          { id: "S3", leftLabel: "Routine", rightLabel: "Obstacle-course", defaultValue: 50, minValue: 10, maxValue: 90 },
          { id: "S4", leftLabel: "Grounded", rightLabel: "Absurd", defaultValue: 50, minValue: 0, maxValue: 100 }
        ]
      },

      rankBuckets: {
        prompt: "Drag each craft element into Engine / Support / Spice. You’re arguing what matters most—not what’s ‘correct.’",
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
          { id: "B5", text: "Micro-pauses that keep resetting your expectation of progress." },
          { id: "B6", text: "A line of strangers forced into the same public ritual." }
        ]
      },

      interpretiveTakes: {
        prompt: "Rank the top three decisions that make the scene memorable.",
        takes: [
          { id: "T1", text: "Nick’s calm reads like confidence—he’s comfortable in this world while Judy fights it." },
          { id: "T2", text: "The room treats the slowness as standard procedure—that’s the real joke engine." },
          { id: "T3", text: "Judy’s professionalism becomes a visible mask; you can watch her hold it in place." },
          { id: "T4", text: "The line behind them makes waiting public pressure; delay becomes group theater." }
        ]
      }
    }
  }
];

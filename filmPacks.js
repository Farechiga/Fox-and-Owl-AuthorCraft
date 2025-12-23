// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS (Option A: one big file)
// ES Module: exports FILM_PACKS
// Standard: momentType must be "AuthorCraft" for all packs.

export const FILM_PACKS = [
  // ============================================================
  // ZOOTOPIA — PACK 01
  // ============================================================
  {
    id: "film-zootopia-01-dmv",
    source: "Zootopia",
    medium: "film",
    momentType: "AuthorCraft",
    sceneTitle: "Zootopia — The DMV Gauntlet",
    tier: "Lantern",

    passageSelector: {
      attractors: [
        "ExpectationInversion",
        "OverSeriousness",
        "ToneCollision",
        "CompressedWorldview"
      ],
      threshold: 2
    },

    scene:
      "Judy and Nick enter the DMV to request vehicle owner information. The clerk at the desk is a sloth who moves and speaks painfully slowly while a long line waits behind them. Judy tries to stay polite and efficient as minutes stretch into an ordeal.",

    modes: {
      // MODE 1: Pair Match (4 pairs only)
      pairMatch: {
        prompt:
          "Match the micro-moment to the best ‘why it lands.’",
        leftCards: [
          { id: "L1", text: "The DMV looks official and procedural: signs, numbers, lines." },
          { id: "L2", text: "The sloth turns toward them at a glacial pace, pausing between moves." },
          { id: "L3", text: "Judy keeps a professional smile while her eyes track the clock and line." },
          { id: "L4", text: "The whole room waits together — public silence turns into group pressure." }
        ],
        rightCards: [
          { id: "R1", text: "The setting promises ‘efficiency’… then reality humiliates that promise." },
          { id: "R2", text: "Her face is customer-service, but her brain is sprinting." },
          { id: "R3", text: "Timing becomes the joke: every beat is stretched past what feels human." },
          { id: "R4", text: "Waiting becomes public theater — everyone is forced to participate." }
        ],
        // Intentionally NOT aligned by row; runtime should shuffle too.
        pairs: [
          { leftId: "L1", rightId: "R1" },
          { leftId: "L2", rightId: "R3" },
          { leftId: "L3", rightId: "R2" },
          { leftId: "L4", rightId: "R4" }
        ],
        guardrails: {
          standaloneLeftCards: true,
          oneMovePerRightCard: true,
          noThesisLanguage: true
        }
      },

      // MODE 2: Sliders
      sliders: {
        prompt:
          "SCOPE: Judy’s experience in this scene. Set your read using descriptive axes.",
        items: [{ id: "S1", text: "Judy" }],
        sliders: [
          { id: "A1", leftLabel: "Earnest", rightLabel: "Performative", defaultValue: 50 },
          { id: "A2", leftLabel: "Patient", rightLabel: "Boiling", defaultValue: 50 },
          { id: "A3", leftLabel: "In control", rightLabel: "Unraveling", defaultValue: 50 },
          { id: "A4", leftLabel: "Professional", rightLabel: "Personal", defaultValue: 50 }
        ]
      },

      // MODE 3: Buckets
      rankBuckets: {
        prompt:
          "Drag each element into Engine / Support / Spice based on what drives the scene.",
        buckets: [
          { id: "engine", label: "Engine" },
          { id: "support", label: "Support" },
          { id: "spice", label: "Spice" }
        ],
        cards: [
          { id: "B1", text: "Extreme slowness treated as normal procedure." },
          { id: "B2", text: "A bureaucratic setting everyone recognizes instantly." },
          { id: "B3", text: "Judy’s visible self-control under pressure." },
          { id: "B4", text: "Long pauses and tiny movements that stretch time." },
          { id: "B5", text: "A line of strangers forced to share the delay." },
          { id: "B6", text: "Nick’s calm presence that makes Judy’s urgency look louder." },
          { id: "B7", text: "The contrast between ‘official system’ and ‘painfully human pace’." }
        ]
      },

      // MODE 4: Spotlights (rank top 3)
      interpretiveTakes: {
        prompt:
          "Rank the top 3 decisions that make the scene memorable. Leave the rest unranked.",
        interaction: "rank",
        takes: [
          { id: "T1", text: "The DMV setting is a promise of order — which makes the delay funnier." },
          { id: "T2", text: "Judy’s politeness becomes a visible mask you can watch her hold in place." },
          { id: "T3", text: "The joke is ‘time’ itself — every pause is a punchline." },
          { id: "T4", text: "Nick’s calm is a pressure test: it highlights Judy’s effort." },
          { id: "T5", text: "The line behind them turns delay into public embarrassment." },
          { id: "T6", text: "The sloth isn’t malicious — the system just doesn’t care about urgency." }
        ],
        gentleNudge:
          "If two spotlights conflict, pick the one with the clearest on-screen evidence."
      }
    }
  },

  // ============================================================
  // ZOOTOPIA — PACK 02
  // ============================================================
  {
    id: "film-zootopia-02-mr-big",
    source: "Zootopia",
    medium: "film",
    momentType: "AuthorCraft",
    sceneTitle: "Zootopia — Mr. Big’s Tiny Wedding",
    tier: "Lantern",

    passageSelector: {
      attractors: ["StatusMismatch", "ToneCollision", "AudienceKnowsMore", "ContrastPop"],
      threshold: 2
    },

    scene:
      "Judy and Nick are brought to Mr. Big, a powerful crime boss who is shockingly tiny. The room is icy, the guards are intimidating, and Judy expects danger — but the scene flips into a miniature wedding celebration where Mr. Big’s daughter is the bride.",

    modes: {
      pairMatch: {
        prompt:
          "Match the micro-moment to the best ‘why it lands.’",
        leftCards: [
          { id: "L1", text: "Mr. Big’s size is tiny, but everyone treats him like royalty." },
          { id: "L2", text: "The environment is dramatic: ice, guards, formality, threat." },
          { id: "L3", text: "The scene pivots into a wedding — confetti, music, joy — in the same space." },
          { id: "L4", text: "Judy must speak carefully; one wrong move could trigger consequences." }
        ],
        rightCards: [
          { id: "R1", text: "Status is performed — belief makes power real, not height." },
          { id: "R2", text: "A threat-room becomes party-room: tonal whiplash is the joke engine." },
          { id: "R3", text: "The setting ‘over-promises danger’ so the reveal hits harder." },
          { id: "R4", text: "Comedy sharpens stakes: her politeness is survival, not manners." }
        ],
        pairs: [
          { leftId: "L2", rightId: "R3" },
          { leftId: "L1", rightId: "R1" },
          { leftId: "L3", rightId: "R2" },
          { leftId: "L4", rightId: "R4" }
        ],
        guardrails: {
          standaloneLeftCards: true,
          oneMovePerRightCard: true,
          noThesisLanguage: true
        }
      },

      sliders: {
        prompt:
          "SCOPE: The scene’s tone (not one character). Set your read using descriptive axes.",
        items: [{ id: "S1", text: "The scene" }],
        sliders: [
          { id: "A1", leftLabel: "Menacing", rightLabel: "Playful", defaultValue: 50 },
          { id: "A2", leftLabel: "Sincere", rightLabel: "Ironic", defaultValue: 50 },
          { id: "A3", leftLabel: "Orderly", rightLabel: "Chaotic", defaultValue: 50 },
          { id: "A4", leftLabel: "Grounded", rightLabel: "Ridiculous", defaultValue: 50 }
        ]
      },

      rankBuckets: {
        prompt:
          "Drag each element into Engine / Support / Spice based on what drives the scene.",
        buckets: [
          { id: "engine", label: "Engine" },
          { id: "support", label: "Support" },
          { id: "spice", label: "Spice" }
        ],
        cards: [
          { id: "B1", text: "Tiny crime boss treated as huge authority." },
          { id: "B2", text: "Ice palace visuals that signal danger and power." },
          { id: "B3", text: "Wedding celebration inside the threat-setting." },
          { id: "B4", text: "Judy’s careful, professional language under pressure." },
          { id: "B5", text: "Guards and rituals that ‘prove’ status." },
          { id: "B6", text: "Sudden friendliness that feels earned by the reveal." },
          { id: "B7", text: "The contrast: tiny body / gigantic social power." }
        ]
      },

      interpretiveTakes: {
        prompt:
          "Rank the top 3 decisions that make the scene memorable. Leave the rest unranked.",
        interaction: "rank",
        takes: [
          { id: "T1", text: "The whole scene is a status lesson: everyone’s behavior builds Mr. Big." },
          { id: "T2", text: "The ice-palace threat setup is a fake-out so the wedding lands harder." },
          { id: "T3", text: "Judy’s politeness reads as tactical — you can feel the risk in her words." },
          { id: "T4", text: "Tiny scale makes big power funnier without removing danger." },
          { id: "T5", text: "The tonal pivot (threat → celebration) is the main craft move." },
          { id: "T6", text: "Nick acts like he understands the world; it changes the scene’s balance." }
        ],
        gentleNudge:
          "If two feel similar, choose the one that points to the most specific on-screen evidence."
      }
    }
  }
];

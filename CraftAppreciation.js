// CraftAppreciation.js
export const appreciationPack = {
  id: "string", // unique
  source: "string", // book or film title
  medium: "film" | "literature",
  momentType: "LineMoment" | "SceneInterpretation",
  sceneTitle: "string",
  tier: "Firefly" | "Fox" | "Owl" | "Lantern",

  // --- Selection metadata (editorial, not gameplay) ---
  passageSelector: {
    attractors: [
      "ExpectationInversion",
      "StatusMismatch",
      "ToneCollision",
      "AudienceKnowsMore",
      "OverSeriousness",
      "AnthropomorphicProjection",
      "CompressedWorldview"
    ],
    threshold: 2
  },

  // --- Micro-scene recap (no quotes, no interpretation) ---
  scene: "2–3 sentences describing the observable situation clearly.",

  // --- MODES ---
  modes: {
    // MODE A: Pair Match
    pairMatch: {
      prompt: "string",

      leftCards: [
        {
          id: "L1",
          text: "Concrete, observable micro-moment. Standalone intelligible."
        }
      ],

      rightCards: [
        {
          id: "R1",
          text: "Punchy, colloquial why-it-lands. No thesis language."
        }
      ],

      // internal key (can be hidden or used for feedback)
      pairs: [
        { leftId: "L1", rightId: "R1" }
      ],

      guardrails: {
        standaloneLeftCards: true,
        oneMovePerRightCard: true,
        noThesisLanguage: true
      }
    },

    // MODE B: Rank Buckets
    rankBuckets: {
      prompt: "string",
      buckets: [
        { id: "engine", label: "Engine" },
        { id: "support", label: "Support" },
        { id: "spice", label: "Spice" }
      ],
      cards: [
        { id: "B1", text: "Craft move stated concretely." }
      ]
    },

    // MODE C: Sliders
    sliders: {
      prompt: "string",
      items: [
        { id: "S1", text: "Neutral noun phrase (e.g., 'The parade')." }
      ],
      sliders: [
        {
          id: "A1",
          leftLabel: "Earnest",
          rightLabel: "Performative",
          defaultValue: 50 // MUST be neutral
        }
      ]
    },

    // MODE D: Interpretive Spotlights
    interpretiveTakes: {
      prompt: "string",
      interaction: "selectMultiple" | "rank",
      takes: [
        {
          id: "T1",
          text: "Points to a specific detail; invites a reading without concluding."
        }
      ],
      gentleNudge: "Optional encouragement toward multiplicity."
    }
  }
};

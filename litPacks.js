// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS (Option A: one big file)
// Standard: momentType must be "AuthorCraft" for all packs.

export const LIT_PACKS = [
  {
    id: "lit-boxcar-01-the-four-on-the-run",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "Four kids, one decision",
    tier: "Lantern",

    passageSelector: {
      attractors: ["ThresholdMoment", "IdentityTension", "CompressedWorldview"],
      threshold: 2
    },

    scene:
      "After the children are separated from adult protection, they choose to stick together and keep moving. They begin building a shared plan with limited information, relying on each other’s competence rather than waiting to be rescued.",

    modes: {
      pairMatch: {
        prompt:
          "Match micro-moments to why they land. Make the strongest read you can defend.",
        leftCards: [
          { id: "L1", text: "A safe adult option appears after the kids have proven they can cope alone." },
          { id: "L2", text: "Relief is mixed with hesitation rather than being pure happiness." },
          { id: "L3", text: "The children’s earlier teamwork now becomes evidence, not just survival." },
          { id: "L4", text: "The adult world feels bigger and louder than the quiet boxcar routine." },
          { id: "L5", text: "A private home competes with the ‘home’ they built themselves." },
          { id: "L6", text: "The story pivots from ‘can we survive?’ to ‘what kind of life do we choose?’" }
        ],
        rightCards: [
          { id: "R1", text: "Help arrives after competence—so it feels like a choice, not a rescue." },
          { id: "R2", text: "Mixed emotion makes the stakes feel real: gain always costs something." },
          { id: "R3", text: "Earlier scenes pay off as proof of character, not filler." },
          { id: "R4", text: "A scale shift resets the reader’s sense of vulnerability." },
          { id: "R5", text: "Two ‘homes’ create a clean emotional argument without speeches." },
          { id: "R6", text: "The plot escalates by changing the question, not by adding danger." }
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
        prompt: "Sort the craft elements by what drives the scene.",
        buckets: [
          { id: "engine", label: "Engine" },
          { id: "support", label: "Support" },
          { id: "spice", label: "Spice" }
        ],
        cards: [
          { id: "B1", text: "A safe adult option introduced after independence is established." },
          { id: "B2", text: "Relief mixed with uncertainty instead of a simple happy ending." },
          { id: "B3", text: "A ‘two homes’ contrast (built vs given)." },
          { id: "B4", text: "A question-shift that escalates stakes without escalating danger." },
          { id: "B5", text: "Payoff of earlier competence as evidence of growth." },
          { id: "B6", text: "A larger world hinted at without removing the children’s agency." }
        ]
      },

      sliders: {
        prompt: "Set your read using descriptive axes.",
        items: [
          { id: "S1", text: "The children’s tone" },
          { id: "S2", text: "The adult world’s presence" }
        ],
        sliders: [
          { id: "A1", leftLabel: "Improvised", rightLabel: "Planned", defaultValue: 50 },
          { id: "A2", leftLabel: "Fragile", rightLabel: "Capable", defaultValue: 50 },
          { id: "A3", leftLabel: "Hidden", rightLabel: "Exposed", defaultValue: 50 },
          { id: "A4", leftLabel: "Child-led", rightLabel: "Adult-led", defaultValue: 50 }
        ]
      },

      interpretiveTakes: {
        prompt: "Choose spotlights that can coexist.",
        interaction: "selectMultiple",
        takes: [
          { id: "T1", text: "Competence comes first, so later help doesn’t erase the kids’ agency." },
          { id: "T2", text: "The story raises stakes by changing the question, not by increasing danger." },
          { id: "T3", text: "Two ‘homes’ create a clean emotional argument without speeches." },
          { id: "T4", text: "A scale shift (kids vs adult world) refreshes vulnerability without melodrama." }
        ]
      }
    }
  }

  // ------ add new literature scenes here ---------
];

export const LIT_PACKS_BY_ID = Object.fromEntries(LIT_PACKS.map((p) => [p.id, p]));

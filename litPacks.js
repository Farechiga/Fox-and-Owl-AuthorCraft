// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS (Option A: one big file)
// ES Module: exports LIT_PACKS
// Standard: momentType must be "AuthorCraft" for all packs.

export const LIT_PACKS = [
  // ============================================================
  // THE BOXCAR CHILDREN (Book 1) — PACK 01
  // ============================================================
  {
    id: "lit-boxcar-01-run-together",
    source: "The Boxcar Children (Book 1)",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "The Boxcar Children — Four Kids, One Decision",
    tier: "Lantern",

    passageSelector: {
      attractors: ["ThresholdMoment", "IdentityTension", "CompetenceReveal", "TendernessUnderStress"],
      threshold: 2
    },

    scene:
      "Four siblings realize they can’t rely on adults in the moment. Instead of splitting up or panicking, they choose to stay together and keep moving. The scene shows leadership and trust forming fast, through what they do and what they avoid saying.",

    modes: {
      pairMatch: {
        prompt:
          "Match the micro-moment to the best ‘why it lands.’ (There is a right answer — point to the text.)",
        leftCards: [
          { id: "L1", text: "They choose ‘together’ immediately — no long debate, just alignment." },
          { id: "L2", text: "An older sibling takes charge through actions (where to go, what to carry)." },
          { id: "L3", text: "A younger sibling follows, trusting the plan even without full explanation." },
          { id: "L4", text: "They keep moving instead of waiting to be rescued." }
        ],
        rightCards: [
          { id: "R1", text: "The story builds a team fast: choice replaces speeches." },
          { id: "R2", text: "Leadership is shown as behavior, not a title." },
          { id: "R3", text: "Trust is the real engine: someone follows before proof arrives." },
          { id: "R4", text: "Momentum becomes courage — movement beats fear." }
        ],
        pairs: [
          { leftId: "L2", rightId: "R2" },
          { leftId: "L3", rightId: "R3" },
          { leftId: "L1", rightId: "R1" },
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
          "SCOPE: The siblings as a group in this scene. Set your read using descriptive axes.",
        items: [{ id: "S1", text: "The siblings" }],
        sliders: [
          { id: "A1", leftLabel: "Scared", rightLabel: "Steady", defaultValue: 50 },
          { id: "A2", leftLabel: "Reactive", rightLabel: "Intentional", defaultValue: 50 },
          { id: "A3", leftLabel: "Dependent", rightLabel: "Capable", defaultValue: 50 },
          { id: "A4", leftLabel: "Separate", rightLabel: "Unified", defaultValue: 50 }
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
          { id: "B1", text: "A fast decision to stick together." },
          { id: "B2", text: "A leader who acts first, explains later." },
          { id: "B3", text: "Younger sibling trust (following the plan)." },
          { id: "B4", text: "Movement: they keep going instead of freezing." },
          { id: "B5", text: "Limited information — they commit anyway." },
          { id: "B6", text: "A quiet agreement that replaces arguing." },
          { id: "B7", text: "A sense of the adult world being out of reach for now." }
        ]
      },

      interpretiveTakes: {
        prompt:
          "Rank the top 3 decisions that make the scene memorable. Leave the rest unranked.",
        interaction: "rank",
        takes: [
          { id: "T1", text: "The speed of the decision is the craft move — urgency becomes character." },
          { id: "T2", text: "Leadership is shown through tasks, not speeches." },
          { id: "T3", text: "The book builds trust by showing who follows without needing proof." },
          { id: "T4", text: "The scene avoids melodrama — it stays practical, which makes it believable." },
          { id: "T5", text: "Togetherness isn’t sentimental; it’s survival math." },
          { id: "T6", text: "The story makes ‘keep moving’ feel like bravery." }
        ],
        gentleNudge:
          "If two feel similar, pick the one that points to the most concrete action."
      }
    }
  },

  // ============================================================
  // THE BOXCAR CHILDREN (Book 1) — PACK 02
  // ============================================================
  {
    id: "lit-boxcar-02-boxcar-home",
    source: "The Boxcar Children (Book 1)",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "The Boxcar Children — Turning a Boxcar into Home",
    tier: "Lantern",

    passageSelector: {
      attractors: ["CompetenceReveal", "Resourcefulness", "WarmthInHardship", "WorldbuildingThroughObjects"],
      threshold: 2
    },

    scene:
      "The children discover an old boxcar and begin transforming it into a livable home. The scene makes safety feel earned: they clean, organize, gather supplies, and assign roles. The comfort is small, but it feels huge because we watched them build it.",

    modes: {
      pairMatch: {
        prompt:
          "Match the micro-moment to the best ‘why it lands.’ (There is a right answer — use the concrete details.)",
        leftCards: [
          { id: "L1", text: "They clean and arrange the space before relaxing." },
          { id: "L2", text: "They divide tasks naturally — each kid contributes something different." },
          { id: "L3", text: "Small comforts (food, bedding, warmth) are treated as major wins." },
          { id: "L4", text: "The boxcar shifts from ‘abandoned object’ to ‘chosen shelter’." }
        ],
        rightCards: [
          { id: "R1", text: "Competence becomes comfort: we believe in the home because of the work." },
          { id: "R2", text: "Team identity forms through roles, not announcements." },
          { id: "R3", text: "Tiny details carry emotional weight because the kids earned them." },
          { id: "R4", text: "A place becomes ‘theirs’ through choices — it’s adoption, not luck." }
        ],
        pairs: [
          { leftId: "L2", rightId: "R2" },
          { leftId: "L1", rightId: "R1" },
          { leftId: "L4", rightId: "R4" },
          { leftId: "L3", rightId: "R3" }
        ],
        guardrails: {
          standaloneLeftCards: true,
          oneMovePerRightCard: true,
          noThesisLanguage: true
        }
      },

      sliders: {
        prompt:
          "SCOPE: The boxcar-as-home (the feeling of the setting). Set your read using descriptive axes.",
        items: [{ id: "S1", text: "The boxcar home" }],
        sliders: [
          { id: "A1", leftLabel: "Temporary", rightLabel: "Real", defaultValue: 50 },
          { id: "A2", leftLabel: "Bare", rightLabel: "Cozy", defaultValue: 50 },
          { id: "A3", leftLabel: "Risky", rightLabel: "Safe", defaultValue: 50 },
          { id: "A4", leftLabel: "Lonely", rightLabel: "Together", defaultValue: 50 }
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
          { id: "B1", text: "Cleaning and organizing before celebrating." },
          { id: "B2", text: "Task division: roles emerge naturally." },
          { id: "B3", text: "Concrete objects (food, bedding, tools) that make survival visible." },
          { id: "B4", text: "A ‘found place’ becoming a chosen home." },
          { id: "B5", text: "Small wins treated as big victories." },
          { id: "B6", text: "A sense of secrecy (they’re building a life out of sight)." },
          { id: "B7", text: "Setting details that make the reader picture the space." }
        ]
      },

      interpretiveTakes: {
        prompt:
          "Rank the top 3 decisions that make the scene memorable. Leave the rest unranked.",
        interaction: "rank",
        takes: [
          { id: "T1", text: "The book makes safety feel earned by showing the work first." },
          { id: "T2", text: "Objects do the storytelling: tools and routines become character proof." },
          { id: "T3", text: "The boxcar becomes ‘home’ because the kids choose it, not because it’s perfect." },
          { id: "T4", text: "Comfort is small but huge — the contrast drives the emotion." },
          { id: "T5", text: "Roles emerge quietly, which makes the teamwork believable." },
          { id: "T6", text: "The scene turns survival into pride without becoming preachy." }
        ],
        gentleNudge:
          "Pick the spotlights that point to something you can visualize clearly."
      }
    }
  }
];

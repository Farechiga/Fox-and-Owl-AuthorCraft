// src/packs/litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS (Option A: one big file)
//
// Standard: momentType must be "AuthorCraft" for all packs.
// These packs are scene-based craft-noticing activities (no scoring, no correctness UI).

export const LIT_PACKS = [
  // ============================================================
  // THE BOXCAR CHILDREN (Book 1)
  // ============================================================

  {
    id: "lit-boxcar-01-the-four-on-the-run",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "Four kids, one decision",
    tier: "Lantern",

    passageSelector: {
      attractors: ["ThresholdMoment", "IdentityTension", "CompressedWorldview", "Constraint"],
      threshold: 2
    },

    scene:
      "Four siblings realize they will need to depend on one another. They decide not to ask adults for help right away and move forward together. The oldest takes charge while the youngest tries to keep up.",

    modes: {
      pairMatch: {
        prompt:
          "Match each micro-moment to the best “why it lands.” No scoring—make the strongest reading you can defend.",
        leftCards: [
          { id: "L1", text: "The siblings decide to stick together rather than split up." },
          { id: "L2", text: "The oldest shifts into a leader role without a ceremony or announcement." },
          { id: "L3", text: "A small, practical plan replaces panic in the very next beat." },
          { id: "L4", text: "The youngest tries to act brave even when tired or confused." },
          { id: "L5", text: "The group avoids adults, even though adults could make things easier." },
          { id: "L6", text: "The narration stays close to what they do—walking, deciding, carrying—more than what they ‘feel.’" }
        ],
        rightCards: [
          { id: "R1", text: "A single choice defines the group’s identity: ‘we are a unit.’" },
          { id: "R2", text: "Leadership is shown through action, not declared—so it feels earned." },
          { id: "R3", text: "Speedy practicality prevents melodrama and keeps momentum." },
          { id: "R4", text: "Bravery reads as performance under pressure—effort peeks through." },
          { id: "R5", text: "The story creates stakes by choosing the harder path on purpose." },
          { id: "R6", text: "Concrete behavior lets readers infer emotion instead of being told." }
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
          { id: "B1", text: "A clear ‘we stay together’ decision early on." },
          { id: "B2", text: "Action-first narration that keeps feelings implicit." },
          { id: "B3", text: "Practical problem-solving replaces speeches." },
          { id: "B4", text: "Distinct roles (leader, helpers, youngest) form quickly." },
          { id: "B5", text: "Avoiding adults makes every problem feel earned." },
          { id: "B6", text: "Small tasks (food, shelter, walking) create constant forward motion." },
          { id: "B7", text: "Moments of bravery that look like trying." },
          { id: "B8", text: "A steady, plain style that makes the situation feel ‘real’." }
        ]
      },

      sliders: {
        prompt: "Use sliders to describe your read. Neutral defaults—no ‘better’ side.",
        items: [
          { id: "S1", text: "The narration’s tone" },
          { id: "S2", text: "The group’s mindset" },
          { id: "S3", text: "The pace of events" },
          { id: "S4", text: "The feeling of danger" }
        ],
        sliders: [
          { id: "A1", leftLabel: "Plain", rightLabel: "Lyrical", defaultValue: 50 },
          { id: "A2", leftLabel: "Cautious", rightLabel: "Bold", defaultValue: 50 },
          { id: "A3", leftLabel: "Unfolding", rightLabel: "Rushing", defaultValue: 50 },
          { id: "A4", leftLabel: "Low", rightLabel: "High", defaultValue: 50 }
        ]
      },

      interpretiveTakes: {
        prompt: "Select the spotlights that feel true at the same time. Multiple readings can coexist.",
        interaction: "selectMultiple",
        takes: [
          { id: "T1", text: "The story earns independence by making the kids choose the hard route on purpose." },
          { id: "T2", text: "The ‘leader’ is built through chores and decisions, not through status." },
          { id: "T3", text: "Emotion is mostly implied; readers do the inner-work while the plot keeps moving." },
          { id: "T4", text: "The youngest’s ‘bravery’ lands because it looks like effort, not confidence." },
          { id: "T5", text: "The plain style keeps the adventure from floating away into fantasy." },
          { id: "T6", text: "The early decision creates a contract: problems will be solved by teamwork, not rescue." }
        ],
        gentleNudge:
          "Pick two spotlights that seem to conflict (e.g., ‘low danger’ and ‘earned independence’) and support both with the same concrete moment."
      }
    }
  },

  {
    id: "lit-boxcar-02-finding-a-home",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "The boxcar becomes a house",
    tier: "Lantern",

    passageSelector: {
      attractors: ["Constraint", "Transformation", "CompetenceGlow", "CozyUnderPressure"],
      threshold: 2
    },

    scene:
      "The siblings discover an abandoned boxcar and decide to make it their shelter. They clean, organize, and assign tasks to make the space livable. Small improvements turn a scary situation into a home.",

    modes: {
      pairMatch: {
        prompt: "Match each micro-moment to the best “why it lands.”",
        leftCards: [
          { id: "L1", text: "They claim an abandoned boxcar as their shelter without asking permission." },
          { id: "L2", text: "Cleaning and arranging the space comes before big emotional conversations." },
          { id: "L3", text: "Each child contributes something practical to the setup." },
          { id: "L4", text: "Small comforts (sleeping spots, simple order) are treated like victories." },
          { id: "L5", text: "The setting shifts from ‘temporary hiding’ to ‘our place.’" },
          { id: "L6", text: "The narration lingers on doable steps rather than dramatic danger." }
        ],
        rightCards: [
          { id: "R1", text: "A bold choice gives the kids agency—this is their story now." },
          { id: "R2", text: "Practicality acts as emotional regulation: doing calms fear." },
          { id: "R3", text: "Shared competence builds belonging without needing speeches." },
          { id: "R4", text: "Tiny wins feel big because the stakes are basic survival." },
          { id: "R5", text: "A space becomes identity: ‘we’re not just passing through.’" },
          { id: "R6", text: "Concrete detail makes the ‘home-making’ satisfying to read." }
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
        prompt: "Sort what makes the scene work.",
        buckets: [
          { id: "engine", label: "Engine" },
          { id: "support", label: "Support" },
          { id: "spice", label: "Spice" }
        ],
        cards: [
          { id: "B1", text: "Turning a found object (boxcar) into a home." },
          { id: "B2", text: "Task-by-task building that feels achievable." },
          { id: "B3", text: "Competence as character: who does what well." },
          { id: "B4", text: "Cozy details that contrast with the risky situation." },
          { id: "B5", text: "A shared project that makes them feel like a team." },
          { id: "B6", text: "The setting itself becomes a symbol of safety." },
          { id: "B7", text: "Small victories framed as meaningful." },
          { id: "B8", text: "A calm, steady voice that keeps it readable." }
        ]
      },

      sliders: {
        prompt: "Describe the feel of the home-making.",
        items: [
          { id: "S1", text: "Mood" },
          { id: "S2", text: "Sense of safety" },
          { id: "S3", text: "Tone" },
          { id: "S4", text: "Focus" }
        ],
        sliders: [
          { id: "A1", leftLabel: "Tense", rightLabel: "Cozy", defaultValue: 50 },
          { id: "A2", leftLabel: "Fragile", rightLabel: "Secure", defaultValue: 50 },
          { id: "A3", leftLabel: "Matter-of-fact", rightLabel: "Celebratory", defaultValue: 50 },
          { id: "A4", leftLabel: "People", rightLabel: "Objects", defaultValue: 50 }
        ]
      },

      interpretiveTakes: {
        prompt: "Pick the readings that can coexist.",
        interaction: "selectMultiple",
        takes: [
          { id: "T1", text: "The home-making is the real ‘action’: competence replaces combat." },
          { id: "T2", text: "The scene makes independence feel warm rather than lonely." },
          { id: "T3", text: "The boxcar acts like a character—silent, useful, and slowly transformed." },
          { id: "T4", text: "Doing chores becomes a way to control fear without naming it." },
          { id: "T5", text: "The story invites the reader to imagine the space, which creates ownership." },
          { id: "T6", text: "The kids’ teamwork reads like an earned family culture forming in real time." }
        ],
        gentleNudge: "Choose one ‘object’ take and one ‘people’ take—support both with the same detail."
      }
    }
  },

  {
    id: "lit-boxcar-03-the-grandfather-reveal",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "Safety changes shape",
    tier: "Lantern",

    passageSelector: {
      attractors: ["Reframe", "TrustShift", "AdultWorldIntrudes", "ReliefWithRisk"],
      threshold: 2
    },

    scene:
      "An adult connection emerges that could change everything for the siblings. The possibility of help brings relief but also uncertainty about what they’ll lose. The children weigh independence against protection.",

    modes: {
      pairMatch: {
        prompt: "Match micro-moments to why they land.",
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
        prompt: "Sort the craft levers.",
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
          { id: "B6", text: "A lar

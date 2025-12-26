// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS
// Canonical format (LOCKED): work-level pack -> scenes[]
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: Paraphrase in your own words; avoid quoting modern text.

export const LIT_PACKS = [
  {
    packId: "lit-secret-garden",
    workTitle: "The Secret Garden",
    workType: "literature",
    author: "Frances Hodgson Burnett",
    year: 1911,
    enabled: true,

    scenes: [
      {
        id: "lit-secret-garden-01-key-and-dirt",
        tier: "Owl",
        enabled: true,

        // Big line in UI (do NOT start with "Scene —")
        headerLine: "The Secret Garden — The key and the first patch of dirt",
        displayTitle: "The Secret Garden — The key and the first patch of dirt",

        scene: {
          // 2–4 sentences: concrete actions + one emotional pressure
          summary:
            "Mary finds a hidden key and follows a wall until she discovers a locked door covered in vines. She uses the key and slips inside, where everything looks neglected—branches tangled, weeds everywhere, silence like a room nobody visits. Instead of leaving, she kneels down and starts clearing a small spot with her hands, like she’s claiming the place quietly.",
          sourceContext: "Early discovery of the locked garden; Mary enters for the first time.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["discovery", "choice", "quiet-action", "setting"],

        modes: {
          pairMatch: {
            prompt: "Match each detail to what it shows.",
            pairs: [
              {
                id: "PM1",
                left: "She follows the wall for a long time instead of giving up.",
                right: "Her curiosity is stronger than her boredom."
              },
              {
                id: "PM2",
                left: "The door is hidden under vines and looks forgotten.",
                right: "This place has been shut away on purpose."
              },
              {
                id: "PM3",
                left: "Inside, the garden is messy and silent, like it’s holding its breath.",
                right: "The setting feels secret and a little sad."
              },
              {
                id: "PM4",
                left: "She starts clearing one small patch of dirt with her hands.",
                right: "She chooses to care, even before she knows how."
              }
            ]
          },

          sliders: {
            // IMPORTANT: Make scope explicit and coherent
            scopeLine: "SCOPE: Mary’s experience in this moment.",
            prompt: "Set your read using these descriptive axes.",
            axes: [
              { id: "A1", left: "Nosy", right: "Purposeful", min: 0, max: 100, default: 55 },
              { id: "A2", left: "Creeped out", right: "Pulled in", min: 0, max: 100, default: 65 },
              { id: "A3", left: "Careless", right: "Careful", min: 0, max: 100, default: 60 },
              { id: "A4", left: "Lonely", right: "Connected", min: 0, max: 100, default: 35 }
            ]
          },

          rankBuckets: {
            prompt: "Drag each element into the best bucket.",
            // Note: bucket labels come from CraftAppreciation.js defaults (no duplication needed).
            elements: [
              { id: "E1", text: "A key that feels like a secret prize." },
              { id: "E2", text: "A door hidden by vines like it’s trying not to be found." },
              { id: "E3", text: "Mary kneeling to clear dirt with her hands." },
              { id: "E4", text: "The silent, tangled garden that looks abandoned." },
              { id: "E5", text: "The long walk along the wall, searching." },
              { id: "E6", text: "The feeling that she’s not supposed to be there." }
            ]
          },

          interpretiveTakes: {
            prompt: "Rank the top three decisions that make the scene memorable.",
            options: [
              {
                id: "S1",
                text: "Mary chooses to enter even though the place feels forbidden."
              },
              {
                id: "S2",
                text: "She starts with one tiny patch, instead of trying to fix everything."
              },
              {
                id: "S3",
                text: "The story lets the garden’s silence do the talking."
              },
              {
                id: "S4",
                text: "The key makes the discovery feel earned, like a treasure hunt."
              },
              {
                id: "S5",
                text: "The mess makes the garden feel real, not magical-perfect."
              }
            ]
          }
        }
      },

      {
        id: "lit-secret-garden-02-colin-stands",
        tier: "Lantern",
        enabled: true,

        headerLine: "The Secret Garden — When Colin decides to stand",
        displayTitle: "The Secret Garden — When Colin decides to stand",

        scene: {
          summary:
            "In the garden, Colin insists on trying something he’s been told not to do: stand and take steps. Mary and Dickon don’t argue him out of it—they arrange things carefully and watch him like spotters near a high ledge. Colin’s face shows fear and stubborn pride at the same time, and when he finally rises, the moment feels shaky but huge, like the air changed.",
          sourceContext: "Later in the story; Colin attempts to stand and walk in the garden.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["risk", "belief", "friendship", "turning-point"],

        modes: {
          pairMatch: {
            prompt: "Match each detail to what it shows.",
            pairs: [
              {
                id: "PM1",
                left: "Colin insists on standing even though he’s been warned against it.",
                right: "He’s testing the limits of the story he’s been told about himself."
              },
              {
                id: "PM2",
                left: "Mary and Dickon prepare quietly instead of making a big speech.",
                right: "Their support is practical, not dramatic."
              },
              {
                id: "PM3",
                left: "His expression mixes fear with pride.",
                right: "The risk matters because he cares about who he becomes."
              },
              {
                id: "PM4",
                left: "The moment feels shaky, like one wrong move could undo it.",
                right: "The tension comes from fragile progress."
              }
            ]
          },

          sliders: {
            scopeLine: "SCOPE: Colin’s experience in this moment.",
            prompt: "Set your read using these descriptive axes.",
            axes: [
              { id: "A1", left: "Terrified", right: "Brave", min: 0, max: 100, default: 55 },
              { id: "A2", left: "Performing", right: "Private", min: 0, max: 100, default: 45 },
              { id: "A3", left: "Dependent", right: "Self-starting", min: 0, max: 100, default: 70 },
              { id: "A4", left: "Fragile", right: "Steady", min: 0, max: 100, default: 35 }
            ]
          },

          rankBuckets: {
            prompt: "Drag each element into the best bucket.",
            elements: [
              { id: "E1", text: "Colin choosing to try, even with a real chance of failure." },
              { id: "E2", text: "Mary and Dickon acting like careful helpers, not cheerleaders." },
              { id: "E3", text: "The garden as a safe place away from adults who say 'no'." },
              { id: "E4", text: "His shaky body and the pause before the first step." },
              { id: "E5", text: "The proud look that appears the instant he’s upright." },
              { id: "E6", text: "The quietness—no crowd, just witnesses who matter." }
            ]
          },

          interpretiveTakes: {
            prompt: "Rank the top three decisions that make the scene memorable.",
            options: [
              { id: "S1", text: "Colin decides to try standing before he feels ready." },
              { id: "S2", text: "The scene stays small and quiet instead of turning into a big celebration." },
              { id: "S3", text: "Mary and Dickon help in a way that lets Colin own the moment." },
              { id: "S4", text: "The story lets you feel the risk—his progress isn’t guaranteed." },
              { id: "S5", text: "The garden feels like a training ground for courage." }
            ]
          }
        }
      }
    ]
  }
];

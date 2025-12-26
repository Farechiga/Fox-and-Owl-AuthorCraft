// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS
// ES module: exports LIT_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: For modern books, summarize in your own words; no direct quotes.

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
        id: "lit-secret-garden-01-the-key-and-the-door",
        tier: "Owl",

        headerLine: "The Secret Garden — The Key and the Door",
        displayTitle: "The Secret Garden — The Key and the Door",

        scene: {
          summary:
            "Mary follows the robin through the gardens, poking around the walls and plants like she’s on a private mission. When she finds a buried key and then spots a hidden door covered by vines, she freezes—half thrilled, half nervous—because it feels like she’s found a secret meant to stay secret.",
          sourceContext: "Early-middle: Mary exploring the grounds at Misselthwaite.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["secrecy", "curiosity", "discovery", "setting"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it matters.",
            pairs: [
              {
                id: "PM1",
                left: "Mary trails the robin instead of wandering randomly.",
                right: "The story gives her a “guide,” making discovery feel earned and magical."
              },
              {
                id: "PM2",
                left: "The key is found in the dirt, not handed over.",
                right: "The secret feels real because it’s hidden in a believable place."
              },
              {
                id: "PM3",
                left: "The door is covered by vines and blends into the wall.",
                right: "The setting itself is guarding the secret—nature becomes the lock."
              },
              {
                id: "PM4",
                left: "Mary hesitates before trying the door.",
                right: "Her fear-and-excitement mix shows the moment has stakes, even without danger."
              }
            ]
          },

          sliders: {
            // Make scope explicit and coherent for the player
            scopeLabel: "Mary’s experience in this moment",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Cautious", rightLabel: "Daring" },
              { leftLabel: "Curious", rightLabel: "Obsessed" },
              { leftLabel: "Small", rightLabel: "Monumental" },
              { leftLabel: "Private", rightLabel: "Public" }
            ],
            defaults: [35, 60, 70, 20]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The robin acting like a guide",
              "The buried key in the dirt",
              "The vine-covered door in the wall",
              "Mary’s pause before she tries it",
              "The quiet, empty garden paths"
            ]
            // Bucket labels come from CraftAppreciation.js defaults
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment memorable.",
            options: [
              "Using the robin to pull Mary (and us) forward without explaining everything",
              "Hiding the key in the dirt so the discovery feels physical and real",
              "Making the door blend in so the wall feels like it’s keeping a secret",
              "Letting Mary hesitate so the “yes/no” moment lands",
              "Keeping the garden quiet so every tiny detail matters"
            ]
          }
        }
      },

      {
        id: "lit-secret-garden-02-colin-stands",
        tier: "Lantern",

        headerLine: "The Secret Garden — Colin Tries to Stand",
        displayTitle: "The Secret Garden — Colin Tries to Stand",

        scene: {
          summary:
            "In the garden, Colin insists on trying to stand and take steps. Mary and Dickon set up the moment carefully—watching his breathing, positioning themselves near him without crowding him. Colin’s face shifts between panic and pride as he forces himself up, and everyone goes very still because one wrong wobble could end it.",
          sourceContext: "Later: the garden becomes a place where change happens.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["courage", "pressure", "physicality", "change"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it matters.",
            pairs: [
              {
                id: "PM1",
                left: "Mary and Dickon stay close, but don’t grab him immediately.",
                right: "Support is present without stealing his agency—he has to do it."
              },
              {
                id: "PM2",
                left: "Everyone gets quiet and watches his balance.",
                right: "Silence makes the risk feel bigger; the room becomes the drumbeat."
              },
              {
                id: "PM3",
                left: "Colin’s expression flips between fear and determination.",
                right: "The scene shows the fight inside him, not just the action outside."
              },
              {
                id: "PM4",
                left: "The garden setting contrasts with the “sickroom” mindset.",
                right: "The place itself signals a new identity: not fragile, not trapped."
              }
            ]
          },

          sliders: {
            scopeLabel: "Colin’s inner state during the attempt",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Terrified", rightLabel: "Brave" },
              { leftLabel: "Fragile", rightLabel: "Strong" },
              { leftLabel: "Wobbling", rightLabel: "Steady" },
              { leftLabel: "Doubtful", rightLabel: "Certain" }
            ],
            defaults: [45, 40, 30, 35]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "Mary and Dickon’s careful positioning",
              "Colin forcing himself upright",
              "The sudden quiet as everyone watches",
              "Colin’s fear/pride facial shifts",
              "The garden air and space (not the sickroom)"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment memorable.",
            options: [
              "Keeping help nearby but not grabbing him—so the attempt stays his",
              "Using silence to make the balance feel like the whole world is watching",
              "Letting Colin’s face show the fight before the body does",
              "Making the garden feel like a new ‘self’ is possible",
              "Staging the attempt step-by-step so tension builds instead of rushing"
            ]
          }
        }
      }
    ]
  }
];

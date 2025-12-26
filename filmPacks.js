// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// ES module: exports FILM_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: Describe scenes in your own words; do not quote dialogue.

export const SECRET_LIFE_PETS_PACKS = [
  {
    packId: "film-secret-life-pets",
    workTitle: "The Secret Life of Pets",
    workType: "film",
    year: 2016,
    studio: "Illumination",
    enabled: true,

    scenes: [
      {
        id: "film-pets-01-max-waiting",
        tier: "Owl",
        headerLine: "The Secret Life of Pets — Waiting by the Door",
        displayTitle: "The Secret Life of Pets — Waiting by the Door",

        scene: {
          summary:
            "After Katie leaves for work, Max drags a pillow over to the front door. He sits there perfectly still, staring at the handle. The clock on the wall ticks loudly. A fly buzzes past his ear, but he doesn't chase it. He only reacts when he hears a noise in the hallway, causing his tail to give one tiny, hopeful wag before settling back down.",
          sourceContext: "Opening: Establishing Max's world.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["loyalty", "timing", "patience"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              {
                id: "PM1",
                left: "Max drags a pillow to the door and just sits.",
                right: "It shows his whole day is built around one person."
              },
              {
                id: "PM2",
                left: "The clock ticks loudly in the empty room.",
                right: "The sound makes the house feel too quiet and lonely."
              },
              {
                id: "PM3",
                left: "He ignores a buzzing fly that passes his head.",
                right: "It shows how focused he is—nothing else matters but the door."
              },
              {
                id: "PM4",
                left: "One tiny tail-wag happens when he hears a noise.",
                right: "It shows he’s always 'on alert' even when he looks bored."
              }
            ]
          },

          sliders: {
            scopeLabel: "Max’s experience",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Bored", rightLabel: "Excited" },
              { leftLabel: "Active", rightLabel: "Still" },
              { leftLabel: "Sad", rightLabel: "Happy" },
              { leftLabel: "Brief", rightLabel: "Forever" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "Max sitting perfectly still on a pillow",
              "The loud ticking of the wall clock",
              "The tiny tail-wag at the hallway noise",
              "Max ignoring the buzzing fly",
              "The closed front door as the main focus"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a ticking clock to make time feel slow for the audience too",
              "Letting Max stay still to show how much he loves his owner",
              "Using a tiny tail-wag to show a big emotion without a loud noise",
              "Making the door the biggest thing in the room so we know it’s important",
              "Having Max ignore a fly to show he has a 'mission'"
            ]
          }
        }
      },
      {
        id: "film-pets-02-snowball-funeral",
        tier: "Lantern",
        headerLine: "The Secret Life of Pets — The Sewer Funeral",
        displayTitle: "The Secret Life of Pets — The Sewer Funeral",

        scene: {
          summary:
            "In the dark sewer, Snowball the bunny stands over a fallen viper. He starts a very loud, very dramatic speech about how the viper was a 'warrior.' He encourages the other animals to howl and cry. Snowball is tiny and fluffy, but he’s shouting like a movie general, and the other large, scary animals follow his lead, acting totally heartbroken.",
          sourceContext: "Middle: Snowball's leadership in the sewers.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["humor", "contrast", "leadership"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              {
                id: "PM1",
                left: "A tiny, cute bunny shouts like a war general.",
                right: "The joke comes from a small thing acting like a big thing."
              },
              {
                id: "PM2",
                left: "The giant sewer animals cry and howl on command.",
                right: "Their reaction makes the bunny look much more powerful."
              },
              {
                id: "PM3",
                left: "Snowball uses big words for a snake he barely knew.",
                right: "The over-acting makes the 'mission' feel silly instead of scary."
              },
              {
                id: "PM4",
                left: "The setting is a dark, messy sewer pipe.",
                right: "The gross place makes the formal 'funeral' look even weirder."
              }
            ]
          },

          sliders: {
            scopeLabel: "the scene overall",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Scary", rightLabel: "Silly" },
              { leftLabel: "Quiet", rightLabel: "Wild" },
              { leftLabel: "Serious", rightLabel: "Fake" },
              { leftLabel: "Small", rightLabel: "Huge" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "A tiny bunny acting like a general",
              "Big, scary animals crying like babies",
              "Snowball’s loud, dramatic shouting",
              "The dark, gross sewer pipes",
              "The 'fallen warrior' speech for a snake"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Putting a cute animal in a tough spot to create a funny contrast",
              "Using dramatic music and shouting for a tiny event",
              "Letting huge animals be scared of a small bunny to show his status",
              "Using the sewer setting to make the 'ceremony' feel out of place",
              "Making the bunny over-act so we know he loves the spotlight"
            ]
          }
        }
      }
    ]
  }
];

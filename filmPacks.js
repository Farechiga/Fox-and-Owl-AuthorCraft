// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// ES module: exports FILM_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: Describe scenes in your own words; do not quote dialogue.

export const FILM_PACKS = [
  {
    packId: "film-home-alone",
    workTitle: "Home Alone",
    workType: "film",
    year: 1990,
    studio: "20th Century Fox",
    enabled: true,

    scenes: [
      {
        id: "film-home-alone-01-house-becomes-a-plan",
        tier: "Owl",

        headerLine: "Home Alone — The House Becomes a Plan",
        displayTitle: "Home Alone — The House Becomes a Plan",

        scene: {
          summary:
            "Kevin realizes he’s truly alone and starts treating the house like a puzzle he can control. He checks doors and windows, moves with purpose from room to room, and tests little ideas like he’s running experiments. The mood shifts: fear is still there, but it turns into focus as he prepares for trouble.",
          sourceContext: "Middle: Kevin prepares for the burglars.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["setup", "resourcefulness", "tension", "space"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it matters.",
            pairs: [
              {
                id: "PM1",
                left: "Kevin checks the house like he’s doing an inspection.",
                right: "It turns the setting into a tool—this place will matter later."
              },
              {
                id: "PM2",
                left: "He tests ideas in small, controlled ways.",
                right: "Practice makes the later chaos feel earned, not random."
              },
              {
                id: "PM3",
                left: "He moves with new confidence instead of hiding.",
                right: "The scene shows a shift in identity: scared kid → planner."
              },
              {
                id: "PM4",
                left: "Normal rooms start to look like “spots” and “routes.”",
                right: "The film quietly teaches you a map so you can follow the action later."
              }
            ]
          },

          sliders: {
            scopeLabel: "Kevin’s mindset while preparing",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Scared", rightLabel: "Focused" },
              { leftLabel: "Improvising", rightLabel: "Planning" },
              { leftLabel: "Childish", rightLabel: "Competent" },
              { leftLabel: "Small", rightLabel: "In charge" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "Kevin inspecting doors and windows",
              "Testing ideas like mini-experiments",
              "The house layout becoming a “map”",
              "Kevin moving with purpose",
              "Fear turning into focus"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment memorable.",
            options: [
              "Turning the house into a map the audience learns",
              "Showing practice so later chaos feels earned",
              "Letting fear transform into focus onscreen",
              "Using ordinary rooms as future action ‘stations’",
              "Making Kevin’s confidence shift visible in how he moves"
            ]
          }
        }
      },

      {
        id: "film-home-alone-02-the-trap-chain-reaction",
        tier: "Lantern",

        headerLine: "Home Alone — The Trap Chain Reaction",
        displayTitle: "Home Alone — The Trap Chain Reaction",

        scene: {
          summary:
            "When the burglars finally enter, Kevin’s preparations snap into motion like a domino run. The burglars keep charging forward and keep getting punished for it: one mistake leads into the next, and the house seems to ‘answer back’ with new surprises. Kevin stays just ahead of them, using timing and distance instead of strength.",
          sourceContext: "Late: the burglars’ break-in and trap sequence.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["timing", "cause-effect", "comedy", "chase"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it matters.",
            pairs: [
              {
                id: "PM1",
                left: "The burglars rush in without stopping to read the space.",
                right: "Their impatience becomes the engine—speed makes them vulnerable."
              },
              {
                id: "PM2",
                left: "Traps trigger in a chain instead of one isolated gag.",
                right: "Cause-and-effect builds momentum; the scene feels like one big machine."
              },
              {
                id: "PM3",
                left: "Kevin uses distance and timing, not fighting.",
                right: "The underdog wins by brains; the logic stays kid-believable."
              },
              {
                id: "PM4",
                left: "The house keeps ‘surprising’ them from different angles.",
                right: "Variety prevents repetition—the comedy escalates instead of looping."
              }
            ]
          },

          sliders: {
            scopeLabel: "How the trap sequence plays as a scene",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Simple", rightLabel: "Chain-reaction" },
              { leftLabel: "Slow", rightLabel: "Whiplash-fast" },
              { leftLabel: "One gag", rightLabel: "Escalating run" },
              { leftLabel: "Random", rightLabel: "Cause-and-effect" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The burglars’ impatient forward-charging",
              "Traps triggering in sequence",
              "Kevin staying just out of reach",
              "Surprises from different parts of the house",
              "Timing (beats) that keep escalation climbing"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment memorable.",
            options: [
              "Building traps into a chain so the scene feels like one big run",
              "Making the burglars’ impatience cause their own problems",
              "Letting Kevin win with timing and distance instead of strength",
              "Keeping variety so the comedy escalates instead of repeating",
              "Teaching the house map earlier so the chaos stays readable"
            ]
          }
        }
      }
    ]
  }
];

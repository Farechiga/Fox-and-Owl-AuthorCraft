// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS
// ES module: exports LIT_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: For modern books, summarize in your own words; no direct quotes.

export const LIT_PACKS = [
  {
    packId: "lit-famous-five",
    workTitle: "The Famous Five",
    workType: "literature",
    author: "Enid Blyton",
    year: 1942,
    enabled: true,

    scenes: [
      {
        id: "lit-famous-five-01-the-wreck-discovery",
        tier: "Owl",
        headerLine: "The Famous Five — The Wreck in the Bay",
        displayTitle: "The Famous Five — The Wreck in the Bay",

        scene: {
          summary:
            "After a massive storm, the cousins look out at the bay and see something new. A giant, dark shape has been dragged up from the bottom of the sea and stuck onto the rocks. George realizes it’s the old shipwreck everyone thought was gone forever. They scramble down the cliffs, slipping on wet rocks, desperate to reach it before the tide comes back in.",
          sourceContext: "Early: The discovery of the core mystery.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["discovery", "urgency", "setting"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              {
                id: "PM1",
                left: "The storm changes the look of the bay overnight.",
                right: "It gives the kids a fresh reason to go exploring right away."
              },
              {
                id: "PM2",
                left: "The kids slip on wet rocks and seaweed while climbing.",
                right: "The mess makes the wreck feel like it belongs in the wild sea."
              },
              {
                id: "PM3",
                left: "George points and shouts because she recognized the ship first.",
                right: "It shows she knows this island better than any of the visitors."
              },
              {
                id: "PM4",
                left: "The tide is mentioned as 'creeping back in' while they work.",
                right: "It creates a ticking clock so the kids have to move fast."
              }
            ]
          },

          sliders: {
            scopeLabel: "the scene overall",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Quiet", rightLabel: "Loud" },
              { leftLabel: "Safe", rightLabel: "Risky" },
              { leftLabel: "Slow", rightLabel: "Fast" },
              { leftLabel: "Ordinary", rightLabel: "Magical" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The giant shipwreck stuck on the rocks",
              "George’s local knowledge of the bay",
              "The rising tide coming back in",
              "The slippery, wet climb down the cliff",
              "The morning sun after the big storm"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a storm to bring a hidden secret up to the surface",
              "Making the kids struggle over wet rocks so the goal feels hard to reach",
              "Letting George be the leader because it’s her home turf",
              "Adding the tide as a threat to make the scene feel urgent",
              "Describing the ship as a 'dark shape' at first to build the mystery"
            ]
          }
        }
      },
      {
        id: "lit-famous-five-02-george-boat-rules",
        tier: "Lantern",
        headerLine: "The Famous Five — George’s Island Rules",
        displayTitle: "The Famous Five — George’s Island Rules",

        scene: {
          summary:
            "George stands by her boat on the beach, looking at her cousins with a serious face. She tells them that Kirrin Island is her island, and they can only go there if they follow her lead. She doesn't smile or offer to help them with their bags; she just waits to see if they’ll listen. Timmy the dog stands right next to her, looking just as tough.",
          sourceContext: "Middle: George establishing her authority.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },

        tags: ["status", "character", "confrontation"],

        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              {
                id: "PM1",
                left: "George stands with her arms crossed by her boat.",
                right: "She acts like a guard to show the island has a boss."
              },
              {
                id: "PM2",
                left: "She calls it 'my' island instead of 'the' island.",
                right: "That one word tells the cousins they are just guests."
              },
              {
                id: "PM3",
                left: "Timmy the dog stands perfectly still by her side.",
                right: "His posture makes George look more serious and protected."
              },
              {
                id: "PM4",
                left: "She doesn't smile or help them with their things.",
                right: "Her coldness makes the cousins realize they have to earn her trust."
              }
            ]
          },

          sliders: {
            scopeLabel: "George’s stance here",
            prompt: "Set your read using descriptive axes.",
            axes: [
              { leftLabel: "Friendly", rightLabel: "Strict" },
              { leftLabel: "Weak", rightLabel: "Strong" },
              { leftLabel: "Shy", rightLabel: "Bold" },
              { leftLabel: "Playful", rightLabel: "Serious" }
            ],
            defaults: [50, 50, 50, 50]
          },

          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "George calling the island 'mine'",
              "Timmy standing guard by her legs",
              "George’s crossed-arms posture",
              "The cousins standing on the sand listening",
              "The boat acting as the bridge to the secret"
            ]
          },

          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using the word 'my' to show George is in charge",
              "Using a dog to make a kid look more powerful and scary",
              "Making George act cold so the cousins have to try harder to fit in",
              "Staging the scene by her boat because that's her source of power",
              "Letting her stay quiet while they react so she keeps the control"
            ]
          }
        }
      }
    ]
  }
];

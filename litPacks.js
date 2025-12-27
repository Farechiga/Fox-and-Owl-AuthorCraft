// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS
// ES module: exports LIT_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: For modern books, summarize in your own words; no direct quotes.

export const LIT_PACKS = [
{
    packId: "lit-secretgarden",
    workTitle: "The Secret Garden",
    workType: "literature",
    author: "Frances Hodgson Burnett",
    year: 1911,
    enabled: true,

    scenes: [
      {
        id: "lit-secretgarden-the-hidden-door",
        tier: "Owl",
        headerLine: "The Secret Garden — The Hidden Door",
        displayTitle: "The Secret Garden — The Hidden Door",
        scene: {
          summary: "A strong gust of wind blows a thick curtain of ivy away from the old stone wall. Mary sees a round, iron handle that has been hidden for years. She reaches her hand through the leaves, her fingers touching the cold metal, and realizes this is the entrance to the garden everyone said was lost.",
          sourceContext: "Early: The moment Mary finally finds the entrance.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "The wind moves the ivy at the perfect time.", right: "It feels like the garden is finally 'choosing' to be found[cite: 59, 128]." },
              { id: "PM2", left: "Mary’s fingers touch the cold, rusty iron.", right: "The cold metal makes the secret feel old and heavy[cite: 102, 107]." },
              { id: "PM3", left: "The ivy acts like a heavy, living curtain.", right: "It shows that nature is actively guarding the secret[cite: 59, 114]." },
              { id: "PM4", left: "Mary stands perfectly still before reaching.", right: "Her hesitation shows she knows this is a huge moment[cite: 134, 136]." }
            ]
          },
          sliders: {
            scopeLabel: "the scene's mood",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Natural", rightLabel: "Mysterious" },
              { leftLabel: "Still", rightLabel: "Windy" },
              { leftLabel: "Open", rightLabel: "Hidden" }
            ],
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The heavy curtain of ivy [cite: 105]",
              "The rusty iron door handle [cite: 102]",
              "The sudden gust of wind [cite: 59]",
              "Mary's reaching hand [cite: 133]",
              "The silence of the stone wall [cite: 105]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using the wind as a 'character' that reveals the secret[cite: 59, 82].",
              "Focusing on the cold feel of the iron to make the find feel real[cite: 107, 166].",
              "Keeping the door hidden behind 'living' ivy so it feels like a maze[cite: 105, 174].",
              "Making Mary find it alone so the secret belongs only to her[cite: 111, 169]."
            ]
          }
        }
      },
      {
        id: "lit-secretgarden-colin-stands",
        tier: "Lantern",
        headerLine: "The Secret Garden — Colin’s First Step",
        displayTitle: "The Secret Garden — Colin’s First Step",
        scene: {
          summary: "In the middle of the garden, Colin tells Dickon and Mary to watch him. He slowly pushes himself out of his wheelchair, his legs shaking like thin branches. He stands upright for the first time, his face turning red with effort, and his eyes wide with shock as he realizes the ground is actually holding him up.",
          sourceContext: "Climax: Colin overcomes his fear of being 'sick'.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "Colin’s legs shake 'like thin branches'.", right: "The comparison helps us see how weak and new his legs are[cite: 107]." },
              { id: "PM2", left: "He looks at the ground with pure shock.", right: "He's learning that the world is more solid than he thought[cite: 136]." },
              { id: "PM3", left: "He pushes himself up without anyone's help.", right: "Doing it himself makes the victory feel much more earned[cite: 91, 133]." },
              { id: "PM4", left: "Dickon and Mary stay perfectly quiet.", right: "Their silence makes the moment feel very serious and grand[cite: 134]." }
            ]
          },
          sliders: {
            scopeLabel: "Colin's internal struggle",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Strained", rightLabel: "Easy" },
              { leftLabel: "Frightened", rightLabel: "Proud" },
              { leftLabel: "Fragile", rightLabel: "Solid" }
            ],
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "Colin's shaking legs [cite: 133]",
              "The empty wheelchair left behind [cite: 104]",
              "Colin's red, determined face [cite: 136]",
              "The solid ground of the garden [cite: 105]",
              "Mary and Dickon's silent watching [cite: 134]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Describing the physical shake of his legs to show the high stakes[cite: 111, 165].",
              "Contrasting the 'broken' boy with the 'growing' garden[cite: 56, 82].",
              "Focusing on Colin's eyes to show his world is changing[cite: 136, 170].",
              "Using the wheelchair as a prop that he finally moves away from[cite: 104, 174]."
            ]
          }
        }
      },
      {
        id: "lit-secretgarden-the-robin-guide",
        tier: "Fox",
        headerLine: "The Secret Garden — The Robin’s Tour",
        displayTitle: "The Secret Garden — The Robin’s Tour",
        scene: {
          summary: "A small robin with a bright red chest hops along the top of the garden wall, chirping loudly at Mary. He tilts his head to one side as if he is listening to her, then flies a few feet ahead and waits for her to catch up. He seems to be teasing her into following him deeper into the overgrown trees.",
          sourceContext: "Early: Mary starting to feel less lonely.",
          fairUseNote: "Paraphrase; avoid quoting the text."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "The robin tilts his head to 'listen'.", right: "It makes the bird look like a smart, interested friend[cite: 59, 136]." },
              { id: "PM2", left: "He flies a bit, then stops and waits.", right: "This movement creates a 'follow the leader' game[cite: 133, 134]." },
              { id: "PM3", left: "The bird's chest is a 'bright red'.", right: "The splash of color stands out against the gray garden[cite: 107]." },
              { id: "PM4", left: "He chirps 'loudly' at Mary.", right: "The noise makes the garden feel less empty and scary[cite: 107]." }
            ]
          },
          sliders: {
            scopeLabel: "the interaction",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Playful", rightLabel: "Serious" },
              { leftLabel: "Wild", rightLabel: "Friendly" },
              { leftLabel: "Leading", rightLabel: "Following" }
            ],
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The robin's bright red chest [cite: 107]",
              "The 'head tilt' of the bird [cite: 136]",
              "The bird flying and stopping [cite: 133]",
              "The overgrown, silent trees [cite: 105]",
              "Mary walking after the bird [cite: 133]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Treating the bird like a human guide to make Mary feel safe[cite: 59, 114].",
              "Using bright colors (red) to point the audience toward the 'path'[cite: 107, 166].",
              "Making the bird 'tease' Mary so the scene feels like a game[cite: 116, 174].",
              "Using sound (chirping) to break the 'dead' silence of the house[cite: 107, 134]."
            ]
          }
        }
      }
    ]
  }
];

// litPacks.js
// AuthorCraft Appreciation — LITERATURE PACKS
// ES module: exports LIT_PACKS
// Drafting standard: concrete, kid-clear, no seminar jargon.

export const LIT_PACKS = [
  {
    id: "lit-boxcar-01-four-kids-one-decision",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "Four kids, one decision",
    tier: "Lantern",
    scene:
      "After being separated from adult protection, the four siblings decide to stick together. Instead of waiting to be rescued, they make a plan with limited information and rely on each other’s competence.",
    modes: {
      pairMatch: {
        prompt: "Match the moment to why it matters.",
        pairs: [
          {
            id: "PM1",
            left: "Henry quietly takes the lead and speaks like a big brother, not a kid.",
            right:
              "It tells you the group is choosing leadership, not panic—so the decision feels earned.",
            isCorrect: true,
          },
          {
            id: "PM2",
            left: "Jessie checks on Violet and Benny before talking about what to do next.",
            right:
              "Care comes first, so their plan feels like family teamwork—not a random adventure.",
            isCorrect: true,
          },
          {
            id: "PM3",
            left: "They share what little they know and agree on one direction together.",
            right:
              "The scene turns four separate fears into one shared choice—now they move as a unit.",
            isCorrect: true,
          },
          {
            id: "PM4",
            left: "They keep walking even though they don’t have a perfect map or adult help.",
            right:
              "Action replaces wishing; you feel their courage because they move anyway.",
            isCorrect: true,
          },
        ],
      },

      sliders: {
        scope: "Scope: the siblings' choice to stick together (not the whole book).",
        prompt: "Set your read on this choice using the axes.",
        axes: [
          { id: "a1", left: "Cautious", right: "Bold", defaultValue: 55 },
          { id: "a2", left: "Scared", right: "Steady", defaultValue: 45 },
          { id: "a3", left: "Following", right: "Leading", defaultValue: 60 },
          { id: "a4", left: "Separate", right: "United", defaultValue: 70 },
        ],
      },

      rankBuckets: {
        prompt: "Drag each craft element into the best bucket.",
        // NOTE: bucket labels come from CraftAppreciation.js defaults.
        cards: [
          { id: "B1", text: "A clear leader emerges without anyone announcing it." },
          { id: "B2", text: "Small check-ins between siblings before big decisions." },
          { id: "B3", text: "The plan is simple: keep moving, stay together." },
          { id: "B4", text: "A tiny detail that shows they’re still kids (a worry, a habit, a comfort)." },
          { id: "B5", text: "Limited information creates tension without a villain." },
          { id: "B6", text: "Their fear shows, but it doesn’t stop them." },
        ],
      },

      interpretiveTakes: {
        prompt: "Rank the top 3 ideas that best explain why this moment sticks.",
        pick: 3,
        takes: [
          "The choice feels brave because it’s made with incomplete information.",
          "Family roles snap into place fast—leader, helper, little one—so the group feels real.",
          "The tension comes from the unknown, not from a monster or a chase.",
          "The scene is memorable because it’s quiet courage, not a loud victory.",
        ],
      },
    },
  },

  {
    id: "lit-boxcar-02-making-a-home",
    source: "The Boxcar Children",
    medium: "literature",
    momentType: "AuthorCraft",
    sceneTitle: "Turning a boxcar into home",
    tier: "Lantern",
    scene:
      "The children find an old boxcar in the woods and decide to make it their shelter. They clean, arrange, and solve problems step-by-step—turning a scary situation into something workable.",
    modes: {
      pairMatch: {
        prompt: "Match the moment to why it matters.",
        pairs: [
          {
            id: "PM1",
            left: "They sweep out the boxcar and claim a corner for each child.",
            right:
              "Order calms fear—suddenly it’s a home, not just a hiding place.",
            isCorrect: true,
          },
          {
            id: "PM2",
            left: "They solve one small problem at a time (water, food, bedding).",
            right:
              "The scene feels believable because it’s practical—progress happens in steps.",
            isCorrect: true,
          },
          {
            id: "PM3",
            left: "They celebrate a tiny win, like finding something useful or making a meal.",
            right:
              "Small victories feel big when you’re vulnerable—so you feel their relief.",
            isCorrect: true,
          },
          {
            id: "PM4",
            left: "They keep watch for adults while still acting like kids in little ways.",
            right:
              "That mix—responsibility plus kid-ness—makes the scene warm and tense at once.",
            isCorrect: true,
          },
        ],
      },

      sliders: {
        scope: "Scope: the boxcar transformation (the mood of this one scene).",
        prompt: "Set your read on the mood as they build their shelter.",
        axes: [
          { id: "a1", left: "Unsafe", right: "Safe", defaultValue: 60 },
          { id: "a2", left: "Desperate", right: "Resourceful", defaultValue: 70 },
          { id: "a3", left: "Lonely", right: "Together", defaultValue: 75 },
          { id: "a4", left: "Temporary", right: "Home-like", defaultValue: 65 },
        ],
      },

      rankBuckets: {
        prompt: "Drag each craft element into the best bucket.",
        cards: [
          { id: "B1", text: "A physical space change (dirty → livable) you can picture." },
          { id: "B2", text: "Problem-solving shown through actions, not speeches." },
          { id: "B3", text: "A small comfort detail that makes them feel like kids." },
          { id: "B4", text: "A realistic tradeoff: building a home also means staying hidden." },
          { id: "B5", text: "Teamwork that feels natural—each child does something specific." },
          { id: "B6", text: "Quiet tension: they might be found, but life still continues." },
        ],
      },

      interpretiveTakes: {
        prompt: "Rank the top 3 ideas that best explain why this moment sticks.",
        pick: 3,
        takes: [
          "You can ‘see’ the home forming, so you feel relief building in your body.",
          "The scene is satisfying because effort turns into visible change.",
          "The kids feel capable without feeling unrealistic—each step is small.",
          "The sweetness lands because danger is nearby, even if it’s off-screen.",
        ],
      },
    },
  },
];

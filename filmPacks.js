// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// ES module: exports FILM_PACKS
// Drafting standard: concrete, kid-clear, no seminar jargon.

export const FILM_PACKS = [
  {
    id: "film-zootopia-01-dmv-gauntlet",
    source: "Zootopia",
    medium: "film",
    momentType: "AuthorCraft",
    sceneTitle: "The DMV Gauntlet",
    tier: "Lantern",
    scene:
      "Judy and Nick enter the DMV to request vehicle owner information. The clerk at the desk is a sloth who moves and speaks painfully slowly while a long line waits behind them. Judy tries to stay polite and efficient as minutes stretch into an ordeal.",
    modes: {
      pairMatch: {
        prompt: "Match the moment to why it lands.",
        pairs: [
          {
            id: "PM1",
            left: "The DMV looks official and organized—numbers, counters, rules—so you expect speed.",
            right:
              "It sets you up for the joke: everything looks efficient… then reality hits.",
            isCorrect: true,
          },
          {
            id: "PM2",
            left: "The sloth clerk takes forever to do a tiny action—turning, blinking, speaking.",
            right:
              "Timing becomes the punchline: every beat stretches past what feels human.",
            isCorrect: true,
          },
          {
            id: "PM3",
            left: "Judy keeps a customer-service smile while her patience drains.",
            right:
              "You can see her self-control working in real time—so the pressure feels real.",
            isCorrect: true,
          },
          {
            id: "PM4",
            left: "The waiting line behind them becomes a silent audience to the delay.",
            right:
              "Public waiting adds heat—everyone’s stuck together in the same slow-motion moment.",
            isCorrect: true,
          },
        ],
      },

      sliders: {
        scope: "Scope: Judy's experience in this scene (not Nick's).",
        prompt: "Set your read on Judy’s reaction using the axes.",
        axes: [
          { id: "a1", left: "Calm", right: "Fuming", defaultValue: 60 },
          { id: "a2", left: "Polite", right: "Snapping", defaultValue: 45 },
          { id: "a3", left: "In control", right: "Unraveling", defaultValue: 55 },
          { id: "a4", left: "Hopeful", right: "Defeated", defaultValue: 50 },
        ],
      },

      rankBuckets: {
        prompt: "Drag each craft element into the best bucket.",
        cards: [
          { id: "B1", text: "Expectation → reality switch (official place, totally slow result)." },
          { id: "B2", text: "Comedy from pacing: long pauses, stretched beats, slow delivery." },
          { id: "B3", text: "Judy’s face working hard to stay professional." },
          { id: "B4", text: "The line behind them creates social pressure." },
          { id: "B5", text: "Nick’s calm makes Judy’s urgency look extra intense." },
          { id: "B6", text: "Tiny actions treated like big events (a stamp feels like a marathon)." },
        ],
      },

      interpretiveTakes: {
        prompt: "Rank the top 3 ideas that best explain why this moment sticks.",
        pick: 3,
        takes: [
          "The scene makes waiting feel physical—you almost feel time stretch.",
          "Judy’s politeness is the comedy engine because it’s forced under pressure.",
          "Nick works like a mirror: his calm makes Judy’s urgency pop.",
          "The line behind them turns the moment into group embarrassment and group suffering.",
        ],
      },
    },
  },

  {
    id: "film-zootopia-02-mr-big-ice-",
    source: "Zootopia",
    medium: "film",
    momentType: "AuthorCraft",
    sceneTitle: "Mr. Big’s tiny power",
    tier: "Lantern",
    scene:
      "Judy and Nick are taken to Mr. Big, a tiny shrew mob boss. The room is dramatic and intimidating—guards, slow music, serious faces—yet the ‘boss’ is physically small. The scene balances threat and humor at the same time.",
    modes: {
      pairMatch: {
        prompt: "Match the moment to why it lands.",
        pairs: [
          {
            id: "PM1",
            left: "The room is staged like a scary crime movie—serious guards and ceremony.",
            right:
              "The seriousness makes the contrast funnier when you realize who’s in charge.",
            isCorrect: true,
          },
          {
            id: "PM2",
            left: "Mr. Big is tiny, but everyone treats him like the most powerful person present.",
            right:
              "Power feels real because people act like it’s real—size doesn’t matter here.",
            isCorrect: true,
          },
          {
            id: "PM3",
            left: "Judy’s confidence wobbles when she realizes she might have made a big mistake.",
            right:
              "Her shift from brave to nervous raises the stakes without needing a chase.",
            isCorrect: true,
          },
          {
            id: "PM4",
            left: "Nick reads the room quickly and adjusts—jokes less, listens more.",
            right:
              "You see street-smarts: he survives by switching gears fast.",
            isCorrect: true,
          },
        ],
      },

      sliders: {
        scope: "Scope: the room's tone (threat + humor together).",
        prompt: "Set your read on the tone using the axes.",
        axes: [
          { id: "a1", left: "Silly", right: "Scary", defaultValue: 55 },
          { id: "a2", left: "Loose", right: "Formal", defaultValue: 70 },
          { id: "a3", left: "Playful", right: "Dangerous", defaultValue: 60 },
          { id: "a4", left: "Small-stakes", right: "High-stakes", defaultValue: 65 },
        ],
      },

      rankBuckets: {
        prompt: "Drag each craft element into the best bucket.",
        cards: [
          { id: "B1", text: "Big serious setup for a surprising ‘boss’ reveal." },
          { id: "B2", text: "Everyone’s behavior proves the power structure." },
          { id: "B3", text: "Judy’s confidence slips—stakes rise through emotion." },
          { id: "B4", text: "Nick’s quick adjustment shows survival instinct." },
          { id: "B5", text: "Tiny details (music, pacing, looks) keep the scene dramatic." },
          { id: "B6", text: "Humor and threat co-exist without canceling each other." },
        ],
      },

      interpretiveTakes: {
        prompt: "Rank the top 3 ideas that best explain why this moment sticks.",
        pick: 3,
        takes: [
          "The contrast (serious room, tiny boss) makes the humor sharp and instant.",
          "The scene shows that authority is social—people ‘agree’ someone is powerful.",
          "Judy’s emotion shift is what makes the moment feel risky, not just funny.",
          "Nick’s read-the-room skill adds realism: he knows when to stop performing.",
        ],
      },
    },
  },
];

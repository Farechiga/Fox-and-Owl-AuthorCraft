// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// ES module: exports FILM_PACKS

export const FILM_PACKS = [
  {
    packId: "film-homealone",
    workTitle: "Home Alone",
    workType: "film",
    year: 1990,
    studio: "20th Century Fox",
    enabled: true,
    scenes: [
      {
        id: "film-homealone-the-iron-drop",
        tier: "Lantern",
        headerLine: "Home Alone — The Basement Iron",
        displayTitle: "Home Alone — The Basement Iron",
        scene: {
          summary: "Marv reaches into the dark basement and pulls what he thinks is a light-switch string. Instead of a light turning on, the string pulls a heavy steam iron down a laundry chute. The iron falls perfectly flat onto Marv’s face, leaving a red, glowing mark while he stumbles back in the dark.",
          sourceContext: "Middle: The burglars encounter the first wave of traps.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "Marv pulls a string expecting a light to turn on.", right: "The surprise is bigger because he thought he was in control." },
              { id: "PM2", left: "The iron leaves a perfectly rectangular red mark.", right: "The cartoonish injury makes the scene feel funny instead of scary." },
              { id: "PM3", left: "The heavy iron falls through a narrow laundry chute.", right: "It shows Kevin planned the 'route' of the trap ahead of time." },
              { id: "PM4", left: "Marv is silhouetted in a dark doorway.", right: "The shadows hide the trap so the audience is surprised too." }
            ]
          },
          sliders: {
            scopeLabel: "the mechanical irony",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Careful", rightLabel: "Clumsy" },
              { leftLabel: "Quiet", rightLabel: "Loud" },
              { leftLabel: "Fair Fight", rightLabel: "One-Sided" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The fake light-switch string",
              "The red iron mark on Marv's face",
              "The heavy thud of the iron falling",
              "The dark basement shadows",
              "Marv's confused expression"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a laundry chute to turn a household object into a weapon.",
              "Letting Marv pull the string himself so he triggers his own trap.",
              "Showing the red mark on his face to prove the trap really worked.",
              "Using the dark room to build tension before the iron drops."
            ]
          }
        }
      }
      // Note: Other Home Alone scenes (Tarantula, Ornaments) remain here in your live file.
    ]
  },
  {
    packId: "film-grinch2018",
    workTitle: "The Grinch",
    workType: "film",
    year: 2018,
    studio: "Illumination",
    enabled: true,
    scenes: [
      {
        id: "film-grinch-coffee-contraption",
        tier: "Lantern",
        headerLine: "The Grinch — The Morning Routine",
        displayTitle: "The Grinch — The Morning Routine",
        scene: {
          summary: "The Grinch wakes up in his high-tech mountain lair. Instead of getting out of bed, he activates a massive, complex Rube Goldberg machine. Mechanical arms grind beans, pour boiling water, and finally deliver a single cup of coffee to his hand via a miniature elevator.",
          sourceContext: "Opening: Establishing the Grinch's isolation and ingenuity.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the machine's part to its narrative purpose.",
            pairs: [
              { id: "PM1", left: "A massive machine for one cup of coffee.", right: "It highlights how much effort he spends avoiding the world." },
              { id: "PM2", left: "The machine operates with cold, clockwork precision.", right: "It reflects the Grinch's mechanical and guarded heart." },
              { id: "PM3", left: "Max the dog assists with the final delivery.", right: "It shows that Max is his only link to any kind of warmth." },
              { id: "PM4", left: "The Grinch remains under the covers until the end.", right: "It establishes his desire for total comfort within solitude." }
            ]
          },
          sliders: {
            scopeLabel: "the Grinch's lifestyle",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Simple", rightLabel: "Complex" },
              { leftLabel: "Connected", rightLabel: "Isolated" },
              { leftLabel: "Warm", rightLabel: "Mechanical" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The whirring mechanical gears",
              "The tiny elevator platform",
              "Max's wagging tail",
              "The Grinch's grumpy morning face",
              "The steam rising from the mug"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Showing high-tech gadgets in a cave to modernize the character.",
              "Using a Rube Goldberg device to show he is a brilliant but bored genius.",
              "Keeping the cave dark to contrast with the bright coffee steam.",
              "Making the machine loud to emphasize the silence of his life."
            ]
          }
        }
      },
      {
        id: "film-grinch-grocery-clash",
        tier: "Owl",
        headerLine: "The Grinch — The Who-ville Grocery Run",
        displayTitle: "The Grinch — The Who-ville Grocery Run",
        scene: {
          summary: "The Grinch enters a Who-ville grocery store. He is immediately accosted by the overwhelming festive spirit of the townspeople. To get through the aisles, he uses a specialized 'anti-holiday' cloak to hide and a mechanical grabber to snatch items from shelves while avoiding eye contact with the jolly shoppers.",
          sourceContext: "Inciting Incident: The Grinch's forced interaction with the Whos.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the interaction to its character impact.",
            pairs: [
              { id: "PM1", left: "The Grinch uses a mechanical arm to shop.", right: "He wants to interact with the world without touching it." },
              { id: "PM2", left: "Bricklebaum tries to give him a holiday hug.", right: "The contrast in size and color highlights their clashing spirits." },
              { id: "PM3", left: "The store is filled with bright, round shapes.", right: "The visual style makes the Grinch's sharp angles stand out." },
              { id: "PM4", left: "He knocks a jar of pickles into a shopper's cart.", right: "Even when trying to hide, he can't help being a nuisance." }
            ]
          },
          sliders: {
            scopeLabel: "the social friction",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Festive", rightLabel: "Grumpy" },
              { leftLabel: "Crowded", rightLabel: "Lonely" },
              { leftLabel: "Overt", rightLabel: "Stealthy" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The Grinch's camouflaged cloak",
              "The glowing Christmas wreaths in every aisle",
              "Bricklebaum's booming laughter",
              "The mechanical claw hand",
              "The Grinch's flattened ears"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Visualizing social anxiety as a physical 'stealth mission'.",
              "Surrounding the green protagonist with red and white decorations.",
              "Giving the Grinch gadgets that make him feel like a grumpy spy.",
              "Using the contrast between his scowl and the shoppers' smiles."
            ]
          }
        }
      },
      {
        id: "film-grinch-the-heist-prep",
        tier: "Lantern",
        headerLine: "The Grinch — The Master Plan",
        displayTitle: "The Grinch — The Master Plan",
        scene: {
          summary: "Inside his lair, the Grinch reveals his ultimate invention: a giant, rocket-powered sled. He walks through a holographic blueprint of Who-ville, meticulously timing how long it will take to slide down every chimney and vacuum up every gift using a high-powered suction device.",
          sourceContext: "Rising Action: The planning of the great heist.",
          fairUseNote: "Describe; do not quote dialogue."
"
        },
        modes: {
          pairMatch: {
            prompt: "Match the gadget to the logistical problem.",
            pairs: [
              { id: "PM1", left: "The high-powered gift vacuum.", right: "Efficiency is needed to rob a whole town in one night." },
              { id: "PM2", left: "The holographic map of Who-ville.", right: "It frames the theft as a military-style operation." },
              { id: "PM3", left: "The rocket boosters on the sled.", right: "Speed is the only way to outrun the sunrise." },
              { id: "PM4", left: "The 'silent-step' boots.", right: "Ensures the Grinch can move without waking the sleeping Whos." }
            ]
          },
          sliders: {
            scopeLabel: "the tactical tension",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Chaotic", rightLabel: "Precise" },
              { leftLabel: "Amateur", rightLabel: "Professional" },
              { leftLabel: "Playful", rightLabel: "Malicious" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The glowing blue holograms",
              "The sound of a ticking stopwatch",
              "The Grinch's long, nimble fingers",
              "The oversized empty toy sack",
              "The jet engines glowing orange"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using sci-fi technology to execute a classic fairy tale plot.",
              "Showing his obsession with detail to make him a credible threat.",
              "Using the blueprints to give the audience a 'map' of the coming action.",
              "Framing the theft as an engineering challenge rather than just a crime."
            ]
          }
        }
      },
      {
        id: "film-grinch-cindy-lou-trap",
        tier: "Owl",
        headerLine: "The Grinch — The Sticky Floor Trap",
        displayTitle: "The Grinch — The Sticky Floor Trap",
        scene: {
          summary: "The Grinch, disguised as Santa, slides down Cindy-Lou's chimney. He expects an easy theft, but his boots immediately stick to the floor. Cindy-Lou has coated the entire living room in honey and sugar. He tries to pull his foot away, but only succeeds in making a loud, wet 'shloop' sound that alerts the household.",
          sourceContext: "Middle: The Grinch meets his match in a small child.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the element to the reversal of power.",
            pairs: [
              { id: "PM1", left: "The Grinch wears a fake, regal Santa suit.", right: "The sticky floor makes his costume look ridiculous." },
              { id: "PM2", left: "Cindy-Lou uses sweets as a weapon.", right: "It shows a child's innocence can be clever and effective." },
              { id: "PM3", left: "The loud 'shlooping' sound of the honey.", right: "The comedy comes from the Grinch losing his stealth." },
              { id: "PM4", left: "The Grinch is physically stuck in place.", right: "It forces him to actually talk to a Who for the first time." }
            ]
          },
          sliders: {
            scopeLabel: "the comedic trap",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Graceful", rightLabel: "Awkward" },
              { leftLabel: "In Control", rightLabel: "Trapped" },
              { leftLabel: "Scary", rightLabel: "Sweet" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The golden honey on the floor",
              "Cindy-Lou's wide, innocent eyes",
              "The Grinch's red velvet sleeve",
              "The sound of the bell on his hat",
              "The plate of half-eaten cookies"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Having the 'villain' get caught by the most innocent character.",
              "Using texture (stickiness) to create a physical obstacle for the hero.",
              "Contrasting the Grinch's grumbling with Cindy-Lou's polite request.",
              "Showing that the Grinch's technology can't beat a simple jar of honey."
            ]
          }
        }
      },
      {
        id: "film-grinch-the-summit-save",
        tier: "Lantern",
        headerLine: "The Grinch — The Teetering Sled",
        displayTitle: "The Grinch — The Teetering Sled",
        scene: {
          summary: "On the very edge of Mt. Crumpit, the Grinch’s massive sled is about to tip over the cliff. All the stolen toys of Who-ville are inside. Just as it starts to fall, the Grinch hears the Whos singing below. His heart grows three sizes, and he suddenly finds the strength to pull the entire sled back from the abyss.",
          sourceContext: "Climax: The Grinch's change of heart.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the physical action to the emotional shift.",
            pairs: [
              { id: "PM1", left: "The sled teeters on a knife's edge.", right: "It represents the Grinch's choice between his old and new self." },
              { id: "PM2", left: "The sound of singing drifts up from the valley.", right: "The Whos prove that their joy doesn't come from things." },
              { id: "PM3", left: "The Grinch's heart glows and expands.", right: "A literal visual for an internal transformation." },
              { id: "PM4", left: "He pulls the sled with superhuman strength.", right: "His new love for the town gives him new power." }
            ]
          },
          sliders: {
            scopeLabel: "the redemptive peak",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Falling", rightLabel: "Rising" },
              { leftLabel: "Hateful", rightLabel: "Loving" },
              { leftLabel: "Heavy", rightLabel: "Light" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The groaning wood of the sled",
              "The distant, harmonious singing",
              "The Grinch's glowing chest",
              "The sheer drop of the cliff",
              "Max pulling on the Grinch’s scarf"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a physical 'balancing act' to mirror an emotional one.",
              "Letting the sound of the singing trigger the hero's strength.",
              "Visualizing the 'heart growing' to make the change feel undeniable.",
              "Saving the toys to show the Grinch has moved from thief to protector."
            ]
          }
        }
      },
      {
        id: "film-grinch-the-feast",
        tier: "Lantern",
        headerLine: "The Grinch — The Roast Beast",
        displayTitle: "The Grinch — The Roast Beast",
        scene: {
          summary: "The Grinch stands at the head of the long table in the Who-ville town square. He is nervous, but Donna Who hands him the carving knife. He looks at the massive Roast Beast, looks at Max (who has his own chair), and begins to serve the community he once tried to destroy.",
          sourceContext: "Resolution: The Grinch finds his place in the community.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the feast element to the theme of belonging.",
            pairs: [
              { id: "PM1", left: "The Grinch carves the Roast Beast.", right: "He has moved from stealing the food to providing it." },
              { id: "PM2", left: "Max has his own seat and plate.", right: "Even the Grinch's dog is now part of the family." },
              { id: "PM3", left: "The table is a long, inclusive line.", right: "It visually connects everyone in the town as equals." },
              { id: "PM4", left: "Donna Who offers a warm smile.", right: "It proves that the Whos have truly forgiven him." }
            ]
          },
          sliders: {
            scopeLabel: "the communal warmth",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Nervous", rightLabel: "Welcome" },
              { leftLabel: "Selfish", rightLabel: "Selfless" },
              { leftLabel: "Cold", rightLabel: "Warm" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The steaming Roast Beast",
              "The sound of clinking glasses",
              "The Grinch's hesitant but kind smile",
              "The bright, colorful Who-pudding",
              "The lack of gadgets or mechanical arms"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Placing the outsider at the head of the table as a sign of respect.",
              "Ending the film on a quiet, intimate meal instead of a big party.",
              "Showing the dog's acceptance to finalize the Grinch's redemption.",
              "Contrasting the earlier 'stealth' with this open, public celebration."
            ]
          }
        }
      }
    ]
  }
];

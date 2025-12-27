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
      }, // <-- FIXED: Added missing comma here
      {
        id: "film-homealone-the-doorknob",
        tier: "Lantern",
        headerLine: "Home Alone — The Red-Hot Doorknob",
        displayTitle: "Home Alone — The Red-Hot Doorknob",
        scene: {
          summary: "Harry reaches for the front doorknob, unaware that Kevin has used an electric charcoal starter to heat it to a glowing red. When Harry grips the metal, he screams in agony as the heat sears the letter 'M' from the doorknob into the palm of his hand. He recoils, plunging his hand into the snow to cool the burn.",
          sourceContext: "Middle: The burglars' first attempts to breach the perimeter.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the sensory detail to the scene's impact.",
            pairs: [
              { id: "PM1", left: "The doorknob glows a faint, dangerous orange.", right: "It signals the danger to the audience before the character feels it." },
              { id: "PM2", left: "Harry grips the knob with his full weight.", right: "The commitment to the movement makes the injury feel more earned." },
              { id: "PM3", left: "The sizzling sound of the hand on metal.", right: "The audio sells the intensity of the heat without needing gore." },
              { id: "PM4", left: "Harry thrusts his hand into the deep snow.", right: "It uses the winter setting to provide a desperate, temporary relief." }
            ]
          },
          sliders: {
            scopeLabel: "the thermal trap",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Inviting", rightLabel: "Repelling" },
              { leftLabel: "Ordinary", rightLabel: "Lethal" },
              { leftLabel: "Slow Burn", rightLabel: "Instant" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The glowing electric heating coil",
              "The 'M' branded on Harry's palm",
              "The steam rising from the snow",
              "The deceptive quiet of the front porch",
              "Harry's muffed yell of pain"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a common household object to create a high-stakes injury.",
              "The visual payoff of the branded 'M' to show the trap's lasting effect.",
              "Using the freezing outdoor temperature to contrast with the extreme heat.",
              "Placing the trap at the 'threshold' of the house to show it's a fortress."
            ]
          }
        }
      },
      {
        id: "film-homealone-the-ice-stairs",
        tier: "Owl",
        headerLine: "Home Alone — The Frozen Steps",
        displayTitle: "Home Alone — The Frozen Steps",
        scene: {
          summary: "Marv attempts to walk up the outdoor basement stairs, but Kevin has hosed them down with water, creating a thick sheet of ice. Marv loses his footing instantly, sliding all the way back down and landing hard on his back. He tries again, only to have his feet fly out from under him even faster.",
          sourceContext: "Middle: Physical comedy through environmental manipulation.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the physical comedy beats.",
            pairs: [
              { id: "PM1", left: "Marv's legs kick out into a 'split'.", right: "The exaggerated pose emphasizes the lack of friction." },
              { id: "PM2", left: "The sound of boots sliding on hollow wood.", right: "The percussion of the fall adds a rhythmic quality to the gag." },
              { id: "PM3", left: "Marv grabs for a railing that is also iced.", right: "It shows the trap is multi-layered and impossible to escape." },
              { id: "PM4", left: "He lands flat on his back at the bottom.", right: "The 'thud' signals a temporary end to his forward momentum." }
            ]
          },
          sliders: {
            scopeLabel: "the lack of friction",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Steady", rightLabel: "Slippery" },
              { leftLabel: "One-Time", rightLabel: "Repetitive" },
              { leftLabel: "Climb", rightLabel: "Descent" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The clear, invisible layer of ice",
              "Marv's flailing, uncoordinated arms",
              "The steep angle of the basement stairs",
              "The sound of a heavy body hitting concrete",
              "The garden hose left out in the yard"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using the winter weather as a natural weapon for a child.",
              "The repetitive nature of the fall to build comedic timing.",
              "Keeping the camera wide to show the full scale of the stumble.",
              "Contrasting the 'hard' stairs with the 'soft' character movements."
            ]
          }
        }
      },
      {
        id: "film-homealone-the-blowtorch",
        tier: "Lantern",
        headerLine: "Home Alone — The Blowtorch Surprise",
        displayTitle: "Home Alone — The Blowtorch Surprise",
        scene: {
          summary: "Harry manages to open the back door just enough to stick his head inside. As he does, he trips a wire that ignites a blowtorch mounted to the wall. The flame blasts directly onto the top of his head. Harry stands frozen for a second as his hat catches fire before he realizes what is happening and runs back outside.",
          sourceContext: "Middle: Increasing the 'lethality' of the traps.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the trap design to the audience reaction.",
            pairs: [
              { id: "PM1", left: "The blowtorch is triggered by the door's movement.", right: "The automation makes Kevin seem like a miniature engineer." },
              { id: "PM2", left: "Harry remains still while his hat smolders.", right: "The delayed reaction allows the comedy of the image to sink in." },
              { id: "PM3", left: "The bright blue flame in the dark hallway.", right: "The visual pop draws the eye exactly to the point of impact." },
              { id: "PM4", left: "Harry runs head-first into a snowbank.", right: "It resolves the 'heat' tension with a classic physical gag." }
            ]
          },
          sliders: {
            scopeLabel: "the sudden heat",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Anticipated", rightLabel: "Shocking" },
              { leftLabel: "Static", rightLabel: "Explosive" },
              { leftLabel: "Controlled", rightLabel: "Wild" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The hissing sound of the torch",
              "Harry's smoking wool cap",
              "The tripwire at ankle height",
              "The narrow frame of the doorway",
              "The frantic dive into the snow"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "The absurdity of a child rigging a gas-powered blowtorch.",
              "Using the 'delayed realization' trope to maximize the laugh.",
              "The visual of the smoking head as a 'cartoon' come to life.",
              "Forcing the burglar to retreat for a second time through the same entrance."
            ]
          }
        }
      },
      {
        id: "film-homealone-the-paint-cans",
        tier: "Lantern",
        headerLine: "Home Alone — The Swinging Paint Cans",
        displayTitle: "Home Alone — The Swinging Paint Cans",
        scene: {
          summary: "As Harry and Marv finally begin to climb the main staircase to catch Kevin, they look up to see two paint cans swinging toward them on ropes. Harry is struck first, knocked backward into Marv, and then Marv is hit by the second can. Both burglars are sent flying back down to the foyer floor, losing teeth in the process.",
          sourceContext: "Climax: The final confrontation inside the McCallister home.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the momentum to the cinematic effect.",
            pairs: [
              { id: "PM1", left: "The cans swing in a wide, heavy arc.", right: "The pendulum motion creates a sense of unavoidable doom." },
              { id: "PM2", left: "A tooth flies through the air in slow motion.", right: "It adds a tiny, high-detail 'price' to the burglars' failure." },
              { id: "PM3", left: "Kevin stands at the top of the stairs, watching.", right: "He has moved from hiding to actively defending his high ground." },
              { id: "PM4", left: "The burglars fall in a tangled heap of limbs.", right: "It visually signals that they are no longer a functional team." }
            ]
          },
          sliders: {
            scopeLabel: "the pendulum impact",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Light", rightLabel: "Heavy" },
              { leftLabel: "Random", rightLabel: "Rhythmic" },
              { leftLabel: "Ascending", rightLabel: "Descending" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The heavy gallon paint cans",
              "The taut nylon rope",
              "Harry's missing gold tooth",
              "The height of the grand staircase",
              "Kevin’s defiant expression"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using the verticality of the house to give the child an advantage.",
              "The rhythmic 'one-two' punch of the cans to keep the energy up.",
              "The extreme physical consequence (lost teeth) without showing blood.",
              "Turning the 'home improvement' supplies into weapons of defense."
            ]
          }
        }
      },
      {
        id: "film-homealone-the-salt-neighbor",
        tier: "Lantern",
        headerLine: "Home Alone — Old Man Marley's Rescue",
        displayTitle: "Home Alone — Old Man Marley's Rescue",
        scene: {
          summary: "Just as the burglars have Kevin cornered in a neighbor's house, Old Man Marley appears behind them. He uses his heavy snow shovel to knock both Harry and Marv unconscious with two quick swings. He then picks up Kevin and carries him safely home, proving the 'scary neighbor' was a protector all along.",
          sourceContext: "Resolution: The unexpected ally saves the protagonist.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the character arc to the scene's outcome.",
            pairs: [
              { id: "PM1", left: "The heavy metal shovel hits the burglars.", right: "It turns a tool of 'chores' into a tool of justice." },
              { id: "PM2", left: "The neighbor is framed in the doorway.", right: "The silhouette initially creates fear before the rescue." },
              { id: "PM3", left: "Marley gently picks up Kevin.", right: "The physical contact resolves Kevin's fear of the man." },
              { id: "PM4", left: "The burglars are left unconscious on the floor.", right: "Their final defeat comes from an adult, balancing the power." }
            ]
          },
          sliders: {
            scopeLabel: "the dramatic reversal",
            prompt: "Scene Analysis: Gauge the dynamics of this moment...",
            axes: [
              { leftLabel: "Menacing", rightLabel: "Heroic" },
              { leftLabel: "Helpless", rightLabel: "Protected" },
              { leftLabel: "Misunderstood", rightLabel: "Known" }
            ],
            defaults: [50, 50, 50]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The heavy iron snow shovel",
              "The salt bucket Marley carries",
              "The burglars' shock at being caught",
              "Marley's bandaged hand",
              "The warm light of the neighboring house"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "The payoff of the 'scary neighbor' setup from the first act.",
              "Using a shovel—the object Kevin feared—to be his salvation.",
              "The silence of the man as he works, making him seem powerful.",
              "Providing a clean 'deus ex machina' that feels earned by Kevin's earlier kindness."
            ]
          }
        }
      }
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
        }, // <-- FIXED: Removed stray quote and closed object correctly
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

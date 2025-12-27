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
            scopeLabel: "Marv's bad luck",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Careful", rightLabel: "Clumsy" },
              { leftLabel: "Quiet", rightLabel: "Loud" },
              { leftLabel: "Fair Fight", rightLabel: "One-Sided" }
            ],
            defaults: [50, 50, 50] // [cite: 153]
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
      },
      {
        id: "film-homealone-the-tarantula",
        tier: "Owl",
        headerLine: "Home Alone — The Spider on the Face",
        displayTitle: "Home Alone — The Spider on the Face",
        scene: {
          summary: "Marv has Harry cornered, but Kevin places Buzz’s pet tarantula directly onto Marv’s face. The spider crawls slowly toward Marv's eye. Marv freezes, his eyes crossing as he looks at the spider. He lets out a high-pitched, girlish scream that echoes through the whole house as he throws Harry off him to get the spider away.",
          sourceContext: "Climax: A moment of pure panic for the burglars.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "The spider moves slowly across Marv's cheek.", right: "The slow movement makes the audience wait for the panic." },
              { id: "PM2", left: "Marv cross-eyes his gaze to look at his nose.", right: "It shows he is terrified of something very, very small." },
              { id: "PM3", left: "Marv screams in a very high-pitched voice.", right: "The funny sound ruins his image as a 'tough burglar'." },
              { id: "PM4", left: "He knocks into Harry while trying to escape.", right: "Kevin's trap makes the two bad guys fight each other." }
            ]
          },
          sliders: {
            scopeLabel: "Marv's panic level",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Frozen", rightLabel: "Frantic" },
              { leftLabel: "Tough", rightLabel: "Silly" },
              { leftLabel: "Brave", rightLabel: "Terrified" }
            ],
            defaults: [50, 50, 50] // [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The tarantula's hairy legs moving",
              "Marv's high-pitched scream",
              "Marv's crossed eyes",
              "The spider-tank seen in Buzz's room earlier",
              "Harry getting pushed aside"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a tiny pet to defeat a grown man[cite: 55, 59].",
              "Focusing the camera on Marv's face so we see him freeze up.",
              "Making the scream sound funny instead of painful.",
              "Using a real animal to make the danger feel more 'gross' to kids."
            ]
          }
        }
      },
      {
        id: "film-homealone-the-ornament-window",
        tier: "Lantern",
        headerLine: "Home Alone — The Ornament Window",
        displayTitle: "Home Alone — The Ornament Window",
        scene: {
          summary: "Marv climbs through a window he thinks is a safe entrance, but his bare feet land directly on a pile of sharp glass Christmas ornaments. He winces and hops around on his tiptoes, making soft crunching sounds with every step as he tries to reach the carpet.",
          sourceContext: "Middle: Marv trying a different way into the house.",
          fairUseNote: "Describe; do not quote dialogue."
        },
        modes: {
          pairMatch: {
            prompt: "Match the moment to why it lands.",
            pairs: [
              { id: "PM1", left: "The ornaments are bright, pretty, and festive.", right: "Using 'nice' things as traps makes the scene more creative." },
              { id: "PM2", left: "We hear a loud 'crunch' with every step.", right: "The sound helps the audience imagine the sharp pain." },
              { id: "PM3", left: "Marv is barefoot because he lost his shoes earlier.", right: "One bad moment for the burglar leads directly into the next." },
              { id: "PM4", left: "He hops on tiptoes toward the carpet.", right: "His desperate movement shows he’s completely lost his dignity." }
            ]
          },
          sliders: {
            scopeLabel: "the atmosphere of the trap",
            prompt: "Tone Check: Read these axes based on...",
            axes: [
              { leftLabel: "Festive", rightLabel: "Painful" },
              { leftLabel: "Smooth", rightLabel: "Crunchy" },
              { leftLabel: "Planned", rightLabel: "Accidental" }
            ],
            defaults: [50, 50, 50] // [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The sharp crunching sound of glass",
              "The colorful Christmas ornaments",
              "Marv's bare, vulnerable feet",
              "The window acting as a 'welcome' sign",
              "Marv's tiptoe hopping"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Turning a holiday decoration into a stinging obstacle.",
              "Letting the audience see his bare feet earlier so we know what's coming.",
              "Using the sound of breaking glass to sell the effect without showing blood.",
              "Contrasting the 'pretty' ornaments with the 'ugly' burglars."
            ]
          }
        }
      }
    ]
  }
];

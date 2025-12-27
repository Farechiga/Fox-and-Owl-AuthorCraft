// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// ES module: exports FILM_PACKS
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon. Prefer vivid specifics.
// FAIR USE: Describe scenes in your own words; do not quote dialogue.

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
              { id: "PM1", left: "Marv pulls a string expecting a light to turn on.", right: "The surprise is bigger because he thought he was in control[cite: 54, 127]." },
              { id: "PM2", left: "The iron leaves a perfectly rectangular red mark.", right: "The cartoonish injury makes the scene feel funny instead of scary[cite: 116, 119]." },
              { id: "PM3", left: "The heavy iron falls through a narrow laundry chute.", right: "It shows Kevin planned the 'route' of the trap ahead of time[cite: 66, 131]." },
              { id: "PM4", left: "Marv is silhouetted in a dark doorway.", right: "The shadows hide the trap so the audience is surprised too[cite: 57, 134]." }
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
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The fake light-switch string [cite: 65]",
              "The red iron mark on Marv's face [cite: 136]",
              "The heavy thud of the iron falling [cite: 106]",
              "The dark basement shadows [cite: 105]",
              "Marv's confused expression [cite: 136]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a laundry chute to turn a household object into a weapon[cite: 104, 114].",
              "Letting Marv pull the string himself so he triggers his own trap[cite: 81, 166].",
              "Showing the red mark on his face to prove the trap really worked[cite: 131, 136].",
              "Using the dark room to build tension before the iron drops[cite: 134, 170]."
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
              { id: "PM1", left: "The spider moves slowly across Marv's cheek.", right: "The slow movement makes the audience wait for the panic[cite: 134]." },
              { id: "PM2", left: "Marv cross-eyes his gaze to look at his nose.", right: "It shows he is terrified of something very, very small[cite: 136]." },
              { id: "PM3", left: "Marv screams in a very high-pitched voice.", right: "The funny sound ruins his image as a 'tough burglar'[cite: 55, 128]." },
              { id: "PM4", left: "He knocks into Harry while trying to escape.", right: "Kevin's trap makes the two bad guys fight each other[cite: 21, 66]." }
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
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The tarantula's hairy legs moving [cite: 103]",
              "Marv's high-pitched scream [cite: 135]",
              "Marv's crossed eyes [cite: 136]",
              "The spider-tank seen in Buzz's room earlier [cite: 66]",
              "Harry getting pushed aside [cite: 133]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Using a tiny pet to defeat a grown man[cite: 55, 59].",
              "Focusing the camera on Marv's face so we see him freeze up[cite: 165, 170].",
              "Making the scream sound funny instead of painful[cite: 116, 127].",
              "Using a real animal to make the danger feel more 'gross' to kids[cite: 119, 166]."
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
              { id: "PM1", left: "The ornaments are bright, pretty, and festive.", right: "Using 'nice' things as traps makes the scene more creative[cite: 72, 105]." },
              { id: "PM2", left: "We hear a loud 'crunch' with every step.", right: "The sound helps the audience imagine the sharp pain[cite: 106, 134]." },
              { id: "PM3", left: "Marv is barefoot because he lost his shoes earlier.", right: "One bad moment for the burglar leads directly into the next[cite: 21, 133]." },
              { id: "PM4", left: "He hops on tiptoes toward the carpet.", right: "His desperate movement shows he’s completely lost his dignity[cite: 55, 136]." }
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
            defaults: [50, 50, 50] [cite: 153]
          },
          buckets: {
            prompt: "Sort the elements by what drives this moment.",
            elements: [
              "The sharp crunching sound of glass [cite: 106]",
              "The colorful Christmas ornaments [cite: 105]",
              "Marv's bare, vulnerable feet [cite: 133]",
              "The window acting as a 'welcome' sign [cite: 54]",
              "Marv's tiptoe hopping [cite: 133]"
            ]
          },
          spotlights: {
            prompt: "Rank the top 3 choices that make this moment stick.",
            options: [
              "Turning a holiday decoration into a stinging obstacle[cite: 104, 114].",
              "Letting the audience see his bare feet earlier so we know what's coming[cite: 57, 134].",
              "Using the sound of breaking glass to sell the effect without showing blood[cite: 106, 116].",
              "Contrasting the 'pretty' ornaments with the 'ugly' burglars[cite: 56, 171]."
            ]
          }
        }
      }
    ]
  }

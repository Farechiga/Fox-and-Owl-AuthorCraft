// filmPacks.js
// AuthorCraft Appreciation — FILM PACKS
// Canonical format (LOCKED): work-level pack -> scenes[]
// Tiers: "Fox" | "Owl" | "Lantern" (Lantern = hardest)
// Authoring goal: concrete, kid-friendly, no seminar jargon.
// FAIR USE: Describe in your own words; do not quote dialogue.

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
        id: "film-home-alone-01-morning-alone",
        tier: "Owl",
        enabled: true,

        headerLine: "Home Alone — The morning he realizes it",
        displayTitle: "Home Alone — The morning he realizes it",

        scene: {
          summary:
            "Kevin wakes up expecting chaos, but the house is strangely quiet. He walks room to room calling out, and the silence answers back. At first he looks excited—like the world finally obeyed him—then his face shifts as he realizes quiet can mean something scary. The kitchen and the big empty rooms make him look small.",
          sourceContext: "Early in the film, after the family leaves for the trip.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["silence", "reversal", "space", "emotion-shift"],

        modes: {
          pairMatch: {
            prompt: "Match each detail to what it shows.",
            pairs: [
              {
                id: "PM1",
                left: "The house is quiet in a way that feels unusual, not peaceful.",
                right: "Silence becomes a clue that something is wrong."
              },
              {
                id: "PM2",
                left: "Kevin moves through different rooms looking for voices.",
                right: "The scene turns into a search instead of a celebration."
              },
              {
                id: "PM3",
                left: "His expression shifts from thrilled to uneasy.",
                right: "The feeling changes without needing a speech."
              },
              {
                id: "PM4",
                left: "The big rooms make him look small.",
                right: "The setting shows he’s alone before the plot explains it."
              }
            ]
          },

          sliders: {
            scopeLine: "SCOPE: Kevin’s experience in this moment.",
            prompt: "Set your read using these descriptive axes.",
            axes: [
              { id: "A1", left: "Excited", right: "Worried", min: 0, max: 100, default: 45 },
              { id: "A2", left: "Brave", right: "Spooked", min: 0, max: 100, default: 40 },
              { id: "A3", left: "Free", right: "Abandoned", min: 0, max: 100, default: 55 },
              { id: "A4", left: "Playing", right: "Listening", min: 0, max: 100, default: 60 }
            ]
          },

          rankBuckets: {
            prompt: "Drag each element into the best bucket.",
            elements: [
              { id: "E1", text: "The unusually quiet house." },
              { id: "E2", text: "Kevin walking room to room searching." },
              { id: "E3", text: "His face changing when the quiet lasts too long." },
              { id: "E4", text: "Big empty rooms that swallow his voice." },
              { id: "E5", text: "Small everyday sounds suddenly feeling loud." },
              { id: "E6", text: "The moment he pauses, realizing nobody answers back." }
            ]
          },

          interpretiveTakes: {
            prompt: "Rank the top three decisions that make the scene memorable.",
            options: [
              { id: "S1", text: "The scene lets silence do most of the work." },
              { id: "S2", text: "Kevin’s emotion flips before anyone explains the situation." },
              { id: "S3", text: "The house feels bigger than usual, making him seem smaller." },
              { id: "S4", text: "The moment is funny and scary at the same time." },
              { id: "S5", text: "The scene turns a normal home into a giant empty stage." }
            ]
          }
        }
      },

      {
        id: "film-home-alone-02-first-trap-test",
        tier: "Lantern",
        enabled: true,

        headerLine: "Home Alone — The first trap works",
        displayTitle: "Home Alone — The first trap works",

        scene: {
          summary:
            "Kevin sets up a simple trap and waits, watching and listening like the house is a puzzle box. When the intruder triggers it, the result is immediate and loud—pain, surprise, chaos. Kevin’s body language shows a strange mix: he’s scared, but he also looks proud that his plan had real power. The scene keeps moving fast so you feel both danger and comedy in the same breath.",
          sourceContext: "Mid-film; Kevin begins actively defending the house with traps.",
          fairUseNote: "Describe; do not quote dialogue."
        },

        tags: ["planning", "timing", "cause-effect", "tone-mix"],

        modes: {
          pairMatch: {
            prompt: "Match each detail to what it shows.",
            pairs: [
              {
                id: "PM1",
                left: "Kevin waits and listens before the trap goes off.",
                right: "Tension comes from anticipation, not action."
              },
              {
                id: "PM2",
                left: "The trap result is loud and immediate.",
                right: "You feel cause-and-effect instantly."
              },
              {
                id: "PM3",
                left: "Kevin looks scared and proud at the same time.",
                right: "Winning can still feel dangerous."
              },
              {
                id: "PM4",
                left: "The scene moves quickly after the trigger.",
                right: "Fast pace keeps it funny without feeling slow or mean."
              }
            ]
          },

          sliders: {
            scopeLine: "SCOPE: Kevin’s experience in this moment.",
            prompt: "Set your read using these descriptive axes.",
            axes: [
              { id: "A1", left: "Panicking", right: "Focused", min: 0, max: 100, default: 70 },
              { id: "A2", left: "Luck", right: "Skill", min: 0, max: 100, default: 60 },
              { id: "A3", left: "Hiding", right: "Controlling", min: 0, max: 100, default: 55 },
              { id: "A4", left: "Mean", right: "Justified", min: 0, max: 100, default: 75 }
            ]
          },

          rankBuckets: {
            prompt: "Drag each element into the best bucket.",
            elements: [
              { id: "E1", text: "Kevin planning and setting the trap ahead of time." },
              { id: "E2", text: "The quiet wait before anything happens." },
              { id: "E3", text: "The trap firing with instant consequences." },
              { id: "E4", text: "Kevin’s proud-but-scared reaction." },
              { id: "E5", text: "The intruder’s shocked stumble and confusion." },
              { id: "E6", text: "The fast pacing that keeps danger and comedy together." }
            ]
          },

          interpretiveTakes: {
            prompt: "Rank the top three decisions that make the scene memorable.",
            options: [
              { id: "S1", text: "The scene makes you wait, then pays off fast." },
              { id: "S2", text: "Kevin’s face shows two feelings at once: fear and pride." },
              { id: "S3", text: "The traps feel like clever problem-solving, not just chaos." },
              { id: "S4", text: "The pacing keeps the moment funny while still feeling risky." },
              { id: "S5", text: "The house turns into a playground and a battlefield at the same time." }
            ]
          }
        }
      }
    ]
  }
];

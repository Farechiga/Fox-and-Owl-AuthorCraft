// questions.js

// ------------------ Seven Gates metadata ------------------

// Official Seven Gates dictionary (icons + descriptions)
const GATE_INFO = {
  IdentityTension: {
    icon: "🎭",
    label: "Identity Tension",
    meaning: "Character questions who they are or who they are becoming"
  },
  RelationshipShift: {
    icon: "🫂",
    label: "Relationship Shift",
    meaning: "Something changes (even slightly) between characters"
  },
  EmotionalContradiction: {
    icon: "🎨",
    label: "Emotional Contradiction",
    meaning: "Two emotions are present at once"
  },
  ThresholdMoment: {
    icon: "🚪",
    label: "Threshold Moment",
    meaning: "Character must choose whether to step into something new"
  },
  SecretExchange: {
    icon: "✉️",
    label: "Secret Exchange",
    meaning:
      "Something is hidden, half-revealed, shared quietly, or concealed"
  },
  WorldLogicShift: {
    icon: "🔮",
    label: "World-Logic Shift",
    meaning: "Reality bends; magic or strangeness appears"
  },
  EmotionalEcho: {
    icon: "📆",
    label: "Emotional Echo",
    meaning: "A repeated moment takes on new emotional meaning"
  }
};

// ------------------ Question banks ------------------

// Film questions (Inside Out)
const filmQuestions = [
  
  {
    id: "film-insideout-2",
    source: "Inside Out",
    sceneTitle: "Packing the hockey jersey",
    momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["EmotionalContradiction", "EmotionalEcho"],
    gateIcons: ["🎨", "📆"],
    skill: "Scene Purpose",
    scene:
      "Riley sits alone on her bed in the new house, holding her old hockey jersey. " +
      "She runs her fingers over the team logo, then quietly folds it and places it in a box.",
    prompt: "What is the main purpose of this scene in Riley’s story?",
    options: [
      {
        text: "To show that Riley is gently starting to let go of her old life, even though it still matters to her.",
        isCorrect: true
      },
      {
        text: "To show that Riley is excited to join a brand-new hockey team in the new city.",
        isCorrect: false
      },
      {
        text: "To show that Riley has completely forgotten about hockey and never wants to play again.",
        isCorrect: false
      },
      {
        text: "To show that Riley only cares about packing fast so she can go watch TV.",
        isCorrect: false
      }
    ]
  },
  {
    id: "film-insideout-3",
    source: "Inside Out",
    sceneTitle: "Joy and Sadness share a memory",
    momentType: "SceneInterpretation",
    tier: "Owl",
    gates: ["EmotionalContradiction", "IdentityTension", "WorldLogicShift"],
    gateIcons: ["🎨", "🎭", "🔮"],
    skill: "Theme Connection",
    scene:
      "Inside Riley’s mind, Joy and Sadness finally sit together with a glowing core memory. " +
      "The memory shifts between bright yellow and soft blue as Riley remembers being comforted by her parents " +
      "after a tough game.",
    prompt: "What deeper idea about emotions does this moment highlight?",
    options: [
      {
        text: "It shows that joy and sadness can mix in the same memory and that both are needed to feel truly connected.",
        isCorrect: true
      },
      {
        text: "It shows that only happy memories are important and sad ones should be erased.",
        isCorrect: false
      },
      {
        text: "It shows that Riley should avoid playing games because they always end in disappointment.",
        isCorrect: false
      },
      {
        text: "It shows that emotions must stay separate so Riley can understand her life clearly.",
        isCorrect: false
      }
    ]
  },
  
    {
      id: "film-mulan-2",
      source: "Mulan",
      sceneTitle: "Her father struggling to stand",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "IdentityTension"],
      gateIcons: ["🎨", "🎭"],
      skill: "Emotional Beat Shift",
      scene:
        "When the imperial messenger demands one man from each family, Mulan watches her father lift his sword—" +
        "hands trembling, legs unsteady, pride undimmed.",
      prompt: "What emotional contrast does Mulan see here?",
      options: [
        {
          text: "She feels both pride in her father’s bravery and fear for his safety.",
          isCorrect: true
        },
        {
          text: "She thinks her father is pretending to struggle for attention.",
          isCorrect: false
        },
        {
          text: "She believes her father wants her to take his place immediately.",
          isCorrect: false
        },
        {
          text: "She sees that her father is eager to fight because he enjoys battle.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-3",
      source: "Mulan",
      sceneTitle: "Cutting her hair",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🎭", "🚪", "🎨"],
      skill: "Theme Connection",
      scene:
        "Alone in the family shrine, Mulan cuts her hair, takes her father’s armor, and ties up her long robe. " +
        "Her face shows both determination and fear.",
      prompt: "What deeper idea does this transformation highlight?",
      options: [
        {
          text: "She is choosing to step into a new identity, even though the cost and danger scare her.",
          isCorrect: true
        },
        {
          text: "She wants to abandon her family forever and live in the mountains.",
          isCorrect: false
        },
        {
          text: "She believes becoming a warrior will instantly solve all her problems.",
          isCorrect: false
        },
        {
          text: "She is trying to trick her family into thinking she ran away for fun.",
          isCorrect: false
        }
      ]
    },
    
    
    {
      id: "film-mulan-6",
      source: "Mulan",
      sceneTitle: "Training scene – getting the arrow",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "ThresholdMoment", "EmotionalEcho"],
      gateIcons: ["🎭", "🚪", "📆"],
      skill: "Scene Purpose",
      scene:
        "After struggling for days, Mulan climbs the pole and retrieves the arrow, surpassing every soldier who doubted her.",
      prompt: "Why is this moment important?",
      options: [
        {
          text: "It shows Mulan crossing from self-doubt into earned confidence through hard work.",
          isCorrect: true
        },
        {
          text: "It means she no longer needs to train at all.",
          isCorrect: false
        },
        {
          text: "It shows she is suddenly stronger than every warrior in China.",
          isCorrect: false
        },
        {
          text: "It proves she only succeeds when someone helps her directly.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-7",
      source: "Mulan",
      sceneTitle: "The mountain ambush",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🔮", "🚪", "🎨"],
      skill: "Theme Connection",
      scene:
        "Surrounded by Huns in the snowy mountains, Mulan fires a cannon into the peak, causing an avalanche that turns the battle.",
      prompt: "What does this moment reveal about Mulan?",
      options: [
        {
          text: "She uses creativity and courage to solve problems in ways the rules never expected.",
          isCorrect: true
        },
        {
          text: "She prefers to avoid thinking and use chaos whenever possible.",
          isCorrect: false
        },
        {
          text: "She wants to defeat both sides so she can go home early.",
          isCorrect: false
        },
        {
          text: "She panicked and accidentally caused the avalanche.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-8",
      source: "Mulan",
      sceneTitle: "Revealed identity in the snow",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🎭", "🫂", "🎨"],
      skill: "Character Insight",
      scene:
        "When Mulan’s disguise is discovered, the soldiers’ faces shift from shock to betrayal to sadness.",
      prompt: "What does this scene reveal about their relationship?",
      options: [
        {
          text: "Their trust is shaken, even though many of them cared about her.",
          isCorrect: true
        },
        {
          text: "They never liked her and were waiting for a reason to punish her.",
          isCorrect: false
        },
        {
          text: "They are excited that she tricked them successfully.",
          isCorrect: false
        },
        {
          text: "They immediately understand and support her without hesitation.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-9",
      source: "Mulan",
      sceneTitle: "Left in the snow",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Theme Connection",
      scene:
        "After being expelled, Mulan sits alone in the snow, torn between shame and the realization that the Huns still pose a threat.",
      prompt: "What deeper struggle does this highlight?",
      options: [
        {
          text: "She questions whether her mistakes define her—or whether she can still make choices that matter.",
          isCorrect: true
        },
        {
          text: "She believes she must now give up on helping anyone.",
          isCorrect: false
        },
        {
          text: "She realizes she prefers being alone and wants to stay in the mountains.",
          isCorrect: false
        },
        {
          text: "She thinks the army never needed her in the first place.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-10",
      source: "Mulan",
      sceneTitle: "Warning the city",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      skill: "Scene Purpose",
      scene:
        "Mulan races ahead to warn the imperial city about the Hun survivors, even though the soldiers still doubt her.",
      prompt: "What shift happens in this scene?",
      options: [
        {
          text: "Mulan chooses duty over pride, taking action even when others refuse to listen.",
          isCorrect: true
        },
        {
          text: "She wants to frighten the city for her own amusement.",
          isCorrect: false
        },
        {
          text: "She hopes the city guards will praise her disguise.",
          isCorrect: false
        },
        {
          text: "She believes the Huns will turn back peacefully if ignored.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-11",
      source: "Mulan",
      sceneTitle: "The emperor’s lesson",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalEcho"],
      gateIcons: ["🎭", "📆"],
      skill: "Theme Connection",
      scene:
        "After Mulan defeats Shan Yu, the Emperor tells her, 'A single grain of rice can tip the scale.'",
      prompt: "What does this message highlight?",
      options: [
        {
          text: "Small acts of bravery can change the fate of many— even when others overlook you.",
          isCorrect: true
        },
        {
          text: "Only emperors make important decisions, never ordinary people.",
          isCorrect: false
        },
        {
          text: "The Emperor regrets letting anyone fight the Huns.",
          isCorrect: false
        },
        {
          text: "Shan Yu was defeated only because of luck.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-12",
      source: "Mulan",
      sceneTitle: "The crowd bowing",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Emotional Shift",
      scene:
        "The entire imperial crowd bows to Mulan, including those who once doubted her.",
      prompt: "What emotional shift occurs here?",
      options: [
        {
          text: "Those who dismissed Mulan now honor her for her courage and leadership.",
          isCorrect: true
        },
        {
          text: "They feel forced to bow and do not respect her at all.",
          isCorrect: false
        },
        {
          text: "They bow only because they are confused about who she is.",
          isCorrect: false
        },
        {
          text: "They bow because they think Mulan is secretly the Emperor.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-mulan-14",
      source: "Mulan",
      sceneTitle: "Her father dropping the sword",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      skill: "Theme Connection",
      scene:
        "Mulan offers her father the Emperor’s crest and Shan Yu’s sword. Instead of praising her achievements, he drops the sword and hugs her tightly.",
      prompt: "What deeper idea does this moment show?",
      options: [
        {
          text: "Her father values her life and character far above medals or victory.",
          isCorrect: true
        },
        {
          text: "He dislikes swords and wishes she brought home something else.",
          isCorrect: false
        },
        {
          text: "He wants her to go back to the army immediately.",
          isCorrect: false
        },
        {
          text: "He thinks the Emperor made a mistake by rewarding her.",
          isCorrect: false
        }
      ]
    },
    
    
    {
      id: "film-mulan-17",
      source: "Mulan",
      sceneTitle: "Shan Yu’s reaction to being outsmarted",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Character Insight",
      scene:
        "When Mulan uses clever tactics against him, Shan Yu’s expression shifts from mockery to rage to a flicker of respect.",
      prompt: "What does this reveal about Shan Yu?",
      options: [
        {
          text: "He recognizes Mulan as a true opponent, not someone beneath his notice.",
          isCorrect: true
        },
        {
          text: "He believes she is too weak to threaten him at all.",
          isCorrect: false
        },
        {
          text: "He planned to lose so he could embarrass the army.",
          isCorrect: false
        },
        {
          text: "He thinks Mulan’s strategy proves she is secretly a spy.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-mulan-18",
      source: "Mulan",
      sceneTitle: "Mulan choosing honesty",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "ThresholdMoment"],
      gateIcons: ["🎭", "🚪"],
      skill: "Theme Connection",
      scene:
        "Mulan tells Shang, 'You don’t have to like me, but you will listen,' refusing to hide her identity anymore.",
      prompt: "What shift does this show in Mulan?",
      options: [
        {
          text: "She now values truth and courage over staying hidden or accepted.",
          isCorrect: true
        },
        {
          text: "She wants to argue with Shang for no reason.",
          isCorrect: false
        },
        {
          text: "She believes honesty will make everyone support her instantly.",
          isCorrect: false
        },
        {
          text: "She regrets every choice she has made so far.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-mulan-20",
      source: "Mulan",
      sceneTitle: "Shang’s quiet visit",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction", "IdentityTension"],
      gateIcons: ["🫂", "🎨", "🎭"],
      skill: "Character Insight",
      scene:
        "Shang arrives at Mulan’s home with an awkward smile, unsure what to say, while Mulan looks both hopeful and nervous.",
      prompt: "What does this moment show about both of them?",
      options: [
        {
          text: "They respect each other deeply but are uncertain how to express their feelings after everything that happened.",
          isCorrect: true
        },
        {
          text: "They no longer trust each other at all.",
          isCorrect: false
        },
        {
          text: "Shang wants to recruit Mulan back into the army immediately.",
          isCorrect: false
        },
        {
          text: "Mulan regrets ever speaking to Shang during the journey.",
          isCorrect: false
        }
      ]
    },
    
    
    {
      id: "film-zootopia-3",
      source: "Zootopia",
      sceneTitle: "Meeting Nick Wilde",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Character Insight",
      scene:
        "Judy meets Nick Wilde, who charms others easily but seems to enjoy bending rules and teasing her.",
      prompt: "What does Nick’s behavior suggest?",
      options: [
        {
          text: "He uses humor and confidence to hide his distrust of the system.",
          isCorrect: true
        },
        {
          text: "He wants to become a police officer immediately.",
          isCorrect: false
        },
        {
          text: "He enjoys hurting others for fun.",
          isCorrect: false
        },
        {
          text: "He is unaware that rules exist at all.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-zootopia-5",
      source: "Zootopia",
      sceneTitle: "The missing mammals case",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      skill: "Scene Purpose",
      scene:
        "Judy takes on a missing mammals case, even though she risks losing her job if she fails.",
      prompt: "What does this decision show?",
      options: [
        {
          text: "She is willing to take risks to prove she belongs as a real officer.",
          isCorrect: true
        },
        {
          text: "She believes rules should never be followed.",
          isCorrect: false
        },
        {
          text: "She wants to impress Nick more than solve the case.",
          isCorrect: false
        },
        {
          text: "She assumes the case will be easy and quick.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-zootopia-7",
      source: "Zootopia",
      sceneTitle: "Predators going savage",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      skill: "Theme Connection",
      scene:
        "Predators across the city begin acting savage, frightening prey animals and shaking Zootopia’s sense of safety.",
      prompt: "What deeper issue does this crisis reveal?",
      options: [
        {
          text: "Fear can quickly undo trust and cooperation in a community.",
          isCorrect: true
        },
        {
          text: "Predators are naturally dangerous and cannot be trusted.",
          isCorrect: false
        },
        {
          text: "The city was always meant to fail.",
          isCorrect: false
        },
        {
          text: "Rules alone are enough to stop fear.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-8",
      source: "Zootopia",
      sceneTitle: "Judy’s press conference mistake",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎭", "🎨", "🫂"],
      skill: "Theme Connection",
      scene:
        "At a press conference, Judy explains the predator problem in a way that increases fear and reinforces stereotypes.",
      prompt: "What does this moment show about Judy?",
      options: [
        {
          text: "Even well-meaning people can cause harm if they do not think carefully about their words.",
          isCorrect: true
        },
        {
          text: "She intentionally wants predators to suffer.",
          isCorrect: false
        },
        {
          text: "She has stopped caring about fairness altogether.",
          isCorrect: false
        },
        {
          text: "She believes fear is the best way to control a city.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-9",
      source: "Zootopia",
      sceneTitle: "Nick walking away",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Character Insight",
      scene:
        "After Judy’s comments, Nick quietly distances himself from her, clearly hurt.",
      prompt: "Why does Nick pull away?",
      options: [
        {
          text: "He feels betrayed and reminded of how society has judged him before.",
          isCorrect: true
        },
        {
          text: "He suddenly dislikes Judy for no reason.",
          isCorrect: false
        },
        {
          text: "He wants to solve the case alone.",
          isCorrect: false
        },
        {
          text: "He thinks Judy will quit being an officer.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-10",
      source: "Zootopia",
      sceneTitle: "Returning to the carrot farm",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalEcho", "IdentityTension"],
      gateIcons: ["📆", "🎭"],
      skill: "Scene Purpose",
      scene:
        "Judy returns home, questioning whether she belongs in Zootopia after her mistake.",
      prompt: "What does this return represent?",
      options: [
        {
          text: "A moment of self-reflection where Judy reconsiders who she wants to be.",
          isCorrect: true
        },
        {
          text: "A decision to permanently give up on her dream.",
          isCorrect: false
        },
        {
          text: "A desire to avoid responsibility forever.",
          isCorrect: false
        },
        {
          text: "A plan to convince her parents to move to the city.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-11",
      source: "Zootopia",
      sceneTitle: "Discovering the night howlers",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "ThresholdMoment"],
      gateIcons: ["🔮", "🚪"],
      skill: "Scene Purpose",
      scene:
        "Judy realizes that night howler flowers—not biology—are causing predators to go savage.",
      prompt: "Why is this discovery crucial?",
      options: [
        {
          text: "It shifts the story from fear to understanding and truth.",
          isCorrect: true
        },
        {
          text: "It proves predators are dangerous after all.",
          isCorrect: false
        },
        {
          text: "It shows Judy was right to stereotype predators.",
          isCorrect: false
        },
        {
          text: "It means the case no longer matters.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-12",
      source: "Zootopia",
      sceneTitle: "Apologizing to Nick",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Motivation",
      scene:
        "Judy sincerely apologizes to Nick and admits she was wrong.",
      prompt: "What does this apology show about Judy?",
      options: [
        {
          text: "She is willing to learn and change when she realizes she caused harm.",
          isCorrect: true
        },
        {
          text: "She wants Nick’s help without taking responsibility.",
          isCorrect: false
        },
        {
          text: "She expects forgiveness immediately.",
          isCorrect: false
        },
        {
          text: "She believes apologies fix everything instantly.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-zootopia-14",
      source: "Zootopia",
      sceneTitle: "The museum chase",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      skill: "Scene Purpose",
      scene:
        "Judy and Nick chase Bellwether through the museum, working together smoothly.",
      prompt: "What does this scene demonstrate?",
      options: [
        {
          text: "They now trust each other’s skills and judgment.",
          isCorrect: true
        },
        {
          text: "Nick is leading while Judy follows.",
          isCorrect: false
        },
        {
          text: "They are lucky rather than capable.",
          isCorrect: false
        },
        {
          text: "The case is already solved at this point.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-15",
      source: "Zootopia",
      sceneTitle: "Bellwether revealed",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      skill: "Theme Connection",
      scene:
        "Bellwether is revealed as the one manipulating fear to gain power.",
      prompt: "What theme does this twist reinforce?",
      options: [
        {
          text: "Prejudice can be used as a tool by those seeking control.",
          isCorrect: true
        },
        {
          text: "Prey animals are naturally more dangerous.",
          isCorrect: false
        },
        {
          text: "Leadership always comes from strength.",
          isCorrect: false
        },
        {
          text: "Fear cannot be challenged.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-16",
      source: "Zootopia",
      sceneTitle: "Nick becoming an officer",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      skill: "Character Insight",
      scene:
        "Nick graduates from the police academy and joins Judy as her partner.",
      prompt: "What does this moment show about Nick?",
      options: [
        {
          text: "He is reclaiming an identity he once believed was impossible for him.",
          isCorrect: true
        },
        {
          text: "He only became an officer to help Judy.",
          isCorrect: false
        },
        {
          text: "He expects the job to be easy.",
          isCorrect: false
        },
        {
          text: "He wants revenge on the system.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-zootopia-18",
      source: "Zootopia",
      sceneTitle: "The final chase teamwork",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "ThresholdMoment"],
      gateIcons: ["🫂", "🚪"],
      skill: "Scene Purpose",
      scene:
        "Judy and Nick combine their strengths to stop Bellwether’s plan.",
      prompt: "What does their teamwork highlight?",
      options: [
        {
          text: "Differences can become strengths when people trust each other.",
          isCorrect: true
        },
        {
          text: "Only one of them is truly responsible for success.",
          isCorrect: false
        },
        {
          text: "Luck matters more than preparation.",
          isCorrect: false
        },
        {
          text: "Rules do not matter in emergencies.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-19",
      source: "Zootopia",
      sceneTitle: "Zootopia at peace again",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "WorldLogicShift"],
      gateIcons: ["📆", "🔮"],
      skill: "Theme Connection",
      scene:
        "The city begins to heal as predators and prey work together again.",
      prompt: "What does this resolution suggest?",
      options: [
        {
          text: "Trust can be rebuilt when truth replaces fear.",
          isCorrect: true
        },
        {
          text: "The city will never face problems again.",
          isCorrect: false
        },
        {
          text: "Predators must always be watched closely.",
          isCorrect: false
        },
        {
          text: "Fear is the natural state of society.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-zootopia-20",
      source: "Zootopia",
      sceneTitle: "Partners on patrol",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalEcho", "IdentityTension"],
      gateIcons: ["🫂", "📆", "🎭"],
      skill: "Theme Connection",
      scene:
        "Judy and Nick patrol the city together, joking easily as equal partners.",
      prompt: "What does this final image show?",
      options: [
        {
          text: "Both characters have grown into identities shaped by trust, learning, and shared purpose.",
          isCorrect: true
        },
        {
          text: "Their journey is over and nothing more will change.",
          isCorrect: false
        },
        {
          text: "They have forgotten everything that happened earlier.",
          isCorrect: false
        },
        {
          text: "They are only pretending to be friends.",
          isCorrect: false
        }
      ]
    },
    
    
    
    {
      id: "film-encanto-4",
      source: "Encanto",
      sceneTitle: "The cracks in the house",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "ThresholdMoment"],
      gateIcons: ["🔮", "🚪"],
      skill: "Scene Purpose",
      scene:
        "Mirabel notices cracks forming in the walls of the magical house after a family celebration.",
      prompt: "What do these cracks suggest?",
      options: [
        {
          text: "Something is wrong beneath the family’s perfect appearance.",
          isCorrect: true
        },
        {
          text: "The house is old and needs repairs.",
          isCorrect: false
        },
        {
          text: "Mirabel is imagining problems that do not exist.",
          isCorrect: false
        },
        {
          text: "The magic is becoming stronger than before.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-5",
      source: "Encanto",
      sceneTitle: "Luisa’s shaking strength",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "Luisa admits she feels overwhelmed, even though she is known for being strong.",
      prompt: "What deeper idea does Luisa’s confession reveal?",
      options: [
        {
          text: "Even those who seem strongest can feel pressure and fear.",
          isCorrect: true
        },
        {
          text: "Luisa wants to stop helping her family completely.",
          isCorrect: false
        },
        {
          text: "Luisa believes strength means never asking for help.",
          isCorrect: false
        },
        {
          text: "Luisa’s powers are fake and always have been.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-encanto-7",
      source: "Encanto",
      sceneTitle: "The broken vision",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "SecretExchange", "IdentityTension"],
      gateIcons: ["🔮", "✉️", "🎭"],
      skill: "Symbolism",
      scene:
        "Mirabel pieces together Bruno’s shattered vision showing both danger and hope.",
      prompt: "What does the broken vision symbolize?",
      options: [
        {
          text: "The future depends on how the family chooses to treat each other.",
          isCorrect: true
        },
        {
          text: "Bruno’s powers no longer work at all.",
          isCorrect: false
        },
        {
          text: "Mirabel should stop trying to understand the future.",
          isCorrect: false
        },
        {
          text: "The magic only shows bad outcomes.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-8",
      source: "Encanto",
      sceneTitle: "Isabela’s perfect flowers",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      skill: "Character Insight",
      scene:
        "Isabela creates perfect roses and admits she feels trapped by expectations.",
      prompt: "What does Isabela’s frustration reveal?",
      options: [
        {
          text: "Being perfect can feel limiting when it is demanded instead of chosen.",
          isCorrect: true
        },
        {
          text: "She dislikes flowers entirely.",
          isCorrect: false
        },
        {
          text: "She wants Mirabel to leave the family.",
          isCorrect: false
        },
        {
          text: "She believes magic should never change.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-9",
      source: "Encanto",
      sceneTitle: "The house collapsing",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction", "ThresholdMoment"],
      gateIcons: ["🔮", "🎨", "🚪"],
      skill: "Theme Connection",
      scene:
        "The magical house collapses completely as the family argues and blames one another.",
      prompt: "What deeper idea does this collapse represent?",
      options: [
        {
          text: "When relationships break, the magic holding the family together breaks too.",
          isCorrect: true
        },
        {
          text: "Magic always disappears with time.",
          isCorrect: false
        },
        {
          text: "The family should have protected the house better.",
          isCorrect: false
        },
        {
          text: "Mirabel caused the collapse on purpose.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-10",
      source: "Encanto",
      sceneTitle: "Mirabel and Abuela by the river",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Theme Connection",
      scene:
        "Abuela explains her past loss, and Mirabel listens with empathy instead of anger.",
      prompt: "What change happens between Mirabel and Abuela?",
      options: [
        {
          text: "They begin to understand each other’s pain instead of blaming one another.",
          isCorrect: true
        },
        {
          text: "Mirabel decides Abuela is no longer part of the family.",
          isCorrect: false
        },
        {
          text: "Abuela refuses to listen to Mirabel.",
          isCorrect: false
        },
        {
          text: "Mirabel forgives everything without understanding it.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-11",
      source: "Encanto",
      sceneTitle: "Bruno returns",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalEcho"],
      gateIcons: ["🫂", "📆"],
      skill: "Scene Purpose",
      scene:
        "Bruno steps back into the family circle after years of hiding.",
      prompt: "What does Bruno’s return show?",
      options: [
        {
          text: "The family is ready to face uncomfortable truths instead of avoiding them.",
          isCorrect: true
        },
        {
          text: "Bruno wants to cause trouble again.",
          isCorrect: false
        },
        {
          text: "The family has completely forgotten the past.",
          isCorrect: false
        },
        {
          text: "Magic alone fixes all relationships.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-encanto-13",
      source: "Encanto",
      sceneTitle: "Mirabel’s doorknob",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "WorldLogicShift"],
      gateIcons: ["🎭", "🔮"],
      skill: "Symbolism",
      scene:
        "Mirabel places the finished doorknob into the rebuilt house, and the magic returns.",
      prompt: "What does Mirabel’s doorknob symbolize?",
      options: [
        {
          text: "Her role as the heart that helps hold the family together.",
          isCorrect: true
        },
        {
          text: "Her reward for waiting patiently.",
          isCorrect: false
        },
        {
          text: "Proof that she finally gained a magical power.",
          isCorrect: false
        },
        {
          text: "A sign that the house belongs only to her now.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-14",
      source: "Encanto",
      sceneTitle: "Isabela’s wild plants",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "WorldLogicShift"],
      gateIcons: ["🎭", "🔮"],
      skill: "Character Insight",
      scene:
        "Isabela begins growing unpredictable, colorful plants instead of perfect flowers.",
      prompt: "What does this change show?",
      options: [
        {
          text: "She is discovering freedom by embracing imperfection.",
          isCorrect: true
        },
        {
          text: "Her powers are becoming weaker.",
          isCorrect: false
        },
        {
          text: "She wants to impress Mirabel.",
          isCorrect: false
        },
        {
          text: "She dislikes her original gift entirely.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-encanto-16",
      source: "Encanto",
      sceneTitle: "Mirabel leading the family",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      skill: "Theme Connection",
      scene:
        "Mirabel stands at the center as her family gathers around her.",
      prompt: "What does this image suggest about Mirabel?",
      options: [
        {
          text: "She leads through understanding and care rather than magic.",
          isCorrect: true
        },
        {
          text: "She replaces Abuela as the family’s ruler.",
          isCorrect: false
        },
        {
          text: "She wants to control how everyone lives.",
          isCorrect: false
        },
        {
          text: "She finally feels superior to the others.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-encanto-18",
      source: "Encanto",
      sceneTitle: "Abuela stepping back",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Insight",
      scene:
        "Abuela watches quietly as others take the lead.",
      prompt: "What does Abuela’s behavior show?",
      options: [
        {
          text: "She is learning to trust her family instead of controlling them.",
          isCorrect: true
        },
        {
          text: "She no longer cares about the family.",
          isCorrect: false
        },
        {
          text: "She regrets ever caring about magic.",
          isCorrect: false
        },
        {
          text: "She believes Mirabel has failed.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-19",
      source: "Encanto",
      sceneTitle: "Mirabel’s place at the door",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "ThresholdMoment"],
      gateIcons: ["🎭", "🚪"],
      skill: "Theme Connection",
      scene:
        "Mirabel stands proudly at the front door of Casita as it welcomes the family.",
      prompt: "What does this final position symbolize?",
      options: [
        {
          text: "Mirabel has found belonging without needing a traditional gift.",
          isCorrect: true
        },
        {
          text: "She is now in charge of who enters the house.",
          isCorrect: false
        },
        {
          text: "She is finally receiving magic late.",
          isCorrect: false
        },
        {
          text: "She wants to leave the family behind.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-encanto-20",
      source: "Encanto",
      sceneTitle: "The candle glowing again",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "EmotionalEcho"],
      gateIcons: ["🔮", "📆"],
      skill: "Theme Connection",
      scene:
        "The candle glows steadily once more as the family stands united.",
      prompt: "What does the restored candle ultimately show?",
      options: [
        {
          text: "Love and understanding keep the miracle alive.",
          isCorrect: true
        },
        {
          text: "Magic returns only when rules are followed.",
          isCorrect: false
        },
        {
          text: "The family must protect the candle above all else.",
          isCorrect: false
        },
        {
          text: "The miracle is stronger than people.",
          isCorrect: false
        }
      ]
    },
    
    
    
    {
      id: "film-moana-4",
      source: "Moana",
      sceneTitle: "The dying island",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "ThresholdMoment"],
      gateIcons: ["🔮", "🚪"],
      skill: "Scene Purpose",
      scene:
        "Fish disappear, crops fail, and the island begins to weaken.",
      prompt: "Why is this change important to the story?",
      options: [
        {
          text: "It shows that avoiding the problem is no longer possible.",
          isCorrect: true
        },
        {
          text: "It proves the island is cursed forever.",
          isCorrect: false
        },
        {
          text: "It shows Moana is not ready to lead.",
          isCorrect: false
        },
        {
          text: "It means the ocean is angry with everyone.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-5",
      source: "Moana",
      sceneTitle: "Grandma Tala’s story",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "IdentityTension"],
      gateIcons: ["✉️", "🎭"],
      skill: "Theme Connection",
      scene:
        "Grandma Tala reveals that Moana’s people were once voyagers who crossed the sea.",
      prompt: "What does this secret change for Moana?",
      options: [
        {
          text: "She learns her longing for the ocean is part of her heritage.",
          isCorrect: true
        },
        {
          text: "She realizes her family has lied to her forever.",
          isCorrect: false
        },
        {
          text: "She decides history does not matter.",
          isCorrect: false
        },
        {
          text: "She wants to leave immediately without thinking.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-6",
      source: "Moana",
      sceneTitle: "Choosing to sail",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎭", "🎨"],
      skill: "Theme Connection",
      scene:
        "After her grandmother’s death, Moana stands before the ocean and decides to sail.",
      prompt: "What deeper idea does this decision highlight?",
      options: [
        {
          text: "Moana accepts both her fear and her calling as part of who she is.",
          isCorrect: true
        },
        {
          text: "She leaves because she has nothing left at home.",
          isCorrect: false
        },
        {
          text: "She believes the journey will be easy.",
          isCorrect: false
        },
        {
          text: "She wants to escape responsibility.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-moana-8",
      source: "Moana",
      sceneTitle: "The first storm",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎨"],
      skill: "Emotional Beat Shift",
      scene:
        "Moana struggles in a storm, frightened but refusing to turn back.",
      prompt: "What does this moment show about Moana?",
      options: [
        {
          text: "She feels fear but chooses courage anyway.",
          isCorrect: true
        },
        {
          text: "She believes storms are exciting games.",
          isCorrect: false
        },
        {
          text: "She immediately regrets leaving home.",
          isCorrect: false
        },
        {
          text: "She expects the ocean to do everything for her.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-9",
      source: "Moana",
      sceneTitle: "Learning wayfinding",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalEcho"],
      gateIcons: ["🎭", "📆"],
      skill: "Scene Purpose",
      scene:
        "Moana learns to navigate by stars, wind, and waves instead of force.",
      prompt: "Why is this learning important?",
      options: [
        {
          text: "She grows into her role by understanding the ocean rather than fighting it.",
          isCorrect: true
        },
        {
          text: "She becomes better than Maui immediately.",
          isCorrect: false
        },
        {
          text: "She stops needing help from anyone.",
          isCorrect: false
        },
        {
          text: "She learns magic powers.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-10",
      source: "Moana",
      sceneTitle: "The Kakamora chase",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      skill: "Scene Purpose",
      scene:
        "Moana and Maui work together during the chase with the Kakamora pirates.",
      prompt: "What does this teamwork show?",
      options: [
        {
          text: "Moana is becoming a capable partner, not just a follower.",
          isCorrect: true
        },
        {
          text: "Maui is the only one doing the real work.",
          isCorrect: false
        },
        {
          text: "The chase is mostly for fun.",
          isCorrect: false
        },
        {
          text: "Moana relies only on luck.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-11",
      source: "Moana",
      sceneTitle: "Maui’s broken hook",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "Maui’s magical hook cracks, and he panics about losing his identity.",
      prompt: "Why is Maui so afraid?",
      options: [
        {
          text: "His sense of worth is tied to his power, not who he is inside.",
          isCorrect: true
        },
        {
          text: "He fears Moana will steal his fame.",
          isCorrect: false
        },
        {
          text: "He wants to quit helping completely.",
          isCorrect: false
        },
        {
          text: "He believes magic is pointless.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-12",
      source: "Moana",
      sceneTitle: "Abandoned at sea",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "EmotionalContradiction", "ThresholdMoment"],
      gateIcons: ["🫂", "🎨", "🚪"],
      skill: "Theme Connection",
      scene:
        "Maui leaves Moana alone in the ocean after failing against Te Kā.",
      prompt: "What inner conflict does this moment force Moana to face?",
      options: [
        {
          text: "Whether she believes in herself without anyone else’s approval.",
          isCorrect: true
        },
        {
          text: "Whether the ocean truly likes her.",
          isCorrect: false
        },
        {
          text: "Whether she wants revenge on Maui.",
          isCorrect: false
        },
        {
          text: "Whether she should forget her people.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-13",
      source: "Moana",
      sceneTitle: "The ocean parting again",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "IdentityTension"],
      gateIcons: ["🔮", "🎭"],
      skill: "Theme Connection",
      scene:
        "The ocean lifts Moana back onto her boat, offering support without forcing her.",
      prompt: "What does the ocean’s action represent now?",
      options: [
        {
          text: "Moana’s strength comes from choice, not being carried.",
          isCorrect: true
        },
        {
          text: "The ocean is correcting its mistake.",
          isCorrect: false
        },
        {
          text: "The ocean wants to finish the journey itself.",
          isCorrect: false
        },
        {
          text: "The ocean is angry with Maui.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-14",
      source: "Moana",
      sceneTitle: "Facing Te Kā",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎭", "🎨"],
      skill: "Theme Connection",
      scene:
        "Moana walks calmly toward Te Kā, choosing compassion instead of fear.",
      prompt: "What does Moana realize in this moment?",
      options: [
        {
          text: "The monster is not evil but broken and needs understanding.",
          isCorrect: true
        },
        {
          text: "Bravery means fighting harder.",
          isCorrect: false
        },
        {
          text: "Te Kā must be defeated to win.",
          isCorrect: false
        },
        {
          text: "She is no longer afraid of anything.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-15",
      source: "Moana",
      sceneTitle: "Returning the heart",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "EmotionalEcho"],
      gateIcons: ["🔮", "📆"],
      skill: "Scene Purpose",
      scene:
        "Moana restores the heart to Te Fiti, revealing her true form.",
      prompt: "What does this restoration symbolize?",
      options: [
        {
          text: "Healing comes from restoring what was taken, not destroying what is broken.",
          isCorrect: true
        },
        {
          text: "Magic solves problems instantly.",
          isCorrect: false
        },
        {
          text: "Moana defeats Te Kā through strength.",
          isCorrect: false
        },
        {
          text: "The journey was unnecessary.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-16",
      source: "Moana",
      sceneTitle: "Maui choosing to fight",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Insight",
      scene:
        "Maui returns to help Moana, even without full confidence in his hook.",
      prompt: "What change does this show in Maui?",
      options: [
        {
          text: "He is choosing courage and loyalty over fear of failure.",
          isCorrect: true
        },
        {
          text: "He believes he must prove himself again.",
          isCorrect: false
        },
        {
          text: "He expects Moana to protect him.",
          isCorrect: false
        },
        {
          text: "He wants to reclaim fame.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-moana-18",
      source: "Moana",
      sceneTitle: "Moana’s father watching her lead",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Insight",
      scene:
        "Moana’s father watches her confidently guide the people.",
      prompt: "What does this moment show about their relationship?",
      options: [
        {
          text: "He trusts her leadership and accepts her true path.",
          isCorrect: true
        },
        {
          text: "He still believes she is making a mistake.",
          isCorrect: false
        },
        {
          text: "He wants to take control again.",
          isCorrect: false
        },
        {
          text: "He fears the ocean more than before.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-19",
      source: "Moana",
      sceneTitle: "Standing at the shore again",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "IdentityTension"],
      gateIcons: ["📆", "🎭"],
      skill: "Theme Connection",
      scene:
        "Moana stands at the shore once more, now as a confident wayfinder.",
      prompt: "How does this repeated image deepen the story?",
      options: [
        {
          text: "It shows how Moana has grown into the role she was always meant to fill.",
          isCorrect: true
        },
        {
          text: "It proves nothing has changed.",
          isCorrect: false
        },
        {
          text: "It means Moana misses her old life.",
          isCorrect: false
        },
        {
          text: "It suggests she wants to leave again immediately.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-moana-20",
      source: "Moana",
      sceneTitle: "Knowing who she is",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalEcho", "ThresholdMoment"],
      gateIcons: ["🎭", "📆", "🚪"],
      skill: "Theme Connection",
      scene:
        "Moana confidently states who she is and what she must do, no longer doubting herself.",
      prompt: "What does this final confidence represent?",
      options: [
        {
          text: "Moana has integrated her duty, heritage, and inner calling into one identity.",
          isCorrect: true
        },
        {
          text: "She believes she has finished growing.",
          isCorrect: false
        },
        {
          text: "She no longer needs her family or community.",
          isCorrect: false
        },
        {
          text: "She wants to abandon leadership altogether.",
          isCorrect: false
        }
      ]
    },
    
    
    
    {
      id: "film-batb-4",
      source: "Beauty and the Beast",
      sceneTitle: "Belle trades places",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "RelationshipShift", "IdentityTension"],
      gateIcons: ["🚪", "🫂", "🎭"],
      skill: "Character Motivation",
      scene:
        "Belle offers to take her father’s place as the Beast’s prisoner.",
      prompt: "What does this choice reveal about Belle?",
      options: [
        {
          text: "She values love and responsibility over her own safety.",
          isCorrect: true
        },
        {
          text: "She wants to live in the castle forever.",
          isCorrect: false
        },
        {
          text: "She believes the Beast will free her quickly.",
          isCorrect: false
        },
        {
          text: "She wants to prove she is braver than others.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-6",
      source: "Beauty and the Beast",
      sceneTitle: "A forbidden room",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "ThresholdMoment"],
      gateIcons: ["✉️", "🚪"],
      skill: "Scene Purpose",
      scene:
        "Belle explores the castle and discovers the forbidden West Wing.",
      prompt: "Why is the West Wing important?",
      options: [
        {
          text: "It holds the Beast’s shame and the truth about his curse.",
          isCorrect: true
        },
        {
          text: "It hides treasure Belle wants.",
          isCorrect: false
        },
        {
          text: "It proves Belle cannot follow rules.",
          isCorrect: false
        },
        {
          text: "It shows the Beast enjoys being alone.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-7",
      source: "Beauty and the Beast",
      sceneTitle: "Belle tending the Beast",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Relationship Change",
      scene:
        "After the wolves attack, Belle cares for the Beast’s wounds.",
      prompt: "What shift happens between them?",
      options: [
        {
          text: "They begin to see each other as more than enemies.",
          isCorrect: true
        },
        {
          text: "Belle decides to escape immediately.",
          isCorrect: false
        },
        {
          text: "The Beast pretends to be injured.",
          isCorrect: false
        },
        {
          text: "Their relationship becomes worse.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-9",
      source: "Beauty and the Beast",
      sceneTitle: "The library gift",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Symbolism",
      scene:
        "The Beast gives Belle access to the castle’s library.",
      prompt: "Why is this gift meaningful?",
      options: [
        {
          text: "He respects who Belle truly is and what she values.",
          isCorrect: true
        },
        {
          text: "He wants Belle to stay busy.",
          isCorrect: false
        },
        {
          text: "He hopes books will distract her.",
          isCorrect: false
        },
        {
          text: "He believes books are more important than people.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-10",
      source: "Beauty and the Beast",
      sceneTitle: "The ballroom dance",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "EmotionalContradiction", "EmotionalEcho"],
      gateIcons: ["🫂", "🎨", "📆"],
      skill: "Theme Connection",
      scene:
        "Belle and the Beast dance together, both surprised by their growing affection.",
      prompt: "What does this dance represent?",
      options: [
        {
          text: "A moment where fear gives way to trust and connection.",
          isCorrect: true
        },
        {
          text: "A performance meant to impress the servants.",
          isCorrect: false
        },
        {
          text: "A signal that the curse is already broken.",
          isCorrect: false
        },
        {
          text: "A plan to distract Belle from leaving.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-11",
      source: "Beauty and the Beast",
      sceneTitle: "The mirror’s truth",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "EmotionalContradiction"],
      gateIcons: ["✉️", "🎨"],
      skill: "Character Motivation",
      scene:
        "Belle sees her father in danger through the magic mirror.",
      prompt: "Why does Belle decide to leave the castle?",
      options: [
        {
          text: "She chooses love for her father over her own happiness.",
          isCorrect: true
        },
        {
          text: "She wants to escape the Beast.",
          isCorrect: false
        },
        {
          text: "She believes the curse is already broken.",
          isCorrect: false
        },
        {
          text: "She is afraid of the villagers.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-12",
      source: "Beauty and the Beast",
      sceneTitle: "Letting her go",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎭", "🎨"],
      skill: "Theme Connection",
      scene:
        "The Beast releases Belle, even though it may doom him.",
      prompt: "What does this decision show?",
      options: [
        {
          text: "He has learned to love selflessly instead of controlling others.",
          isCorrect: true
        },
        {
          text: "He no longer cares about breaking the curse.",
          isCorrect: false
        },
        {
          text: "He believes Belle will return immediately.",
          isCorrect: false
        },
        {
          text: "He wants to punish himself.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-13",
      source: "Beauty and the Beast",
      sceneTitle: "Gaston’s accusation",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "RelationshipShift"],
      gateIcons: ["✉️", "🫂"],
      skill: "Theme Connection",
      scene:
        "Gaston turns the villagers against the Beast using fear.",
      prompt: "What tactic does Gaston use?",
      options: [
        {
          text: "He manipulates fear to gain power over others.",
          isCorrect: true
        },
        {
          text: "He tells the full truth calmly.",
          isCorrect: false
        },
        {
          text: "He protects Belle’s feelings.",
          isCorrect: false
        },
        {
          text: "He tries to help the Beast change.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-14",
      source: "Beauty and the Beast",
      sceneTitle: "The mob at the castle",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      skill: "Theme Connection",
      scene:
        "Villagers storm the castle, driven by fear and anger.",
      prompt: "What does this scene reveal?",
      options: [
        {
          text: "Fear can turn ordinary people into a destructive force.",
          isCorrect: true
        },
        {
          text: "The villagers are naturally cruel.",
          isCorrect: false
        },
        {
          text: "The Beast caused this intentionally.",
          isCorrect: false
        },
        {
          text: "Magic makes people violent.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-15",
      source: "Beauty and the Beast",
      sceneTitle: "Belle returns",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalEcho", "RelationshipShift"],
      gateIcons: ["📆", "🫂"],
      skill: "Scene Purpose",
      scene:
        "Belle rushes back to the castle when she realizes she loves the Beast.",
      prompt: "Why is this return important?",
      options: [
        {
          text: "It completes Belle’s emotional journey from curiosity to love.",
          isCorrect: true
        },
        {
          text: "She wants to stop Gaston.",
          isCorrect: false
        },
        {
          text: "She feels guilty for leaving.",
          isCorrect: false
        },
        {
          text: "She expects the Beast to rescue her.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-16",
      source: "Beauty and the Beast",
      sceneTitle: "The Beast gives up",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "The Beast stops fighting, believing Belle will never return.",
      prompt: "Why does he lose the will to fight?",
      options: [
        {
          text: "He feels unworthy of love and hope.",
          isCorrect: true
        },
        {
          text: "He is physically too weak.",
          isCorrect: false
        },
        {
          text: "He wants Gaston to win.",
          isCorrect: false
        },
        {
          text: "He plans to escape.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-17",
      source: "Beauty and the Beast",
      sceneTitle: "Belle’s confession",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🚪", "🫂", "🎨"],
      skill: "Theme Connection",
      scene:
        "Belle confesses her love as the last petal falls.",
      prompt: "Why is this confession powerful?",
      options: [
        {
          text: "It is freely given, without expectation or reward.",
          isCorrect: true
        },
        {
          text: "It arrives just in time to save herself.",
          isCorrect: false
        },
        {
          text: "It breaks the curse through magic words.",
          isCorrect: false
        },
        {
          text: "It proves Belle always knew she loved him.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-18",
      source: "Beauty and the Beast",
      sceneTitle: "The curse breaks",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalEcho"],
      gateIcons: ["🔮", "📆"],
      skill: "Symbolism",
      scene:
        "The Beast transforms back into a prince, and the castle returns to life.",
      prompt: "What does this transformation symbolize?",
      options: [
        {
          text: "Inner change leads to outward transformation.",
          isCorrect: true
        },
        {
          text: "Magic fixes problems instantly.",
          isCorrect: false
        },
        {
          text: "Beauty is more important than kindness.",
          isCorrect: false
        },
        {
          text: "Love removes all past mistakes.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-20",
      source: "Beauty and the Beast",
      sceneTitle: "A new beginning",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalEcho", "RelationshipShift"],
      gateIcons: ["🎭", "📆", "🫂"],
      skill: "Theme Connection",
      scene:
        "Belle and the prince look toward the future together.",
      prompt: "What does this ending represent?",
      options: [
        {
          text: "Growth through empathy, choice, and shared understanding.",
          isCorrect: true
        },
        {
          text: "The end of all challenges.",
          isCorrect: false
        },
        {
          text: "A return to how things used to be.",
          isCorrect: false
        },
        {
          text: "Victory through strength alone.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-22",
      source: "Beauty and the Beast",
      sceneTitle: "The town’s laughter",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      skill: "Emotional Beat Shift",
      scene:
        "Villagers laugh at Maurice’s story about the Beast and the castle.",
      prompt: "What does this reaction show about the town?",
      options: [
        {
          text: "They choose comfort and conformity over listening with empathy.",
          isCorrect: true
        },
        {
          text: "They are intentionally cruel.",
          isCorrect: false
        },
        {
          text: "They understand Maurice but disagree politely.",
          isCorrect: false
        },
        {
          text: "They secretly believe him.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-24",
      source: "Beauty and the Beast",
      sceneTitle: "Starving but proud",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "IdentityTension"],
      gateIcons: ["🎨", "🎭"],
      skill: "Character Insight",
      scene:
        "Belle refuses to eat despite being hungry, choosing pride over comfort.",
      prompt: "What inner conflict does this show?",
      options: [
        {
          text: "She values self-respect more than obedience.",
          isCorrect: true
        },
        {
          text: "She wants attention from the servants.",
          isCorrect: false
        },
        {
          text: "She enjoys suffering.",
          isCorrect: false
        },
        {
          text: "She believes food is unimportant.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-25",
      source: "Beauty and the Beast",
      sceneTitle: "The servants intervene",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "SecretExchange"],
      gateIcons: ["🫂", "✉️"],
      skill: "Scene Purpose",
      scene:
        "The enchanted servants secretly help Belle eat after the Beast storms off.",
      prompt: "Why do the servants help Belle?",
      options: [
        {
          text: "They hope kindness will soften the Beast and break the curse.",
          isCorrect: true
        },
        {
          text: "They disobey the Beast out of spite.",
          isCorrect: false
        },
        {
          text: "They believe rules no longer apply.",
          isCorrect: false
        },
        {
          text: "They want Belle to escape.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-26",
      source: "Beauty and the Beast",
      sceneTitle: "The Beast watches Belle leave",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "IdentityTension"],
      gateIcons: ["🎨", "🎭"],
      skill: "Emotional Beat Shift",
      scene:
        "The Beast watches Belle ride away, believing he has lost her forever.",
      prompt: "What does this moment reveal?",
      options: [
        {
          text: "He feels regret and loneliness beneath his anger.",
          isCorrect: true
        },
        {
          text: "He plans to chase her immediately.",
          isCorrect: false
        },
        {
          text: "He feels relieved she is gone.",
          isCorrect: false
        },
        {
          text: "He believes he deserves to be alone.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-27",
      source: "Beauty and the Beast",
      sceneTitle: "Gaston’s quiet rage",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "SecretExchange"],
      gateIcons: ["🎭", "✉️"],
      skill: "Character Insight",
      scene:
        "After Belle rejects him, Gaston’s charm fades and his anger hardens.",
      prompt: "What shift occurs in Gaston?",
      options: [
        {
          text: "He moves from entitlement to resentment.",
          isCorrect: true
        },
        {
          text: "He becomes more understanding.",
          isCorrect: false
        },
        {
          text: "He begins to question himself.",
          isCorrect: false
        },
        {
          text: "He decides to leave town.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-28",
      source: "Beauty and the Beast",
      sceneTitle: "Belle defends the Beast",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Theme Connection",
      scene:
        "Belle insists that the Beast is kind, even when others refuse to believe her.",
      prompt: "What does this defense show about Belle?",
      options: [
        {
          text: "She judges others by their actions, not appearances.",
          isCorrect: true
        },
        {
          text: "She wants to provoke the villagers.",
          isCorrect: false
        },
        {
          text: "She feels obligated to protect him.",
          isCorrect: false
        },
        {
          text: "She believes monsters are misunderstood by default.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-29",
      source: "Beauty and the Beast",
      sceneTitle: "The mirror used as proof",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "WorldLogicShift"],
      gateIcons: ["✉️", "🔮"],
      skill: "Scene Purpose",
      scene:
        "Belle shows the villagers the Beast through the magic mirror.",
      prompt: "Why does this moment fail to help?",
      options: [
        {
          text: "Fear makes people reject evidence that challenges their beliefs.",
          isCorrect: true
        },
        {
          text: "The mirror does not show clearly.",
          isCorrect: false
        },
        {
          text: "The villagers do not understand magic.",
          isCorrect: false
        },
        {
          text: "Belle explains it poorly.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-30",
      source: "Beauty and the Beast",
      sceneTitle: "Maurice imprisoned",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "SecretExchange"],
      gateIcons: ["🫂", "✉️"],
      skill: "Character Motivation",
      scene:
        "Gaston locks Maurice away to silence him.",
      prompt: "What does this action reveal about Gaston?",
      options: [
        {
          text: "He values control over truth or fairness.",
          isCorrect: true
        },
        {
          text: "He wants to protect Belle.",
          isCorrect: false
        },
        {
          text: "He believes Maurice is dangerous.",
          isCorrect: false
        },
        {
          text: "He plans to release him later.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-31",
      source: "Beauty and the Beast",
      sceneTitle: "The servants losing hope",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "EmotionalContradiction"],
      gateIcons: ["📆", "🎨"],
      skill: "Theme Connection",
      scene:
        "The servants watch the rose lose petals, fearing time has run out.",
      prompt: "What emotional truth does this show?",
      options: [
        {
          text: "Hope weakens when change is delayed too long.",
          isCorrect: true
        },
        {
          text: "Magic fades naturally.",
          isCorrect: false
        },
        {
          text: "The servants want to escape.",
          isCorrect: false
        },
        {
          text: "The curse is impossible to break.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-32",
      source: "Beauty and the Beast",
      sceneTitle: "Gaston’s final fall",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "Gaston attacks the Beast even after being spared.",
      prompt: "What does this choice reveal?",
      options: [
        {
          text: "He cannot let go of pride, even when given mercy.",
          isCorrect: true
        },
        {
          text: "He is trying to defend the village.",
          isCorrect: false
        },
        {
          text: "He believes the Beast will forgive him.",
          isCorrect: false
        },
        {
          text: "He feels guilty for his actions.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-33",
      source: "Beauty and the Beast",
      sceneTitle: "Belle reaching the tower",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "EmotionalEcho"],
      gateIcons: ["🚪", "📆"],
      skill: "Scene Purpose",
      scene:
        "Belle races through the storm toward the castle.",
      prompt: "What does this urgency show?",
      options: [
        {
          text: "She has fully accepted her feelings and acts on them.",
          isCorrect: true
        },
        {
          text: "She wants to stop the fight.",
          isCorrect: false
        },
        {
          text: "She fears being alone.",
          isCorrect: false
        },
        {
          text: "She expects someone else to save him.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-batb-34",
      source: "Beauty and the Beast",
      sceneTitle: "The Beast’s final breath",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "ThresholdMoment"],
      gateIcons: ["🎨", "🚪"],
      skill: "Theme Connection",
      scene:
        "The Beast lies dying as the final petal falls.",
      prompt: "Why is this moment emotionally powerful?",
      options: [
        {
          text: "Love is realized only when it risks being too late.",
          isCorrect: true
        },
        {
          text: "The curse must end dramatically.",
          isCorrect: false
        },
        {
          text: "Belle hesitates too long.",
          isCorrect: false
        },
        {
          text: "Magic demands sacrifice.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-36",
      source: "Beauty and the Beast",
      sceneTitle: "Belle sees the prince",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "Belle looks at the prince after the transformation.",
      prompt: "Why does Belle hesitate briefly?",
      options: [
        {
          text: "She must recognize him beyond appearance.",
          isCorrect: true
        },
        {
          text: "She regrets loving the Beast.",
          isCorrect: false
        },
        {
          text: "She dislikes the prince.",
          isCorrect: false
        },
        {
          text: "She is afraid of change.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-38",
      source: "Beauty and the Beast",
      sceneTitle: "Belle dancing freely",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalEcho"],
      gateIcons: ["🎭", "📆"],
      skill: "Theme Connection",
      scene:
        "Belle dances without fear or judgment.",
      prompt: "What does this freedom show?",
      options: [
        {
          text: "She no longer defines herself by others’ expectations.",
          isCorrect: true
        },
        {
          text: "She has forgotten her village.",
          isCorrect: false
        },
        {
          text: "She wants to be admired.",
          isCorrect: false
        },
        {
          text: "She believes her story is over.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-batb-40",
      source: "Beauty and the Beast",
      sceneTitle: "A changed definition of beauty",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalEcho", "WorldLogicShift"],
      gateIcons: ["🎭", "📆", "🔮"],
      skill: "Theme Connection",
      scene:
        "The story closes on a world transformed by empathy rather than appearances.",
      prompt: "What lasting idea does the film leave the audience with?",
      options: [
        {
          text: "True beauty comes from growth, kindness, and choice.",
          isCorrect: true
        },
        {
          text: "Love fixes all problems instantly.",
          isCorrect: false
        },
        {
          text: "Magic is the most important force.",
          isCorrect: false
        },
        {
          text: "People never really change.",
          isCorrect: false
        }
      ]
    },
    
    
    
    
    {
      id: "film-frozen-5",
      source: "Frozen",
      sceneTitle: "Anna meets Hans",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Motivation",
      scene:
        "Anna quickly connects with Hans and believes she has found true love.",
      prompt: "What does this quick attachment reveal about Anna?",
      options: [
        {
          text: "She deeply longs for connection after years of loneliness.",
          isCorrect: true
        },
        {
          text: "She carefully evaluates relationships.",
          isCorrect: false
        },
        {
          text: "She wants to rebel against Elsa.",
          isCorrect: false
        },
        {
          text: "She understands love very clearly already.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-6",
      source: "Frozen",
      sceneTitle: "Elsa’s powers revealed",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎭", "🎨"],
      skill: "Scene Purpose",
      scene:
        "Elsa’s ice powers burst out during the coronation argument.",
      prompt: "Why is this moment so powerful?",
      options: [
        {
          text: "Elsa’s deepest fear becomes public all at once.",
          isCorrect: true
        },
        {
          text: "Elsa wants to scare everyone.",
          isCorrect: false
        },
        {
          text: "Magic suddenly stops working.",
          isCorrect: false
        },
        {
          text: "The argument is unimportant.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-7",
      source: "Frozen",
      sceneTitle: "Running into the storm",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎨"],
      skill: "Character Motivation",
      scene:
        "Elsa flees into the mountains, frightened but relieved.",
      prompt: "What mixed emotion drives Elsa forward?",
      options: [
        {
          text: "Fear of hurting others and relief at being alone.",
          isCorrect: true
        },
        {
          text: "Anger at Anna.",
          isCorrect: false
        },
        {
          text: "Excitement about ruling alone.",
          isCorrect: false
        },
        {
          text: "Confidence that nothing can go wrong.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-8",
      source: "Frozen",
      sceneTitle: "Let It Go",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "WorldLogicShift", "ThresholdMoment"],
      gateIcons: ["🎭", "🔮", "🚪"],
      skill: "Theme Connection",
      scene:
        "Elsa builds an ice palace and declares she will no longer hide.",
      prompt: "What does this declaration truly represent?",
      options: [
        {
          text: "A step toward self-acceptance that is still incomplete.",
          isCorrect: true
        },
        {
          text: "A full emotional healing.",
          isCorrect: false
        },
        {
          text: "A rejection of all responsibility.",
          isCorrect: false
        },
        {
          text: "A desire to rule with fear.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-9",
      source: "Frozen",
      sceneTitle: "Anna won’t give up",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "ThresholdMoment"],
      gateIcons: ["🫂", "🚪"],
      skill: "Character Motivation",
      scene:
        "Anna sets out alone to find Elsa, despite the danger.",
      prompt: "Why does Anna keep going?",
      options: [
        {
          text: "She believes their bond is worth the risk.",
          isCorrect: true
        },
        {
          text: "She wants to prove Elsa wrong.",
          isCorrect: false
        },
        {
          text: "She expects the journey to be easy.",
          isCorrect: false
        },
        {
          text: "She wants adventure more than family.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-frozen-11",
      source: "Frozen",
      sceneTitle: "Elsa rejects Anna",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["🫂", "🎨"],
      skill: "Emotional Beat Shift",
      scene:
        "Elsa pushes Anna away, accidentally freezing her heart.",
      prompt: "Why does Elsa push Anna away?",
      options: [
        {
          text: "She believes distance will keep Anna safe.",
          isCorrect: true
        },
        {
          text: "She no longer loves her.",
          isCorrect: false
        },
        {
          text: "She wants to stay queen alone.",
          isCorrect: false
        },
        {
          text: "She is angry and wants revenge.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-12",
      source: "Frozen",
      sceneTitle: "The wrong idea of true love",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "SecretExchange"],
      gateIcons: ["🎭", "✉️"],
      skill: "Theme Connection",
      scene:
        "Anna believes a kiss from Hans will save her.",
      prompt: "What mistaken belief is shown here?",
      options: [
        {
          text: "Love is something received, not something chosen.",
          isCorrect: true
        },
        {
          text: "Romance is dangerous.",
          isCorrect: false
        },
        {
          text: "Anna does not care about Elsa.",
          isCorrect: false
        },
        {
          text: "Magic always needs a prince.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-13",
      source: "Frozen",
      sceneTitle: "Hans revealed",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["SecretExchange", "RelationshipShift", "EmotionalContradiction"],
      gateIcons: ["✉️", "🫂", "🎨"],
      skill: "Theme Connection",
      scene:
        "Hans reveals his true intentions, abandoning Anna.",
      prompt: "What does this reveal about his character?",
      options: [
        {
          text: "He uses charm as a mask for ambition.",
          isCorrect: true
        },
        {
          text: "He was misunderstood all along.",
          isCorrect: false
        },
        {
          text: "He changed suddenly for no reason.",
          isCorrect: false
        },
        {
          text: "He believes Anna is too weak.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-14",
      source: "Frozen",
      sceneTitle: "Olaf’s sacrifice",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      skill: "Theme Connection",
      scene:
        "Olaf stays with Anna as she freezes, even though it risks his own life.",
      prompt: "Why is Olaf’s choice important?",
      options: [
        {
          text: "It shows love means caring for others over yourself.",
          isCorrect: true
        },
        {
          text: "He does not understand danger.",
          isCorrect: false
        },
        {
          text: "He expects Elsa to arrive immediately.",
          isCorrect: false
        },
        {
          text: "He is immune to cold.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-15",
      source: "Frozen",
      sceneTitle: "Anna turns away",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "EmotionalEcho"],
      gateIcons: ["🚪", "📆"],
      skill: "Scene Purpose",
      scene:
        "Anna turns away from Hans to save Elsa instead.",
      prompt: "What makes this the true act of love?",
      options: [
        {
          text: "It is freely chosen without expecting anything in return.",
          isCorrect: true
        },
        {
          text: "It happens by accident.",
          isCorrect: false
        },
        {
          text: "It is driven by anger.",
          isCorrect: false
        },
        {
          text: "It only works because of magic.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-16",
      source: "Frozen",
      sceneTitle: "Elsa learns the truth",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "WorldLogicShift"],
      gateIcons: ["🎭", "🔮"],
      skill: "Theme Connection",
      scene:
        "Elsa realizes love—not fear—controls her powers.",
      prompt: "What realization changes Elsa’s future?",
      options: [
        {
          text: "Accepting love allows her to control her magic.",
          isCorrect: true
        },
        {
          text: "Magic disappears when fear is gone.",
          isCorrect: false
        },
        {
          text: "Anna saved her accidentally.",
          isCorrect: false
        },
        {
          text: "Powers must always be hidden.",
          isCorrect: false
        }
      ]
    },
    
    
    {
      id: "film-frozen-19",
      source: "Frozen",
      sceneTitle: "Elsa ruling with balance",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      skill: "Character Insight",
      scene:
        "Elsa uses her powers openly while listening to her people.",
      prompt: "What leadership change does this show?",
      options: [
        {
          text: "She leads by trust and connection, not control.",
          isCorrect: true
        },
        {
          text: "She rules through power.",
          isCorrect: false
        },
        {
          text: "She ignores responsibility.",
          isCorrect: false
        },
        {
          text: "She hides her abilities again.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-20",
      source: "Frozen",
      sceneTitle: "A warmer kingdom",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "WorldLogicShift"],
      gateIcons: ["📆", "🔮"],
      skill: "Theme Connection",
      scene:
        "The kingdom thrives in peace, shaped by honesty and love.",
      prompt: "What lasting message does the ending leave?",
      options: [
        {
          text: "Love and openness create lasting harmony.",
          isCorrect: true
        },
        {
          text: "Magic is the strongest force of all.",
          isCorrect: false
        },
        {
          text: "Fear is necessary for safety.",
          isCorrect: false
        },
        {
          text: "Change only comes from power.",
          isCorrect: false
        }
      ]
    },
    
    
    {
      id: "film-frozen-23",
      source: "Frozen",
      sceneTitle: "Elsa avoiding touch",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      skill: "Character Insight",
      scene:
        "Elsa stiffens when people approach her during the coronation.",
      prompt: "Why does Elsa react this way?",
      options: [
        {
          text: "She fears hurting others even during joyful moments.",
          isCorrect: true
        },
        {
          text: "She dislikes celebrations.",
          isCorrect: false
        },
        {
          text: "She believes queens should remain distant.",
          isCorrect: false
        },
        {
          text: "She wants to leave the party early.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-24",
      source: "Frozen",
      sceneTitle: "Anna’s rushed engagement",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "ThresholdMoment"],
      gateIcons: ["🎭", "🚪"],
      skill: "Character Motivation",
      scene:
        "Anna eagerly agrees to marry Hans after knowing him for one day.",
      prompt: "What motivates Anna’s quick decision?",
      options: [
        {
          text: "A deep desire to feel chosen and loved.",
          isCorrect: true
        },
        {
          text: "A careful plan for ruling Arendelle.",
          isCorrect: false
        },
        {
          text: "Pressure from the guests.",
          isCorrect: false
        },
        {
          text: "A belief that love is simple.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-25",
      source: "Frozen",
      sceneTitle: "Elsa freezes the room",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      skill: "Scene Purpose",
      scene:
        "During the argument with Anna, ice spreads across the ballroom.",
      prompt: "What does the spreading ice reflect?",
      options: [
        {
          text: "Elsa’s fear spilling outward into the world.",
          isCorrect: true
        },
        {
          text: "Anger meant to punish Anna.",
          isCorrect: false
        },
        {
          text: "A loss of magic entirely.",
          isCorrect: false
        },
        {
          text: "A deliberate act of power.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-26",
      source: "Frozen",
      sceneTitle: "Elsa alone on the mountain",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "EmotionalEcho"],
      gateIcons: ["🎭", "📆"],
      skill: "Scene Purpose",
      scene:
        "Elsa builds her palace far from everyone else.",
      prompt: "Why does Elsa choose isolation?",
      options: [
        {
          text: "She believes distance is the safest way to protect others.",
          isCorrect: true
        },
        {
          text: "She wants to rule from afar.",
          isCorrect: false
        },
        {
          text: "She enjoys being lonely.",
          isCorrect: false
        },
        {
          text: "She believes Anna betrayed her.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-27",
      source: "Frozen",
      sceneTitle: "Kristoff’s lonely upbringing",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "EmotionalEcho"],
      gateIcons: ["🎭", "📆"],
      skill: "Character Insight",
      scene:
        "Kristoff recalls being raised by trolls instead of humans.",
      prompt: "How does this shape Kristoff?",
      options: [
        {
          text: "He struggles with connection but deeply values loyalty.",
          isCorrect: true
        },
        {
          text: "He dislikes people entirely.",
          isCorrect: false
        },
        {
          text: "He prefers isolation to companionship.",
          isCorrect: false
        },
        {
          text: "He wants to live among trolls forever.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-28",
      source: "Frozen",
      sceneTitle: "Kristoff challenges Anna",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      skill: "Character Motivation",
      scene:
        "Kristoff questions Anna’s idea of love during their journey.",
      prompt: "Why does Kristoff speak up?",
      options: [
        {
          text: "He wants Anna to think more deeply about what love really means.",
          isCorrect: true
        },
        {
          text: "He wants to embarrass her.",
          isCorrect: false
        },
        {
          text: "He is jealous of Hans.",
          isCorrect: false
        },
        {
          text: "He dislikes romance.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-frozen-30",
      source: "Frozen",
      sceneTitle: "Anna struck again",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "RelationshipShift"],
      gateIcons: ["📆", "🫂"],
      skill: "Theme Connection",
      scene:
        "Anna is struck in the heart a second time, echoing her childhood injury.",
      prompt: "Why is this repetition meaningful?",
      options: [
        {
          text: "It shows the same fear-driven pattern repeating on a larger scale.",
          isCorrect: true
        },
        {
          text: "It proves Elsa has not changed.",
          isCorrect: false
        },
        {
          text: "It means magic is uncontrollable.",
          isCorrect: false
        },
        {
          text: "It happens by coincidence.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-31",
      source: "Frozen",
      sceneTitle: "Hans taking charge",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["SecretExchange", "RelationshipShift"],
      gateIcons: ["✉️", "🫂"],
      skill: "Character Insight",
      scene:
        "Hans steps forward as a leader while Elsa is gone.",
      prompt: "What warning sign appears here?",
      options: [
        {
          text: "He gains trust without revealing his true intentions.",
          isCorrect: true
        },
        {
          text: "He shows genuine care for Anna.",
          isCorrect: false
        },
        {
          text: "He sacrifices his power.",
          isCorrect: false
        },
        {
          text: "He refuses responsibility.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-32",
      source: "Frozen",
      sceneTitle: "Elsa imprisoned",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "ThresholdMoment"],
      gateIcons: ["🎭", "🚪"],
      skill: "Character Motivation",
      scene:
        "Elsa is chained and restrained after being captured.",
      prompt: "What is Elsa most afraid of here?",
      options: [
        {
          text: "Losing control and hurting others again.",
          isCorrect: true
        },
        {
          text: "Never seeing Anna again.",
          isCorrect: false
        },
        {
          text: "Losing her crown.",
          isCorrect: false
        },
        {
          text: "Being judged by strangers.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-33",
      source: "Frozen",
      sceneTitle: "Anna choosing Kristoff",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["RelationshipShift", "ThresholdMoment"],
      gateIcons: ["🫂", "🚪"],
      skill: "Character Growth",
      scene:
        "Anna turns toward Kristoff instead of Hans for help.",
      prompt: "What change does this show in Anna?",
      options: [
        {
          text: "She has learned to trust actions over appearances.",
          isCorrect: true
        },
        {
          text: "She no longer believes in love.",
          isCorrect: false
        },
        {
          text: "She is acting out of jealousy.",
          isCorrect: false
        },
        {
          text: "She wants revenge on Hans.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-34",
      source: "Frozen",
      sceneTitle: "The storm intensifies",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      skill: "Symbolism",
      scene:
        "The blizzard worsens as Elsa’s fear grows.",
      prompt: "What does the storm symbolize?",
      options: [
        {
          text: "Elsa’s emotions affecting the world around her.",
          isCorrect: true
        },
        {
          text: "Nature’s revenge.",
          isCorrect: false
        },
        {
          text: "A punishment from magic.",
          isCorrect: false
        },
        {
          text: "A test for Anna.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-35",
      source: "Frozen",
      sceneTitle: "Hans raises the sword",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "SecretExchange"],
      gateIcons: ["🚪", "✉️"],
      skill: "Scene Purpose",
      scene:
        "Hans prepares to strike Elsa as Anna freezes nearby.",
      prompt: "What choice defines this moment?",
      options: [
        {
          text: "Power without empathy leads to cruelty.",
          isCorrect: true
        },
        {
          text: "Justice requires strength.",
          isCorrect: false
        },
        {
          text: "Elsa deserves punishment.",
          isCorrect: false
        },
        {
          text: "Anna will be saved anyway.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-36",
      source: "Frozen",
      sceneTitle: "Anna between danger and love",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎨"],
      skill: "Theme Connection",
      scene:
        "Anna steps between Elsa and Hans as she turns to ice.",
      prompt: "Why does this act succeed?",
      options: [
        {
          text: "It is a selfless choice made without expectation.",
          isCorrect: true
        },
        {
          text: "Magic intervenes automatically.",
          isCorrect: false
        },
        {
          text: "Hans hesitates too long.",
          isCorrect: false
        },
        {
          text: "Elsa regains control instantly.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-37",
      source: "Frozen",
      sceneTitle: "Elsa breaking the freeze",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["WorldLogicShift", "IdentityTension"],
      gateIcons: ["🔮", "🎭"],
      skill: "Theme Connection",
      scene:
        "Elsa hugs Anna, melting the ice.",
      prompt: "What truth does Elsa finally understand?",
      options: [
        {
          text: "Love allows her to control her powers safely.",
          isCorrect: true
        },
        {
          text: "Magic disappears with fear.",
          isCorrect: false
        },
        {
          text: "Isolation was the right choice.",
          isCorrect: false
        },
        {
          text: "She no longer needs others.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-frozen-39",
      source: "Frozen",
      sceneTitle: "Kristoff’s quiet wait",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      skill: "Character Insight",
      scene:
        "Kristoff waits without demanding anything from Anna.",
      prompt: "What does this patience reveal?",
      options: [
        {
          text: "He respects Anna’s agency and feelings.",
          isCorrect: true
        },
        {
          text: "He expects rejection.",
          isCorrect: false
        },
        {
          text: "He lacks confidence.",
          isCorrect: false
        },
        {
          text: "He does not care deeply.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-frozen-40",
      source: "Frozen",
      sceneTitle: "Arendelle transformed",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "WorldLogicShift", "RelationshipShift"],
      gateIcons: ["📆", "🔮", "🫂"],
      skill: "Theme Connection",
      scene:
        "The kingdom thrives with openness, warmth, and connection.",
      prompt: "What lasting change does the story leave behind?",
      options: [
        {
          text: "A community rebuilt on trust rather than fear.",
          isCorrect: true
        },
        {
          text: "Magic as the main source of safety.",
          isCorrect: false
        },
        {
          text: "Isolation as the best protection.",
          isCorrect: false
        },
        {
          text: "Leadership without vulnerability.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-aladdin-01",
      source: "Aladdin (1992)",
      sceneTitle: "One Jump Ahead",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      primaryRuleset: "TheoryOfMind",
      skill: "Character Motivation",
      scene:
        "As Aladdin runs from the guards through the marketplace, he jokes, sings, and shows off clever tricks, even while clearly in danger.",
      prompt: "Why does Aladdin act playful instead of scared in this moment?",
      options: [
        {
          text: "He uses confidence and humor to hide fear and keep control of the situation.",
          isCorrect: true
        },
        {
          text: "He does not realize the guards are chasing him.",
          isCorrect: false
        },
        {
          text: "He enjoys being chased because it makes him famous.",
          isCorrect: false
        },
        {
          text: "He believes the guards are pretending as part of a game.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-02",
      source: "Aladdin (1992)",
      sceneTitle: "A Whole New World — the first flight",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      primaryRuleset: "DialogueAndSubtext",
      skill: "Relationship Change",
      scene:
        "As Aladdin and Jasmine soar over the city on the magic carpet, they begin to trust each other, sharing quiet looks and laughter.",
      prompt: "What changes between Aladdin and Jasmine during this flight?",
      options: [
        {
          text: "They begin to see each other as equals rather than as a thief and a princess.",
          isCorrect: true
        },
        {
          text: "They decide to stop talking so the carpet can fly faster.",
          isCorrect: false
        },
        {
          text: "Jasmine realizes she prefers traveling alone.",
          isCorrect: false
        },
        {
          text: "Aladdin becomes less interested in impressing her.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-03",
      source: "Aladdin (1992)",
      sceneTitle: "Prince Ali arrives",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "CulturalSignification"],
      gateIcons: ["🎭", "🏛️"],
      primaryRuleset: "CulturalSignification",
      skill: "Theme Connection",
      scene:
        "Disguised as Prince Ali, Aladdin enters Agrabah with riches, music, and spectacle meant to signal importance.",
      prompt: "What belief about worth is Aladdin relying on in this scene?",
      options: [
        {
          text: "That wealth and status are what earn respect and attention.",
          isCorrect: true
        },
        {
          text: "That Jasmine only likes loud music.",
          isCorrect: false
        },
        {
          text: "That the Genie enjoys putting on parades.",
          isCorrect: false
        },
        {
          text: "That the Sultan dislikes simple appearances.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-04",
      source: "Aladdin (1992)",
      sceneTitle: "Jasmine rejects Prince Ali",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["IdentityTension", "EmotionalContradiction"],
      gateIcons: ["🎭", "🎨"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "CulturalSignification",
      skill: "Character Motivation",
      scene:
        "Jasmine dismisses Prince Ali, unimpressed by his riches, even as Aladdin grows more desperate to impress her.",
      prompt: "Why does Aladdin misjudge what Jasmine values?",
      options: [
        {
          text: "He assumes social status matters to her because it has always mattered to him.",
          isCorrect: true
        },
        {
          text: "He forgets that Jasmine enjoys traveling.",
          isCorrect: false
        },
        {
          text: "He believes the Genie made a mistake.",
          isCorrect: false
        },
        {
          text: "He thinks Jasmine dislikes music and celebration.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-05",
      source: "Aladdin (1992)",
      sceneTitle: "The forbidden wish",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["SecretExchange", "IdentityTension"],
      gateIcons: ["✉️", "🎭"],
      primaryRuleset: "NarrativeOmission",
      pairedRuleset: "TheoryOfMind",
      skill: "Theme Connection",
      scene:
        "Aladdin quietly wishes to remain a prince, despite promising the Genie freedom, avoiding a direct confrontation.",
      prompt: "What does Aladdin’s silence reveal about his inner conflict?",
      options: [
        {
          text: "He wants to be honest but is afraid that the truth will cost him love and belonging.",
          isCorrect: true
        },
        {
          text: "He forgets the Genie asked to be freed.",
          isCorrect: false
        },
        {
          text: "He believes wishes do not affect relationships.",
          isCorrect: false
        },
        {
          text: "He thinks the Genie enjoys serving him.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-06",
      source: "Aladdin (1992)",
      sceneTitle: "Jafar as the trusted advisor",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["SecretExchange", "RelationshipShift"],
      gateIcons: ["✉️", "🫂"],
      primaryRuleset: "TheoryOfMind",
      skill: "Character Perspective",
      scene:
        "Jafar speaks calmly and politely to the Sultan while quietly manipulating events behind the scenes.",
      prompt: "How does Jafar maintain power without open force?",
      options: [
        {
          text: "By shaping what others believe while hiding his true intentions.",
          isCorrect: true
        },
        {
          text: "By openly threatening everyone in the palace.",
          isCorrect: false
        },
        {
          text: "By refusing to speak unless asked.",
          isCorrect: false
        },
        {
          text: "By pretending to be confused.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-07",
      source: "Aladdin (1992)",
      sceneTitle: "Jasmine in disguise",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "CulturalSignification"],
      gateIcons: ["🎭", "🏛️"],
      primaryRuleset: "CulturalSignification",
      skill: "Symbolism",
      scene:
        "Jasmine dresses as a commoner and walks through the marketplace without protection.",
      prompt: "What does Jasmine’s disguise allow her to experience?",
      options: [
        {
          text: "Life without royal rules and expectations shaping every interaction.",
          isCorrect: true
        },
        {
          text: "Freedom from all responsibility forever.",
          isCorrect: false
        },
        {
          text: "A chance to avoid speaking to anyone.",
          isCorrect: false
        },
        {
          text: "An opportunity to steal without consequence.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-08",
      source: "Aladdin (1992)",
      sceneTitle: "Genie’s performance",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      primaryRuleset: "DialogueAndSubtext",
      skill: "Character Motivation",
      scene:
        "The Genie jokes constantly, entertaining everyone while quietly reminding Aladdin of his promise.",
      prompt: "Why does the Genie mix humor with seriousness?",
      options: [
        {
          text: "He hides disappointment behind humor to keep the relationship friendly.",
          isCorrect: true
        },
        {
          text: "He cannot stop joking even when upset.",
          isCorrect: false
        },
        {
          text: "He believes Aladdin will not listen otherwise.",
          isCorrect: false
        },
        {
          text: "He enjoys confusing people.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-09",
      source: "Aladdin (1992)",
      sceneTitle: "Jafar’s final wish",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["WorldLogicShift", "IdentityTension"],
      gateIcons: ["🔮", "🎭"],
      primaryRuleset: "CulturalSignification",
      pairedRuleset: "NarrativeOmission",
      skill: "Theme Connection",
      scene:
        "Jafar wishes to become the most powerful being, not realizing the cost of endless confinement.",
      prompt: "What deeper idea does Jafar’s fate reinforce?",
      options: [
        {
          text: "Power without freedom becomes another form of imprisonment.",
          isCorrect: true
        },
        {
          text: "Magic always backfires randomly.",
          isCorrect: false
        },
        {
          text: "Villains are unlucky by nature.",
          isCorrect: false
        },
        {
          text: "Wishes should never be made.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-aladdin-10",
      source: "Aladdin (1992)",
      sceneTitle: "Setting the Genie free",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "EmotionalEcho",
      skill: "Theme Connection",
      scene:
        "Aladdin uses his final wish to free the Genie, changing both of their futures.",
      prompt: "Why is this choice the true resolution of Aladdin’s arc?",
      options: [
        {
          text: "He chooses honesty and friendship over status and fear.",
          isCorrect: true
        },
        {
          text: "He realizes he no longer needs magic.",
          isCorrect: false
        },
        {
          text: "He wants to avoid making another wish.",
          isCorrect: false
        },
        {
          text: "He believes the Genie will stay anyway.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-pets-01",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Max waits by the door",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "IdentityTension"],
      gateIcons: ["📆", "🎭"],
      primaryRuleset: "TheoryOfMind",
      skill: "Emotional Inference",
      scene:
        "Every day, Max waits patiently for Katie to return home, watching the door even when nothing happens.",
      prompt: "What does this repeated behavior show about Max?",
      options: [
        {
          text: "His sense of identity is built around loyalty and routine.",
          isCorrect: true
        },
        {
          text: "He expects Katie to forget him.",
          isCorrect: false
        },
        {
          text: "He dislikes playing with other pets.",
          isCorrect: false
        },
        {
          text: "He believes the door will open on its own.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-02",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Duke arrives",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "EmotionalContradiction",
      skill: "Character Motivation",
      scene:
        "When Duke enters the apartment, Max reacts with forced politeness masking growing resentment.",
      prompt: "Why does Max struggle to accept Duke?",
      options: [
        {
          text: "He fears losing his special place in Katie’s life.",
          isCorrect: true
        },
        {
          text: "He dislikes Duke’s personality.",
          isCorrect: false
        },
        {
          text: "He prefers being alone all day.",
          isCorrect: false
        },
        {
          text: "He does not understand who Duke is.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-03",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "The walk gone wrong",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "RelationshipShift"],
      gateIcons: ["🚪", "🫂"],
      primaryRuleset: "NarrativeCausality",
      skill: "Cause and Effect",
      scene:
        "Max and Duke’s rivalry leads them away from their neighborhood and into danger.",
      prompt: "What causes this situation to escalate so quickly?",
      options: [
        {
          text: "Their inability to cooperate turns small tension into real risk.",
          isCorrect: true
        },
        {
          text: "They forget where they live.",
          isCorrect: false
        },
        {
          text: "Other pets trick them.",
          isCorrect: false
        },
        {
          text: "They enjoy exploring the city.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-04",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Snowball’s speeches",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["CulturalSignification", "DialogueAndSubtext"],
      gateIcons: ["🏛️", "💬"],
      primaryRuleset: "DialogueAndSubtext",
      pairedRuleset: "CulturalSignification",
      skill: "Tone Interpretation",
      scene:
        "Snowball delivers dramatic speeches about abandoned pets, mixing charm with anger.",
      prompt: "Why is Snowball’s tone both funny and unsettling?",
      options: [
        {
          text: "His playful delivery hides genuine pain and resentment.",
          isCorrect: true
        },
        {
          text: "He is pretending to be serious for attention.",
          isCorrect: false
        },
        {
          text: "He does not understand his own words.",
          isCorrect: false
        },
        {
          text: "The other pets misunderstand him.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-05",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Gidget watches from afar",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "SecretExchange"],
      gateIcons: ["🎨", "✉️"],
      primaryRuleset: "TheoryOfMind",
      skill: "Character Perspective",
      scene:
        "Gidget observes Max closely but never tells him how she feels.",
      prompt: "Why does Gidget keep her feelings hidden?",
      options: [
        {
          text: "She fears that revealing them could change their relationship.",
          isCorrect: true
        },
        {
          text: "She believes Max would not listen.",
          isCorrect: false
        },
        {
          text: "She is unsure what she feels.",
          isCorrect: false
        },
        {
          text: "She wants to surprise him later.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-06",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Duke’s backstory",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["IdentityTension", "NarrativeOmission"],
      gateIcons: ["🎭", "🕳️"],
      primaryRuleset: "NarrativeOmission",
      pairedRuleset: "TheoryOfMind",
      skill: "Character Arc",
      scene:
        "Duke briefly shares his experience of being abandoned, without dwelling on details.",
      prompt: "Why does the story keep Duke’s pain understated?",
      options: [
        {
          text: "It allows the audience to infer the depth of his loss without explicit explanation.",
          isCorrect: true
        },
        {
          text: "The experience is not important to the plot.",
          isCorrect: false
        },
        {
          text: "Duke does not remember what happened.",
          isCorrect: false
        },
        {
          text: "The story wants to avoid sympathy.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-07",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "The Flushed Pets",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "CulturalSignification"],
      gateIcons: ["🔮", "🏛️"],
      primaryRuleset: "CulturalSignification",
      skill: "World-Building",
      scene:
        "Abandoned pets form their own underground society beneath the city.",
      prompt: "What idea does this hidden world represent?",
      options: [
        {
          text: "Those pushed aside create their own systems of belonging.",
          isCorrect: true
        },
        {
          text: "The city is more dangerous underground.",
          isCorrect: false
        },
        {
          text: "Pets prefer living without humans.",
          isCorrect: false
        },
        {
          text: "Rules do not exist without owners.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-08",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Max chooses Duke",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["RelationshipShift", "ThresholdMoment"],
      gateIcons: ["🫂", "🚪"],
      primaryRuleset: "RelationshipShift",
      pairedRuleset: "IdentityTension",
      skill: "Judgment",
      scene:
        "Max risks himself to save Duke during a dangerous moment.",
      prompt: "Why is this choice a turning point for Max?",
      options: [
        {
          text: "He values loyalty over fear of replacement.",
          isCorrect: true
        },
        {
          text: "He realizes Duke is stronger.",
          isCorrect: false
        },
        {
          text: "He wants Katie to praise him.",
          isCorrect: false
        },
        {
          text: "He believes escape is impossible alone.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-09",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Snowball’s sudden kindness",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["EmotionalContradiction", "RelationshipShift"],
      gateIcons: ["🎨", "🫂"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "EmotionalContradiction",
      skill: "Character Judgment",
      scene:
        "Snowball unexpectedly helps Max and Duke despite earlier threats.",
      prompt: "What motivates Snowball’s shift?",
      options: [
        {
          text: "He responds to shared experience of abandonment.",
          isCorrect: true
        },
        {
          text: "He changes his mind randomly.",
          isCorrect: false
        },
        {
          text: "He wants revenge on other pets.",
          isCorrect: false
        },
        {
          text: "He becomes afraid of humans.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-10",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Gidget’s rescue mission",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "IdentityTension"],
      gateIcons: ["🫂", "🎭"],
      primaryRuleset: "IdentityTension",
      skill: "Character Motivation",
      scene:
        "Gidget organizes other pets to help find Max.",
      prompt: "What does this action reveal about Gidget?",
      options: [
        {
          text: "Her quiet affection turns into determined leadership.",
          isCorrect: true
        },
        {
          text: "She enjoys controlling others.",
          isCorrect: false
        },
        {
          text: "She wants attention.",
          isCorrect: false
        },
        {
          text: "She dislikes being alone.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-11",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "The city feels hostile",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalContradiction"],
      gateIcons: ["🔮", "🎨"],
      primaryRuleset: "Symbolism",
      skill: "Mood Interpretation",
      scene:
        "Familiar city spaces become threatening when Max is lost.",
      prompt: "Why does the environment feel different?",
      options: [
        {
          text: "Fear changes how safe places are perceived.",
          isCorrect: true
        },
        {
          text: "The city physically changes.",
          isCorrect: false
        },
        {
          text: "Max imagines danger everywhere.",
          isCorrect: false
        },
        {
          text: "The pets enter a new city.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-12",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "The leash as a symbol",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["Symbolism", "IdentityTension"],
      gateIcons: ["🔮", "🎭"],
      primaryRuleset: "Symbolism",
      pairedRuleset: "CulturalSignification",
      skill: "Theme Connection",
      scene:
        "Leashes appear as both safety and restriction throughout the film.",
      prompt: "What do leashes most strongly represent?",
      options: [
        {
          text: "Care that comes with limits.",
          isCorrect: true
        },
        {
          text: "Loss of freedom only.",
          isCorrect: false
        },
        {
          text: "Punishment for pets.",
          isCorrect: false
        },
        {
          text: "Obedience without affection.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-13",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Max returns home",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["EmotionalEcho", "ThresholdMoment"],
      gateIcons: ["📆", "🚪"],
      primaryRuleset: "EmotionalEcho",
      pairedRuleset: "IdentityTension",
      skill: "Character Arc",
      scene:
        "Max finally returns to the apartment, changed by the journey.",
      prompt: "How has Max’s understanding of home shifted?",
      options: [
        {
          text: "Home becomes a place shared with others, not a position to defend.",
          isCorrect: true
        },
        {
          text: "Home feels smaller than before.",
          isCorrect: false
        },
        {
          text: "Home no longer matters.",
          isCorrect: false
        },
        {
          text: "Home must be protected from strangers.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-14",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Duke stays",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["RelationshipShift", "EmotionalEcho"],
      gateIcons: ["🫂", "📆"],
      primaryRuleset: "RelationshipShift",
      skill: "Relationship Arc",
      scene:
        "Duke chooses to remain with Max rather than leave.",
      prompt: "Why is this choice meaningful?",
      options: [
        {
          text: "It shows trust replacing survival instincts.",
          isCorrect: true
        },
        {
          text: "He has nowhere else to go.",
          isCorrect: false
        },
        {
          text: "He wants approval.",
          isCorrect: false
        },
        {
          text: "He enjoys conflict.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-15",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Snowball after the conflict",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["NarrativeOmission", "EmotionalEcho"],
      gateIcons: ["🕳️", "📆"],
      primaryRuleset: "NarrativeOmission",
      pairedRuleset: "TheoryOfMind",
      skill: "Inference",
      scene:
        "Snowball’s future is hinted at but not fully explained.",
      prompt: "Why does the film leave Snowball’s outcome open?",
      options: [
        {
          text: "To suggest change is possible without spelling it out.",
          isCorrect: true
        },
        {
          text: "Because the story forgets him.",
          isCorrect: false
        },
        {
          text: "Because he is unimportant.",
          isCorrect: false
        },
        {
          text: "Because the ending was rushed.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-16",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Pets watching owners leave",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "EmotionalEcho"],
      gateIcons: ["🎨", "📆"],
      primaryRuleset: "EmotionalEcho",
      skill: "Emotional Tracking",
      scene:
        "Pets react differently as their owners leave for the day.",
      prompt: "What does this pattern highlight?",
      options: [
        {
          text: "Each pet copes with separation in a personal way.",
          isCorrect: true
        },
        {
          text: "Some pets enjoy being alone.",
          isCorrect: false
        },
        {
          text: "Owners are unaware of pets’ feelings.",
          isCorrect: false
        },
        {
          text: "Leaving is always sad.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-17",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "The apartment hierarchy",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["CulturalSignification", "RelationshipShift"],
      gateIcons: ["🏛️", "🫂"],
      primaryRuleset: "CulturalSignification",
      pairedRuleset: "TheoryOfMind",
      skill: "Social Structure",
      scene:
        "Pets organize themselves socially when humans are gone.",
      prompt: "What does this suggest about social order?",
      options: [
        {
          text: "Communities form naturally around shared needs and roles.",
          isCorrect: true
        },
        {
          text: "Rules disappear without authority.",
          isCorrect: false
        },
        {
          text: "Pets prefer chaos.",
          isCorrect: false
        },
        {
          text: "Only leaders matter.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-18",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Risking exposure",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "SecretExchange"],
      gateIcons: ["🚪", "✉️"],
      primaryRuleset: "TheoryOfMind",
      skill: "Decision Making",
      scene:
        "The pets risk being seen to help one another.",
      prompt: "Why is this risk justified?",
      options: [
        {
          text: "Protecting relationships matters more than safety.",
          isCorrect: true
        },
        {
          text: "They forget the rules.",
          isCorrect: false
        },
        {
          text: "They enjoy being noticed.",
          isCorrect: false
        },
        {
          text: "They misjudge the danger.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-19",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Max forgives Duke",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["RelationshipShift", "EmotionalEcho"],
      gateIcons: ["🫂", "📆"],
      primaryRuleset: "RelationshipShift",
      pairedRuleset: "TheoryOfMind",
      skill: "Judgment",
      scene:
        "Max releases resentment toward Duke after understanding his past.",
      prompt: "What enables forgiveness here?",
      options: [
        {
          text: "Empathy reshapes how past behavior is understood.",
          isCorrect: true
        },
        {
          text: "Time alone heals conflict.",
          isCorrect: false
        },
        {
          text: "Duke apologizes perfectly.",
          isCorrect: false
        },
        {
          text: "Max forgets what happened.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-pets-20",
      source: "The Secret Life of Pets (2016)",
      sceneTitle: "Life returns to normal",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "NarrativeOmission"],
      gateIcons: ["📆", "🕳️"],
      primaryRuleset: "NarrativeOmission",
      skill: "Ending Interpretation",
      scene:
        "Daily routines resume, but relationships feel different.",
      prompt: "Why does the ending avoid dramatic change?",
      options: [
        {
          text: "Growth is shown through subtle shifts rather than spectacle.",
          isCorrect: true
        },
        {
          text: "Nothing important happened.",
          isCorrect: false
        },
        {
          text: "The film ends quickly.",
          isCorrect: false
        },
        {
          text: "The pets forget the adventure.",
          isCorrect: false
        }
      ]
    },
    {
      id: "film-homealone-01",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin is sent to the attic",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      primaryRuleset: "TheoryOfMind",
      skill: "Character Motivation",
      scene:
        "After an argument, Kevin is sent to sleep in the attic, feeling misunderstood and pushed aside.",
      prompt: "Why does this punishment feel especially painful to Kevin?",
      options: [
        {
          text: "It confirms his fear that his family does not really listen to him.",
          isCorrect: true
        },
        {
          text: "He dislikes sleeping anywhere unfamiliar.",
          isCorrect: false
        },
        {
          text: "He is afraid of the attic itself.",
          isCorrect: false
        },
        {
          text: "He believes the attic is unfairly cold.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-02",
      source: "Home Alone (1990)",
      sceneTitle: "The wish comes true",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎨"],
      primaryRuleset: "NarrativeOmission",
      pairedRuleset: "TheoryOfMind",
      skill: "Theme Connection",
      scene:
        "Kevin wakes up to an empty house after wishing his family would disappear.",
      prompt: "Why does this moment feel exciting and unsettling at the same time?",
      options: [
        {
          text: "His desire for independence collides with the sudden reality of being alone.",
          isCorrect: true
        },
        {
          text: "He believes the house is haunted.",
          isCorrect: false
        },
        {
          text: "He thinks his family is playing a trick.",
          isCorrect: false
        },
        {
          text: "He immediately regrets his wish.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-03",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin shops alone",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["IdentityTension", "CulturalSignification"],
      gateIcons: ["🎭", "🏛️"],
      primaryRuleset: "CulturalSignification",
      skill: "Theme Connection",
      scene:
        "Kevin confidently shops for groceries by himself, acting older than his age.",
      prompt: "What belief does this scene reinforce?",
      options: [
        {
          text: "Independence is shown through self-sufficiency and confidence.",
          isCorrect: true
        },
        {
          text: "Children should avoid asking for help.",
          isCorrect: false
        },
        {
          text: "Rules no longer apply when adults are gone.",
          isCorrect: false
        },
        {
          text: "Money solves every problem.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-04",
      source: "Home Alone (1990)",
      sceneTitle: "The wet bandits’ politeness",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["DialogueAndSubtext", "SecretExchange"],
      gateIcons: ["💬", "✉️"],
      primaryRuleset: "DialogueAndSubtext",
      pairedRuleset: "TheoryOfMind",
      skill: "Dialogue Interpretation",
      scene:
        "The burglars speak politely to homeowners while secretly planning theft.",
      prompt: "Why is their polite behavior important to the story?",
      options: [
        {
          text: "It hides harmful intentions behind normal social behavior.",
          isCorrect: true
        },
        {
          text: "They want to make friends with families.",
          isCorrect: false
        },
        {
          text: "They are unsure how to speak to adults.",
          isCorrect: false
        },
        {
          text: "They feel guilty about stealing.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-05",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin enjoys freedom",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalContradiction", "IdentityTension"],
      gateIcons: ["🎨", "🎭"],
      primaryRuleset: "EmotionalContradiction",
      skill: "Emotional Inference",
      scene:
        "Kevin watches movies, eats junk food, and stays up late without rules.",
      prompt: "What mixed emotion does Kevin experience here?",
      options: [
        {
          text: "Joy at freedom mixed with loneliness beneath the excitement.",
          isCorrect: true
        },
        {
          text: "Pure happiness with no worry.",
          isCorrect: false
        },
        {
          text: "Fear that someone will scold him.",
          isCorrect: false
        },
        {
          text: "Anger at his family.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-06",
      source: "Home Alone (1990)",
      sceneTitle: "Fear of the basement",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "NarrativeOmission"],
      gateIcons: ["🔮", "🕳️"],
      primaryRuleset: "NarrativeOmission",
      skill: "Perspective Shift",
      scene:
        "Kevin avoids the basement, imagining something frightening lives there.",
      prompt: "Why does the story not immediately correct Kevin’s fear?",
      options: [
        {
          text: "To show how imagination can shape reality when someone is alone.",
          isCorrect: true
        },
        {
          text: "Because the basement is actually dangerous.",
          isCorrect: false
        },
        {
          text: "Because the audience already knows the truth.",
          isCorrect: false
        },
        {
          text: "Because the fear will never change.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-07",
      source: "Home Alone (1990)",
      sceneTitle: "Meeting the old man",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["CulturalSignification", "TheoryOfMind"],
      gateIcons: ["🏛️", "🧠"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "CulturalSignification",
      skill: "Character Judgment",
      scene:
        "Kevin assumes the old man next door is dangerous based on rumors.",
      prompt: "What changes Kevin’s understanding of the old man?",
      options: [
        {
          text: "Listening to his story replaces fear with empathy.",
          isCorrect: true
        },
        {
          text: "Seeing him smile.",
          isCorrect: false
        },
        {
          text: "Realizing he is lonely.",
          isCorrect: false
        },
        {
          text: "Learning he lives nearby.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-08",
      source: "Home Alone (1990)",
      sceneTitle: "The church conversation",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["DialogueAndSubtext", "EmotionalContradiction"],
      gateIcons: ["💬", "🎨"],
      primaryRuleset: "DialogueAndSubtext",
      pairedRuleset: "TheoryOfMind",
      skill: "Inference from Dialogue",
      scene:
        "Kevin speaks with the old man about family while avoiding his own feelings.",
      prompt: "Why does Kevin speak indirectly about his family?",
      options: [
        {
          text: "Talking around the topic feels safer than admitting his loneliness.",
          isCorrect: true
        },
        {
          text: "He does not trust the old man.",
          isCorrect: false
        },
        {
          text: "He wants to change the subject.",
          isCorrect: false
        },
        {
          text: "He is distracted by the music.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-09",
      source: "Home Alone (1990)",
      sceneTitle: "Preparing the traps",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "IdentityTension"],
      gateIcons: ["🚪", "🎭"],
      primaryRuleset: "CharacterAgency",
      skill: "Problem Solving",
      scene:
        "Kevin plans elaborate traps to protect his house.",
      prompt: "What does this planning reveal about Kevin?",
      options: [
        {
          text: "He transforms fear into action and control.",
          isCorrect: true
        },
        {
          text: "He enjoys hurting others.",
          isCorrect: false
        },
        {
          text: "He expects the burglars to give up easily.",
          isCorrect: false
        },
        {
          text: "He wants to impress his family.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-10",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin pretends adults are home",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["DialogueAndSubtext", "WorldLogicShift"],
      gateIcons: ["💬", "🔮"],
      primaryRuleset: "DialogueAndSubtext",
      pairedRuleset: "TheoryOfMind",
      skill: "Strategic Thinking",
      scene:
        "Kevin uses recorded voices to make it seem like adults are present.",
      prompt: "Why is pretending adults are home effective?",
      options: [
        {
          text: "It relies on the burglars’ assumptions rather than force.",
          isCorrect: true
        },
        {
          text: "It scares everyone equally.",
          isCorrect: false
        },
        {
          text: "It confuses the burglars completely.",
          isCorrect: false
        },
        {
          text: "It replaces the need for traps.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-11",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin forgives his family",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["RelationshipShift", "EmotionalEcho"],
      gateIcons: ["🫂", "📆"],
      primaryRuleset: "EmotionalEcho",
      pairedRuleset: "TheoryOfMind",
      skill: "Character Growth",
      scene:
        "Kevin wishes his family would return, despite earlier anger.",
      prompt: "What enables Kevin’s change of heart?",
      options: [
        {
          text: "Understanding that conflict does not erase love.",
          isCorrect: true
        },
        {
          text: "Getting tired of being alone.",
          isCorrect: false
        },
        {
          text: "Feeling guilty about the traps.",
          isCorrect: false
        },
        {
          text: "Missing the house routines.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-12",
      source: "Home Alone (1990)",
      sceneTitle: "The mother’s return",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["EmotionalEcho", "RelationshipShift"],
      gateIcons: ["📆", "🫂"],
      primaryRuleset: "EmotionalEcho",
      skill: "Scene Purpose",
      scene:
        "Kevin’s mother rushes home, showing desperation and relief.",
      prompt: "Why is her journey important to the story?",
      options: [
        {
          text: "It mirrors Kevin’s emotional journey from anger to love.",
          isCorrect: true
        },
        {
          text: "It explains travel logistics.",
          isCorrect: false
        },
        {
          text: "It shows how difficult flying can be.",
          isCorrect: false
        },
        {
          text: "It builds suspense only.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-13",
      source: "Home Alone (1990)",
      sceneTitle: "The old man intervenes",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["RelationshipShift", "WorldLogicShift"],
      gateIcons: ["🫂", "🔮"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "NarrativeOmission",
      skill: "Judgment",
      scene:
        "The old man rescues Kevin without hesitation.",
      prompt: "Why does this act feel meaningful rather than convenient?",
      options: [
        {
          text: "It completes his own arc of reconnecting with others.",
          isCorrect: true
        },
        {
          text: "He happens to be nearby.",
          isCorrect: false
        },
        {
          text: "He enjoys confrontation.",
          isCorrect: false
        },
        {
          text: "He is always watching Kevin.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-14",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin faces fear alone",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["ThresholdMoment", "EmotionalContradiction"],
      gateIcons: ["🚪", "🎨"],
      primaryRuleset: "CharacterAgency",
      skill: "Courage",
      scene:
        "Kevin stays behind to face the burglars instead of running.",
      prompt: "What kind of courage does Kevin show?",
      options: [
        {
          text: "Choosing responsibility despite fear.",
          isCorrect: true
        },
        {
          text: "Enjoying danger.",
          isCorrect: false
        },
        {
          text: "Ignoring consequences.",
          isCorrect: false
        },
        {
          text: "Acting without thinking.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-15",
      source: "Home Alone (1990)",
      sceneTitle: "The traps escalate",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["WorldLogicShift", "EmotionalEcho"],
      gateIcons: ["🔮", "📆"],
      primaryRuleset: "NarrativeCausality",
      skill: "Cause and Effect",
      scene:
        "Each trap builds on the last, increasing tension.",
      prompt: "Why does the story escalate the traps gradually?",
      options: [
        {
          text: "To show Kevin learning and adapting under pressure.",
          isCorrect: true
        },
        {
          text: "To make the burglars look foolish.",
          isCorrect: false
        },
        {
          text: "To extend the runtime.",
          isCorrect: false
        },
        {
          text: "To confuse the audience.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-16",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin cleans up",
      momentType: "SceneInterpretation",
      tier: "Fox",
      gates: ["IdentityTension", "RelationshipShift"],
      gateIcons: ["🎭", "🫂"],
      primaryRuleset: "Responsibility",
      skill: "Character Growth",
      scene:
        "Kevin cleans the house before his family returns.",
      prompt: "Why does Kevin take responsibility here?",
      options: [
        {
          text: "He wants to restore trust and show maturity.",
          isCorrect: true
        },
        {
          text: "He is afraid of punishment.",
          isCorrect: false
        },
        {
          text: "He enjoys cleaning.",
          isCorrect: false
        },
        {
          text: "He wants to hide evidence.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-17",
      source: "Home Alone (1990)",
      sceneTitle: "The burglars are caught",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["CulturalSignification", "NarrativeOmission"],
      gateIcons: ["🏛️", "🕳️"],
      primaryRuleset: "CulturalSignification",
      skill: "Justice Interpretation",
      scene:
        "Authorities arrive after the danger is resolved.",
      prompt: "Why does the story delay adult intervention?",
      options: [
        {
          text: "It allows Kevin to prove capability before authority returns.",
          isCorrect: true
        },
        {
          text: "Adults are unnecessary.",
          isCorrect: false
        },
        {
          text: "The police are ineffective.",
          isCorrect: false
        },
        {
          text: "The timing is accidental.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-18",
      source: "Home Alone (1990)",
      sceneTitle: "Reunion in the morning",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["EmotionalEcho", "RelationshipShift"],
      gateIcons: ["📆", "🫂"],
      primaryRuleset: "EmotionalEcho",
      pairedRuleset: "DialogueAndSubtext",
      skill: "Emotional Resolution",
      scene:
        "Kevin and his mother reunite without many words.",
      prompt: "Why does the scene rely on action rather than dialogue?",
      options: [
        {
          text: "Their shared relief communicates more than explanation could.",
          isCorrect: true
        },
        {
          text: "They are too tired to speak.",
          isCorrect: false
        },
        {
          text: "They do not want to discuss what happened.",
          isCorrect: false
        },
        {
          text: "The film avoids emotional moments.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-19",
      source: "Home Alone (1990)",
      sceneTitle: "Kevin watches the neighbor",
      momentType: "SceneInterpretation",
      tier: "Lantern",
      gates: ["EmotionalEcho", "TheoryOfMind"],
      gateIcons: ["📆", "🧠"],
      primaryRuleset: "TheoryOfMind",
      pairedRuleset: "EmotionalEcho",
      skill: "Perspective Taking",
      scene:
        "Kevin observes the old man reconnect with his family.",
      prompt: "Why does this moment matter to Kevin?",
      options: [
        {
          text: "It confirms that reconciliation is possible.",
          isCorrect: true
        },
        {
          text: "It surprises him.",
          isCorrect: false
        },
        {
          text: "It distracts him.",
          isCorrect: false
        },
        {
          text: "It makes him jealous.",
          isCorrect: false
        }
      ]
    },
    
    {
      id: "film-homealone-20",
      source: "Home Alone (1990)",
      sceneTitle: "Normal life resumes",
      momentType: "SceneInterpretation",
      tier: "Owl",
      gates: ["NarrativeOmission", "EmotionalEcho"],
      gateIcons: ["🕳️", "📆"],
      primaryRuleset: "NarrativeOmission",
      skill: "Ending Interpretation",
      scene:
        "The family returns to routine, with subtle warmth.",
      prompt: "Why does the story end quietly rather than dramatically?",
      options: [
        {
          text: "It emphasizes emotional repair over spectacle.",
          isCorrect: true
        },
        {
          text: "The story runs out of time.",
          isCorrect: false
        },
        {
          text: "Nothing important changed.",
          isCorrect: false
        },
        {
          text: "The danger was not serious.",
          isCorrect: false
        }
      ]
    },
    
    
    // --- Add more film questions here (other Inside Out scenes or other movies) ---
];

// Literature questions (Pages & Co – The Bookwanderers)
const literatureQuestions = [
  {
    id: "lit-pagesco-bookwanderers-21",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The strange girl in the aisle",
    momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["WorldLogicShift", "IdentityTension"],
    gateIcons: ["🔮", "🎭"],
    skill: "Symbolism",
    scene:
      "Tilly freezes when she sees a girl in an old-fashioned dress step around the corner of a shelf—" +
      "then vanish without a sound. The air feels different, and Tilly wonders if the girl was real " +
      "or somehow from a story she knows.",
    prompt: "What does this strange moment most likely show about Tilly’s world?",
    options: [
      {
        text: "Her world is starting to blend with the world of stories in a way she can feel but not explain.",
        isCorrect: true
      },
      {
        text: "Her grandparents are testing her to see how fast she can organize the shelves.",
        isCorrect: false
      },
      {
        text: "Tilly is imagining things because she is tired from cleaning the shop.",
        isCorrect: false
      },
      {
        text: "Another customer is playing a prank on her just for fun.",
        isCorrect: false
      }
    ]
  },
  
  {
    id: "lit-pagesco-bookwanderers-23",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A clipped, careful conversation",
    momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["RelationshipShift", "SecretExchange"],
    gateIcons: ["🫂", "✉️"],
    skill: "Relationship Change",
    scene:
      "When Tilly asks her grandparent if they have ever seen anything odd happen in the shop, " +
      "they pause, choose their words too slowly, and say, 'Nothing you need to worry about.'",
    prompt: "What small shift happens in their relationship here?",
    options: [
      {
        text: "Tilly senses that her grandparent is hiding something to protect her, creating a quiet distance between them.",
        isCorrect: true
      },
      {
        text: "Tilly realizes her grandparent does not like books anymore.",
        isCorrect: false
      },
      {
        text: "Her grandparent becomes angry and refuses to speak to her for the rest of the day.",
        isCorrect: false
      },
      {
        text: "Tilly thinks her grandparent has forgotten how to answer simple questions.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-24",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Reaching for the glowing book",
    momentType: "SceneInterpretation",
    tier: "Owl",
    gates: ["ThresholdMoment", "WorldLogicShift"],
    gateIcons: ["🚪", "🔮"],
    skill: "Scene Purpose",
    scene:
      "A book on the returns trolley gives off a faint shimmer, almost like it is breathing. " +
      "Tilly hesitates, then slowly reaches for it, unsure what will happen.",
    prompt: "How does this moment move the story forward?",
    options: [
      {
        text: "It shows Tilly taking her first deliberate step toward the mysterious world opening behind the books.",
        isCorrect: true
      },
      {
        text: "It explains exactly how every magical rule in the bookshop works.",
        isCorrect: false
      },
      {
        text: "It shows she wants to stop reading and spend less time with stories.",
        isCorrect: false
      },
      {
        text: "It mainly gives the reader a break from the plot so they can rest.",
        isCorrect: false
      }
    ]
  },
  
  {
    id: "lit-pagesco-bookwanderers-26",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The note in her mother's handwriting",
    momentType: "SceneInterpretation",
    tier: "Owl",
    gates: ["SecretExchange", "IdentityTension", "EmotionalContradiction"],
    gateIcons: ["✉️", "🎭", "🎨"],
    skill: "Theme Connection",
    scene:
      "Tilly finds a tiny folded note inside an old book. The handwriting looks like her mother’s. " +
      "Her breath catches—hope and fear pulling at her at the same time.",
    prompt: "What deeper idea does this moment highlight?",
    options: [
      {
        text: "Tilly’s search for who she is is tightly connected to the hidden stories her mother left behind.",
        isCorrect: true
      },
      {
        text: "The note proves that Tilly’s mother never cared about books.",
        isCorrect: false
      },
      {
        text: "The moment shows that secret notes are always dangerous.",
        isCorrect: false
      },
      {
        text: "It hints that Tilly should forget her past and stop asking questions.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-27",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "A repeated walk through the fiction aisle",
    momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["EmotionalEcho", "IdentityTension"],
    gateIcons: ["📆", "🎭"],
    skill: "Scene Purpose",
    scene:
      "Tilly walks through the same aisle where she once saw the mysterious girl. " +
      "This time, nothing happens—but she notices her heartbeat is steadier.",
    prompt: "What does this repeated moment show?",
    options: [
      {
        text: "Tilly is growing braver, even when the magic does not appear.",
        isCorrect: true
      },
      {
        text: "The aisle has become completely unimportant to the story.",
        isCorrect: false
      },
      {
        text: "Tilly has stopped believing anything unusual ever happened.",
        isCorrect: false
      },
      {
        text: "The shop wants her to stay out of that aisle forever.",
        isCorrect: false
      }
    ]
  },
  
  {
    id: "lit-pagesco-bookwanderers-29",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Her reflection in the library window",
    momentType: "SceneInterpretation",
    tier: "Owl",
    gates: ["IdentityTension", "EmotionalContradiction"],
    gateIcons: ["🎭", "🎨"],
    skill: "Symbolism",
    scene:
      "While shelving books at dusk, Tilly sees her reflection layered over rows of stories behind the glass. " +
      "She feels both small and connected to something larger.",
    prompt: "What might this layered reflection symbolize?",
    options: [
      {
        text: "Tilly is beginning to see herself as part of the world of stories, not just a visitor.",
        isCorrect: true
      },
      {
        text: "Tilly only wants to look at her reflection instead of finishing her work.",
        isCorrect: false
      },
      {
        text: "The shop is too dark and needs better lighting.",
        isCorrect: false
      },
      {
        text: "She is disappointed that the glass makes her look taller.",
        isCorrect: false
      }
    ]
  },
  {
    id: "lit-pagesco-bookwanderers-30",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "Choosing which truth to tell",
    momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["IdentityTension", "SecretExchange", "ThresholdMoment"],
    gateIcons: ["🎭", "✉️", "🚪"],
    skill: "Character Motivation",
    scene:
      "Back home, her grandparent gently asks, 'Did anything unusual happen today?' " +
      "Tilly hesitates. She thinks about the shimmering book, then quietly says, 'Not really.'",
    prompt: "Why does Tilly most likely give this answer?",
    options: [
      {
        text: "She is not ready to share the strange truth until she understands it herself.",
        isCorrect: true
      },
      {
        text: "She wants to convince her grandparents that she dislikes reading.",
        isCorrect: false
      },
      {
        text: "She believes the magical moment was only a dream with no meaning.",
        isCorrect: false
      },
      {
        text: "She thinks her grandparents already know everything that happened.",
        isCorrect: false
      }
    ]
  },
  {
  id: "lit-pagesco-bookwanderers-31",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The character who knows her name",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension", "RelationshipShift"],
  gateIcons: ["🔮", "🎭", "🫂"],
  skill: "Theme Connection",
  scene:
    "Inside a story, Tilly meets a character who says her name before she introduces herself. " +
    "The character smiles kindly, as if they have known her for a long time.",
  prompt: "What deeper idea does this moment suggest?",
  options: [
    {
      text: "Stories know Tilly in a personal way, hinting that she belongs to them more deeply than she realized.",
      isCorrect: true
    },
    {
      text: "The character has met every reader who has ever opened the book.",
      isCorrect: false
    },
    {
      text: "Tilly should not read books because characters might learn too much about her.",
      isCorrect: false
    },
    {
      text: "This character is pretending to recognize everyone they meet.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-33",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The memory she cannot place",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "When Tilly touches the spine of a certain book, she feels a warm flicker of a memory—" +
    "a moment she can't quite recall. It makes her both comforted and unsettled.",
  prompt: "What does this moment reveal about Tilly?",
  options: [
    {
      text: "She feels drawn to stories in a way connected to her past, even if she does not fully understand why.",
      isCorrect: true
    },
    {
      text: "She remembers every story she has ever read with perfect clarity.",
      isCorrect: false
    },
    {
      text: "She dislikes this book and wants to avoid it.",
      isCorrect: false
    },
    {
      text: "She is confused because she has never read a book before.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-34",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A story whisper in the corner",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
  gateIcons: ["🔮", "✉️", "🚪"],
  skill: "Symbolism",
  scene:
    "As Tilly shelves books, she hears a faint whisper near the classics section—" +
    "a whisper that seems to come from no one. A book on the top shelf shivers slightly.",
  prompt: "What might the whisper symbolize in this moment?",
  options: [
    {
      text: "The stories are inviting Tilly deeper, hinting that a new world is opening if she is brave enough to step forward.",
      isCorrect: true
    },
    {
      text: "Someone is hiding behind the shelves and making fun of her.",
      isCorrect: false
    },
    {
      text: "The whisper shows that the shop is poorly built and drafty.",
      isCorrect: false
    },
    {
      text: "The books are warning Tilly never to touch them again.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-36",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Ink on her fingertips",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Symbolism",
  scene:
    "After reading a passage aloud, Tilly notices black ink smudged on her fingertips—" +
    "even though she never touched the printed page.",
  prompt: "What does the ink most likely symbolize?",
  options: [
    {
      text: "The boundary between Tilly and the stories is thinning, marking her as someone who belongs inside them.",
      isCorrect: true
    },
    {
      text: "The printer made a mistake while publishing the book.",
      isCorrect: false
    },
    {
      text: "Tilly is getting messy and needs to wash her hands immediately.",
      isCorrect: false
    },
    {
      text: "The book is warning her to stop reading it.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-37",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The chapter that rearranges itself",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalContradiction", "ThresholdMoment"],
  gateIcons: ["🔮", "🎨", "🚪"],
  skill: "Scene Purpose",
  scene:
    "As Tilly flips back to reread a chapter, she notices the paragraphs aren't where she left them. " +
    "The story seems to be gently urging her toward a different page.",
  prompt: "What is the purpose of this strange moment?",
  options: [
    {
      text: "To show that the book is guiding Tilly toward something important she needs to discover next.",
      isCorrect: true
    },
    {
      text: "To prove that Tilly does not know how to read correctly.",
      isCorrect: false
    },
    {
      text: "To show that the author made a printing error.",
      isCorrect: false
    },
    {
      text: "To warn Tilly that she should stop rereading chapters altogether.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-39",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A doorway outlined in dust",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "WorldLogicShift"],
  gateIcons: ["🚪", "🔮"],
  skill: "Symbolism",
  scene:
    "When Tilly stacks a pile of books aside, a faint rectangular outline in the dust appears on the floor—" +
    "as if a door once existed there long ago.",
  prompt: "What might this dusty outline symbolize?",
  options: [
    {
      text: "A hidden path or story Tilly has not yet discovered, waiting for her to choose to explore it.",
      isCorrect: true
    },
    {
      text: "Someone forgot to clean the floor for several years.",
      isCorrect: false
    },
    {
      text: "Tilly is imagining doors because she is bored.",
      isCorrect: false
    },
    {
      text: "The bookshop is running out of space and needs repairs.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-41",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A book that feels warmer each time she touches it",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Symbolism",
  scene:
    "Tilly notices that a particular book seems warmer each time she lays her hand on it—" +
    "as if it recognizes her.",
  prompt: "What might the warming book suggest?",
  options: [
    {
      text: "The story may be connected to Tilly personally, responding to her growing awareness.",
      isCorrect: true
    },
    {
      text: "The book is overheating and needs to be repaired.",
      isCorrect: false
    },
    {
      text: "Someone placed a heater under the shelf.",
      isCorrect: false
    },
    {
      text: "The book wants her to stop touching it.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-42",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The bookmark that flips itself",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🔮", "🚪", "🎨"],
  skill: "Scene Purpose",
  scene:
    "When Tilly opens a novel, the bookmark slides forward on its own to a later chapter. " +
    "Tilly hesitates, unsure whether to follow where it leads.",
  prompt: "How does this moment deepen the story?",
  options: [
    {
      text: "It shows the book guiding Tilly toward a discovery she might fear but needs to face.",
      isCorrect: true
    },
    {
      text: "It proves the bookmark is broken and needs replacing.",
      isCorrect: false
    },
    {
      text: "It means Tilly should skip reading entirely.",
      isCorrect: false
    },
    {
      text: "It shows that Tilly dislikes this book and wants to stop reading.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-43",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Her mother’s name written in fading ink",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension", "EmotionalContradiction"],
  gateIcons: ["✉️", "🎭", "🎨"],
  skill: "Theme Connection",
  scene:
    "Tilly opens a book and sees her mother’s name softly written on the inside cover—" +
    "so faint it looks ready to disappear.",
  prompt: "What deeper meaning does this fading signature convey?",
  options: [
    {
      text: "Tilly’s connection to her mother is fragile but still alive, waiting for her to uncover the truth.",
      isCorrect: true
    },
    {
      text: "Her mother wanted to hide all evidence of ever reading books.",
      isCorrect: false
    },
    {
      text: "The bookshop keeps damaging old books by accident.",
      isCorrect: false
    },
    {
      text: "Someone else forged the signature for fun.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-44",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A repeated dream of stacked books",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Character Insight",
  scene:
    "Tilly dreams again of towering stacks of books leaning toward her—" +
    "but this time, instead of falling, they form a path.",
  prompt: "What change does this repeated dream show?",
  options: [
    {
      text: "Tilly is starting to see her journey as something she can walk into, not something crashing down on her.",
      isCorrect: true
    },
    {
      text: "Her dreams are becoming less interesting to her.",
      isCorrect: false
    },
    {
      text: "She wants to stop reading before bed.",
      isCorrect: false
    },
    {
      text: "The books are warning her not to trust any stories.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-45",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A page that ripples like water",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment"],
  gateIcons: ["🔮", "🚪"],
  skill: "Symbolism",
  scene:
    "As Tilly leans closer to a page, the printed words gently ripple outward—" +
    "like the surface of a pond after a pebble drops.",
  prompt: "What does this ripple most likely symbolize?",
  options: [
    {
      text: "Crossing into a story may deepen and widen her understanding, like stepping into unknown waters.",
      isCorrect: true
    },
    {
      text: "The book is damaged from water and needs repair.",
      isCorrect: false
    },
    {
      text: "Tilly is dizzy and imagining the ripple.",
      isCorrect: false
    },
    {
      text: "The story wants her to close it immediately.",
      isCorrect: false
    }
  ]
},


{
  id: "lit-pagesco-bookwanderers-48",
    source: "Pages & Co – The Bookwanderers",
    sceneTitle: "The book that opens itself at midnight",
  momentType: "SceneInterpretation",
    tier: "Fox",
    gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
    gateIcons: ["🔮", "✉️", "🚪"],
    skill: "Scene Purpose",
    scene:
      "Tilly wakes in the night to the soft sound of a book opening on her desk—" +
      "slowly, as if by invitation.",
    prompt: "What does this midnight moment suggest?",
    options: [
      {
        text: "A new part of the story is calling to Tilly, urging her toward a deeper step into the book world.",
        isCorrect: true
      },
      {
        text: "The window breeze is blowing her books open randomly.",
        isCorrect: false
      },
      {
        text: "Someone sneaked into her room to prank her.",
        isCorrect: false
      },
      {
        text: "Tilly should never read books late at night.",
        isCorrect: false
      }
    ]
},
{
  id: "lit-pagesco-bookwanderers-49",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A reflection that looks braver than she feels",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "Tilly sees her reflection in the polished counter—standing taller than she feels inside. " +
    "She wonders if she can grow into the version of herself she sees.",
  prompt: "What does this reflection moment show?",
  options: [
    {
      text: "Tilly is beginning to imagine a braver version of herself and wonders if she can become it.",
      isCorrect: true
    },
    {
      text: "Tilly thinks she looks too tall and wants to avoid mirrors.",
      isCorrect: false
    },
    {
      text: "She dislikes reflections and avoids all polished surfaces.",
      isCorrect: false
    },
    {
      text: "The counter is warped and making everyone look taller.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-50",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A memory echoing through a story scene",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "Inside a story, Tilly watches a scene that feels uncannily similar to a moment from her own childhood—" +
    "yet changed, as if the story remembers her differently.",
  prompt: "What deeper idea does this echoing moment reveal?",
  options: [
    {
      text: "Stories reflect pieces of Tilly’s life back to her, helping her understand herself through their world.",
      isCorrect: true
    },
    {
      text: "The story is copying her life because it has run out of original ideas.",
      isCorrect: false
    },
    {
      text: "Tilly’s childhood memories were incorrect all along.",
      isCorrect: false
    },
    {
      text: "The scene proves that stories should never relate to real life.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-52",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Laughing inside a scary chapter",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalContradiction", "WorldLogicShift"],
  gateIcons: ["🎨", "🔮"],
  skill: "Emotional Beat Shift",
  scene:
    "While wandering in a tense story, Tilly finds herself giggling at a small, silly detail " +
    "even though the scene around her is dark and frightening.",
  prompt: "What does this mixed reaction show?",
  options: [
    {
      text: "Even in frightening moments, stories can hold tiny pieces of comfort or humor that help readers cope.",
      isCorrect: true
    },
    {
      text: "Tilly is not really scared by any part of the story.",
      isCorrect: false
    },
    {
      text: "The story is poorly written because it includes different moods.",
      isCorrect: false
    },
    {
      text: "Tilly is trying to ruin the serious mood on purpose.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-53",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A character who disobeys the plot",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment", "IdentityTension"],
  gateIcons: ["🔮", "🚪", "🎭"],
  skill: "Theme Connection",
  scene:
    "Inside a novel, Tilly watches a character pause and say, 'I don't think I want to do what the story expects of me.' " +
    "The scene seems to hang, waiting.",
  prompt: "What deeper idea does this moment explore?",
  options: [
    {
      text: "Characters—and readers—can question the roles they are given and choose a different path.",
      isCorrect: true
    },
    {
      text: "Stories only work if characters obey every rule exactly.",
      isCorrect: false
    },
    {
      text: "This character is broken and does not belong in books.",
      isCorrect: false
    },
    {
      text: "Readers should never notice when characters struggle with choices.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-55",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Shelving a book she now sees differently",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Scene Purpose",
  scene:
    "Tilly slides a book back onto the shelf that she once thought was boring, " +
    "but now she lingers over the cover with new respect.",
  prompt: "What does this repeated action reveal?",
  options: [
    {
      text: "Her understanding of stories is growing, and she can see more value in books than she did before.",
      isCorrect: true
    },
    {
      text: "She is equally bored by all books and just pretending to like them.",
      isCorrect: false
    },
    {
      text: "She is annoyed that she ever read that book.",
      isCorrect: false
    },
    {
      text: "She is planning to hide the book so no one checks it out.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-56",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The rule she chooses to bend",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "SecretExchange", "IdentityTension"],
  gateIcons: ["🚪", "✉️", "🎭"],
  skill: "Character Motivation",
  scene:
    "Tilly remembers the rule about not bookwandering alone. " +
    "She glances toward the door of a story she believes might hold answers about her mother and steps through anyway.",
  prompt: "What does this decision show about Tilly at this point in the story?",
  options: [
    {
      text: "Her need to learn the truth about herself is strong enough that she is willing to risk breaking a rule.",
      isCorrect: true
    },
    {
      text: "She no longer cares what happens to her in stories.",
      isCorrect: false
    },
    {
      text: "She has forgotten the rule and is wandering by mistake.",
      isCorrect: false
    },
    {
      text: "She believes rules never matter in magical places.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-57",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A story character who disappoints her",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Character Insight",
  scene:
    "Tilly finally meets a favorite character in person, only to find them grumpy and less noble than she imagined.",
  prompt: "What does this disappointing meeting teach Tilly?",
  options: [
    {
      text: "Even beloved characters can be more complicated up close, just like real people.",
      isCorrect: true
    },
    {
      text: "She should stop liking any characters that ever make mistakes.",
      isCorrect: false
    },
    {
      text: "The author must have written the character incorrectly.",
      isCorrect: false
    },
    {
      text: "She should avoid meeting characters from books she enjoys.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-58",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Whispers that sound like turning pages",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange"],
  gateIcons: ["🔮", "✉️"],
  skill: "Symbolism",
  scene:
    "At night, Tilly hears a soft hiss that sounds like pages turning in the dark, " +
    "even though all the books in her room are closed.",
  prompt: "What might this sound symbolize?",
  options: [
    {
      text: "Stories are still moving and alive around Tilly, even when she is not reading them.",
      isCorrect: true
    },
    {
      text: "The books are angry because she did not finish them fast enough.",
      isCorrect: false
    },
    {
      text: "Someone is secretly reading in another room and disturbing her sleep.",
      isCorrect: false
    },
    {
      text: "The noise proves that books should be locked away at night.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-60",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A secret shelf behind other books",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "SecretExchange", "ThresholdMoment"],
  gateIcons: ["🔮", "✉️", "🚪"],
  skill: "Scene Purpose",
  scene:
    "While straightening a row, Tilly accidentally pushes the books too far back " +
    "and discovers a hidden lower shelf holding a few unfamiliar titles.",
  prompt: "How does this discovery function in the story?",
  options: [
    {
      text: "It opens a new path in the mystery, suggesting that some stories were hidden on purpose.",
      isCorrect: true
    },
    {
      text: "It shows that the shop’s shelves are poorly built.",
      isCorrect: false
    },
    {
      text: "It proves that Tilly is careless with book organization.",
      isCorrect: false
    },
    {
      text: "It is only included to show that the shop has many books and nothing more.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-61",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Returning from a story with grass on her shoes",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Symbolism",
  scene:
    "After leaving a countryside story, Tilly looks down to find tiny bits of grass and mud still clinging to her shoes.",
  prompt: "What does this detail suggest?",
  options: [
    {
      text: "The story world and the real world are beginning to overlap in physical, not just imaginary, ways.",
      isCorrect: true
    },
    {
      text: "Tilly was secretly outside in the real countryside all along.",
      isCorrect: false
    },
    {
      text: "The shop’s floor is always dirty and messy.",
      isCorrect: false
    },
    {
      text: "She has started collecting pieces of scenery as souvenirs.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-63",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A story that ends differently the second time",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Theme Connection",
  scene:
    "When Tilly rereads the ending of a book by stepping back into it, " +
    "small details change, and the final lines feel more hopeful than before.",
  prompt: "What does this shifting ending suggest?",
  options: [
    {
      text: "Stories can reflect the reader’s own growth, so the same scene may feel different as Tilly changes.",
      isCorrect: true
    },
    {
      text: "The author keeps secretly rewriting the book every night.",
      isCorrect: false
    },
    {
      text: "Tilly misremembered the original ending and is now correcting it.",
      isCorrect: false
    },
    {
      text: "Endings are never important in stories.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-64",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Balancing two promises",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "RelationshipShift", "SecretExchange"],
  gateIcons: ["🎭", "🫂", "✉️"],
  skill: "Character Motivation",
  scene:
    "Tilly promises a friend she will meet her after school, " +
    "but she has also quietly promised herself to investigate a clue in the shop at that time.",
  prompt: "What tension is created in this scene?",
  options: [
    {
      text: "Tilly is torn between loyalty to her friend and her secret mission, forcing her to choose what matters most.",
      isCorrect: true
    },
    {
      text: "Tilly has forgotten both promises and will likely ignore them.",
      isCorrect: false
    },
    {
      text: "She wants to cancel both plans so she can stay home.",
      isCorrect: false
    },
    {
      text: "There is no real conflict because everyone will understand whatever she does.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-65",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A chapter title that feels aimed at her",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "WorldLogicShift"],
  gateIcons: ["🎭", "🔮"],
  skill: "Symbolism",
  scene:
    "Tilly opens to a chapter called 'The Girl Who Stepped Between Worlds' " +
    "and shivers, feeling as though the title is pointing directly at her.",
  prompt: "What does this reaction show?",
  options: [
    {
      text: "Tilly recognizes herself in the story and feels the line between reader and character growing thin.",
      isCorrect: true
    },
    {
      text: "She thinks the author somehow predicted her exact name and life.",
      isCorrect: false
    },
    {
      text: "She dislikes stories about other girls and prefers different titles.",
      isCorrect: false
    },
    {
      text: "She is confused because every chapter in every book has the same title.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-66",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A character who remembers their last meeting",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho", "RelationshipShift"],
  gateIcons: ["🔮", "📆", "🫂"],
  skill: "Scene Purpose",
  scene:
    "When Tilly returns to a story, the character she met last time greets her with, " +
    "'You came back,' as if no time has passed for them.",
  prompt: "How does this moment deepen the story’s rules?",
  options: [
    {
      text: "It shows that story characters carry memories of Tilly between visits, making their world feel continuous and real.",
      isCorrect: true
    },
    {
      text: "It proves that time is frozen everywhere Tilly goes.",
      isCorrect: false
    },
    {
      text: "It means Tilly has stayed too long in the story and cannot leave.",
      isCorrect: false
    },
    {
      text: "It suggests that characters welcome every reader in exactly the same way.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-pagesco-bookwanderers-68",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "The shop feeling different after she changes",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Scene Purpose",
  scene:
    "After a big decision, Tilly walks through the shop and notices the light looks warmer " +
    "and the shelves feel more welcoming, even though nothing has moved.",
  prompt: "What does this changed feeling suggest?",
  options: [
    {
      text: "Her inner change is affecting how she experiences the same place.",
      isCorrect: true
    },
    {
      text: "Someone secretly repainted the entire shop overnight.",
      isCorrect: false
    },
    {
      text: "She no longer cares about the shop at all.",
      isCorrect: false
    },
    {
      text: "The shop is trying to hide its magic from her now.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-69",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "A letter she chooses not to read yet",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension", "ThresholdMoment"],
  gateIcons: ["✉️", "🎭", "🚪"],
  skill: "Theme Connection",
  scene:
    "Tilly discovers a sealed letter with her name on it in a book from her mother. " +
    "She holds it to her chest instead of opening it right away.",
  prompt: "What does her delay in opening the letter reveal?",
  options: [
    {
      text: "She senses the letter could change how she sees herself and needs a moment before stepping into that new truth.",
      isCorrect: true
    },
    {
      text: "She has no interest in whatever the letter might say.",
      isCorrect: false
    },
    {
      text: "She plans to throw the letter away unread.",
      isCorrect: false
    },
    {
      text: "She thinks the letter is meant for someone else with the same name.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-pagesco-bookwanderers-70",
  source: "Pages & Co – The Bookwanderers",
  sceneTitle: "Sharing a story secret at last",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "SecretExchange", "EmotionalContradiction"],
  gateIcons: ["🫂", "✉️", "🎨"],
  skill: "Relationship Change",
  scene:
    "After keeping her adventures quiet for a long time, Tilly finally tells a friend the full truth about bookwandering. " +
    "She feels both terrified and relieved as she watches her friend’s face.",
  prompt: "What change does this confession bring to their relationship?",
  options: [
    {
      text: "Tilly is inviting her friend into a deeper, more honest bond, even though she risks not being believed.",
      isCorrect: true
    },
    {
      text: "She is trying to end the friendship by telling an unbelievable story.",
      isCorrect: false
    },
    {
      text: "She hopes her friend will promise never to talk about books again.",
      isCorrect: false
    },
    {
      text: "She wants to prove that she can keep secrets completely to herself.",
      isCorrect: false
    }
  ]
},






{
  id: "lit-boxcar-7",
  source: "The Boxcar Children",
  sceneTitle: "Collecting dishes",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Scene Purpose",
  scene:
    "The children gather discarded dishes from the dump to use at home.",
  prompt: "Why is this moment important?",
  options: [
    {
      text: "It shows their growing self-sufficiency.",
      isCorrect: true
    },
    {
      text: "It proves they dislike nice things.",
      isCorrect: false
    },
    {
      text: "It shows they want to hide evidence.",
      isCorrect: false
    },
    {
      text: "It introduces a future mystery.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-8",
  source: "The Boxcar Children",
  sceneTitle: "Henry’s injury",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Henry injures his leg while working and must rest.",
  prompt: "What changes because of this injury?",
  options: [
    {
      text: "The other children step up to help and share responsibility.",
      isCorrect: true
    },
    {
      text: "The family begins to argue.",
      isCorrect: false
    },
    {
      text: "Henry gives up being a leader.",
      isCorrect: false
    },
    {
      text: "They decide to return to town.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-9",
  source: "The Boxcar Children",
  sceneTitle: "Jessie earns money",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "ThresholdMoment"],
  gateIcons: ["🎭", "🚪"],
  skill: "Character Growth",
  scene:
    "Jessie finds work sewing to help the family.",
  prompt: "What does this show about Jessie?",
  options: [
    {
      text: "She adapts and contributes when needed.",
      isCorrect: true
    },
    {
      text: "She prefers working alone.",
      isCorrect: false
    },
    {
      text: "She replaces Henry as leader.",
      isCorrect: false
    },
    {
      text: "She dislikes relying on others.",
      isCorrect: false
    }
  ]
},


{
  id: "lit-boxcar-12",
  source: "The Boxcar Children",
  sceneTitle: "A hidden life",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Theme Connection",
  scene:
    "The children carefully avoid being seen while living in the woods.",
  prompt: "Why do they keep their life secret?",
  options: [
    {
      text: "They fear being separated from one another.",
      isCorrect: true
    },
    {
      text: "They dislike other people.",
      isCorrect: false
    },
    {
      text: "They enjoy pretending.",
      isCorrect: false
    },
    {
      text: "They are planning to leave forever.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-13",
  source: "The Boxcar Children",
  sceneTitle: "Grandfather discovered",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "ThresholdMoment"],
  gateIcons: ["✉️", "🚪"],
  skill: "Scene Purpose",
  scene:
    "The children learn that their grandfather has been searching for them.",
  prompt: "Why does this discovery matter?",
  options: [
    {
      text: "It challenges their belief that all guardians are unsafe.",
      isCorrect: true
    },
    {
      text: "It proves adults always interfere.",
      isCorrect: false
    },
    {
      text: "It ends their independence immediately.",
      isCorrect: false
    },
    {
      text: "It makes them regret running away.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-14",
  source: "The Boxcar Children",
  sceneTitle: "Meeting the grandfather",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "The children finally meet their grandfather.",
  prompt: "What emotional shift occurs?",
  options: [
    {
      text: "Fear gives way to trust and relief.",
      isCorrect: true
    },
    {
      text: "Suspicion increases.",
      isCorrect: false
    },
    {
      text: "Anger replaces hope.",
      isCorrect: false
    },
    {
      text: "Nothing changes.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-15",
  source: "The Boxcar Children",
  sceneTitle: "The offer of a home",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Theme Connection",
  scene:
    "Their grandfather offers them a safe home together.",
  prompt: "Why is this offer meaningful?",
  options: [
    {
      text: "It preserves family unity while providing security.",
      isCorrect: true
    },
    {
      text: "It ends the adventure.",
      isCorrect: false
    },
    {
      text: "It removes their independence.",
      isCorrect: false
    },
    {
      text: "It solves every future problem.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-16",
  source: "The Boxcar Children",
  sceneTitle: "Leaving the boxcar",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalEcho", "ThresholdMoment"],
  gateIcons: ["📆", "🚪"],
  skill: "Scene Purpose",
  scene:
    "The children prepare to leave the boxcar behind.",
  prompt: "What does this departure represent?",
  options: [
    {
      text: "Growth from survival to stability.",
      isCorrect: true
    },
    {
      text: "Failure of independence.",
      isCorrect: false
    },
    {
      text: "Loss of freedom.",
      isCorrect: false
    },
    {
      text: "Regret over their choices.",
      isCorrect: false
    }
  ]
},


{
  id: "lit-boxcar-19",
  source: "The Boxcar Children",
  sceneTitle: "Henry’s reflection",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Theme Connection",
  scene:
    "Henry reflects on how much they have survived together.",
  prompt: "What lasting idea does Henry’s reflection reinforce?",
  options: [
    {
      text: "Responsibility and love grow through action.",
      isCorrect: true
    },
    {
      text: "Children must grow up too quickly.",
      isCorrect: false
    },
    {
      text: "Independence is always best.",
      isCorrect: false
    },
    {
      text: "Adults are unnecessary.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-20",
  source: "The Boxcar Children",
  sceneTitle: "Family first",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🎭", "🫂", "📆"],
  skill: "Theme Connection",
  scene:
    "The children look forward to a future together, no longer alone.",
  prompt: "What core message does the story leave?",
  options: [
    {
      text: "Family is built through care, trust, and shared effort.",
      isCorrect: true
    },
    {
      text: "Adventure matters more than safety.",
      isCorrect: false
    },
    {
      text: "Children should avoid adults.",
      isCorrect: false
    },
    {
      text: "Hardship is necessary for happiness.",
      isCorrect: false
    }
  ]
},





{
  id: "lit-oz-6",
  source: "The Wizard of Oz",
  sceneTitle: "The Tin Woodman rusted",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalContradiction", "IdentityTension"],
  gateIcons: ["🎨", "🎭"],
  skill: "Symbolism",
  scene:
    "Dorothy and the Scarecrow find the Tin Woodman rusted and unable to move.",
  prompt: "What does the Tin Woodman fear?",
  options: [
    {
      text: "That he lacks the ability to feel compassion.",
      isCorrect: true
    },
    {
      text: "That he will rust again.",
      isCorrect: false
    },
    {
      text: "That he is physically weak.",
      isCorrect: false
    },
    {
      text: "That he cannot travel.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-oz-8",
  source: "The Wizard of Oz",
  sceneTitle: "A shared journey",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  skill: "Theme Connection",
  scene:
    "Dorothy and her companions continue traveling together toward Emerald City.",
  prompt: "What does the group’s bond show?",
  options: [
    {
      text: "Support helps each member face personal fears.",
      isCorrect: true
    },
    {
      text: "They rely only on Dorothy.",
      isCorrect: false
    },
    {
      text: "They all want the same thing.",
      isCorrect: false
    },
    {
      text: "The journey becomes easier immediately.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-oz-10",
  source: "The Wizard of Oz",
  sceneTitle: "The Wizard’s demand",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "SecretExchange"],
  gateIcons: ["🚪", "✉️"],
  skill: "Scene Purpose",
  scene:
    "The Wizard agrees to help only if they defeat the Wicked Witch of the West.",
  prompt: "Why is this demand significant?",
  options: [
    {
      text: "It tests the group’s courage and unity.",
      isCorrect: true
    },
    {
      text: "It proves the Wizard’s power.",
      isCorrect: false
    },
    {
      text: "It guarantees success.",
      isCorrect: false
    },
    {
      text: "It reveals the Wizard’s kindness.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-11",
  source: "The Wizard of Oz",
  sceneTitle: "Captured by the Witch",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "Dorothy is captured by the Wicked Witch of the West.",
  prompt: "What keeps Dorothy from giving up?",
  options: [
    {
      text: "Her determination to protect her friends.",
      isCorrect: true
    },
    {
      text: "Her confidence in magic.",
      isCorrect: false
    },
    {
      text: "Her belief the Witch is weak.",
      isCorrect: false
    },
    {
      text: "Her desire for revenge.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-12",
  source: "The Wizard of Oz",
  sceneTitle: "The Witch melts",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment"],
  gateIcons: ["🔮", "🚪"],
  skill: "Scene Purpose",
  scene:
    "Dorothy throws water on the Wicked Witch, causing her to melt.",
  prompt: "Why is this victory unexpected?",
  options: [
    {
      text: "Dorothy succeeds through accident, not force.",
      isCorrect: true
    },
    {
      text: "The Witch was never powerful.",
      isCorrect: false
    },
    {
      text: "Dorothy planned the attack.",
      isCorrect: false
    },
    {
      text: "Magic always fails.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-13",
  source: "The Wizard of Oz",
  sceneTitle: "The Wizard revealed",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Theme Connection",
  scene:
    "The Wizard is revealed to be an ordinary man.",
  prompt: "What does this reveal suggest?",
  options: [
    {
      text: "Authority often depends on illusion rather than truth.",
      isCorrect: true
    },
    {
      text: "Magic is unreliable.",
      isCorrect: false
    },
    {
      text: "The Wizard planned everything.",
      isCorrect: false
    },
    {
      text: "The companions have failed.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-14",
  source: "The Wizard of Oz",
  sceneTitle: "Gifts of reassurance",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Growth",
  scene:
    "The Scarecrow, Tin Woodman, and Lion receive symbolic gifts.",
  prompt: "Why are these gifts meaningful?",
  options: [
    {
      text: "They confirm qualities the characters already possessed.",
      isCorrect: true
    },
    {
      text: "They give real magical power.",
      isCorrect: false
    },
    {
      text: "They replace effort.",
      isCorrect: false
    },
    {
      text: "They solve future problems.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-15",
  source: "The Wizard of Oz",
  sceneTitle: "The failed balloon",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalContradiction", "ThresholdMoment"],
  gateIcons: ["🎨", "🚪"],
  skill: "Emotional Beat Shift",
  scene:
    "Dorothy misses her chance to leave Oz when the balloon departs without her.",
  prompt: "What emotion defines this moment?",
  options: [
    {
      text: "Hope turning into sudden disappointment.",
      isCorrect: true
    },
    {
      text: "Anger at the Wizard.",
      isCorrect: false
    },
    {
      text: "Relief at staying.",
      isCorrect: false
    },
    {
      text: "Fear of flying.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-16",
  source: "The Wizard of Oz",
  sceneTitle: "Glinda’s secret",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "EmotionalEcho"],
  gateIcons: ["✉️", "📆"],
  skill: "Theme Connection",
  scene:
    "Glinda reveals Dorothy could have returned home all along.",
  prompt: "Why didn’t Glinda tell Dorothy sooner?",
  options: [
    {
      text: "Dorothy needed to grow before understanding her power.",
      isCorrect: true
    },
    {
      text: "Glinda forgot.",
      isCorrect: false
    },
    {
      text: "The magic required delay.",
      isCorrect: false
    },
    {
      text: "The Wizard forbade it.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-17",
  source: "The Wizard of Oz",
  sceneTitle: "Saying goodbye",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Dorothy says goodbye to her companions.",
  prompt: "What makes this farewell meaningful?",
  options: [
    {
      text: "They have helped one another grow.",
      isCorrect: true
    },
    {
      text: "They expect to reunite soon.",
      isCorrect: false
    },
    {
      text: "Dorothy wants to stay in Oz.",
      isCorrect: false
    },
    {
      text: "They regret the journey.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-18",
  source: "The Wizard of Oz",
  sceneTitle: "No place like home",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Theme Connection",
  scene:
    "Dorothy returns to Kansas, realizing what home means to her.",
  prompt: "What lesson does Dorothy learn?",
  options: [
    {
      text: "Home is defined by love and belonging, not excitement.",
      isCorrect: true
    },
    {
      text: "Adventure is dangerous.",
      isCorrect: false
    },
    {
      text: "Kansas is boring.",
      isCorrect: false
    },
    {
      text: "Magic worlds are better.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-19",
  source: "The Wizard of Oz",
  sceneTitle: "A changed girl",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Insight",
  scene:
    "Dorothy reflects on her journey after returning home.",
  prompt: "What has changed in Dorothy?",
  options: [
    {
      text: "She understands her own strength more clearly.",
      isCorrect: true
    },
    {
      text: "She wants to return to Oz.",
      isCorrect: false
    },
    {
      text: "She distrusts adults.",
      isCorrect: false
    },
    {
      text: "She forgets her journey.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-20",
  source: "The Wizard of Oz",
  sceneTitle: "The journey’s meaning",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "Dorothy’s adventure comes to an end, leaving her wiser than before.",
  prompt: "What lasting message does the story offer?",
  options: [
    {
      text: "The qualities we seek are often already within us.",
      isCorrect: true
    },
    {
      text: "Magic solves problems.",
      isCorrect: false
    },
    {
      text: "Authority should never be questioned.",
      isCorrect: false
    },
    {
      text: "Adventure is better than home.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-oz-22",
  source: "The Wizard of Oz",
  sceneTitle: "The Witch’s warning",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "SecretExchange"],
  gateIcons: ["🎭", "✉️"],
  skill: "Character Motivation",
  scene:
    "The Wicked Witch of the West warns Dorothy about the silver shoes.",
  prompt: "Why does this warning matter?",
  options: [
    {
      text: "It hints that the shoes hold power Dorothy doesn’t yet grasp.",
      isCorrect: true
    },
    {
      text: "It shows the Witch wants to help Dorothy.",
      isCorrect: false
    },
    {
      text: "It explains how magic works.",
      isCorrect: false
    },
    {
      text: "It frightens Dorothy into giving up.",
      isCorrect: false
    }
  ]
},


{
  id: "lit-oz-25",
  source: "The Wizard of Oz",
  sceneTitle: "The Lion defends his friends",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "ThresholdMoment"],
  gateIcons: ["🎭", "🚪"],
  skill: "Character Growth",
  scene:
    "The Lion roars to protect the group from danger.",
  prompt: "What does this action reveal?",
  options: [
    {
      text: "Bravery can exist even alongside fear.",
      isCorrect: true
    },
    {
      text: "Fear has disappeared completely.",
      isCorrect: false
    },
    {
      text: "The Lion enjoys fighting.",
      isCorrect: false
    },
    {
      text: "The Lion wants praise.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-26",
  source: "The Wizard of Oz",
  sceneTitle: "Crossing dangerous terrain",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "ThresholdMoment"],
  gateIcons: ["🫂", "🚪"],
  skill: "Scene Purpose",
  scene:
    "The group works together to cross obstacles like rivers and forests.",
  prompt: "Why are these challenges important?",
  options: [
    {
      text: "They show cooperation matters more than individual strength.",
      isCorrect: true
    },
    {
      text: "They slow the journey.",
      isCorrect: false
    },
    {
      text: "They prove Oz is dangerous.",
      isCorrect: false
    },
    {
      text: "They punish the travelers.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-27",
  source: "The Wizard of Oz",
  sceneTitle: "The field of poppies",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "EmotionalContradiction"],
  gateIcons: ["🔮", "🎨"],
  skill: "Symbolism",
  scene:
    "Dorothy falls asleep in the deadly poppy field.",
  prompt: "What do the poppies represent?",
  options: [
    {
      text: "Hidden danger disguised as beauty.",
      isCorrect: true
    },
    {
      text: "Rest and peace.",
      isCorrect: false
    },
    {
      text: "Magic protection.",
      isCorrect: false
    },
    {
      text: "Natural sleep.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-28",
  source: "The Wizard of Oz",
  sceneTitle: "Saving Dorothy",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  skill: "Relationship Change",
  scene:
    "The Scarecrow and Tin Woodman save Dorothy from the poppies.",
  prompt: "What does this moment show?",
  options: [
    {
      text: "Friendship grows through action and loyalty.",
      isCorrect: true
    },
    {
      text: "Dorothy is dependent.",
      isCorrect: false
    },
    {
      text: "The journey is nearly over.",
      isCorrect: false
    },
    {
      text: "Magic solves problems instantly.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-oz-30",
  source: "The Wizard of Oz",
  sceneTitle: "The Witch’s fear",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Theme Connection",
  scene:
    "The Witch fears the power of the silver shoes.",
  prompt: "What does this fear reveal?",
  options: [
    {
      text: "Power does not always belong to those who seek it.",
      isCorrect: true
    },
    {
      text: "The Witch is weak.",
      isCorrect: false
    },
    {
      text: "Dorothy plans to use magic.",
      isCorrect: false
    },
    {
      text: "Magic is unpredictable.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-31",
  source: "The Wizard of Oz",
  sceneTitle: "Freedom of the Winkies",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Scene Purpose",
  scene:
    "After the Witch melts, the Winkies are freed.",
  prompt: "Why is this change important?",
  options: [
    {
      text: "Oppression ends when false power is removed.",
      isCorrect: true
    },
    {
      text: "Magic vanishes from Oz.",
      isCorrect: false
    },
    {
      text: "Dorothy becomes a ruler.",
      isCorrect: false
    },
    {
      text: "The journey is complete.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-oz-33",
  source: "The Wizard of Oz",
  sceneTitle: "The Scarecrow leads",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "RelationshipShift"],
  gateIcons: ["🎭", "🫂"],
  skill: "Character Growth",
  scene:
    "The Scarecrow takes charge when needed.",
  prompt: "What does this leadership show?",
  options: [
    {
      text: "He has always been capable of wise decisions.",
      isCorrect: true
    },
    {
      text: "He imitates others.",
      isCorrect: false
    },
    {
      text: "He wants authority.",
      isCorrect: false
    },
    {
      text: "He relies on luck.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-34",
  source: "The Wizard of Oz",
  sceneTitle: "Tin Woodman as ruler",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "WorldLogicShift"],
  gateIcons: ["🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "The Tin Woodman becomes leader of the Winkies.",
  prompt: "Why is this fitting?",
  options: [
    {
      text: "He rules with kindness and care.",
      isCorrect: true
    },
    {
      text: "He is strongest.",
      isCorrect: false
    },
    {
      text: "He wants power.",
      isCorrect: false
    },
    {
      text: "Magic chooses him.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-35",
  source: "The Wizard of Oz",
  sceneTitle: "The Lion’s kingdom",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Growth",
  scene:
    "The Lion becomes king of the forest animals.",
  prompt: "What makes him a good leader?",
  options: [
    {
      text: "He acts bravely despite fear.",
      isCorrect: true
    },
    {
      text: "He never doubts himself.",
      isCorrect: false
    },
    {
      text: "He is physically powerful.",
      isCorrect: false
    },
    {
      text: "Others force him to lead.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-36",
  source: "The Wizard of Oz",
  sceneTitle: "The Wizard departs",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🚪", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "The Wizard leaves Oz in a balloon.",
  prompt: "How does this moment affect Oz?",
  options: [
    {
      text: "The illusion of authority disappears.",
      isCorrect: true
    },
    {
      text: "Chaos follows.",
      isCorrect: false
    },
    {
      text: "Magic ends.",
      isCorrect: false
    },
    {
      text: "Dorothy loses hope.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-37",
  source: "The Wizard of Oz",
  sceneTitle: "The silver shoes again",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "SecretExchange"],
  gateIcons: ["📆", "✉️"],
  skill: "Symbolism",
  scene:
    "Dorothy learns the shoes’ true power.",
  prompt: "Why is this revelation meaningful?",
  options: [
    {
      text: "Dorothy had control over her return all along.",
      isCorrect: true
    },
    {
      text: "Magic appears suddenly.",
      isCorrect: false
    },
    {
      text: "Glinda deceives Dorothy.",
      isCorrect: false
    },
    {
      text: "The journey was unnecessary.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-38",
  source: "The Wizard of Oz",
  sceneTitle: "Choosing home",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Motivation",
  scene:
    "Dorothy chooses to return to Kansas.",
  prompt: "Why does Dorothy choose home?",
  options: [
    {
      text: "She values belonging over adventure.",
      isCorrect: true
    },
    {
      text: "She fears Oz.",
      isCorrect: false
    },
    {
      text: "She is forced to leave.",
      isCorrect: false
    },
    {
      text: "She dislikes her friends.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-39",
  source: "The Wizard of Oz",
  sceneTitle: "Lessons remembered",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Theme Connection",
  scene:
    "Dorothy reflects on what she learned in Oz.",
  prompt: "What lesson stays with her?",
  options: [
    {
      text: "Self-belief grows through experience.",
      isCorrect: true
    },
    {
      text: "Magic is dangerous.",
      isCorrect: false
    },
    {
      text: "Friends solve everything.",
      isCorrect: false
    },
    {
      text: "Adventure replaces home.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-oz-40",
  source: "The Wizard of Oz",
  sceneTitle: "The road revisited",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift", "IdentityTension"],
  gateIcons: ["📆", "🔮", "🎭"],
  skill: "Theme Connection",
  scene:
    "Dorothy’s journey ends where it began, but she is changed.",
  prompt: "What does the Yellow Brick Road ultimately represent?",
  options: [
    {
      text: "A path of self-discovery rather than a source of answers.",
      isCorrect: true
    },
    {
      text: "Magic guidance.",
      isCorrect: false
    },
    {
      text: "A test of obedience.",
      isCorrect: false
    },
    {
      text: "A false promise.",
      isCorrect: false
    }
  ]
},






{
  id: "lit-secretgarden-7",
  source: "The Secret Garden",
  sceneTitle: "Entering the garden",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🚪", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "Mary steps into the secret garden for the first time.",
  prompt: "What emotion defines this moment?",
  options: [
    {
      text: "Wonder mixed with quiet responsibility.",
      isCorrect: true
    },
    {
      text: "Fear.",
      isCorrect: false
    },
    {
      text: "Anger.",
      isCorrect: false
    },
    {
      text: "Pride.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-8",
  source: "The Secret Garden",
  sceneTitle: "Working the soil",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Growth",
  scene:
    "Mary begins gardening every day.",
  prompt: "How does this work change Mary?",
  options: [
    {
      text: "She becomes healthier, calmer, and more caring.",
      isCorrect: true
    },
    {
      text: "She grows bored.",
      isCorrect: false
    },
    {
      text: "She avoids others.",
      isCorrect: false
    },
    {
      text: "She feels pressured.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-secretgarden-10",
  source: "The Secret Garden",
  sceneTitle: "Hearing the crying",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Scene Purpose",
  scene:
    "Mary hears crying in the manor at night.",
  prompt: "Why does this moment matter?",
  options: [
    {
      text: "It leads Mary to discover another hidden life.",
      isCorrect: true
    },
    {
      text: "It frightens her away.",
      isCorrect: false
    },
    {
      text: "It explains the manor’s silence.",
      isCorrect: false
    },
    {
      text: "It warns her to stop exploring.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-11",
  source: "The Secret Garden",
  sceneTitle: "Meeting Colin",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Mary meets Colin, who believes he is weak and doomed.",
  prompt: "What do Mary and Colin share?",
  options: [
    {
      text: "Loneliness shaped by neglect and fear.",
      isCorrect: true
    },
    {
      text: "Love of attention.",
      isCorrect: false
    },
    {
      text: "Confidence.",
      isCorrect: false
    },
    {
      text: "Anger toward adults.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-12",
  source: "The Secret Garden",
  sceneTitle: "Telling Colin the truth",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "RelationshipShift"],
  gateIcons: ["🚪", "🫂"],
  skill: "Character Motivation",
  scene:
    "Mary bluntly tells Colin he is not as sick as he believes.",
  prompt: "Why does Mary speak this way?",
  options: [
    {
      text: "She challenges his fears to help him grow stronger.",
      isCorrect: true
    },
    {
      text: "She wants to upset him.",
      isCorrect: false
    },
    {
      text: "She dislikes Colin.",
      isCorrect: false
    },
    {
      text: "She does not understand illness.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-13",
  source: "The Secret Garden",
  sceneTitle: "Colin leaves his bed",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Growth",
  scene:
    "Colin decides to get out of bed and go outside.",
  prompt: "What does this decision represent?",
  options: [
    {
      text: "A shift from fear to belief in himself.",
      isCorrect: true
    },
    {
      text: "Rebellion.",
      isCorrect: false
    },
    {
      text: "Disobedience.",
      isCorrect: false
    },
    {
      text: "Carelessness.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-14",
  source: "The Secret Garden",
  sceneTitle: "The garden shared",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "WorldLogicShift"],
  gateIcons: ["🫂", "🔮"],
  skill: "Scene Purpose",
  scene:
    "Mary brings Colin into the secret garden.",
  prompt: "Why is sharing the garden important?",
  options: [
    {
      text: "Healing becomes stronger when shared.",
      isCorrect: true
    },
    {
      text: "Mary wants praise.",
      isCorrect: false
    },
    {
      text: "Colin demands it.",
      isCorrect: false
    },
    {
      text: "The garden needs more people.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-15",
  source: "The Secret Garden",
  sceneTitle: "Practicing belief",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Theme Connection",
  scene:
    "Colin practices standing and walking each day.",
  prompt: "What idea does this repetition show?",
  options: [
    {
      text: "Change comes through patience and belief.",
      isCorrect: true
    },
    {
      text: "Strength appears suddenly.",
      isCorrect: false
    },
    {
      text: "Magic replaces effort.",
      isCorrect: false
    },
    {
      text: "Others must carry you.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-16",
  source: "The Secret Garden",
  sceneTitle: "Mr. Craven returns",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "Mr. Craven returns and sees Colin walking.",
  prompt: "What emotion defines Mr. Craven’s reaction?",
  options: [
    {
      text: "Joy mixed with disbelief and relief.",
      isCorrect: true
    },
    {
      text: "Anger.",
      isCorrect: false
    },
    {
      text: "Confusion only.",
      isCorrect: false
    },
    {
      text: "Fear.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-17",
  source: "The Secret Garden",
  sceneTitle: "The garden restored",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift"],
  gateIcons: ["📆", "🔮"],
  skill: "Symbolism",
  scene:
    "The garden blooms fully again.",
  prompt: "What does the restored garden symbolize?",
  options: [
    {
      text: "Renewal of life, hope, and connection.",
      isCorrect: true
    },
    {
      text: "Success through secrecy.",
      isCorrect: false
    },
    {
      text: "Nature’s power over people.",
      isCorrect: false
    },
    {
      text: "The end of childhood.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-18",
  source: "The Secret Garden",
  sceneTitle: "Mary’s transformation",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Insight",
  scene:
    "Mary reflects on how different she feels from when she arrived.",
  prompt: "What has changed most in Mary?",
  options: [
    {
      text: "She has learned to care for others and herself.",
      isCorrect: true
    },
    {
      text: "She enjoys control.",
      isCorrect: false
    },
    {
      text: "She prefers solitude.",
      isCorrect: false
    },
    {
      text: "She misses being alone.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-19",
  source: "The Secret Garden",
  sceneTitle: "Colin’s confidence",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "RelationshipShift"],
  gateIcons: ["🎭", "🫂"],
  skill: "Character Growth",
  scene:
    "Colin begins speaking and acting confidently.",
  prompt: "What causes this change?",
  options: [
    {
      text: "Support, belief, and shared effort.",
      isCorrect: true
    },
    {
      text: "Magic alone.",
      isCorrect: false
    },
    {
      text: "Praise.",
      isCorrect: false
    },
    {
      text: "Luck.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-20",
  source: "The Secret Garden",
  sceneTitle: "The lasting lesson",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "The children look toward the future, changed by the garden.",
  prompt: "What lasting message does the story offer?",
  options: [
    {
      text: "Care, connection, and nature can heal deeply.",
      isCorrect: true
    },
    {
      text: "Secrets should always be kept.",
      isCorrect: false
    },
    {
      text: "Children must fix adults.",
      isCorrect: false
    },
    {
      text: "Magic is required for happiness.",
      isCorrect: false
    }
  ]
},




{
  id: "lit-secretgarden-25",
  source: "The Secret Garden",
  sceneTitle: "Colin’s nightly fear",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "Colin fears he will grow a hump and die young.",
  prompt: "What drives Colin’s fear?",
  options: [
    {
      text: "Years of isolation and being told he is fragile.",
      isCorrect: true
    },
    {
      text: "Actual illness worsening.",
      isCorrect: false
    },
    {
      text: "Punishment for misbehavior.",
      isCorrect: false
    },
    {
      text: "Stories he has read.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-26",
  source: "The Secret Garden",
  sceneTitle: "Mary argues with Colin",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "ThresholdMoment"],
  gateIcons: ["🫂", "🚪"],
  skill: "Scene Purpose",
  scene:
    "Mary refuses to let Colin behave like a helpless invalid.",
  prompt: "Why is this argument important?",
  options: [
    {
      text: "It interrupts Colin’s harmful beliefs about himself.",
      isCorrect: true
    },
    {
      text: "It shows Mary’s anger.",
      isCorrect: false
    },
    {
      text: "It creates lasting resentment.",
      isCorrect: false
    },
    {
      text: "It frightens Colin into silence.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-27",
  source: "The Secret Garden",
  sceneTitle: "Naming the Magic",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Theme Connection",
  scene:
    "Colin calls the force helping him grow strong 'Magic.'",
  prompt: "What does Colin mean by 'Magic'?",
  options: [
    {
      text: "The power of belief, effort, and nature working together.",
      isCorrect: true
    },
    {
      text: "A spell Mary cast.",
      isCorrect: false
    },
    {
      text: "A secret cure.",
      isCorrect: false
    },
    {
      text: "Luck.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-28",
  source: "The Secret Garden",
  sceneTitle: "Keeping Colin hidden",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "RelationshipShift"],
  gateIcons: ["✉️", "🫂"],
  skill: "Character Motivation",
  scene:
    "Mary and Dickon help keep Colin’s improvement secret.",
  prompt: "Why do they hide his progress?",
  options: [
    {
      text: "They want Colin to grow confident before being judged.",
      isCorrect: true
    },
    {
      text: "They fear punishment.",
      isCorrect: false
    },
    {
      text: "They enjoy secrecy.",
      isCorrect: false
    },
    {
      text: "They mistrust adults.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-29",
  source: "The Secret Garden",
  sceneTitle: "Colin stands alone",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Growth",
  scene:
    "Colin stands without support in the garden.",
  prompt: "Why is this moment powerful?",
  options: [
    {
      text: "It proves he is redefining who he believes he is.",
      isCorrect: true
    },
    {
      text: "It shows physical strength only.",
      isCorrect: false
    },
    {
      text: "It surprises Mary.",
      isCorrect: false
    },
    {
      text: "It ends his fears completely.",
      isCorrect: false
    }
  ]
},


{
  id: "lit-secretgarden-32",
  source: "The Secret Garden",
  sceneTitle: "Ben Weatherstaff’s pride",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Ben Weatherstaff watches the garden come back to life.",
  prompt: "What emotion does Ben feel?",
  options: [
    {
      text: "Pride mixed with quiet joy.",
      isCorrect: true
    },
    {
      text: "Regret.",
      isCorrect: false
    },
    {
      text: "Jealousy.",
      isCorrect: false
    },
    {
      text: "Surprise only.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-33",
  source: "The Secret Garden",
  sceneTitle: "Colin plans the reveal",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "SecretExchange"],
  gateIcons: ["🚪", "✉️"],
  skill: "Scene Purpose",
  scene:
    "Colin plans how to show his father he can walk.",
  prompt: "Why does Colin plan this moment carefully?",
  options: [
    {
      text: "He wants to reclaim his identity with confidence.",
      isCorrect: true
    },
    {
      text: "He wants attention.",
      isCorrect: false
    },
    {
      text: "He fears punishment.",
      isCorrect: false
    },
    {
      text: "He wants to surprise everyone.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-34",
  source: "The Secret Garden",
  sceneTitle: "Mary watches from the side",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Insight",
  scene:
    "Mary watches Colin take center stage in the garden.",
  prompt: "What does Mary feel here?",
  options: [
    {
      text: "Pride without jealousy.",
      isCorrect: true
    },
    {
      text: "Being replaced.",
      isCorrect: false
    },
    {
      text: "Anger.",
      isCorrect: false
    },
    {
      text: "Relief that her work is done.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-35",
  source: "The Secret Garden",
  sceneTitle: "Mr. Craven hears his wife’s voice",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift"],
  gateIcons: ["📆", "🔮"],
  skill: "Symbolism",
  scene:
    "Mr. Craven feels drawn back to the garden by memory.",
  prompt: "What does this moment suggest?",
  options: [
    {
      text: "Grief can soften when life returns.",
      isCorrect: true
    },
    {
      text: "Magic summons him.",
      isCorrect: false
    },
    {
      text: "He imagines voices.",
      isCorrect: false
    },
    {
      text: "The past traps him.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-36",
  source: "The Secret Garden",
  sceneTitle: "Father and son reunited",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "Mr. Craven sees Colin standing strong.",
  prompt: "What emotion defines this reunion?",
  options: [
    {
      text: "Joy breaking through long-held sorrow.",
      isCorrect: true
    },
    {
      text: "Shock only.",
      isCorrect: false
    },
    {
      text: "Anger.",
      isCorrect: false
    },
    {
      text: "Disbelief without hope.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-37",
  source: "The Secret Garden",
  sceneTitle: "The garden no longer secret",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "EmotionalEcho"],
  gateIcons: ["🚪", "📆"],
  skill: "Theme Connection",
  scene:
    "The garden is opened and shared openly.",
  prompt: "Why is this change meaningful?",
  options: [
    {
      text: "Healing no longer needs to be hidden.",
      isCorrect: true
    },
    {
      text: "The mystery is gone.",
      isCorrect: false
    },
    {
      text: "Rules are broken.",
      isCorrect: false
    },
    {
      text: "The story ends.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-38",
  source: "The Secret Garden",
  sceneTitle: "Mary’s quiet confidence",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Insight",
  scene:
    "Mary moves through the manor calmly and confidently.",
  prompt: "What does this show about Mary?",
  options: [
    {
      text: "She has found inner balance and connection.",
      isCorrect: true
    },
    {
      text: "She has become obedient.",
      isCorrect: false
    },
    {
      text: "She avoids attention.",
      isCorrect: false
    },
    {
      text: "She is no longer curious.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-39",
  source: "The Secret Garden",
  sceneTitle: "Colin runs",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Symbolism",
  scene:
    "Colin runs toward his father.",
  prompt: "What does this action symbolize?",
  options: [
    {
      text: "Freedom from the identity of being 'sick.'",
      isCorrect: true
    },
    {
      text: "Recklessness.",
      isCorrect: false
    },
    {
      text: "Defiance.",
      isCorrect: false
    },
    {
      text: "Magic victory.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-secretgarden-40",
  source: "The Secret Garden",
  sceneTitle: "The lasting garden",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "The garden continues to grow as the children grow.",
  prompt: "What lasting idea does the garden represent?",
  options: [
    {
      text: "Care and connection create lasting change.",
      isCorrect: true
    },
    {
      text: "Nature replaces people.",
      isCorrect: false
    },
    {
      text: "Secrets are powerful.",
      isCorrect: false
    },
    {
      text: "Change happens instantly.",
      isCorrect: false
    }
  ]
},






{
  id: "lit-peterpan-7",
  source: "Peter Pan",
  sceneTitle: "Playing house",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Theme Connection",
  scene:
    "Wendy becomes the Lost Boys’ pretend mother.",
  prompt: "What tension does this game reveal?",
  options: [
    {
      text: "Wendy enjoys nurturing but senses it leads toward growing up.",
      isCorrect: true
    },
    {
      text: "She wants power.",
      isCorrect: false
    },
    {
      text: "She prefers pretending to reality.",
      isCorrect: false
    },
    {
      text: "She dislikes responsibility.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-8",
  source: "Peter Pan",
  sceneTitle: "Tinker Bell’s jealousy",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Character Insight",
  scene:
    "Tinker Bell grows jealous of Wendy’s closeness to Peter.",
  prompt: "What causes Tinker Bell’s jealousy?",
  options: [
    {
      text: "Fear of losing Peter’s attention.",
      isCorrect: true
    },
    {
      text: "Dislike of humans.",
      isCorrect: false
    },
    {
      text: "Desire for leadership.",
      isCorrect: false
    },
    {
      text: "Anger at the Lost Boys.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-peterpan-10",
  source: "Peter Pan",
  sceneTitle: "Peter’s forgetfulness",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Insight",
  scene:
    "Peter quickly forgets past adventures and people.",
  prompt: "What does this trait suggest?",
  options: [
    {
      text: "Living only in the present comes at a cost.",
      isCorrect: true
    },
    {
      text: "Peter lacks intelligence.",
      isCorrect: false
    },
    {
      text: "He is careless with friends.",
      isCorrect: false
    },
    {
      text: "He avoids responsibility.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-11",
  source: "Peter Pan",
  sceneTitle: "The pirate attack",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "RelationshipShift"],
  gateIcons: ["🚪", "🫂"],
  skill: "Scene Purpose",
  scene:
    "Captain Hook captures the Darling children.",
  prompt: "Why is this moment important?",
  options: [
    {
      text: "It forces the children to rely on courage rather than play.",
      isCorrect: true
    },
    {
      text: "It proves Hook is stronger.",
      isCorrect: false
    },
    {
      text: "It ends the adventure.",
      isCorrect: false
    },
    {
      text: "It frightens Peter.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-12",
  source: "Peter Pan",
  sceneTitle: "Tinker Bell drinks the poison",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Theme Connection",
  scene:
    "Tinker Bell drinks poisoned medicine meant for Peter.",
  prompt: "What does this sacrifice show?",
  options: [
    {
      text: "Love expressed through selfless action.",
      isCorrect: true
    },
    {
      text: "Recklessness.",
      isCorrect: false
    },
    {
      text: "Obedience.",
      isCorrect: false
    },
    {
      text: "Fear of Peter.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-peterpan-14",
  source: "Peter Pan",
  sceneTitle: "Peter defeats Hook",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Growth",
  scene:
    "Peter finally defeats Captain Hook.",
  prompt: "Why does Peter win?",
  options: [
    {
      text: "He refuses to be afraid of growing up or time.",
      isCorrect: true
    },
    {
      text: "He is physically stronger.",
      isCorrect: false
    },
    {
      text: "He plans carefully.",
      isCorrect: false
    },
    {
      text: "Hook makes mistakes.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-15",
  source: "Peter Pan",
  sceneTitle: "Wendy’s choice",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Motivation",
  scene:
    "Wendy decides to return home.",
  prompt: "Why does Wendy choose to leave Neverland?",
  options: [
    {
      text: "She accepts that growing up brings meaning, not just loss.",
      isCorrect: true
    },
    {
      text: "She is afraid of pirates.",
      isCorrect: false
    },
    {
      text: "She misses school.",
      isCorrect: false
    },
    {
      text: "She is forced to leave.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-16",
  source: "Peter Pan",
  sceneTitle: "Inviting Peter home",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "The Darling children invite Peter to come home with them.",
  prompt: "Why does Peter refuse?",
  options: [
    {
      text: "He fears change and responsibility.",
      isCorrect: true
    },
    {
      text: "He dislikes parents.",
      isCorrect: false
    },
    {
      text: "He prefers adventure.",
      isCorrect: false
    },
    {
      text: "He wants to stay leader.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-peterpan-18",
  source: "Peter Pan",
  sceneTitle: "Growing up at home",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  skill: "Theme Connection",
  scene:
    "Wendy grows older and has a daughter of her own.",
  prompt: "What idea does this ending reinforce?",
  options: [
    {
      text: "Growing up is a cycle, not a failure of imagination.",
      isCorrect: true
    },
    {
      text: "Childhood ends completely.",
      isCorrect: false
    },
    {
      text: "Peter returns permanently.",
      isCorrect: false
    },
    {
      text: "Memories fade entirely.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-19",
  source: "Peter Pan",
  sceneTitle: "Peter returns unchanged",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalContradiction", "IdentityTension"],
  gateIcons: ["🎨", "🎭"],
  skill: "Character Insight",
  scene:
    "Peter returns, still a child, while Wendy has grown.",
  prompt: "What contrast does this highlight?",
  options: [
    {
      text: "Eternal childhood lacks lasting connection.",
      isCorrect: true
    },
    {
      text: "Peter is happier.",
      isCorrect: false
    },
    {
      text: "Wendy regrets growing up.",
      isCorrect: false
    },
    {
      text: "Neverland is superior.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-peterpan-20",
  source: "Peter Pan",
  sceneTitle: "The story’s lasting question",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "Peter Pan continues flying while others grow.",
  prompt: "What lasting question does the story ask?",
  options: [
    {
      text: "What do we gain—and lose—by choosing to grow up?",
      isCorrect: true
    },
    {
      text: "Is imagination dangerous?",
      isCorrect: false
    },
    {
      text: "Is childhood better?",
      isCorrect: false
    },
    {
      text: "Can magic last forever?",
      isCorrect: false
    }
  ]
},







{
  id: "lit-narnia-lww-8",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "The beavers’ warning",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "WorldLogicShift"],
  gateIcons: ["✉️", "🔮"],
  skill: "Scene Purpose",
  scene:
    "The Beavers explain who Aslan is and why the Witch is dangerous.",
  prompt: "What role does this explanation play?",
  options: [
    {
      text: "It gives the children context for their choices.",
      isCorrect: true
    },
    {
      text: "It frightens them into leaving.",
      isCorrect: false
    },
    {
      text: "It reveals all the rules of Narnia.",
      isCorrect: false
    },
    {
      text: "It explains magic fully.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-9",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Edmund slips away",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Motivation",
  scene:
    "Edmund secretly leaves the group to find the Witch.",
  prompt: "Why does Edmund leave?",
  options: [
    {
      text: "He chooses selfish desire over loyalty.",
      isCorrect: true
    },
    {
      text: "He wants to warn the Witch.",
      isCorrect: false
    },
    {
      text: "He is afraid of Aslan.",
      isCorrect: false
    },
    {
      text: "He is confused.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-narnia-lww-11",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Meeting Aslan",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "EmotionalContradiction"],
  gateIcons: ["🔮", "🎨"],
  skill: "Emotional Beat Shift",
  scene:
    "The children hear Aslan’s name and feel awe and fear.",
  prompt: "Why do they feel mixed emotions?",
  options: [
    {
      text: "Aslan represents great power paired with goodness.",
      isCorrect: true
    },
    {
      text: "They fear punishment.",
      isCorrect: false
    },
    {
      text: "They expect danger.",
      isCorrect: false
    },
    {
      text: "They misunderstand him.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-12",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Edmund rescued",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["RelationshipShift", "EmotionalContradiction"],
  gateIcons: ["🫂", "🎨"],
  skill: "Relationship Change",
  scene:
    "Edmund is rescued from the Witch’s camp.",
  prompt: "What changes in Edmund here?",
  options: [
    {
      text: "He begins to feel shame and regret.",
      isCorrect: true
    },
    {
      text: "He feels proud.",
      isCorrect: false
    },
    {
      text: "He remains defiant.",
      isCorrect: false
    },
    {
      text: "He feels misunderstood.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-13",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Aslan speaks privately with Edmund",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Theme Connection",
  scene:
    "Aslan talks with Edmund alone, and nothing is repeated.",
  prompt: "Why is this private conversation important?",
  options: [
    {
      text: "It allows forgiveness without public shame.",
      isCorrect: true
    },
    {
      text: "It hides information.",
      isCorrect: false
    },
    {
      text: "It explains magic rules.",
      isCorrect: false
    },
    {
      text: "It changes the plan.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-14",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "The Deep Magic",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange"],
  gateIcons: ["🔮", "✉️"],
  skill: "Theme Connection",
  scene:
    "The Witch reminds Aslan of the Deep Magic requiring Edmund’s punishment.",
  prompt: "What does the Deep Magic represent?",
  options: [
    {
      text: "Justice that demands consequences for wrongdoing.",
      isCorrect: true
    },
    {
      text: "Cruel law.",
      isCorrect: false
    },
    {
      text: "The Witch’s authority.",
      isCorrect: false
    },
    {
      text: "Fear-based control.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-15",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Aslan’s sacrifice",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🚪", "🎨"],
  skill: "Theme Connection",
  scene:
    "Aslan gives himself in Edmund’s place.",
  prompt: "Why does Aslan choose this?",
  options: [
    {
      text: "To save Edmund through self-sacrifice.",
      isCorrect: true
    },
    {
      text: "To trick the Witch.",
      isCorrect: false
    },
    {
      text: "To prove strength.",
      isCorrect: false
    },
    {
      text: "To end the war quickly.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-16",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Susan and Lucy wait",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalEcho", "RelationshipShift"],
  gateIcons: ["📆", "🫂"],
  skill: "Emotional Beat Shift",
  scene:
    "Susan and Lucy remain with Aslan after his death.",
  prompt: "What does their choice show?",
  options: [
    {
      text: "Love and loyalty even in grief.",
      isCorrect: true
    },
    {
      text: "Fear of leaving.",
      isCorrect: false
    },
    {
      text: "Confusion.",
      isCorrect: false
    },
    {
      text: "Hope alone.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-17",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Aslan returns",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Theme Connection",
  scene:
    "Aslan returns to life at dawn.",
  prompt: "What does the Deeper Magic reveal?",
  options: [
    {
      text: "Sacrifice can undo the power of death.",
      isCorrect: true
    },
    {
      text: "Magic has loopholes.",
      isCorrect: false
    },
    {
      text: "The Witch made a mistake.",
      isCorrect: false
    },
    {
      text: "Strength always wins.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-18",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Freeing the statues",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["WorldLogicShift", "RelationshipShift"],
  gateIcons: ["🔮", "🫂"],
  skill: "Scene Purpose",
  scene:
    "Aslan brings the stone statues back to life.",
  prompt: "Why is this moment important?",
  options: [
    {
      text: "It shows restoration after oppression.",
      isCorrect: true
    },
    {
      text: "It proves Aslan’s power.",
      isCorrect: false
    },
    {
      text: "It frightens the Witch.",
      isCorrect: false
    },
    {
      text: "It ends the story.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-19",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "The final battle",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Character Growth",
  scene:
    "Peter fights the Witch’s army.",
  prompt: "What does Peter’s role show?",
  options: [
    {
      text: "He steps into leadership and responsibility.",
      isCorrect: true
    },
    {
      text: "He enjoys fighting.",
      isCorrect: false
    },
    {
      text: "He acts without fear.",
      isCorrect: false
    },
    {
      text: "He follows orders blindly.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-narnia-lww-20",
  source: "The Lion, the Witch and the Wardrobe",
  sceneTitle: "Kings and Queens of Narnia",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension", "WorldLogicShift"],
  gateIcons: ["📆", "🎭", "🔮"],
  skill: "Theme Connection",
  scene:
    "The children rule Narnia as Kings and Queens before returning home.",
  prompt: "What lasting idea does this ending emphasize?",
  options: [
    {
      text: "Growth prepares you for responsibility, even if time resets.",
      isCorrect: true
    },
    {
      text: "Power solves problems.",
      isCorrect: false
    },
    {
      text: "Adventure replaces home.",
      isCorrect: false
    },
    {
      text: "Magic lasts forever.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-1",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Adults arrive too late",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Narrative Structure",
  scene:
    "Adults reach Kirrin Island only after the children have already handled the danger.",
  prompt: "Why does the story delay adult involvement until after the crisis?",
  options: [
    {
      text: "It reinforces that competence, not authority, drives successful action.",
      isCorrect: true
    },
    {
      text: "It creates suspense only.",
      isCorrect: false
    },
    {
      text: "It limits adult responsibility.",
      isCorrect: false
    },
    {
      text: "It simplifies the ending.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-2",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "George’s control of local knowledge",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "SecretExchange"],
  gateIcons: ["🎭", "✉️"],
  skill: "Power Dynamics",
  scene:
    "George understands Kirrin Island better than anyone else.",
  prompt: "Why is George’s local knowledge more valuable than physical strength?",
  options: [
    {
      text: "It allows her to make decisions others cannot verify or challenge.",
      isCorrect: true
    },
    {
      text: "It proves she owns the island emotionally.",
      isCorrect: false
    },
    {
      text: "It makes her the leader automatically.",
      isCorrect: false
    },
    {
      text: "It keeps the group safe at all times.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-3",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Withholding information",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "IdentityTension"],
  gateIcons: ["✉️", "🎭"],
  skill: "Ethical Reasoning",
  scene:
    "The children choose not to immediately tell adults what they know.",
  prompt: "Why does the story frame secrecy as justified here?",
  options: [
    {
      text: "Because sharing information too early would remove their ability to act.",
      isCorrect: true
    },
    {
      text: "Because adults would not listen.",
      isCorrect: false
    },
    {
      text: "Because secrets are exciting.",
      isCorrect: false
    },
    {
      text: "Because rules do not matter.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-4",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "The villains’ mistake",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Cause and Effect",
  scene:
    "The villains underestimate the children’s ability to reason and plan.",
  prompt: "What specifically causes the villains to fail?",
  options: [
    {
      text: "They mistake authority and age for intelligence.",
      isCorrect: true
    },
    {
      text: "They lack strength.",
      isCorrect: false
    },
    {
      text: "They are unlucky.",
      isCorrect: false
    },
    {
      text: "They act too slowly.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-5",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "George’s anger",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalContradiction", "IdentityTension"],
  gateIcons: ["🎨", "🎭"],
  skill: "Character Psychology",
  scene:
    "George reacts strongly when she feels ignored or doubted.",
  prompt: "Why does the story treat George’s anger as understandable rather than childish?",
  options: [
    {
      text: "Because it stems from being consistently underestimated.",
      isCorrect: true
    },
    {
      text: "Because anger proves strength.",
      isCorrect: false
    },
    {
      text: "Because she dislikes compromise.",
      isCorrect: false
    },
    {
      text: "Because she wants control.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-6",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Timmy as decision signal",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "RelationshipShift"],
  gateIcons: ["🔮", "🫂"],
  skill: "Inference",
  scene:
    "The children rely on Timmy’s reactions to sense danger.",
  prompt: "Why is Timmy narratively effective as a warning system?",
  options: [
    {
      text: "He reacts without social bias or hesitation.",
      isCorrect: true
    },
    {
      text: "He has sharper senses.",
      isCorrect: false
    },
    {
      text: "He is trained.",
      isCorrect: false
    },
    {
      text: "He scares villains.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-7",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "The island as closed system",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "ThresholdMoment"],
  gateIcons: ["🔮", "🚪"],
  skill: "Systems Thinking",
  scene:
    "Once on the island, resources and exits are limited.",
  prompt: "Why does the island setting increase narrative tension?",
  options: [
    {
      text: "It forces decisions without outside rescue or validation.",
      isCorrect: true
    },
    {
      text: "It isolates characters emotionally.",
      isCorrect: false
    },
    {
      text: "It adds danger.",
      isCorrect: false
    },
    {
      text: "It limits movement.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-8",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Choosing action over permission",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  skill: "Decision Analysis",
  scene:
    "The children act before seeking adult approval.",
  prompt: "Why does the story reward this choice?",
  options: [
    {
      text: "Because delay would transfer control to less capable actors.",
      isCorrect: true
    },
    {
      text: "Because adults are absent.",
      isCorrect: false
    },
    {
      text: "Because rules do not apply.",
      isCorrect: false
    },
    {
      text: "Because children are braver.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-9",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Treasure as secondary reward",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift"],
  gateIcons: ["📆", "🔮"],
  skill: "Theme Evaluation",
  scene:
    "The treasure matters less than surviving the danger.",
  prompt: "Why does Blyton minimize the treasure’s importance?",
  options: [
    {
      text: "To shift focus from greed to capability and trust.",
      isCorrect: true
    },
    {
      text: "Because the treasure is small.",
      isCorrect: false
    },
    {
      text: "Because the adults claim it.",
      isCorrect: false
    },
    {
      text: "Because treasure causes conflict.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-10",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Group roles emerge",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "RelationshipShift"],
  gateIcons: ["🎭", "🫂"],
  skill: "Role Analysis",
  scene:
    "Each child settles into a functional role during danger.",
  prompt: "Why does the story allow roles to emerge naturally rather than assigning them?",
  options: [
    {
      text: "Because competence reveals itself under pressure.",
      isCorrect: true
    },
    {
      text: "Because leadership is inherited.",
      isCorrect: false
    },
    {
      text: "Because planning is unnecessary.",
      isCorrect: false
    },
    {
      text: "Because conflict is avoided.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-11",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "George trusts the island",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "WorldLogicShift"],
  gateIcons: ["🎭", "🔮"],
  skill: "Symbolism",
  scene:
    "George navigates confidently using the island’s terrain.",
  prompt: "Why does George trust the island more than people?",
  options: [
    {
      text: "The island follows consistent rules, unlike social expectations.",
      isCorrect: true
    },
    {
      text: "She prefers solitude.",
      isCorrect: false
    },
    {
      text: "She dislikes authority.",
      isCorrect: false
    },
    {
      text: "She feels ownership.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-12",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Risk without certainty",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "SecretExchange"],
  gateIcons: ["🚪", "✉️"],
  skill: "Risk Evaluation",
  scene:
    "The children act on incomplete information.",
  prompt: "Why does the story treat uncertainty as unavoidable rather than reckless?",
  options: [
    {
      text: "Because waiting for certainty would guarantee failure.",
      isCorrect: true
    },
    {
      text: "Because danger is exaggerated.",
      isCorrect: false
    },
    {
      text: "Because the children are fearless.",
      isCorrect: false
    },
    {
      text: "Because luck favors them.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-13",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Villains overheard",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "WorldLogicShift"],
  gateIcons: ["✉️", "🔮"],
  skill: "Information Strategy",
  scene:
    "The children overhear plans not meant for them.",
  prompt: "Why is overhearing more powerful than confrontation?",
  options: [
    {
      text: "It grants advantage without revealing intent.",
      isCorrect: true
    },
    {
      text: "It avoids danger.",
      isCorrect: false
    },
    {
      text: "It saves time.",
      isCorrect: false
    },
    {
      text: "It prevents mistakes.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-14",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Children unseen",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Narrative Advantage",
  scene:
    "The villains fail to notice the children observing them.",
  prompt: "Why does invisibility function as power here?",
  options: [
    {
      text: "Because underestimated actors gather information freely.",
      isCorrect: true
    },
    {
      text: "Because children are small.",
      isCorrect: false
    },
    {
      text: "Because villains are careless.",
      isCorrect: false
    },
    {
      text: "Because darkness hides them.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-15",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Delayed celebration",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "ThresholdMoment"],
  gateIcons: ["📆", "🚪"],
  skill: "Emotional Regulation",
  scene:
    "The children remain cautious even after initial success.",
  prompt: "Why does the story delay relief?",
  options: [
    {
      text: "Because premature confidence would undo progress.",
      isCorrect: true
    },
    {
      text: "Because danger remains.",
      isCorrect: false
    },
    {
      text: "Because adults are absent.",
      isCorrect: false
    },
    {
      text: "Because the story needs length.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-16",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Justice without punishment",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalContradiction"],
  gateIcons: ["🔮", "🎨"],
  skill: "Moral Reasoning",
  scene:
    "The story avoids dwelling on harsh punishment.",
  prompt: "Why does Blyton soften the consequences?",
  options: [
    {
      text: "To keep focus on restoration rather than vengeance.",
      isCorrect: true
    },
    {
      text: "To avoid fear.",
      isCorrect: false
    },
    {
      text: "To protect villains.",
      isCorrect: false
    },
    {
      text: "To simplify the ending.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-17",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "George after acceptance",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalEcho"],
  gateIcons: ["🎭", "📆"],
  skill: "Character Arc",
  scene:
    "George becomes less defensive once respected.",
  prompt: "What does this change suggest?",
  options: [
    {
      text: "Recognition reduces the need for constant self-protection.",
      isCorrect: true
    },
    {
      text: "Leadership changes personality.",
      isCorrect: false
    },
    {
      text: "Anger fades naturally.",
      isCorrect: false
    },
    {
      text: "Adventure solves identity.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-18",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why the island remains",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift"],
  gateIcons: ["📆", "🔮"],
  skill: "Symbolism",
  scene:
    "Kirrin Island remains unchanged after the adventure.",
  prompt: "Why does the island itself not change?",
  options: [
    {
      text: "The change is internal, not environmental.",
      isCorrect: true
    },
    {
      text: "The island is timeless.",
      isCorrect: false
    },
    {
      text: "The danger is gone.",
      isCorrect: false
    },
    {
      text: "The story resets.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-19",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Formation of trust",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  skill: "Social Reasoning",
  scene:
    "Trust among the group becomes assumed rather than negotiated.",
  prompt: "Why is trust no longer questioned by the end?",
  options: [
    {
      text: "Shared risk has replaced uncertainty with evidence.",
      isCorrect: true
    },
    {
      text: "They know each other better.",
      isCorrect: false
    },
    {
      text: "Conflict has ended.",
      isCorrect: false
    },
    {
      text: "Leadership is established.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-20",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why this story endures",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift", "IdentityTension"],
  gateIcons: ["📆", "🔮", "🎭"],
  skill: "Meta-Interpretation",
  scene:
    "The children return to ordinary life changed.",
  prompt: "Why does this story continue to resonate with readers?",
  options: [
    {
      text: "It validates competence emerging before permission.",
      isCorrect: true
    },
    {
      text: "It promises adventure.",
      isCorrect: false
    },
    {
      text: "It simplifies morality.",
      isCorrect: false
    },
    {
      text: "It rewards bravery.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-21",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why the villains wait",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange"],
  gateIcons: ["🔮", "✉️"],
  skill: "Strategic Reasoning",
  scene:
    "The villains delay action while gathering information about the island.",
  prompt: "Why does this delay ultimately work against the villains?",
  options: [
    {
      text: "It allows the children to observe and prepare without being noticed.",
      isCorrect: true
    },
    {
      text: "It makes the villains impatient.",
      isCorrect: false
    },
    {
      text: "It gives adults time to arrive.",
      isCorrect: false
    },
    {
      text: "It weakens their authority.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-22",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "George’s refusal to compromise",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  skill: "Character Psychology",
  scene:
    "George resists suggestions that conflict with her understanding of the island.",
  prompt: "Why does the story frame George’s stubbornness as a strength?",
  options: [
    {
      text: "Because local expertise sometimes requires resisting consensus.",
      isCorrect: true
    },
    {
      text: "Because leadership demands dominance.",
      isCorrect: false
    },
    {
      text: "Because compromise is dangerous.",
      isCorrect: false
    },
    {
      text: "Because emotions guide decisions.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-23",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Children overhear without interrupting",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "ThresholdMoment"],
  gateIcons: ["✉️", "🚪"],
  skill: "Information Discipline",
  scene:
    "The children choose to listen quietly rather than confront the men.",
  prompt: "Why is restraint more powerful than immediate action here?",
  options: [
    {
      text: "Because information gathered safely shapes better decisions later.",
      isCorrect: true
    },
    {
      text: "Because confrontation is too risky.",
      isCorrect: false
    },
    {
      text: "Because they are afraid.",
      isCorrect: false
    },
    {
      text: "Because they want adult approval.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-24",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why the island favors children",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Environmental Reasoning",
  scene:
    "The terrain of Kirrin Island works to the children’s advantage.",
  prompt: "Why does the island function better for the children than for adults?",
  options: [
    {
      text: "They adapt quickly and read the environment without assumptions.",
      isCorrect: true
    },
    {
      text: "They are physically smaller.",
      isCorrect: false
    },
    {
      text: "They move faster.",
      isCorrect: false
    },
    {
      text: "They know secret paths.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-25",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Silence as protection",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "EmotionalEcho"],
  gateIcons: ["✉️", "📆"],
  skill: "Risk Management",
  scene:
    "The children deliberately avoid revealing what they know.",
  prompt: "Why does silence increase their safety?",
  options: [
    {
      text: "Because uncertainty forces opponents to guess incorrectly.",
      isCorrect: true
    },
    {
      text: "Because villains lose interest.",
      isCorrect: false
    },
    {
      text: "Because adults intervene.",
      isCorrect: false
    },
    {
      text: "Because danger passes naturally.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-26",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Improvised leadership",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "IdentityTension"],
  gateIcons: ["🫂", "🎭"],
  skill: "Leadership Analysis",
  scene:
    "Leadership shifts fluidly depending on the problem.",
  prompt: "Why does the group avoid a fixed leader?",
  options: [
    {
      text: "Because situational competence matters more than rank.",
      isCorrect: true
    },
    {
      text: "Because leadership causes conflict.",
      isCorrect: false
    },
    {
      text: "Because Julian defers responsibility.",
      isCorrect: false
    },
    {
      text: "Because George resists authority.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-27",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why the villains talk freely",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "SecretExchange"],
  gateIcons: ["🔮", "✉️"],
  skill: "Opponent Analysis",
  scene:
    "The villains speak openly, assuming they are unobserved.",
  prompt: "What false assumption do the villains make?",
  options: [
    {
      text: "That visibility equals importance.",
      isCorrect: true
    },
    {
      text: "That children are absent.",
      isCorrect: false
    },
    {
      text: "That the island is empty.",
      isCorrect: false
    },
    {
      text: "That plans are secure.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-28",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Delayed truth-telling",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "SecretExchange"],
  gateIcons: ["🎭", "✉️"],
  skill: "Ethical Judgment",
  scene:
    "The children delay telling adults what they know.",
  prompt: "Why does the narrative treat this delay as ethical?",
  options: [
    {
      text: "Because responsibility depends on readiness to act.",
      isCorrect: true
    },
    {
      text: "Because adults are untrustworthy.",
      isCorrect: false
    },
    {
      text: "Because secrecy is thrilling.",
      isCorrect: false
    },
    {
      text: "Because rules are flexible.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-29",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "The cost of hesitation",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "EmotionalEcho"],
  gateIcons: ["🚪", "📆"],
  skill: "Cause and Effect",
  scene:
    "Moments of hesitation nearly expose the group.",
  prompt: "What does the story suggest about hesitation?",
  options: [
    {
      text: "Delay can be more dangerous than imperfect action.",
      isCorrect: true
    },
    {
      text: "Fear is unavoidable.",
      isCorrect: false
    },
    {
      text: "Quick thinking solves everything.",
      isCorrect: false
    },
    {
      text: "Confidence prevents mistakes.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-30",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why the island remains neutral",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  skill: "Symbolism",
  scene:
    "Kirrin Island itself neither rewards nor punishes characters.",
  prompt: "Why is the island portrayed as neutral rather than moral?",
  options: [
    {
      text: "It highlights that choices—not settings—create outcomes.",
      isCorrect: true
    },
    {
      text: "It avoids fantasy elements.",
      isCorrect: false
    },
    {
      text: "It reflects realism.",
      isCorrect: false
    },
    {
      text: "It simplifies the plot.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-31",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Group memory formation",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "RelationshipShift"],
  gateIcons: ["📆", "🫂"],
  skill: "Social Cognition",
  scene:
    "The children recall events collectively rather than individually.",
  prompt: "Why does shared memory matter?",
  options: [
    {
      text: "It stabilizes trust and future cooperation.",
      isCorrect: true
    },
    {
      text: "It prevents disagreement.",
      isCorrect: false
    },
    {
      text: "It avoids blame.",
      isCorrect: false
    },
    {
      text: "It simplifies storytelling.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-32",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why George yields at the end",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "RelationshipShift"],
  gateIcons: ["🎭", "🫂"],
  skill: "Character Arc",
  scene:
    "George becomes less rigid after the danger passes.",
  prompt: "Why does the story allow George to soften only after success?",
  options: [
    {
      text: "Security makes flexibility possible.",
      isCorrect: true
    },
    {
      text: "Conflict is exhausting.",
      isCorrect: false
    },
    {
      text: "Leadership changes her.",
      isCorrect: false
    },
    {
      text: "She trusts adults now.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-33",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why adults validate after the fact",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "WorldLogicShift"],
  gateIcons: ["🫂", "🔮"],
  skill: "Authority Analysis",
  scene:
    "Adults approve the children’s actions only after success.",
  prompt: "What does this timing reveal about authority?",
  options: [
    {
      text: "Authority often follows proof rather than foresight.",
      isCorrect: true
    },
    {
      text: "Adults are cautious.",
      isCorrect: false
    },
    {
      text: "Rules must be upheld.",
      isCorrect: false
    },
    {
      text: "Children need guidance.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-34",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Treasure without celebration",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalContradiction", "EmotionalEcho"],
  gateIcons: ["🎨", "📆"],
  skill: "Narrative Emphasis",
  scene:
    "The story moves quickly past the treasure itself.",
  prompt: "Why does Blyton downplay the reward?",
  options: [
    {
      text: "To emphasize capability over material gain.",
      isCorrect: true
    },
    {
      text: "To avoid greed.",
      isCorrect: false
    },
    {
      text: "To shorten the ending.",
      isCorrect: false
    },
    {
      text: "To focus on adults.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-35",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Learning without instruction",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "IdentityTension"],
  gateIcons: ["🔮", "🎭"],
  skill: "Learning Theory",
  scene:
    "The children learn through experience rather than teaching.",
  prompt: "Why does the story avoid explicit lessons?",
  options: [
    {
      text: "Because competence emerges from practice, not explanation.",
      isCorrect: true
    },
    {
      text: "Because adults are absent.",
      isCorrect: false
    },
    {
      text: "Because lessons feel forced.",
      isCorrect: false
    },
    {
      text: "Because danger distracts.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-36",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "The children unseen again",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "WorldLogicShift"],
  gateIcons: ["✉️", "🔮"],
  skill: "Pattern Recognition",
  scene:
    "Once again, the children benefit from being overlooked.",
  prompt: "Why does invisibility recur as a strategic advantage?",
  options: [
    {
      text: "Underestimation creates opportunity.",
      isCorrect: true
    },
    {
      text: "Children are quiet.",
      isCorrect: false
    },
    {
      text: "Villains are careless.",
      isCorrect: false
    },
    {
      text: "Luck repeats.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-37",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why trust persists",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  skill: "Social Stability",
  scene:
    "Trust remains intact even after mistakes.",
  prompt: "Why does the group not fracture after errors?",
  options: [
    {
      text: "Mistakes are shared, not individualized.",
      isCorrect: true
    },
    {
      text: "Leadership absorbs blame.",
      isCorrect: false
    },
    {
      text: "Adults intervene.",
      isCorrect: false
    },
    {
      text: "Danger ends quickly.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-38",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Returning to normal life",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "EmotionalEcho"],
  gateIcons: ["🚪", "📆"],
  skill: "Narrative Resolution",
  scene:
    "The children return to ordinary routines.",
  prompt: "Why does the story emphasize normalcy after adventure?",
  options: [
    {
      text: "To show growth without permanent separation from society.",
      isCorrect: true
    },
    {
      text: "To reset the plot.",
      isCorrect: false
    },
    {
      text: "To calm the reader.",
      isCorrect: false
    },
    {
      text: "To close loose ends.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-39",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why Kirrin remains theirs",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "WorldLogicShift"],
  gateIcons: ["🎭", "🔮"],
  skill: "Ownership Reasoning",
  scene:
    "Kirrin Island remains connected to George, not outsiders.",
  prompt: "Why does the story protect George’s connection to the island?",
  options: [
    {
      text: "Because belonging is earned through responsibility, not claim.",
      isCorrect: true
    },
    {
      text: "Because family owns it.",
      isCorrect: false
    },
    {
      text: "Because treasure is gone.",
      isCorrect: false
    },
    {
      text: "Because adults decide.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-treasure-owl-40",
  source: "Famous Five – Five on a Treasure Island",
  sceneTitle: "Why this adventure feels earned",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "WorldLogicShift", "IdentityTension"],
  gateIcons: ["📆", "🔮", "🎭"],
  skill: "Meta-Interpretation",
  scene:
    "The adventure concludes without spectacle.",
  prompt: "Why does the ending feel satisfying rather than anticlimactic?",
  options: [
    {
      text: "Because success follows consistent judgment rather than luck.",
      isCorrect: true
    },
    {
      text: "Because danger is resolved.",
      isCorrect: false
    },
    {
      text: "Because adults approve.",
      isCorrect: false
    },
    {
      text: "Because treasure is secured.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-famousfive-01",
  source: "The Famous Five",
  sceneTitle: "Anne stays quiet at dinner",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["SecretExchange", "EmotionalContradiction"],
  gateIcons: ["✉️", "🎨"],
  primaryRuleset: "TheoryOfMind",
  pairedRuleset: "DialogueAndSubtext",
  skill: "Character Motivation",
  scene:
    "At dinner, Anne grows quieter than usual while the others speak freely. She eats slowly and avoids looking up, even when spoken to.",
  prompt: "Why does Anne’s silence carry more meaning than the others’ conversation?",
  options: [
    {
      text: "She is carefully protecting a secret and worries that speaking might reveal it.",
      isCorrect: true
    },
    {
      text: "She is bored by the topic of conversation.",
      isCorrect: false
    },
    {
      text: "She feels unwell and wants to leave the table.",
      isCorrect: false
    },
    {
      text: "She has forgotten what she wanted to say.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-02",
  source: "The Famous Five",
  sceneTitle: "Julian takes charge without asking",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "CulturalSignification"],
  gateIcons: ["🫂", "🏛️"],
  primaryRuleset: "CulturalSignification",
  skill: "Theme Connection",
  scene:
    "When danger seems possible, Julian immediately gives instructions, and the others follow without discussion.",
  prompt: "What does this moment reveal about the group’s shared expectations?",
  options: [
    {
      text: "They accept leadership roles shaped by age and confidence without questioning them.",
      isCorrect: true
    },
    {
      text: "They believe Julian knows the future.",
      isCorrect: false
    },
    {
      text: "They are afraid to speak at all.",
      isCorrect: false
    },
    {
      text: "They think rules no longer matter.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-03",
  source: "The Famous Five",
  sceneTitle: "George bristles at being corrected",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["IdentityTension", "RelationshipShift"],
  gateIcons: ["🎭", "🫂"],
  primaryRuleset: "IdentityTension",
  pairedRuleset: "CulturalSignification",
  skill: "Character Perspective",
  scene:
    "George reacts sharply when corrected, insisting on her choices even when help is offered.",
  prompt: "Why does correction feel threatening to George in this moment?",
  options: [
    {
      text: "It challenges the independence she works hard to protect.",
      isCorrect: true
    },
    {
      text: "She dislikes the person speaking.",
      isCorrect: false
    },
    {
      text: "She does not understand the suggestion.",
      isCorrect: false
    },
    {
      text: "She wants to end the conversation quickly.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-04",
  source: "The Famous Five",
  sceneTitle: "A warning ignored",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "NarrativeOmission"],
  gateIcons: ["🚪", "🕳️"],
  primaryRuleset: "NarrativeOmission",
  skill: "Scene Purpose",
  scene:
    "An adult offers a vague warning about the area, but the children exchange glances and continue anyway.",
  prompt: "Why does the story avoid explaining the danger fully at this point?",
  options: [
    {
      text: "To build tension by letting the reader anticipate consequences.",
      isCorrect: true
    },
    {
      text: "Because the author has not decided what will happen.",
      isCorrect: false
    },
    {
      text: "Because the warning is unimportant.",
      isCorrect: false
    },
    {
      text: "Because the children already know everything.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-05",
  source: "The Famous Five",
  sceneTitle: "Timmy senses trouble first",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["WorldLogicShift", "EmotionalEcho"],
  gateIcons: ["🔮", "📆"],
  primaryRuleset: "Symbolism",
  skill: "Symbolism",
  scene:
    "Timmy growls softly before any danger is visible, repeating behavior seen earlier in the story.",
  prompt: "What does Timmy’s reaction symbolize for the group?",
  options: [
    {
      text: "An instinctive warning that danger is near, even before it can be named.",
      isCorrect: true
    },
    {
      text: "A need for attention.",
      isCorrect: false
    },
    {
      text: "Confusion about unfamiliar sounds.",
      isCorrect: false
    },
    {
      text: "Excitement about exploring.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-06",
  source: "The Famous Five",
  sceneTitle: "A plan spoken in half-sentences",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["SecretExchange", "DialogueAndSubtext"],
  gateIcons: ["✉️", "💬"],
  primaryRuleset: "DialogueAndSubtext",
  pairedRuleset: "TheoryOfMind",
  skill: "Dialogue Interpretation",
  scene:
    "The children speak in fragments, glances, and pauses rather than full explanations.",
  prompt: "Why does the group rely on incomplete dialogue here?",
  options: [
    {
      text: "They trust one another to understand without saying everything aloud.",
      isCorrect: true
    },
    {
      text: "They are unsure what the plan is.",
      isCorrect: false
    },
    {
      text: "They want to confuse Timmy.",
      isCorrect: false
    },
    {
      text: "They are too tired to speak clearly.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-07",
  source: "The Famous Five",
  sceneTitle: "Anne hesitates at the doorway",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["ThresholdMoment", "EmotionalContradiction"],
  gateIcons: ["🚪", "🎨"],
  primaryRuleset: "TheoryOfMind",
  skill: "Emotional Inference",
  scene:
    "Anne pauses before entering a dark space, wanting to help but clearly afraid.",
  prompt: "What inner conflict is Anne experiencing?",
  options: [
    {
      text: "A pull between fear and loyalty to the group.",
      isCorrect: true
    },
    {
      text: "Confusion about directions.",
      isCorrect: false
    },
    {
      text: "Anger at being asked to help.",
      isCorrect: false
    },
    {
      text: "A desire to be alone.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-08",
  source: "The Famous Five",
  sceneTitle: "Julian softens his tone",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["RelationshipShift", "DialogueAndSubtext"],
  gateIcons: ["🫂", "💬"],
  primaryRuleset: "DialogueAndSubtext",
  pairedRuleset: "RelationshipShift",
  skill: "Relationship Change",
  scene:
    "Julian lowers his voice and changes his wording when speaking to Anne.",
  prompt: "What does this shift in tone suggest?",
  options: [
    {
      text: "He recognizes her fear and adjusts to support her.",
      isCorrect: true
    },
    {
      text: "He is unsure of his authority.",
      isCorrect: false
    },
    {
      text: "He wants to end the conversation.",
      isCorrect: false
    },
    {
      text: "He has changed his plan entirely.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-09",
  source: "The Famous Five",
  sceneTitle: "George refuses help",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "EmotionalContradiction"],
  gateIcons: ["🎭", "🎨"],
  primaryRuleset: "IdentityTension",
  skill: "Character Motivation",
  scene:
    "Even when clearly struggling, George refuses assistance.",
  prompt: "Why does refusing help matter so much to George?",
  options: [
    {
      text: "Accepting help feels like giving up control over who she is.",
      isCorrect: true
    },
    {
      text: "She dislikes teamwork.",
      isCorrect: false
    },
    {
      text: "She does not trust the others.",
      isCorrect: false
    },
    {
      text: "She believes help will slow her down.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-10",
  source: "The Famous Five",
  sceneTitle: "The danger seems ordinary",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["NarrativeOmission", "CulturalSignification"],
  gateIcons: ["🕳️", "🏛️"],
  primaryRuleset: "CulturalSignification",
  pairedRuleset: "NarrativeOmission",
  skill: "Theme Connection",
  scene:
    "Risky behavior is treated as adventurous rather than reckless.",
  prompt: "What does this tone suggest about the values of the story’s world?",
  options: [
    {
      text: "Bravery and independence are admired even when danger is real.",
      isCorrect: true
    },
    {
      text: "Safety rules do not exist.",
      isCorrect: false
    },
    {
      text: "Adults are never concerned.",
      isCorrect: false
    },
    {
      text: "The danger is imaginary.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-11",
  source: "The Famous Five",
  sceneTitle: "A secret kept for the group",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "RelationshipShift"],
  gateIcons: ["✉️", "🫂"],
  primaryRuleset: "TheoryOfMind",
  skill: "Group Dynamics",
  scene:
    "One child keeps information private to protect the group.",
  prompt: "Why is secrecy framed as loyalty here?",
  options: [
    {
      text: "Because sharing too soon could put everyone at risk.",
      isCorrect: true
    },
    {
      text: "Because secrets are always exciting.",
      isCorrect: false
    },
    {
      text: "Because honesty is discouraged.",
      isCorrect: false
    },
    {
      text: "Because adults are unimportant.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-12",
  source: "The Famous Five",
  sceneTitle: "Anne notices what others miss",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "IdentityTension"],
  gateIcons: ["📆", "🎭"],
  primaryRuleset: "TheoryOfMind",
  skill: "Perspective Shift",
  scene:
    "Anne quietly observes a detail that later proves important.",
  prompt: "What role does Anne’s attention play in the group?",
  options: [
    {
      text: "She contributes insight through careful noticing rather than bold action.",
      isCorrect: true
    },
    {
      text: "She waits for instructions.",
      isCorrect: false
    },
    {
      text: "She avoids responsibility.",
      isCorrect: false
    },
    {
      text: "She relies on luck.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-13",
  source: "The Famous Five",
  sceneTitle: "A risk taken without discussion",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["ThresholdMoment", "RelationshipShift"],
  gateIcons: ["🚪", "🫂"],
  primaryRuleset: "TheoryOfMind",
  pairedRuleset: "CulturalSignification",
  skill: "Judgment",
  scene:
    "The group moves forward without debating alternatives.",
  prompt: "Why does the lack of discussion feel acceptable in this moment?",
  options: [
    {
      text: "Shared trust and norms make hesitation feel unnecessary.",
      isCorrect: true
    },
    {
      text: "They forget to consider danger.",
      isCorrect: false
    },
    {
      text: "They believe there is no other choice.",
      isCorrect: false
    },
    {
      text: "They want to surprise each other.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-14",
  source: "The Famous Five",
  sceneTitle: "George stands guard",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "IdentityTension"],
  gateIcons: ["🫂", "🎭"],
  primaryRuleset: "CharacterRole",
  skill: "Role Interpretation",
  scene:
    "George insists on watching alone while the others rest.",
  prompt: "What does this choice reveal about how George sees herself?",
  options: [
    {
      text: "As a protector who proves worth through action.",
      isCorrect: true
    },
    {
      text: "As someone who dislikes company.",
      isCorrect: false
    },
    {
      text: "As someone who does not need sleep.",
      isCorrect: false
    },
    {
      text: "As someone who distrusts everyone.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-15",
  source: "The Famous Five",
  sceneTitle: "A joke breaks the tension",
  momentType: "SceneInterpretation",
  tier: "Fox",
  gates: ["EmotionalContradiction", "RelationshipShift"],
  gateIcons: ["🎨", "🫂"],
  primaryRuleset: "DialogueAndSubtext",
  skill: "Tone Shift",
  scene:
    "One child jokes just as fear is building.",
  prompt: "Why does humor matter in this moment?",
  options: [
    {
      text: "It releases fear and helps the group stay united.",
      isCorrect: true
    },
    {
      text: "It distracts from the plan.",
      isCorrect: false
    },
    {
      text: "It shows a lack of seriousness.",
      isCorrect: false
    },
    {
      text: "It confuses the others.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-16",
  source: "The Famous Five",
  sceneTitle: "An adult is left uninformed",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["SecretExchange", "CulturalSignification"],
  gateIcons: ["✉️", "🏛️"],
  primaryRuleset: "CulturalSignification",
  pairedRuleset: "TheoryOfMind",
  skill: "Theme Connection",
  scene:
    "The children choose not to involve adults, even when risk increases.",
  prompt: "What belief supports this decision in the story?",
  options: [
    {
      text: "That independence proves capability and courage.",
      isCorrect: true
    },
    {
      text: "That adults are always unkind.",
      isCorrect: false
    },
    {
      text: "That rules are meaningless.",
      isCorrect: false
    },
    {
      text: "That danger disappears if ignored.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-17",
  source: "The Famous Five",
  sceneTitle: "Anne’s fear returns",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "EmotionalContradiction"],
  gateIcons: ["📆", "🎨"],
  primaryRuleset: "EmotionalEcho",
  skill: "Emotional Tracking",
  scene:
    "Anne feels afraid again in a familiar situation, but reacts differently this time.",
  prompt: "What does this change suggest?",
  options: [
    {
      text: "She has learned to act despite fear.",
      isCorrect: true
    },
    {
      text: "She no longer feels afraid.",
      isCorrect: false
    },
    {
      text: "The danger is smaller now.",
      isCorrect: false
    },
    {
      text: "She wants to impress the others.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-18",
  source: "The Famous Five",
  sceneTitle: "A look exchanged across the room",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["DialogueAndSubtext", "SecretExchange"],
  gateIcons: ["💬", "✉️"],
  primaryRuleset: "DialogueAndSubtext",
  pairedRuleset: "TheoryOfMind",
  skill: "Inference from Subtext",
  scene:
    "Two of the children exchange a glance that changes the group’s plan without words.",
  prompt: "Why is this glance enough to redirect action?",
  options: [
    {
      text: "Shared understanding makes explanation unnecessary.",
      isCorrect: true
    },
    {
      text: "They forget what they were doing.",
      isCorrect: false
    },
    {
      text: "They want to confuse the others.",
      isCorrect: false
    },
    {
      text: "They disagree about the plan.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-19",
  source: "The Famous Five",
  sceneTitle: "George finally accepts help",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["RelationshipShift", "IdentityTension"],
  gateIcons: ["🫂", "🎭"],
  primaryRuleset: "IdentityTension",
  pairedRuleset: "RelationshipShift",
  skill: "Character Arc",
  scene:
    "At a crucial moment, George allows someone else to assist her.",
  prompt: "Why does this moment mark growth rather than weakness?",
  options: [
    {
      text: "She learns that trust can strengthen independence rather than erase it.",
      isCorrect: true
    },
    {
      text: "She becomes less confident.",
      isCorrect: false
    },
    {
      text: "She changes her personality entirely.",
      isCorrect: false
    },
    {
      text: "She gives up responsibility.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-famousfive-20",
  source: "The Famous Five",
  sceneTitle: "The adventure ends quietly",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "NarrativeOmission"],
  gateIcons: ["📆", "🕳️"],
  primaryRuleset: "NarrativeOmission",
  skill: "Scene Purpose",
  scene:
    "After danger passes, the story closes without celebration.",
  prompt: "Why does the quiet ending feel satisfying?",
  options: [
    {
      text: "It reflects the group’s return to normal life after shared risk.",
      isCorrect: true
    },
    {
      text: "The author forgets to add an ending.",
      isCorrect: false
    },
    {
      text: "Nothing important happened.",
      isCorrect: false
    },
    {
      text: "The characters are disappointed.",
      isCorrect: false
    }
  ]
},
{
  id: "lit-boxcar-01",
  source: "The Boxcar Children",
  sceneTitle: "Deciding not to ask for help",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["ThresholdMoment", "CulturalSignification"],
  gateIcons: ["🚪", "🏛️"],
  primaryRuleset: "CulturalSignification",
  pairedRuleset: "TheoryOfMind",
  skill: "Theme Connection",
  scene:
    "The children agree not to seek adult help, even though they are hungry and alone.",
  prompt: "Why does this choice feel reasonable within the story’s world?",
  options: [
    {
      text: "Independence is treated as proof of capability rather than recklessness.",
      isCorrect: true
    },
    {
      text: "They believe adults are dangerous.",
      isCorrect: false
    },
    {
      text: "They do not understand how serious their situation is.",
      isCorrect: false
    },
    {
      text: "They enjoy living without rules.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-02",
  source: "The Boxcar Children",
  sceneTitle: "Henry quietly takes charge",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "IdentityTension"],
  gateIcons: ["🫂", "🎭"],
  primaryRuleset: "TheoryOfMind",
  skill: "Character Role",
  scene:
    "Henry begins making decisions for the group without announcing himself as leader.",
  prompt: "Why does Henry’s leadership emerge so naturally?",
  options: [
    {
      text: "He anticipates the others’ needs and acts before being asked.",
      isCorrect: true
    },
    {
      text: "He demands obedience.",
      isCorrect: false
    },
    {
      text: "The others are unwilling to think.",
      isCorrect: false
    },
    {
      text: "He enjoys giving orders.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-03",
  source: "The Boxcar Children",
  sceneTitle: "Jessie insists on housekeeping",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["IdentityTension", "CulturalSignification"],
  gateIcons: ["🎭", "🏛️"],
  primaryRuleset: "CulturalSignification",
  pairedRuleset: "IdentityTension",
  skill: "Character Motivation",
  scene:
    "Jessie takes responsibility for cooking, cleaning, and organizing their space.",
  prompt: "What deeper purpose does this role serve for Jessie?",
  options: [
    {
      text: "It helps her create stability and dignity in an uncertain life.",
      isCorrect: true
    },
    {
      text: "She wants to avoid exploring.",
      isCorrect: false
    },
    {
      text: "She believes work will solve every problem.",
      isCorrect: false
    },
    {
      text: "She enjoys being alone.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-04",
  source: "The Boxcar Children",
  sceneTitle: "Violet’s shyness",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalContradiction", "IdentityTension"],
  gateIcons: ["🎨", "🎭"],
  primaryRuleset: "TheoryOfMind",
  skill: "Emotional Inference",
  scene:
    "Violet speaks little and worries often, even when the group feels safe.",
  prompt: "What does Violet’s fear most likely reflect?",
  options: [
    {
      text: "Sensitivity to risk that others overlook.",
      isCorrect: true
    },
    {
      text: "Lack of trust in her siblings.",
      isCorrect: false
    },
    {
      text: "Disinterest in their plan.",
      isCorrect: false
    },
    {
      text: "A desire to be separated from the group.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-05",
  source: "The Boxcar Children",
  sceneTitle: "Making the boxcar home",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["WorldLogicShift", "EmotionalContradiction"],
  gateIcons: ["🔮", "🎨"],
  primaryRuleset: "Symbolism",
  pairedRuleset: "CulturalSignification",
  skill: "Symbolism",
  scene:
    "The abandoned boxcar becomes a place of safety and pride.",
  prompt: "What does the boxcar symbolize in the children’s lives?",
  options: [
    {
      text: "The ability to create belonging even without adult protection.",
      isCorrect: true
    },
    {
      text: "Escape from responsibility.",
      isCorrect: false
    },
    {
      text: "Rejection of family.",
      isCorrect: false
    },
    {
      text: "A temporary hiding place only.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-06",
  source: "The Boxcar Children",
  sceneTitle: "Sharing food carefully",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "NarrativeOmission"],
  gateIcons: ["🫂", "🕳️"],
  primaryRuleset: "NarrativeOmission",
  skill: "Scene Purpose",
  scene:
    "The children divide food evenly, without discussing hunger aloud.",
  prompt: "Why does the story avoid explicit discussion of fear here?",
  options: [
    {
      text: "To show cooperation through action rather than words.",
      isCorrect: true
    },
    {
      text: "Because the children are not worried.",
      isCorrect: false
    },
    {
      text: "Because food is not important.",
      isCorrect: false
    },
    {
      text: "Because the author forgot to include it.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-07",
  source: "The Boxcar Children",
  sceneTitle: "Avoiding the town",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["SecretExchange", "TheoryOfMind"],
  gateIcons: ["✉️", "🧠"],
  primaryRuleset: "TheoryOfMind",
  pairedRuleset: "NarrativeOmission",
  skill: "Inference",
  scene:
    "The children quietly avoid being seen by adults in town.",
  prompt: "What fear motivates this secrecy?",
  options: [
    {
      text: "They worry adults might separate them or take control of their lives.",
      isCorrect: true
    },
    {
      text: "They dislike strangers.",
      isCorrect: false
    },
    {
      text: "They want to steal unnoticed.",
      isCorrect: false
    },
    {
      text: "They enjoy pretending to be invisible.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-08",
  source: "The Boxcar Children",
  sceneTitle: "Henry earns money",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["IdentityTension", "CulturalSignification"],
  gateIcons: ["🎭", "🏛️"],
  primaryRuleset: "CulturalSignification",
  skill: "Theme Connection",
  scene:
    "Henry works to earn money rather than asking for help.",
  prompt: "What value does this choice reinforce?",
  options: [
    {
      text: "Self-reliance is tied to dignity and respect.",
      isCorrect: true
    },
    {
      text: "Work is more fun than play.",
      isCorrect: false
    },
    {
      text: "Money solves emotional problems.",
      isCorrect: false
    },
    {
      text: "Adults dislike helping children.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-09",
  source: "The Boxcar Children",
  sceneTitle: "Violet speaks up",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  primaryRuleset: "EmotionalEcho",
  skill: "Character Growth",
  scene:
    "Violet voices an opinion more firmly than before.",
  prompt: "What does this change suggest?",
  options: [
    {
      text: "She is gaining confidence through safety and trust.",
      isCorrect: true
    },
    {
      text: "She has stopped feeling fear entirely.",
      isCorrect: false
    },
    {
      text: "She wants to argue.",
      isCorrect: false
    },
    {
      text: "She is imitating Jessie.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-10",
  source: "The Boxcar Children",
  sceneTitle: "Jessie refuses charity",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["IdentityTension", "CulturalSignification"],
  gateIcons: ["🎭", "🏛️"],
  primaryRuleset: "CulturalSignification",
  pairedRuleset: "TheoryOfMind",
  skill: "Judgment",
  scene:
    "Jessie is uncomfortable accepting free help from others.",
  prompt: "Why does accepting charity feel risky to her?",
  options: [
    {
      text: "It threatens the independence she works to protect.",
      isCorrect: true
    },
    {
      text: "She dislikes the person offering help.",
      isCorrect: false
    },
    {
      text: "She thinks help is unreliable.",
      isCorrect: false
    },
    {
      text: "She believes help comes with punishment.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-11",
  source: "The Boxcar Children",
  sceneTitle: "The boxcar at night",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["EmotionalContradiction", "NarrativeOmission"],
  gateIcons: ["🎨", "🕳️"],
  primaryRuleset: "NarrativeOmission",
  pairedRuleset: "EmotionalContradiction",
  skill: "Mood Interpretation",
  scene:
    "The boxcar feels both frightening and comforting after dark.",
  prompt: "Why does the story allow both feelings to exist at once?",
  options: [
    {
      text: "To show how safety can be created even in uncertain conditions.",
      isCorrect: true
    },
    {
      text: "To confuse the reader.",
      isCorrect: false
    },
    {
      text: "Because the children cannot decide how they feel.",
      isCorrect: false
    },
    {
      text: "Because night scenes must feel tense.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-12",
  source: "The Boxcar Children",
  sceneTitle: "Sharing responsibilities",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["RelationshipShift", "CulturalSignification"],
  gateIcons: ["🫂", "🏛️"],
  primaryRuleset: "CulturalSignification",
  skill: "Group Dynamics",
  scene:
    "Each child takes on a role without argument.",
  prompt: "What makes this cooperation feel stable?",
  options: [
    {
      text: "The roles match each child’s strengths and needs.",
      isCorrect: true
    },
    {
      text: "They are afraid to disagree.",
      isCorrect: false
    },
    {
      text: "They want to finish quickly.",
      isCorrect: false
    },
    {
      text: "They copy adult behavior exactly.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-13",
  source: "The Boxcar Children",
  sceneTitle: "A secret routine",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["SecretExchange", "EmotionalEcho"],
  gateIcons: ["✉️", "📆"],
  primaryRuleset: "NarrativeOmission",
  skill: "Inference",
  scene:
    "The children repeat quiet routines that make life feel normal.",
  prompt: "Why are these routines important?",
  options: [
    {
      text: "They create predictability and emotional safety.",
      isCorrect: true
    },
    {
      text: "They save time.",
      isCorrect: false
    },
    {
      text: "They hide boredom.",
      isCorrect: false
    },
    {
      text: "They prevent adults from noticing them.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-14",
  source: "The Boxcar Children",
  sceneTitle: "Meeting the kind stranger",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["RelationshipShift", "TheoryOfMind"],
  gateIcons: ["🫂", "🧠"],
  primaryRuleset: "TheoryOfMind",
  pairedRuleset: "CulturalSignification",
  skill: "Trust Judgment",
  scene:
    "The children cautiously interact with an adult who shows concern.",
  prompt: "Why is trust difficult but possible in this moment?",
  options: [
    {
      text: "They weigh kindness against the risk of losing independence.",
      isCorrect: true
    },
    {
      text: "They immediately feel safe.",
      isCorrect: false
    },
    {
      text: "They want adult approval.",
      isCorrect: false
    },
    {
      text: "They believe help will solve everything.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-15",
  source: "The Boxcar Children",
  sceneTitle: "Henry hides worry",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalContradiction", "TheoryOfMind"],
  gateIcons: ["🎨", "🧠"],
  primaryRuleset: "TheoryOfMind",
  skill: "Emotional Inference",
  scene:
    "Henry stays calm outwardly even when supplies run low.",
  prompt: "Why does Henry hide his worry?",
  options: [
    {
      text: "He believes showing fear might unsettle the others.",
      isCorrect: true
    },
    {
      text: "He does not feel afraid.",
      isCorrect: false
    },
    {
      text: "He wants to avoid responsibility.",
      isCorrect: false
    },
    {
      text: "He is unaware of the problem.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-16",
  source: "The Boxcar Children",
  sceneTitle: "The decision to stay",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["ThresholdMoment", "IdentityTension"],
  gateIcons: ["🚪", "🎭"],
  primaryRuleset: "IdentityTension",
  pairedRuleset: "CulturalSignification",
  skill: "Character Arc",
  scene:
    "The children choose to remain together rather than seek comfort elsewhere.",
  prompt: "What identity does this choice reinforce?",
  options: [
    {
      text: "They see themselves as capable caretakers of one another.",
      isCorrect: true
    },
    {
      text: "They reject family entirely.",
      isCorrect: false
    },
    {
      text: "They believe comfort is unimportant.",
      isCorrect: false
    },
    {
      text: "They enjoy hardship.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-17",
  source: "The Boxcar Children",
  sceneTitle: "A quiet celebration",
  momentType: "SceneInterpretation",
  tier: "Owl",
  gates: ["EmotionalEcho", "NarrativeOmission"],
  gateIcons: ["📆", "🕳️"],
  primaryRuleset: "NarrativeOmission",
  skill: "Scene Purpose",
  scene:
    "Small successes are marked without excitement or praise.",
  prompt: "Why does the story keep these moments understated?",
  options: [
    {
      text: "To emphasize resilience rather than reward.",
      isCorrect: true
    },
    {
      text: "To move the plot quickly.",
      isCorrect: false
    },
    {
      text: "Because celebration feels unnecessary.",
      isCorrect: false
    },
    {
      text: "Because the children are tired.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-18",
  source: "The Boxcar Children",
  sceneTitle: "Trust grows quietly",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["RelationshipShift", "EmotionalEcho"],
  gateIcons: ["🫂", "📆"],
  primaryRuleset: "RelationshipShift",
  pairedRuleset: "TheoryOfMind",
  skill: "Relationship Arc",
  scene:
    "The siblings rely on one another without checking for approval.",
  prompt: "What does this quiet confidence show?",
  options: [
    {
      text: "Their bond has deepened through shared responsibility.",
      isCorrect: true
    },
    {
      text: "They no longer care about safety.",
      isCorrect: false
    },
    {
      text: "They believe nothing can go wrong.",
      isCorrect: false
    },
    {
      text: "They have become careless.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-19",
  source: "The Boxcar Children",
  sceneTitle: "Choosing honesty later",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["SecretExchange", "ThresholdMoment"],
  gateIcons: ["✉️", "🚪"],
  primaryRuleset: "TheoryOfMind",
  pairedRuleset: "NarrativeOmission",
  skill: "Judgment",
  scene:
    "The children delay telling the truth until they feel secure.",
  prompt: "Why is waiting framed as wise rather than dishonest?",
  options: [
    {
      text: "They need safety before risking loss of control.",
      isCorrect: true
    },
    {
      text: "They want to deceive others.",
      isCorrect: false
    },
    {
      text: "They forget the truth matters.",
      isCorrect: false
    },
    {
      text: "They believe honesty is dangerous.",
      isCorrect: false
    }
  ]
},

{
  id: "lit-boxcar-20",
  source: "The Boxcar Children",
  sceneTitle: "The boxcar remembered",
  momentType: "SceneInterpretation",
  tier: "Lantern",
  gates: ["EmotionalEcho", "Symbolism"],
  gateIcons: ["📆", "🔮"],
  primaryRuleset: "Symbolism",
  pairedRuleset: "EmotionalEcho",
  skill: "Theme Connection",
  scene:
    "Later events are understood through memories of the boxcar.",
  prompt: "Why does the boxcar continue to matter emotionally?",
  options: [
    {
      text: "It represents a time when the children proved their strength together.",
      isCorrect: true
    },
    {
      text: "It was their favorite place to sleep.",
      isCorrect: false
    },
    {
      text: "It was the most dangerous part of the story.",
      isCorrect: false
    },
    {
      text: "It reminds them of being afraid.",
      isCorrect: false
    }
  ]
},



    // --- Add more literature questions here (for other books/series) ---
];

// ------------------ Game state ------------------

let currentMode = "literature"; // default mode
let questions = literatureQuestions;
let questionOrder = []; // indices in randomized order
let currentIndex = 0;
let score = 0;
let hasScoredCurrentQuestion = false;

// DOM references
const landingScreen = document.getElementById("landing-screen");
const gameScreen = document.getElementById("game-screen");
const playBtn = document.getElementById("play-btn");

const modeFilmBtn = document.getElementById("mode-film");
const modeLitBtn = document.getElementById("mode-literature");

const sceneTitleEl = document.getElementById("scene-title");
const tierLabelEl = document.getElementById("tier-label");
const sceneTextEl = document.getElementById("scene-text");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const gameAreaEl = document.getElementById("game-area");
const gateIconsEl = document.getElementById("gate-icons");
const gateTooltipEl = document.getElementById("gate-tooltip");

// ------------------ Helpers ------------------

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Scenario must satisfy at least two Gates to qualify (design rule)
function isQuestionEligible(q) {
  return Array.isArray(q.gates) && q.gates.length >= 2;
}

function buildQuestionOrder() {
  const eligible = questions
    .map((q, index) => ({ q, index }))
    .filter(({ q }) => isQuestionEligible(q))
    .map(({ index }) => index);

  const indicesToUse = eligible.length
    ? eligible
    : questions.map((_, i) => i); // fallback if author forgot gates

  questionOrder = shuffleArray(indicesToUse);
  currentIndex = 0;
}

function getCurrentQuestion() {
  if (!questionOrder.length) return null;
  const idx = questionOrder[currentIndex];
  return questions[idx];
}

// Tooltip: full Seven Gates key
function renderGateKeyTooltip() {
  const rowsHtml = Object.values(GATE_INFO)
    .map(
      (info) =>
        `<div class="gate-key-row">
          <span class="gate-key-icon">${info.icon}</span>
          <span><strong>${info.label}</strong><br>${info.meaning}</span>
        </div>`
    )
    .join("");

  gateTooltipEl.innerHTML = `
    <div class="gate-key-title">The Seven Gates</div>
    ${rowsHtml}
  `;
}

// Hover wiring for gate key
gateIconsEl.addEventListener("mouseenter", () => {
  renderGateKeyTooltip();
  gateTooltipEl.classList.remove("hidden");
});

gateIconsEl.addEventListener("mouseleave", (event) => {
  if (!gateTooltipEl.contains(event.relatedTarget)) {
    gateTooltipEl.classList.add("hidden");
  }
});

gateTooltipEl.addEventListener("mouseleave", (event) => {
  if (!gateIconsEl.contains(event.relatedTarget)) {
    gateTooltipEl.classList.add("hidden");
  }
});

// ------------------ Rendering ------------------

function setMode(mode) {
  currentMode = mode;
  questions = mode === "film" ? filmQuestions : literatureQuestions;
  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  document.body.classList.remove("mode-film", "mode-literature");
  document.body.classList.add(mode === "film" ? "mode-film" : "mode-literature");

  modeFilmBtn.classList.toggle("active", mode === "film");
  modeLitBtn.classList.toggle("active", mode === "literature");

  buildQuestionOrder();
  renderQuestion();
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    sceneTitleEl.textContent = "No more questions in this mode.";
    tierLabelEl.textContent = "";
    sceneTextEl.textContent = "Switch to the other tab or refresh to play again.";
    questionTextEl.textContent = "";
    answersEl.innerHTML = "";
    gateIconsEl.textContent = "";
    return;
  }

  hasScoredCurrentQuestion = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("error");

  const prefix = q.source ? `${q.source} – ` : "";
  sceneTitleEl.textContent = prefix + q.sceneTitle;
  tierLabelEl.textContent = q.tier;
  sceneTextEl.textContent = q.scene;
  questionTextEl.textContent = q.prompt;

  // Render gate icons for this question
  gateIconsEl.innerHTML = "";
  if (Array.isArray(q.gates)) {
    q.gates.forEach((gateName) => {
      const info = GATE_INFO[gateName];
      if (!info) return;
      const span = document.createElement("span");
      span.className = "gate-icon";
      span.textContent = info.icon;
      span.title = info.label;
      gateIconsEl.appendChild(span);
    });
  }

  // Shuffle answer options
  const shuffledOptions = shuffleArray(q.options);
  answersEl.innerHTML = "";

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt.text;
    if (opt.isCorrect) btn.dataset.correct = "true";
    btn.addEventListener("click", () => handleAnswerClick(btn, !!opt.isCorrect));
    answersEl.appendChild(btn);
  });
}

function updateScoreDisplay() {
  scoreEl.textContent = `Score: ${score}`;
}

// ------------------ Interaction ------------------

function handleAnswerClick(button, isCorrect) {
  const buttons = Array.from(document.querySelectorAll(".answer-btn"));

  // If we already revealed the correct answer for this question, ignore further clicks
  if (buttons.some((b) => b.disabled && b.classList.contains("correct"))) {
    return;
  }

  if (isCorrect) {
    buttons.forEach((b) => {
      if (b.dataset.correct === "true") {
        b.classList.add("correct");
      }
      b.disabled = true;
    });

    if (!hasScoredCurrentQuestion) {
      score += 1;
      hasScoredCurrentQuestion = true;
      updateScoreDisplay();
    }

    feedbackEl.textContent = "Correct!";
    feedbackEl.classList.remove("error");

    setTimeout(() => {
      currentIndex += 1;
      if (currentIndex >= questionOrder.length) {
        buildQuestionOrder(); // reshuffle for another round
      }
      renderQuestion();
    }, 650);
  } else {
    button.classList.add("incorrect");
    feedbackEl.textContent = "Incorrect answer. Try again.";
    feedbackEl.classList.add("error");

    gameAreaEl.classList.remove("shake");
    void gameAreaEl.offsetWidth; // restart animation
    gameAreaEl.classList.add("shake");

    setTimeout(() => {
      gameAreaEl.classList.remove("shake");
      button.classList.remove("incorrect");
    }, 300);
  }
}

// ------------------ Screen wiring ------------------

// Start game in Literature mode when Play is clicked
playBtn.addEventListener("click", () => {
  landingScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  document.body.classList.remove("landing");
  setMode("literature");
  updateScoreDisplay();
});

modeFilmBtn.addEventListener("click", () => {
  if (currentMode !== "film") setMode("film");
});

modeLitBtn.addEventListener("click", () => {
  if (currentMode !== "literature") setMode("literature");
});

// No initial render: we render after Play is pressed.

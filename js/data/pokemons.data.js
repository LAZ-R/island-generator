export const TYPES = {
  COM: "COMBAT",
  DRA: "DRAGON",
  EAU: "EAU",
  ELE: "ELECTRIK",
  FEU: "FEU",
  GLA: "GLACE",
  INS: "INSECTE",
  NOR: "NORMAL",
  PLA: "PLANTE",
  PSN: "POISON",
  PSY: "PSY",
  ROC: "ROCHE",
  SOL: "SOL",
  SPE: "SPECTRE",
  VOL: "VOL"
}

export const POKEMONS_LIST = [
  {
    id          : `001`,
    name        : `Bulbizarre`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance.`,
    pv          :  45,  
    attack      :  49,  
    defense     :  49,  
    speed       :  45,  
    special     :  65
  },
  {
    id          : `002`,
    name        : `Herbizarre`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Son bulbe dorsal devient si gros qu'il ne peut plus tenir sur ses membres postérieurs.`,
    pv          :  60,  
    attack      :  62,  
    defense     :  63,  
    speed       :  60,  
    special     :  80
  },
  {
    id          : `003`,
    name        : `Florizarre`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Sa plante mûrit en absorbant les rayons du soleil. Il migre souvent vers les endroits ensoleillés.`,
    pv          :  80,  
    attack      :  82,  
    defense     :  83,  
    speed       :  80,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `004`,
    name        : `Salamèche`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour de sa queue.`,
    pv          :  39,  
    attack      :  52,  
    defense     :  43,  
    speed       :  65,  
    special     :  50
  },
  {
    id          : `005`,
    name        : `Reptincel`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `En agitant sa queue, il peut augmenter le niveau de la température à un degré incroyable.`,
    pv          :  58,  
    attack      :  64,  
    defense     :  58,  
    speed       :  80,  
    special     :  65
  },
  {
    id          : `006`,
    name        : `Dracaufeu`,
    type1       : TYPES.FEU,
    type2       : TYPES.VOL,
    description : `Il peut fondre la roche de son souffle brûlant. Il est souvent la cause d'énormes incendies.`,
    pv          :  78,  
    attack      :  84,  
    defense     :  78,  
    speed       : 100, 
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `007`,
    name        : `Carapuce`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume.`,
    pv          :  44,  
    attack      :  48,  
    defense     :  65,  
    speed       :  43,  
    special     :  50
  },
  {
    id          : `008`,
    name        : `Carabaffe`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il se cache au fond de l'eau pour guetter sa proie. Ses oreilles sont des gouvernails.`,
    pv          :  59,  
    attack      :  63,  
    defense     :  80,  
    speed       :  58,  
    special     :  65
  },
  {
    id          : `009`,
    name        : `Tortank`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Un Pokémon brutal armé de canons hydrauliques. Ses puissants jets d'eau sont dévastateurs.`,
    pv          :  79,  
    attack      :  83,  
    defense     : 100, 
    speed       :  78,  
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `010`,
    name        : `Chenipan`,
    type1       : TYPES.INS,
    type2       : null,
    description : `Ses petites pattes sont équipées de ventouses, lui permettant de grimper aux murs.`,
    pv          :  45,  
    attack      :  30,  
    defense     :  35,  
    speed       :  45,  
    special     :  20
  },
  {
    id          : `011`,
    name        : `Chrysacier`,
    type1       : TYPES.INS,
    type2       : null,
    description : `Il est vulnérable aux attaques tant que sa carapace fragile expose son corps tendre et mou.`,
    pv          :  50,  
    attack      :  20,  
    defense     :  55,  
    speed       :  30,  
    special     :  25
  },
  {
    id          : `012`,
    name        : `Papilusion`,
    type1       : TYPES.INS,
    type2       : TYPES.VOL,
    description : `En combat il bat des ailes très rapidement pour jeter sur ses ennemis des poudres toxiques.`,
    pv          :  60,  
    attack      :  45,  
    defense     :  50,  
    speed       :  70,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `013`,
    name        : `Aspicot`,
    type1       : TYPES.INS,
    type2       : TYPES.PSN,
    description : `Il se nourrit de feuilles dans les forêts. L'aiguillon sur son front est empoisonné.`,
    pv          :  40,  
    attack      :  35,  
    defense     :  30,  
    speed       :  50,  
    special     :  20
  },
  {
    id          : `014`,
    name        : `Coconfort`,
    type1       : TYPES.INS,
    type2       : TYPES.PSN,
    description : `Incapable de se déplacer de lui-même, il se défend en durcissant sa carapace.`,
    pv          :  45,  
    attack      :  25,  
    defense     :  50,  
    speed       :  35,  
    special     :  25
  },
  {
    id          : `015`,
    name        : `Dardargnan`,
    type1       : TYPES.INS,
    type2       : TYPES.PSN,
    description : `Il vole à très grande vitesse. Il se bat avec les dards empoisonnés de ses bras.`,
    pv          :  65,  
    attack      :  80,  
    defense     :  40,  
    speed       :  75,  
    special     :  45
  },
  /////////////////////////////////////////////
  {
    id          : `016`,
    name        : `Roucool`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il est souvent vu dans les forêts. Il brasse l'air de ses ailes près du sol pour projeter du sable.`,
    pv          :  40,  
    attack      :  45,  
    defense     :  40,  
    speed       :  56,  
    special     :  35
  },
  {
    id          : `017`,
    name        : `Roucoups`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il protège son territoire avec ardeur et repousse à coups de bec tout individu.`,
    pv          :  63,  
    attack      :  60,  
    defense     :  55,  
    speed       :  71,  
    special     :  50
  },
  {
    id          : `018`,
    name        : `Roucarnage`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il chasse en survolant la surface de l'eau et en plongeant pour attraper des proies faciles.`,
    pv          :  83,  
    attack      :  80,  
    defense     :  75,  
    speed       :  91,  
    special     :  70
  },
  /////////////////////////////////////////////
  {
    id          : `019`,
    name        : `Rattata`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Sa morsure est très puissante. Petit et rapide, on en voit un peu partout.`,
    pv          :  30,  
    attack      :  56,  
    defense     :  35,  
    speed       :  72,  
    special     :  25
  },
  {
    id          : `020`,
    name        : `Rattatac`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Si ses moustaches sont coupées, il perds le sens de son équilibre et devient moins rapide.`,
    pv          :  55,  
    attack      :  81,  
    defense     :  60,  
    speed       :  97,  
    special     :  50
  },
  /////////////////////////////////////////////
  {
    id          : `021`,
    name        : `Piafabec`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il chasse les insectes dans les hautes-herbes. Ses petites ailes lui permettent de voler très vite.`,
    pv          :  40,  
    attack      :  60,  
    defense     :  30,  
    speed       :  70,  
    special     :  31
  },
  {
    id          : `022`,
    name        : `Rapasdepic`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Ses ailes géantes lui permettent de planer si longtemps qu'il ne se pose que très rarement.`,
    pv          :  65,  
    attack      :  90,  
    defense     :  65,  
    speed       : 100, 
    special     :  61
  },
  /////////////////////////////////////////////
  {
    id          : `023`,
    name        : `Abo`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Il se déplace en silence pour dévorer des œufs de Roucool ou de Piafabec.`,
    pv          :  35,  
    attack      :  60,  
    defense     :  44,  
    speed       :  55,  
    special     :  40
  },
  {
    id          : `024`,
    name        : `Arbok`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Les motifs féroces peints sur son corps changent selon son environnement.`,
    pv          :  60,  
    attack      :  85,  
    defense     :  69,  
    speed       :  80,  
    special     :  65
  },
  /////////////////////////////////////////////
  {
    id          : `025`,
    name        : `Pikachu`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages.`,
    pv          :  35,  
    attack      :  55,  
    defense     :  30,  
    speed       :  90,  
    special     :  50
  },
  {
    id          : `026`,
    name        : `Raichu`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Il doit garder sa queue en contact avec le sol pour éviter toute électrocution.`,
    pv          :  60,  
    attack      :  90,  
    defense     :  55,  
    speed       : 100, 
    special     :  90
  },
  /////////////////////////////////////////////
  {
    id          : `027`,
    name        : `Sabelette`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `Il s'enterre dans les régions arides et désertiques. Il émerge seulement pour chasser.`,
    pv          :  50,  
    attack      :  75,  
    defense     :  85,  
    speed       :  40,  
    special     :  30
  },
  {
    id          : `028`,
    name        : `Sablaireau`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `Il se roule en boule hérissée de piques s'il est menacé. Il peut ainsi s'enfuir ou attaquer.`,
    pv          :  75,  
    attack      : 100, 
    defense     : 110, 
    speed       :  65,  
    special     :  55
  },
  /////////////////////////////////////////////
  {
    id          : `029`,
    name        : `Nidoran ♀`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Ce Pokémon est hérissé de dards empoisonnés. Les femelles ont des dards plus petits.`,
    pv          :  55,  
    attack      :  47,  
    defense     :  52,  
    speed       :  41,  
    special     :  40
  },
  {
    id          : `030`,
    name        : `Nidorina`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `La corne de la femelle grandit lentement. Elle préfère attaquer avec ses griffes et sa gueule.`,
    pv          :  70,  
    attack      :  62,  
    defense     :  67,  
    speed       :  56,  
    special     :  55
  },
  {
    id          : `031`,
    name        : `Nidoqueen`,
    type1       : TYPES.PSN,
    type2       : TYPES.SOL,
    description : `Ses écailles très résistantes et son corps massif sont des armes dévastatrices.`,
    pv          :  90,  
    attack      :  82,  
    defense     :  87,  
    speed       :  76,  
    special     :  75
  },
  /////////////////////////////////////////////
  {
    id          : `032`,
    name        : `Nidoran ♂`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Son ouïe très fine l'avertit du danger. Plus ses cornes sont grandes, plus son poison est mortel.`,
    pv          :  46,  
    attack      :  57,  
    defense     :  40,  
    speed       :  50,  
    special     :  40
  },
  {
    id          : `033`,
    name        : `Nidorino`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Très agressif, il est prompt à répondre à la violence. La corne sur sa tête est venimeuse.`,
    pv          :  61,  
    attack      :  72,  
    defense     :  57,  
    speed       :  65,  
    special     :  55
  },
  {
    id          : `034`,
    name        : `Nidoking`,
    type1       : TYPES.PSN,
    type2       : TYPES.SOL,
    description : `Sa queue est une arme redoutable, il s'en sert pour attraper sa proie et lui broyer les os.`,
    pv          :  81,  
    attack      :  92,  
    defense     :  77,  
    speed       :  85,  
    special     :  75
  },
  /////////////////////////////////////////////
  {
    id          : `035`,
    name        : `Mélofée`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Très recherché pour son aura mystique, il est très rare et ne vit que dans des endroits précis.`,
    pv          :  70,  
    attack      :  45,  
    defense     :  48,  
    speed       :  35,  
    special     :  60
  },
  {
    id          : `036`,
    name        : `Mélodelfe`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Une sorte de petite fée très rare. Il se cache en apercevant un être humain.`,
    pv          :  95,  
    attack      :  70,  
    defense     :  73,  
    speed       :  60,  
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `037`,
    name        : `Goupix`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Il n'a qu'une seule queue à la naissance. Celle-ci se divise à la pointe au fil des ans.`,
    pv          :  38,  
    attack      :  41,  
    defense     :  40,  
    speed       :  65,  
    special     :  65
  },
  {
    id          : `038`,
    name        : `Feunard`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Très intelligent et rancunier. Attrapez-lui une de ses queues et il vous maudira pour 1000 ans.`,
    pv          :  73,  
    attack      :  76,  
    defense     :  75,  
    speed       : 100, 
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `039`,
    name        : `Rondoudou`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Quand ses yeux s'illuminent, il chante une mystérieuse berceuse.`,
    pv          : 115, 
    attack      :  45,  
    defense     :  20,  
    speed       :  20,  
    special     :  25
  },
  {
    id          : `040`,
    name        : `Grodoudou`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `En cas de danger, il gonfle d'air son corps doux et potelé dans des proportions gigantesques.`,
    pv          : 140, 
    attack      :  70,  
    defense     :  45,  
    speed       :  45,  
    special     :  50
  },
  /////////////////////////////////////////////
  {
    id          : `041`,
    name        : `Nosferapti`,
    type1       : TYPES.PSN,
    type2       : TYPES.VOL,
    description : `Se déplace en colonie dans les endroits sombres. Il s'oriente grâce aux ultrasons.`,
    pv          :  40,  
    attack      :  45,  
    defense     :  35,  
    speed       :  55,  
    special     :  40
  },
  {
    id          : `042`,
    name        : `Nosferalto`,
    type1       : TYPES.PSN,
    type2       : TYPES.VOL,
    description : `Une fois son adversaire mordu, il absorbera son énergie même s'il est trop gros pour voler.`,
    pv          :  75,  
    attack      :  80,  
    defense     :  70,  
    speed       :  90,  
    special     :  75
  },
  /////////////////////////////////////////////
  {
    id          : `043`,
    name        : `Mystherbe`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Pendant la journée il se cache sous la terre. Il s'aventure la nuit pour planter des graines.`,
    pv          :  45,  
    attack      :  50,  
    defense     :  55,  
    speed       :  30,  
    special     :  75
  },
  {
    id          : `044`,
    name        : `Ortide`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Le liquide qui coule de sa bouche est comestible. Il sert à appâter sa proie.`,
    pv          :  60,  
    attack      :  65,  
    defense     :  70,  
    speed       :  40,  
    special     :  85
  },
  {
    id          : `045`,
    name        : `Rafflesia`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Plus ses pétales son grands, plus ils contiennent de pollen toxique.`,
    pv          :  75,  
    attack      :  80,  
    defense     :  85,  
    speed       :  50,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `046`,
    name        : `Paras`,
    type1       : TYPES.INS,
    type2       : TYPES.PLA,
    description : `Les champignons sur son dos se nourrissent des nutriments de leur hôte insectoïde.`,
    pv          :  35,  
    attack      :  70,  
    defense     :  55,  
    speed       :  25,  
    special     :  55
  },
  {
    id          : `047`,
    name        : `Parasect`,
    type1       : TYPES.INS,
    type2       : TYPES.PLA,
    description : `Une symbiose entre un parasite et un insecte. Le champignon a pris le contrôle de son hôte.`,
    pv          :  60,  
    attack      :  95,  
    defense     :  80,  
    speed       :  30,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `048`,
    name        : `Mimitoss`,
    type1       : TYPES.INS,
    type2       : TYPES.PSN,
    description : `Il vit a l'ombre des grands arbres ou il mange des insectes. il est attiré par la lumière.`,
    pv          :  60,  
    attack      :  55,  
    defense     :  50,  
    speed       :  45,  
    special     :  40
  },
  {
    id          : `049`,
    name        : `Aéromite`,
    type1       : TYPES.INS,
    type2       : TYPES.PSN,
    description : `Les motifs ocres de ses ailes changent en fonction de son type de poison.`,
    pv          :  70,  
    attack      :  65,  
    defense     :  60,  
    speed       :  90,  
    special     :  90
  },
  /////////////////////////////////////////////
  {
    id          : `050`,
    name        : `Taupiqueur`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `Il vit a un mètre sous la terre et se nourrit de racines. Il apparaît rarement à la surface.`,
    pv          :  10,  
    attack      :  55,  
    defense     :  25,  
    speed       :  95,  
    special     :  45
  },
  {
    id          : `051`,
    name        : `Triopikeur`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `Un groupe de Taupiqueur. Il crée des séismes en creusant à plus de 100 Km de profondeur.`,
    pv          :  35,  
    attack      :  80,  
    defense     :  50,  
    speed       : 120, 
    special     :  70
  },
  /////////////////////////////////////////////
  {
    id          : `052`,
    name        : `Miaouss`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Il adore les pièces de monnaie. Il hante les rues à la recherche de pièces oubliées par les passants.`,
    pv          :  40,  
    attack      :  45,  
    defense     :  35,  
    speed       :  90,  
    special     :  40
  },
  {
    id          : `053`,
    name        : `Persian`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Très apprécié pour sa fourrure, il est difficile à apprivoiser en raison de son caractère rétif.`,
    pv          :  65,  
    attack      :  70,  
    defense     :  60,  
    speed       : 115, 
    special     :  65
  },
  /////////////////////////////////////////////
  {
    id          : `054`,
    name        : `Psykokwak`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il distrait ses ennemis avec des grimaces débiles et les attaque ensuite avec ses pouvoirs Psy.`,
    pv          :  50,  
    attack      :  52,  
    defense     :  48,  
    speed       :  55,  
    special     :  50
  },
  {
    id          : `055`,
    name        : `Akwakwak`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il nage avec élégance le long des cotes. Il est souvent confondu avec le monstre japonais: Kappa.`,
    pv          :  80,  
    attack      :  82,  
    defense     :  78,  
    speed       :  85,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `056`,
    name        : `Férosinge`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Il se met en colère très vite. Calme ou furieux, son humeur change d'une seconde à l'autre.`,
    pv          :  40,  
    attack      :  80,  
    defense     :  35,  
    speed       :  70,  
    special     :  35
  },
  {
    id          : `057`,
    name        : `Colossinge`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Agressif et teigneux, il poursuit son gibier jusqu'à épuisement complet.`,
    pv          :  65,  
    attack      : 105, 
    defense     :  60,  
    speed       :  95,  
    special     :  60
  },
  /////////////////////////////////////////////
  {
    id          : `058`,
    name        : `Caninos`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Pour protéger son territoire, il aboie et mord jusqu'à ce que les intrus s'enfuient.`,
    pv          :  55,  
    attack      :  70,  
    defense     :  45,  
    speed       :  60,  
    special     :  50
  },
  {
    id          : `059`,
    name        : `Arcanin`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Un Pokémon très recherché pour sa grâce légendaire. Son pas élégant semble glisser sur le vent.`,
    pv          :  90,  
    attack      : 110, 
    defense     :  80,  
    speed       :  95,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `060`,
    name        : `Ptitard`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il court mal avec ses petites pattes. Il préfère nager que de se tenir debout.`,
    pv          :  40,  
    attack      :  50,  
    defense     :  40,  
    speed       :  90,  
    special     :  40
  },
  {
    id          : `061`,
    name        : `Têtarte`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Amphibie, il peut vivre a l'air libre mais il doit rester mouillé pour survivre.`,
    pv          :  65,  
    attack      :  65,  
    defense     :  65,  
    speed       :  90,  
    special     :  50
  },
  {
    id          : `062`,
    name        : `Tartard`,
    type1       : TYPES.EAU,
    type2       : TYPES.COM,
    description : `Excellent nageur, il pratique le crawl ou la nage papillon mieux qu'un champion olympique.`,
    pv          :  90,  
    attack      :  85,  
    defense     :  95,  
    speed       :  70,  
    special     :  70
  },
  /////////////////////////////////////////////
  {
    id          : `063`,
    name        : `Abra`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Son don de télépathie lui permet de sentir le danger et de se téléporter en un lieu sur.`,
    pv          :  25,  
    attack      :  20,  
    defense     :  15,  
    speed       :  90,  
    special     : 105
  },
  {
    id          : `064`,
    name        : `Kadabra`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Son corps émet des ondes alpha provoquant des migraines à ceux qui se trouvent à proximité.`,
    pv          :  40,  
    attack      :  35,  
    defense     :  30,  
    speed       : 105, 
    special     : 120
  },
  {
    id          : `065`,
    name        : `Alakazam`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Son super cerveau peut effectuer des opérations à la vitesse d'un ordinateur. Il a un Q.I. de 5000.`,
    pv          :  55,  
    attack      :  50,  
    defense     :  45,  
    speed       : 120, 
    special     : 135
  },
  /////////////////////////////////////////////
  {
    id          : `066`,
    name        : `Machoc`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Il adore la musculation. Il pratique les arts martiaux pour devenir encore plus fort.`,
    pv          :  70,  
    attack      :  80,  
    defense     :  50,  
    speed       :  35,  
    special     :  35
  },
  {
    id          : `067`,
    name        : `Machopeur`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Son corps est si puissant qu'il lui faut une ceinture de force pour équilibrer ses mouvements.`,
    pv          :  80,  
    attack      : 100, 
    defense     :  70,  
    speed       :  45,  
    special     :  50
  },
  {
    id          : `068`,
    name        : `Mackogneur`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Ses coups de poings sont si puissants qu'ils font voler ses adversaires jusqu'à l'horizon.`,
    pv          :  90,  
    attack      : 130, 
    defense     :  80,  
    speed       :  55,  
    special     :  65
  },
  /////////////////////////////////////////////
  {
    id          : `069`,
    name        : `Chétiflor`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Un Pokémon carnivore qui se nourrit de petits insectes. Ses racines servent d'attaches.`,
    pv          :  50,  
    attack      :  75,  
    defense     :  35,  
    speed       :  40,  
    special     :  70
  },
  {
    id          : `070`,
    name        : `Boustiflor`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Il crache de la Poudre Toxik pour immobiliser sa proie et il l'achève avec de l'Acide.`,
    pv          :  65,  
    attack      :  90,  
    defense     :  50,  
    speed       :  55,  
    special     :  85
  },
  {
    id          : `071`,
    name        : `Empiflor`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSN,
    description : `Il vit en colonie dans la jungle mais personne n'en est jamais revenu vivant.`,
    pv          :  80,  
    attack      : 105, 
    defense     :  65,  
    speed       :  70,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `072`,
    name        : `Tentacool`,
    type1       : TYPES.EAU,
    type2       : TYPES.PSN,
    description : `Flottant au bord des côtes, les pêcheurs se font souvent arroser d'acide quand ils en accrochent un.`,
    pv          :  40,  
    attack      :  40,  
    defense     :  35,  
    speed       :  70,  
    special     : 100
  },
  {
    id          : `073`,
    name        : `Tentacruel`,
    type1       : TYPES.EAU,
    type2       : TYPES.PSN,
    description : `Ses tentacules sont rétractées au repos. En situation de chasse, ils rallongent.`,
    pv          :  80,  
    attack      :  70,  
    defense     :  65,  
    speed       : 100, 
    special     : 120
  },
  /////////////////////////////////////////////
  {
    id          : `074`,
    name        : `Racaillou`,
    type1       : TYPES.ROC,
    type2       : TYPES.SOL,
    description : `Il vit dans les plaines ou les montagnes. On le confond souvent avec un petit caillou.`,
    pv          :  40,  
    attack      :  80,  
    defense     : 100, 
    speed       :  20,  
    special     :  30
  },
  {
    id          : `075`,
    name        : `Gravalanch`,
    type1       : TYPES.ROC,
    type2       : TYPES.SOL,
    description : `Pour se déplacer il dégringole le long des pentes. Il pulvérise tout obstacle sur son passage.`,
    pv          :  55,  
    attack      :  95,  
    defense     : 115, 
    speed       :  35,  
    special     :  45
  },
  {
    id          : `076`,
    name        : `Grolem`,
    type1       : TYPES.ROC,
    type2       : TYPES.SOL,
    description : `Son corps de pierre est indestructible. Il peut supporter des explosions de dynamite.`,
    pv          :  80,  
    attack      : 110, 
    defense     : 130, 
    speed       :  45,  
    special     :  55
  },
  /////////////////////////////////////////////
  {
    id          : `077`,
    name        : `Ponyta`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Ses sabots sont plus résistants que le diamant. Il peut aplatir n'importe quoi en le piétinant.`,
    pv          :  50,  
    attack      :  85,  
    defense     :  55,  
    speed       :  90,  
    special     :  65
  },
  {
    id          : `078`,
    name        : `Galopa`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Doté d'un esprit de compétition, il poursuit toute créature rapide pour faire la course.`,
    pv          :  65,  
    attack      : 100, 
    defense     :  70,  
    speed       : 105, 
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `079`,
    name        : `Ramoloss`,
    type1       : TYPES.EAU,
    type2       : TYPES.PSY,
    description : `Très lent et endormi, il lui faut 5 secondes pour ressentir la douleur d'une attaque.`,
    pv          :  90,  
    attack      :  65,  
    defense     :  65,  
    speed       :  15,  
    special     :  40
  },
  {
    id          : `080`,
    name        : `Flagadoss`,
    type1       : TYPES.EAU,
    type2       : TYPES.PSY,
    description : `Le Kokiyas attaché à la queue du Ramoloss se nourrit des restes de son hôte.`,
    pv          :  95,  
    attack      :  75,  
    defense     : 110, 
    speed       :  30,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `081`,
    name        : `Magnéti`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Il contrôle la gravité pour pouvoir voler. il attaque avec des Cage-Éclair.`,
    pv          :  25,  
    attack      :  35,  
    defense     :  70,  
    speed       :  45,  
    special     :  95
  },
  {
    id          : `082`,
    name        : `Magnéton`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Constitué de Magnéti reliés les uns aux autres, il apparaît lorsque le soleil brille.`,
    pv          :  50,  
    attack      :  60,  
    defense     :  95,  
    speed       :  70,  
    special     : 120
  },
  /////////////////////////////////////////////
  {
    id          : `083`,
    name        : `Canarticho`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il utilise l'oignon qu'il a dans la bouche comme une épée d'acier.`,
    pv          :  52,  
    attack      :  65,  
    defense     :  55,  
    speed       :  60,  
    special     :  58
  },
  /////////////////////////////////////////////
  {
    id          : `084`,
    name        : `Doduo`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Cet oiseau vole très mal mais court très vite. Il laisse de gigantesques empreintes de pas.`,
    pv          :  35,  
    attack      :  85,  
    defense     :  45,  
    speed       :  75,  
    special     :  35
  },
  {
    id          : `085`,
    name        : `Dodrio`,
    type1       : TYPES.NOR,
    type2       : TYPES.VOL,
    description : `Il élabore des plans complexes avec ses trois cerveaux. Une de ses têtes reste toujours éveillée.`,
    pv          :  60,  
    attack      : 110, 
    defense     :  70,  
    speed       : 100, 
    special     :  60
  },
  /////////////////////////////////////////////
  {
    id          : `086`,
    name        : `Otaria`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `La corne sur son front est très résistante. Elle lui sert à percer des blocs de glace.`,
    pv          :  65,  
    attack      :  45,  
    defense     :  55,  
    speed       :  45,  
    special     :  70
  },
  {
    id          : `087`,
    name        : `Lamantine`,
    type1       : TYPES.EAU,
    type2       : TYPES.GLA,
    description : `Il emmagasine la chaleur dans son corps. Il peut nager dans l'eau glacée à plus de 8 nœuds.`,
    pv          :  90,  
    attack      :  70,  
    defense     :  80,  
    speed       :  70,  
    special     :  95
  },
  /////////////////////////////////////////////
  {
    id          : `088`,
    name        : `Tadmorv`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Vivant dans des tas d'ordure, il se nourrit des déchets polluants rejetés par les usines.`,
    pv          :  80,  
    attack      :  80,  
    defense     :  50,  
    speed       :  25,  
    special     :  40
  },
  {
    id          : `089`,
    name        : `Grotadmorv`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Il est recouvert d'une épaisse couche toxique. Il laisse une trace empoisonnée derrière lui.`,
    pv          : 105, 
    attack      : 105, 
    defense     :  75,  
    speed       :  50,  
    special     :  65
  },
  /////////////////////////////////////////////
  {
    id          : `090`,
    name        : `Kokiyas`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Protégé par une carapace très résistante, il est vulnérable quand celle-ci s'ouvre.`,
    pv          :  30,  
    attack      :  65,  
    defense     : 100, 
    speed       :  40,  
    special     :  45
  },
  {
    id          : `091`,
    name        : `Crustabri`,
    type1       : TYPES.EAU,
    type2       : TYPES.GLA,
    description : `Une fois menacé, il envoie de rapides volées de dards. Sa partie interne est inconnue.`,
    pv          :  50,  
    attack      :  95,  
    defense     : 180, 
    speed       :  70,  
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `092`,
    name        : `Fantominus`,
    type1       : TYPES.SPE,
    type2       : TYPES.PSN,
    description : `Ce Pokémon gazeux plonge ses victimes dans un profond sommeil sans qu'elles ne s'en aperçoivent.`,
    pv          :  30,  
    attack      :  35,  
    defense     :  30,  
    speed       :  80,  
    special     : 100
  },
  {
    id          : `093`,
    name        : `Spectrum`,
    type1       : TYPES.SPE,
    type2       : TYPES.PSN,
    description : `Il peut se glisser à travers les murs comme une créature d'une autre dimension.`,
    pv          :  45,  
    attack      :  50,  
    defense     :  45,  
    speed       :  95,  
    special     : 115
  },
  {
    id          : `094`,
    name        : `Ectoplasma`,
    type1       : TYPES.SPE,
    type2       : TYPES.PSN,
    description : `Les nuits de pleine lune, il imite l'ombre des passants et se moque de leur effroi.`,
    pv          :  60,  
    attack      :  65,  
    defense     :  60,  
    speed       : 110, 
    special     : 130
  },
  /////////////////////////////////////////////
  {
    id          : `095`,
    name        : `Onix`,
    type1       : TYPES.ROC,
    type2       : TYPES.SOL,
    description : `Les parties en pierre de son corps durcissent pour devenir comme un diamant de couleur noire.`,
    pv          :  35,  
    attack      :  45,  
    defense     : 160, 
    speed       :  70,  
    special     :  30
  },
  /////////////////////////////////////////////
  {
    id          : `096`,
    name        : `Soporifik`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Il endort ses ennemis et dévore leurs songes. En mangeant de mauvais rêves il devient malade.`,
    pv          :  60,  
    attack      :  48,  
    defense     :  45,  
    speed       :  42,  
    special     :  90
  },
  {
    id          : `097`,
    name        : `Hypnomade`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `En fixant son adversaire, il l'assaille avec les attaques psy d'hypnose et de Choc Mental.`,
    pv          :  85,  
    attack      :  73,  
    defense     :  70,  
    speed       :  67,  
    special     : 115
  },
  /////////////////////////////////////////////
  {
    id          : `098`,
    name        : `Krabby`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Ses pinces sont des armes très puissantes. Elles lui servent aussi à garder son équilibre.`,
    pv          :  30,  
    attack      : 105, 
    defense     :  90,  
    speed       :  50,  
    special     :  25
  },
  {
    id          : `099`,
    name        : `Krabboss`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Son énorme pince peut déployer une pression de 1000 Kg. Mais elle est très encombrante.`,
    pv          :  55,  
    attack      : 130, 
    defense     : 115, 
    speed       :  75,  
    special     :  50
  },
  /////////////////////////////////////////////
  {
    id          : `100`,
    name        : `Voltorbe`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Vivant dans les centrales, ce Pokémon survolté est souvent confondu avec une Poké Ball.`,
    pv          :  40,  
    attack      :  30,  
    defense     :  50,  
    speed       : 100, 
    special     :  55
  },
  {
    id          : `101`,
    name        : `Électrode`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Il emmagasine des quantités énormes de courants électrique sous pression pouvant exploser.`,
    pv          :  60,  
    attack      :  50,  
    defense     :  70,  
    speed       : 140, 
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `102`,
    name        : `Noeunoeuf`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSY,
    description : `Souvent pris pour des oeufs, ils attaquent en groupe comme un essaim.`,
    pv          :  60,  
    attack      :  40,  
    defense     :  80,  
    speed       :  40,  
    special     :  60
  },
  {
    id          : `103`,
    name        : `Noadkoko`,
    type1       : TYPES.PLA,
    type2       : TYPES.PSY,
    description : `On raconte que si une de ses têtes se détache, elle se transforme en un Noeunoeuf.`,
    pv          :  95,  
    attack      :  95,  
    defense     :  85,  
    speed       :  55,  
    special     : 125
  },
  /////////////////////////////////////////////
  {
    id          : `104`,
    name        : `Osselait`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `Il ne retire jamais son casque en os. Personne n'a jamais vu le visage de ce Pokémon.`,
    pv          :  50,  
    attack      :  50,  
    defense     :  95,  
    speed       :  35,  
    special     :  40
  },
  {
    id          : `105`,
    name        : `Ossatueur`,
    type1       : TYPES.SOL,
    type2       : null,
    description : `L'os qu'il tient dans sa main est une arme. Il peut le lancer avec adresse pour assommer sa proie.`,
    pv          :  60,  
    attack      :  80,  
    defense     : 110, 
    speed       :  45,  
    special     :  50
  },
  /////////////////////////////////////////////
  {
    id          : `106`,
    name        : `Kicklee`,
    type1       : TYPES.COM,
    type2       : null,
    description : `S'il est pressé, ses jambes s'allongent progressivement. Il court alors très rapidement.`,
    pv          :  50,  
    attack      : 120, 
    defense     :  53,  
    speed       :  87,  
    special     :  35
  },
  /////////////////////////////////////////////
  {
    id          : `107`,
    name        : `Tygnon`,
    type1       : TYPES.COM,
    type2       : null,
    description : `Il distribue des séries de coups de poing rapides comme l'éclair, invisibles à l'oeil nu.`,
    pv          :  50,  
    attack      : 105, 
    defense     :  79,  
    speed       :  76,  
    special     :  35
  },
  /////////////////////////////////////////////
  {
    id          : `108`,
    name        : `Excelangue`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Il peut projeter sa langue comme un caméléon. Tout contact avec elle provoque une irritation.`,
    pv          :  90,  
    attack      :  55,  
    defense     :  75,  
    speed       :  30,  
    special     :  60
  },
  /////////////////////////////////////////////
  {
    id          : `109`,
    name        : `Smogo`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Son corps, constitué de gaz toxiques et instables, peut exploser soudainement.`,
    pv          :  40,  
    attack      :  65,  
    defense     :  95,  
    speed       :  35,  
    special     :  60
  },
  {
    id          : `110`,
    name        : `Smogogo`,
    type1       : TYPES.PSN,
    type2       : null,
    description : `Deux Smogo peuvent se combiner en un Smogogo en mélangeant leurs gaz.`,
    pv          :  65,  
    attack      :  90,  
    defense     : 120, 
    speed       :  60,  
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `111`,
    name        : `Rhinocorne`,
    type1       : TYPES.SOL,
    type2       : TYPES.ROC,
    description : `Avec une ossature 1000 fois plus résistante que celle de l'homme, ses charges sont dévastatrices.`,
    pv          :  80,  
    attack      :  85,  
    defense     :  95,  
    speed       :  25,  
    special     :  30
  },
  {
    id          : `112`,
    name        : `Rhinoféros`,
    type1       : TYPES.SOL,
    type2       : TYPES.ROC,
    description : `Son épiderme très épais lui permet de survivre dans un environnement de plus de 3600 degrés.`,
    pv          : 105, 
    attack      : 130, 
    defense     : 120, 
    speed       :  40,  
    special     :  45
  },
  /////////////////////////////////////////////
  {
    id          : `113`,
    name        : `Leveinard`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Un Pokémon rare et difficile à capturer qui porte chance et bien-être à son possesseur.`,
    pv          : 250, 
    attack      :   5,   
    defense     :   5,   
    speed       :  50,  
    special     : 105
  },
  /////////////////////////////////////////////
  {
    id          : `114`,
    name        : `Saquedeneu`,
    type1       : TYPES.PLA,
    type2       : null,
    description : `Son corps est recouvert de lianes similaires à des algues. Elles bougent quand il marche.`,
    pv          :  65,  
    attack      :  55,  
    defense     : 115, 
    speed       :  60,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `115`,
    name        : `Kangourex`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Son enfant ne quitte la poche ventrale protectrice qu'à l'âge de 3 ans.`,
    pv          : 105, 
    attack      :  95,  
    defense     :  80,  
    speed       :  90,  
    special     :  40
  },
  /////////////////////////////////////////////
  {
    id          : `116`,
    name        : `Hypotrempe`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Réputé pour tirer avec précision un jet d'encre sur des insectes volants depuis la surface de l'eau.`,
    pv          :  30,  
    attack      :  40,  
    defense     :  70,  
    speed       :  60,  
    special     :  70
  },
  {
    id          : `117`,
    name        : `Hypocéan`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il peut nager à l'envers en agitant ses petites nageoires pectorales.`,
    pv          :  55,  
    attack      :  65,  
    defense     :  95,  
    speed       :  85,  
    special     :  95
  },
  /////////////////////////////////////////////
  {
    id          : `118`,
    name        : `Poissirène`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Sa queue ondule gracieusement comme un voile. On l'appelle: Reine Des Océans.`,
    pv          :  45,  
    attack      :  67,  
    defense     :  60,  
    speed       :  63,  
    special     :  50
  },
  {
    id          : `119`,
    name        : `Poissoroy`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Pendant la saison des amours, on peut le voir nager dans les rivières et les lacs.`,
    pv          :  80,  
    attack      :  92,  
    defense     :  65,  
    speed       :  68,  
    special     :  80
  },
  /////////////////////////////////////////////
  {
    id          : `120`,
    name        : `Stari`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Un Pokémon bien curieux qui peut régénérer ses appendices sectionnés lors d'un combat.`,
    pv          :  30,  
    attack      :  45,  
    defense     :  55,  
    speed       :  85,  
    special     :  70
  },
  {
    id          : `121`,
    name        : `Staross`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Son coeur brille des couleurs de l'arc-en-ciel. On raconte que c'est une pierre précieuse.`,
    pv          :  60,  
    attack      :  75,  
    defense     :  85,  
    speed       : 115, 
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `122`,
    name        : `M. Mime`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Dérangez-le pendant qu'il mime et il se battra en distribuant des volées de claques.`,
    pv          :  40,  
    attack      :  45,  
    defense     :  65,  
    speed       :  90,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `123`,
    name        : `Insécateur`,
    type1       : TYPES.INS,
    type2       : TYPES.VOL,
    description : `Rapide et agile comme un ninja, il se déplace si vite qu'il crée l'illusion d'être en groupe.`,
    pv          :  70,  
    attack      : 110, 
    defense     :  80,  
    speed       : 105, 
    special     :  55
  },
  /////////////////////////////////////////////
  {
    id          : `124`,
    name        : `Lippoutou`,
    type1       : TYPES.GLA,
    type2       : TYPES.PSY,
    description : `Il ondule ses hanches en marchant et entraîne les gens dans des danses frénétiques.`,
    pv          :  65,  
    attack      :  50,  
    defense     :  35,  
    speed       :  95,  
    special     :  95
  },
  /////////////////////////////////////////////
  {
    id          : `125`,
    name        : `Élektek`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Vivant dans les centrales, il provoque des pannes de courant en s'aventurant en ville.`,
    pv          :  65,  
    attack      :  83,  
    defense     :  57,  
    speed       : 105, 
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `126`,
    name        : `Magmar`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Son corps en fusion brûle d'une flamme orangée, le rendant invisible dans le feu.`,
    pv          :  65,  
    attack      :  95,  
    defense     :  57,  
    speed       :  93,  
    special     :  85
  },
  /////////////////////////////////////////////
  {
    id          : `127`,
    name        : `Scarabrute`,
    type1       : TYPES.INS,
    type2       : null,
    description : `Quand il ne peut écraser sa proie avec sa pince, il la secoue et l'envoie dans les airs.`,
    pv          :  65,  
    attack      : 125, 
    defense     : 100, 
    speed       :  85,  
    special     :  55
  },
  /////////////////////////////////////////////
  {
    id          : `128`,
    name        : `Tauros`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Une fois sa cible en vue, il la charge furieusement en fouettant l'air de sa queue.`,
    pv          :  75,  
    attack      : 100, 
    defense     :  95,  
    speed       : 110, 
    special     :  70
  },
  /////////////////////////////////////////////
  {
    id          : `129`,
    name        : `Magicarpe`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Autrefois, il était beaucoup plus puissant que cette créature minablement faible.`,
    pv          :  20,  
    attack      :  10,  
    defense     :  55,  
    speed       :  80,  
    special     :  20
  },
  {
    id          : `130`,
    name        : `Léviator`,
    type1       : TYPES.EAU,
    type2       : TYPES.VOL,
    description : `Gigantesque et maléfique, il est capable de raser une ville dans un accès de rage terrifiante.`,
    pv          :  95,  
    attack      : 125, 
    defense     :  79,  
    speed       :  81,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `131`,
    name        : `Lokhlass`,
    type1       : TYPES.EAU,
    type2       : TYPES.GLA,
    description : `Ce Pokémon en voie d'extinction peut transporter des passagers sur son dos par-delà les océans.`,
    pv          : 130, 
    attack      :  85,  
    defense     :  80,  
    speed       :  60,  
    special     :  95
  },
  /////////////////////////////////////////////
  {
    id          : `132`,
    name        : `Métamorph`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Il est capable de copier le code génétique d'un ennemi pour se transformer en son double.`,
    pv          :  48,  
    attack      :  48,  
    defense     :  48,  
    speed       :  48,  
    special     :  48
  },
  /////////////////////////////////////////////
  {
    id          : `133`,
    name        : `Évoli`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Sa génétique particulière lui permet d'évoluer s'il est exposé aux radiations d'une pierre.`,
    pv          :  55,  
    attack      :  55,  
    defense     :  50,  
    speed       :  55,  
    special     :  65
  },
  {
    id          : `134`,
    name        : `Aquali`,
    type1       : TYPES.EAU,
    type2       : null,
    description : `Il vit au bord de l'eau. Sa queue lui donne l'apparence d'une sirène.`,
    pv          : 130, 
    attack      :  65,  
    defense     :  60,  
    speed       :  65,  
    special     : 110
  },
  {
    id          : `135`,
    name        : `Voltali`,
    type1       : TYPES.ELE,
    type2       : null,
    description : `Il se charge d'électricité statique pour envoyer des décharges de 10000 volts.`,
    pv          :  65,  
    attack      :  65,  
    defense     :  60,  
    speed       : 130, 
    special     : 110
  },
  {
    id          : `136`,
    name        : `Pyroli`,
    type1       : TYPES.FEU,
    type2       : null,
    description : `Il peut accumuler suffisamment de chaleur pour atteindre des températures de 1600 degrés.`,
    pv          :  65,  
    attack      : 130, 
    defense     :  60,  
    speed       :  65,  
    special     : 110
  },
  /////////////////////////////////////////////
  {
    id          : `137`,
    name        : `Porygon`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Un Pokémon fait de programmes et d'algorithmes. Il peut survivre en milieu virtuel.`,
    pv          :  65,  
    attack      :  60,  
    defense     :  70,  
    speed       :  40,  
    special     :  75
  },
  /////////////////////////////////////////////
  {
    id          : `138`,
    name        : `Amonita`,
    type1       : TYPES.ROC,
    type2       : TYPES.EAU,
    description : `Disparu depuis longtemps, il peut être réanimé génétiquement à partir d'anciens fossiles.`,
    pv          :  35,  
    attack      :  40,  
    defense     : 100, 
    speed       :  35,  
    special     :  90
  },
  {
    id          : `139`,
    name        : `Amonistar`,
    type1       : TYPES.ROC,
    type2       : TYPES.EAU,
    description : `Un Pokémon préhistorique qui disparut quand sa coquille devint trop lourde à déplacer.`,
    pv          :  70,  
    attack      :  60,  
    defense     : 125, 
    speed       :  55,  
    special     : 115
  },
  /////////////////////////////////////////////
  {
    id          : `140`,
    name        : `Kabuto`,
    type1       : TYPES.ROC,
    type2       : TYPES.EAU,
    description : `Un Pokémon reconstitué à partir d'un fossile trouvé dans un site préhistorique.`,
    pv          :  30,  
    attack      :  80,  
    defense     :  90,  
    speed       :  55,  
    special     :  45
  },
  {
    id          : `141`,
    name        : `Kabutops`,
    type1       : TYPES.ROC,
    type2       : TYPES.EAU,
    description : `Sa forme élancée lui permet de nager rapidement. Il lacère sa proie avant d'en absorber la vie.`,
    pv          :  60,  
    attack      : 115, 
    defense     : 105, 
    speed       :  80,  
    special     :  70
  },
  /////////////////////////////////////////////
  {
    id          : `142`,
    name        : `Ptéra`,
    type1       : TYPES.ROC,
    type2       : TYPES.VOL,
    description : `Un Pokémon préhistorique qui attaque son ennemi à la gorge avec ses crocs acérés.`,
    pv          :  80,  
    attack      : 105, 
    defense     :  65,  
    speed       : 130, 
    special     :  60
  },
  /////////////////////////////////////////////
  {
    id          : `143`,
    name        : `Ronflex`,
    type1       : TYPES.NOR,
    type2       : null,
    description : `Très paresseux, il ne fait que manger et dormir. Plus il est gros, plus il devient fainéant.`,
    pv          : 160, 
    attack      : 110, 
    defense     :  65,  
    speed       :  30,  
    special     :  65
  },
  /////////////////////////////////////////////
  {
    id          : `144`,
    name        : `Artikodin`,
    type1       : TYPES.GLA,
    type2       : TYPES.VOL,
    description : `Le légendaire oiseau des glaces. On dit qu'il apparaît aux gens perdus dans les sommets.`,
    pv          :  90,  
    attack      :  85,  
    defense     : 100, 
    speed       :  85,  
    special     : 125
  },
  /////////////////////////////////////////////
  {
    id          : `145`,
    name        : `Électhor`,
    type1       : TYPES.ELE,
    type2       : TYPES.VOL,
    description : `L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs.`,
    pv          :  90,  
    attack      :  90,  
    defense     :  85,  
    speed       : 100, 
    special     : 125
  },
  /////////////////////////////////////////////
  {
    id          : `146`,
    name        : `Sulfura`,
    type1       : TYPES.FEU,
    type2       : TYPES.VOL,
    description : `Le légendaire oiseau du feu. Une pluie de flammes surgit à chaque battement de ses ailes.`,
    pv          :  90,  
    attack      : 100, 
    defense     :  90,  
    speed       :  90,  
    special     : 125
  },
  /////////////////////////////////////////////
  {
    id          : `147`,
    name        : `Minidraco`,
    type1       : TYPES.DRA,
    type2       : null,
    description : `Longtemps considéré comme légendaire, une colonie fut découverte dans les océans.`,
    pv          :  41,  
    attack      :  64,  
    defense     :  45,  
    speed       :  50,  
    special     :  50
  },
  {
    id          : `148`,
    name        : `Draco`,
    type1       : TYPES.DRA,
    type2       : null,
    description : `Un Pokémon légendaire plein de charme. Il peut contrôler les variations climatiques.`,
    pv          :  61,  
    attack      :  84,  
    defense     :  65,  
    speed       :  70,  
    special     :  70
  },
  {
    id          : `149`,
    name        : `Dracolosse`,
    type1       : TYPES.DRA,
    type2       : TYPES.VOL,
    description : `Un Pokémon marin extrêmement rare. On dit qu'il est aussi intelligent que l'homme.`,
    pv          :  91,  
    attack      : 134, 
    defense     :  95,  
    speed       :  80,  
    special     : 100
  },
  /////////////////////////////////////////////
  {
    id          : `150`,
    name        : `Mewtwo`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Il est le fruit de nombreuses expériences génétiques horribles et malsaines.`,
    pv          : 106, 
    attack      : 110, 
    defense     :  90,  
    speed       : 130, 
    special     : 154
  },
  /////////////////////////////////////////////
  {
    id          : `151`,
    name        : `Mew`,
    type1       : TYPES.PSY,
    type2       : null,
    description : `Unique et rare, son existence est remise en cause par les experts. Peu nombreux sont ceux qui l'ont vu.`,
    pv          : 100, 
    attack      : 100, 
    defense     : 100, 
    speed       : 100, 
    special     : 100
  }
]
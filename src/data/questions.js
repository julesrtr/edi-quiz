// Situations EDI — 4 cas réalistes d'angles morts en équipe
const situations = [
  {
    id: 1,
    title: 'Le stage qui révèle tout',
    description:
      'Deux candidats, deux parcours très différents. Le CV ne raconte pas toute l\'histoire.',
    context:
      'Vous recrutez un stagiaire pour un projet technique de haut niveau. Deux profils se démarquent. Le candidat X a un CV parfait, avec trois stages prestigieux obtenus grâce à ses parents. Le candidat Y a des notes excellentes, mais n\'a fait aucun stage car il a dû travailler dans la restauration chaque été pour payer ses études.',
    prompt: 'Sur quel critère devriez-vous baser votre sélection pour être le plus "juste" possible ?',
    image: null,
    icon: '⚖️',
    tag: 'Équité',
    color: '#b07d62',
    choices: [
      {
        id: 'a',
        text: 'Choisir le candidat X, car son expérience concrète garantit qu\'il sera opérationnel immédiatement (critère d\'efficacité).',
        mood: 'concerned',
        indicators: { participation: 30, equite: 20, inclusion: 25, climat: 35 },
        reaction: 'Le privilège socio-économique est récompensé.',
        consequences: [
          'Ce choix semble logique, mais il favorise le privilège socio-économique.',
          'Le candidat X a eu le "luxe" de pouvoir faire des stages souvent peu rémunérés ou demandant un réseau.',
          'Le candidat Y, qui a dû assurer sa survie financière, est pénalisé pour des circonstances hors de son contrôle.',
        ],
        diagnosis: 'Se baser uniquement sur l\'expérience acquise revient à donner l\'avantage à ceux qui sont nés avec plus de ressources.',
        edi: 'L\'équité demande de reconnaître que les parcours ne partent pas du même point. Un CV prestigieux peut refléter un réseau familial plutôt qu\'une compétence supérieure.',
        teamwork: 'En recrutant toujours les mêmes profils privilégiés, l\'équipe se prive de perspectives différentes et reproduit les inégalités existantes.',
        practice: 'Évaluer le potentiel et la capacité d\'apprentissage, pas seulement l\'expérience passée. Prendre en compte le contexte socio-économique dans l\'analyse des parcours.',
      },
      {
        id: 'b',
        text: 'Faire le choix en prenant en compte le background des deux et pas seulement en se focalisant sur le CV.',
        mood: 'great',
        indicators: { participation: 85, equite: 85, inclusion: 80, climat: 80 },
        reaction: 'Le potentiel est évalué de manière juste.',
        consequences: [
          'L\'équipe reconnaît que le mérite ne se mesure pas uniquement à travers un CV.',
          'Le candidat Y voit ses efforts et sa résilience valorisés à leur juste mesure.',
          'La sélection reflète une compréhension plus profonde de ce que signifie le potentiel.',
        ],
        diagnosis: 'L\'équité ici, c\'est de regarder le potentiel. Se baser uniquement sur l\'expérience acquise revient à donner l\'avantage à ceux qui sont nés avec plus de ressources.',
        edi: 'L\'équité ne signifie pas traiter tout le monde de la même façon. Elle demande de contextualiser les parcours pour offrir une chance juste à chacun.',
        teamwork: 'Une équipe qui recrute en tenant compte des contextes individuels gagne en diversité de perspectives et en richesse collective.',
        practice: 'Mettre en place des grilles d\'évaluation qui intègrent le potentiel, la motivation et le contexte, en plus de l\'expérience brute.',
      },
      {
        id: 'c',
        text: 'Tirer au sort, puisque les deux ont des capacités intellectuelles prouvées par leurs notes.',
        mood: 'concerned',
        indicators: { participation: 40, equite: 35, inclusion: 30, climat: 45 },
        reaction: 'Le hasard remplace la réflexion.',
        consequences: [
          'Faire un choix sous l\'effet du hasard n\'est pas une approche rationnelle.',
          'Le tirage au sort évite la question de fond sur ce qui constitue le mérite.',
          'Aucune leçon n\'est tirée pour les futurs recrutements.',
        ],
        diagnosis: 'Le hasard semble neutre, mais il esquive la vraie question : comment évaluer justement des parcours inégaux.',
        edi: 'L\'équité demande un effort actif de contextualisation, pas une neutralité passive. Le tirage au sort ignore les inégalités structurelles au lieu de les corriger.',
        teamwork: 'L\'équipe manque une occasion de développer des critères de sélection plus justes et réfléchis pour l\'avenir.',
        practice: 'Remplacer le hasard par une analyse contextualisée des parcours, en reconnaissant que l\'égalité de traitement ne produit pas l\'équité.',
      },
    ],
  },
  {
    id: 2,
    title: '"On va rester sur notre façon de faire"',
    description:
      'Un nouveau membre propose une méthode différente. L\'équipe l\'écarte en quelques secondes.',
    context:
      'Au sein de votre équipe de projet, un nouveau membre propose une méthode de collaboration totalement différente, basée sur une expérience fructueuse qu\'il a eue dans un autre milieu professionnel. Les autres membres réagissent rapidement : « C\'est intéressant, mais on va rester sur notre façon de faire habituelle, c\'est plus simple car tout le monde la connaît déjà. » L\'idée est écartée en quelques secondes pour passer à l\'ordre du jour.',
    prompt: 'Quelle analyse de cette interaction révèle le mieux la dynamique de performance de l\'équipe ?',
    image: null,
    icon: '🔀',
    tag: 'Diversité',
    color: '#c9a84c',
    choices: [
      {
        id: 'a',
        text: 'C\'est une décision qui privilégie l\'efficacité opérationnelle immédiate.',
        mood: 'concerned',
        indicators: { participation: 30, equite: 25, inclusion: 20, climat: 35 },
        reaction: 'L\'habitude est confondue avec l\'efficacité.',
        consequences: [
          'Ce que l\'équipe appelle « efficacité » est en réalité du conformisme déguisé.',
          'En privilégiant systématiquement l\'habitude, on crée une culture d\'équipe où la diversité de parcours est ignorée.',
          'Le nouveau membre apprend que sa présence est acceptée, mais pas son expertise différente.',
        ],
        diagnosis: 'Confondre confort et performance empêche l\'équipe de bénéficier de la diversité qu\'elle a recrutée.',
        edi: 'La diversité ne se résume pas à avoir des personnes de différents horizons dans une pièce. Elle n\'a de valeur que si les perspectives différentes peuvent réellement influencer les décisions.',
        teamwork: 'L\'équipe se prive d\'innovation et développe une culture où proposer quelque chose de nouveau est découragé.',
        practice: 'Quand une idée sort de l\'habitude, le réflexe devrait être de l\'examiner avant de la rejeter. Poser la question : « qu\'est-ce que cette approche apporterait de différent ? »',
      },
      {
        id: 'b',
        text: 'C\'est un signe que la diversité de l\'équipe est sous-exploitée, voire ignorée.',
        mood: 'great',
        indicators: { participation: 85, equite: 80, inclusion: 85, climat: 80 },
        reaction: 'L\'angle mort est identifié.',
        consequences: [
          'La diversité, ce n\'est pas seulement avoir des personnes de différents horizons, c\'est intégrer leurs méthodes.',
          'La richesse de la diversité réside dans ces moments de friction où une idée différente force le groupe à questionner ses pratiques.',
          'Ignorer cette proposition, c\'est dire au nouveau membre : « Ta présence est acceptée, mais ton expertise différente ne l\'est pas. »',
        ],
        diagnosis: 'La vraie performance d\'équipe naît de la capacité à intégrer des perspectives différentes, pas à les écarter poliment.',
        edi: 'La diversité de parcours n\'a d\'impact que si elle peut réellement influencer le fonctionnement du groupe. Sans cela, elle reste cosmétique.',
        teamwork: 'Une équipe qui accueille les idées nouvelles développe une culture d\'innovation et de curiosité qui la rend plus adaptable face aux défis.',
        practice: 'Instaurer un principe : toute idée nouvelle reçoit au minimum un temps d\'écoute et de questionnement avant d\'être évaluée.',
      },
      {
        id: 'c',
        text: 'C\'est à la personne qui propose l\'idée de prouver par des chiffres que sa méthode est meilleure avant de déranger le groupe.',
        mood: 'concerned',
        indicators: { participation: 25, equite: 20, inclusion: 15, climat: 30 },
        reaction: 'La charge de la preuve repose sur la minorité.',
        consequences: [
          'Demander à une minorité de « travailler deux fois plus fort » pour justifier leur apport est une forme d\'iniquité.',
          'Une équipe inclusive considère que l\'innovation est une responsabilité collective.',
          'Ce réflexe décourage toute future proposition et renforce le conformisme.',
        ],
        diagnosis: 'Exiger une preuve supplémentaire uniquement des idées « différentes » crée un double standard qui freine l\'innovation.',
        edi: 'L\'inclusion demande que les idées soient évaluées avec le même sérieux, quelle que soit leur source. Imposer un fardeau de preuve supplémentaire aux perspectives minoritaires est une forme de discrimination subtile.',
        teamwork: 'L\'équipe installe un climat où seules les idées conformes à la norme peuvent émerger sans friction, ce qui appauvrit la réflexion collective.',
        practice: 'Appliquer les mêmes critères d\'évaluation à toutes les propositions, qu\'elles viennent de l\'intérieur ou de l\'extérieur de la culture du groupe.',
      },
    ],
  },
  {
    id: 3,
    title: 'Efficace… mais à quel prix ?',
    description:
      'Deux membres charismatiques décident vite. Le reste du groupe suit en silence.',
    context:
      'En réunion, deux membres très expérimentés et charismatiques proposent une solution structurée dès les premières minutes. Le reste du groupe hoche la tête et dit : « Ça me semble logique », ou « On vous fait confiance ». La décision est prise en un temps record, laissant l\'après-midi libre pour l\'exécution.',
    prompt: 'Quelle est la lecture la plus rigoureuse de la performance de cette équipe ?',
    image: null,
    icon: '💬',
    tag: 'Inclusion',
    color: '#c4956a',
    choices: [
      {
        id: 'a',
        text: 'C\'est un signe de haute maturité d\'équipe où la confiance mutuelle accélère les processus.',
        mood: 'concerned',
        indicators: { participation: 25, equite: 30, inclusion: 20, climat: 40 },
        reaction: 'L\'équipe confond confiance et conformité.',
        consequences: [
          'Le silence n\'est pas forcément un accord : il peut traduire de la pression ou un manque d\'espace pour réfléchir.',
          'En valorisant la rapidité, on exclut les profils plus analytiques ou moins affirmés.',
          'Un faux consensus s\'installe, fragile face aux imprévus.',
        ],
        diagnosis: 'La rapidité de décision est ici confondue avec la qualité de décision. Le biais de cohésion masque l\'absence de véritable délibération.',
        edi: 'L\'inclusion ne se mesure pas à l\'absence de conflit, mais à la possibilité réelle qu\'a chaque personne de contribuer aux décisions.',
        teamwork: 'Les décisions prises sans participation réelle sont souvent moins solides. Le groupe avance vite, mais sur des bases fragiles.',
        practice: 'Avant de valider une décision rapide, vérifier que le silence traduit un vrai accord et non une pression de conformité.',
      },
      {
        id: 'b',
        text: 'C\'est une opportunité manquée de vérifier si l\'équipe est réellement inclusive et robuste.',
        mood: 'great',
        indicators: { participation: 85, equite: 80, inclusion: 85, climat: 80 },
        reaction: 'L\'enjeu de diversité est reconnu.',
        consequences: [
          'L\'équipe a manqué l\'occasion de tester sa décision sous plusieurs angles.',
          'L\'inclusion demande du temps pour intégrer tous les points de vue.',
          'Une équipe réellement diversifiée est souvent plus lente au début, mais bien plus solide face aux imprévus car la décision a été testée sous plusieurs angles.',
        ],
        diagnosis: 'La vraie performance d\'équipe se mesure à la robustesse des décisions, pas à la vitesse à laquelle elles sont prises.',
        edi: 'L\'inclusion signifie créer les conditions pour que chacun puisse s\'exprimer, pas attendre que certains forcent leur place. Le silence des uns ne valide pas la décision des autres.',
        teamwork: 'La qualité des décisions augmente quand les perspectives sont diversifiées. Le groupe devient plus résilient face aux angles morts.',
        practice: 'Instaurer un temps de réflexion individuelle avant les décisions collectives, pour permettre à chacun de formuler sa pensée sans pression.',
      },
      {
        id: 'c',
        text: 'C\'est la responsabilité de ceux qui se taisent de se manifester s\'ils voient une faille.',
        mood: 'concerned',
        indicators: { participation: 20, equite: 25, inclusion: 15, climat: 30 },
        reaction: 'La responsabilité est reportée sur les plus vulnérables.',
        consequences: [
          'Il est faux de penser que ceux qui se taisent doivent simplement parler.',
          'Tout le monde n\'a pas la même aisance ou culture pour s\'imposer dans un groupe.',
          'Ce réflexe renforce l\'exclusion des profils introvertis ou moins assertifs.',
        ],
        diagnosis: 'Le biais de l\'extraversion fait porter la responsabilité de l\'inclusion sur ceux qui en sont justement exclus.',
        edi: 'L\'inclusion, c\'est créer les conditions pour que chacun puisse s\'exprimer, pas attendre que certains forcent leur place. Tout le monde n\'a pas la même aisance pour s\'imposer.',
        teamwork: 'Une équipe qui attend que les membres silencieux « prennent leur place » ne crée pas un environnement inclusif, elle reproduit les rapports de pouvoir existants.',
        practice: 'Mettre en place des mécanismes structurés (tour de table, vote silencieux, temps de réflexion) pour que la participation ne dépende pas du tempérament.',
      },
    ],
  },
  {
    id: 4,
    title: 'La meilleure note à tout prix',
    description:
      'Une tâche clé est attribuée à Sara plutôt qu\'à Marc, sans considérer leurs contextes.',
    context:
      'Pour la remise du rapport final, une tâche complexe de modélisation doit être attribuée à un des membres de l\'équipe. Deux sont volontaires : Sara, qui a d\'excellentes notes et beaucoup de temps libre, et Marc, qui doit s\'occuper de ses parents malades et a des notes moyennes. L\'équipe choisit Sara pour garantir la meilleure note possible.',
    prompt: 'Quel principe EDI est sous-évalué par l\'équipe ?',
    image: null,
    icon: '📋',
    tag: 'Équité',
    color: '#8a9a6c',
    choices: [
      {
        id: 'a',
        text: 'L\'égalité, car Marc et Sara n\'ont pas reçu la même considération technique.',
        mood: 'concerned',
        indicators: { participation: 35, equite: 30, inclusion: 30, climat: 40 },
        reaction: 'Le problème est mal identifié.',
        consequences: [
          'L\'égalité traiterait Marc et Sara de la même façon, en faisant fi du contexte.',
          'Ici, le problème est plus profond qu\'un simple traitement identique.',
          'Parler d\'égalité passe à côté des obstacles structurels qui limitent Marc.',
        ],
        diagnosis: 'L\'égalité (traiter tout le monde pareil) ne résout pas les inégalités de départ. C\'est l\'équité qui prend en compte les contextes différents.',
        edi: 'L\'égalité donne les mêmes outils à tous. L\'équité donne à chacun ce dont il a besoin pour réussir. Ici, Marc a besoin d\'aménagements, pas simplement du même traitement.',
        teamwork: 'L\'équipe qui confond égalité et équité reproduit les inégalités existantes sans s\'en rendre compte.',
        practice: 'Distinguer clairement égalité et équité dans les décisions d\'équipe. Se demander : « Est-ce que tout le monde part du même point ? »',
      },
      {
        id: 'b',
        text: 'La diversité, car l\'équipe se prive d\'un nouveau regard sur la modélisation.',
        mood: 'happy',
        indicators: { participation: 55, equite: 50, inclusion: 55, climat: 55 },
        reaction: 'Un aspect est identifié, mais ce n\'est pas l\'enjeu central.',
        consequences: [
          'Bien que ce soit vrai, ce n\'est pas l\'enjeu central de cette situation.',
          'La diversité de perspectives est effectivement perdue, mais le problème de fond est ailleurs.',
          'Se concentrer uniquement sur la diversité masque la question de l\'équité.',
        ],
        diagnosis: 'La diversité est un enjeu réel ici, mais secondaire. Le cœur du problème est l\'iniquité dans l\'attribution des opportunités de développement.',
        edi: 'La diversité enrichit les perspectives, mais sans équité, elle ne suffit pas. Les opportunités doivent être distribuées en tenant compte des contextes individuels.',
        teamwork: 'L\'équipe passe à côté d\'une occasion de développer tous ses membres, pas seulement ceux qui sont déjà les mieux positionnés.',
        practice: 'Considérer la diversité comme un levier, mais ne pas oublier que l\'équité en est la condition préalable.',
      },
      {
        id: 'c',
        text: 'L\'équité, car l\'équipe ignore la situation socio-économique qui influence les disponibilités de Marc.',
        mood: 'great',
        indicators: { participation: 85, equite: 90, inclusion: 80, climat: 80 },
        reaction: 'L\'angle mort structurel est identifié.',
        consequences: [
          'La littérature définit l\'équité comme la reconnaissance des besoins différenciés.',
          'En choisissant Sara uniquement pour les meilleures notes, l\'équipe renforce un motif où ceux qui ont le moins d\'obstacles obtiennent plus d\'opportunités pour se développer.',
          'L\'équité demanderait de diviser la tâche ou d\'offrir un soutien à Marc pour qu\'il puisse aussi progresser.',
        ],
        diagnosis: 'L\'équipe reproduit un cycle où les privilégiés accumulent les opportunités tandis que les autres sont laissés de côté.',
        edi: 'L\'équité demande de reconnaître que les contraintes personnelles (aidant familial, situation financière) ne sont pas des choix mais des réalités qui affectent la disponibilité et la performance.',
        teamwork: 'Une équipe équitable cherche à développer tous ses membres, pas seulement à maximiser le résultat immédiat en s\'appuyant toujours sur les mêmes.',
        practice: 'Diviser les tâches complexes pour permettre à chacun de contribuer selon ses disponibilités, ou offrir un soutien adapté aux membres qui font face à des obstacles.',
      },
    ],
  },
];

// Vidéos de sensibilisation — conservées pour usage futur
const videos = [
  {
    title: 'Vidéo de sensibilisation 1',
    url: 'https://www.youtube.com/embed/REMPLACE_MOI',
  },
  {
    title: 'Vidéo de sensibilisation 2',
    url: 'https://www.youtube.com/embed/REMPLACE_MOI',
  },
];

// ── Final synthesis page content ──
const finalSynthesis = {
  hero: {
    title: 'Ce que ces 4 situations révèlent',
    subtitle:
      'Ces 4 situations montrent qu\'une équipe peut sembler juste, ouverte et performante, tout en reproduisant des biais dans le recrutement, l\'évaluation du mérite, la prise de décision et la valorisation des différences.',
  },
  blindSpots: [
    {
      icon: '⚖️',
      title: 'Un CV prestigieux ne reflète pas toujours le mérite',
      body: 'Les expériences professionnelles dépendent souvent du réseau et des ressources familiales. Évaluer uniquement sur le CV revient à récompenser le privilège socio-économique plutôt que le potentiel réel.',
    },
    {
      icon: '🔀',
      title: 'Accueillir la diversité ne suffit pas, il faut intégrer les différences',
      body: 'Recruter des profils variés sans écouter leurs idées est une diversité cosmétique. La vraie richesse émerge quand les perspectives différentes peuvent réellement influencer les décisions du groupe.',
    },
    {
      icon: '💬',
      title: 'Le silence n\'est pas un signe d\'accord',
      body: 'Quand une décision est prise rapidement par quelques voix dominantes, le silence des autres n\'est pas de la confiance — c\'est souvent un manque d\'espace pour s\'exprimer. La rapidité n\'est pas synonyme de qualité.',
    },
    {
      icon: '📋',
      title: 'Les opportunités vont souvent à ceux qui ont déjà le moins d\'obstacles',
      body: 'Attribuer les tâches valorisantes uniquement aux membres les plus disponibles ou performants renforce un cycle où les privilégiés accumulent les opportunités, tandis que les autres sont laissés de côté.',
    },
  ],
  weakSignals: {
    title: 'Signaux faibles à repérer',
    intro:
      'Ces situations ne sont pas des cas extrêmes. Elles se manifestent au quotidien, souvent sans que personne ne les nomme.',
    signals: [
      'Un candidat est écarté pour manque d\'expérience sans que son contexte socio-économique soit pris en compte.',
      'Une idée différente est rejetée poliment parce qu\'elle ne correspond pas aux habitudes du groupe.',
      'Les décisions sont prises en quelques minutes par les voix les plus affirmées, sans vérifier l\'adhésion réelle.',
      'Les tâches valorisantes sont toujours attribuées aux mêmes profils, renforçant les inégalités.',
      'On demande à ceux qui proposent des approches différentes de fournir plus de preuves que les autres.',
      'Le mérite est évalué sans tenir compte des obstacles que certains ont dû surmonter.',
    ],
  },
  whyItMatters: {
    title: 'Pourquoi cela compte dans une équipe',
    intro:
      'Ces angles morts ne sont pas des questions théoriques. Ils affectent directement la qualité du travail collaboratif et la justice au sein du groupe.',
    points: [
      {
        label: 'Équité dans le recrutement',
        text: 'Quand les critères de sélection favorisent le parcours plutôt que le potentiel, on reproduit les inégalités sociales au lieu de les corriger.',
      },
      {
        label: 'Valorisation de la diversité',
        text: 'Une équipe qui rejette les méthodes différentes par confort se prive d\'innovation et envoie le message que seule la norme dominante est valable.',
      },
      {
        label: 'Inclusion réelle',
        text: 'Des décisions prises sans véritable participation collective reposent sur un nombre limité de points de vue et excluent les profils moins assertifs.',
      },
      {
        label: 'Répartition des opportunités',
        text: 'Confier systématiquement les tâches importantes aux plus disponibles ignore les contraintes personnelles et empêche le développement de tous les membres.',
      },
      {
        label: 'Justice collective',
        text: 'Une équipe qui ne distingue pas égalité et équité traite tout le monde de la même façon sans reconnaître que les points de départ sont différents.',
      },
    ],
  },
  reflexes: {
    title: '3 réflexes à garder en tête',
    items: [
      {
        number: '01',
        title: 'Contextualiser le mérite',
        text: 'Ne pas évaluer un parcours sans tenir compte des obstacles rencontrés. Un CV reflète autant les opportunités reçues que les compétences développées.',
      },
      {
        number: '02',
        title: 'Intégrer les différences, pas seulement les tolérer',
        text: 'Accueillir la diversité signifie donner un espace réel aux idées différentes, pas les écouter poliment avant de revenir aux habitudes.',
      },
      {
        number: '03',
        title: 'Créer les conditions de la participation, pas seulement l\'invitation',
        text: 'L\'inclusion ne se décrète pas. Elle se construit par des mécanismes concrets qui permettent à chacun de contribuer, quelle que soit son aisance sociale.',
      },
    ],
  },
  researchInsights: {
    title: 'Ce que la recherche aide à comprendre',
    cards: [
      {
        text: 'L\'inclusion ne dépend pas seulement de l\'absence de conflit visible, mais de la possibilité réelle qu\'a chaque personne de contribuer aux décisions et aux processus du groupe.',
        source: 'Shore et al., 2011',
      },
      {
        text: 'Les critères de sélection apparemment neutres (expérience, disponibilité, réseau) peuvent reproduire des inégalités structurelles en favorisant systématiquement les profils les plus privilégiés.',
        source: 'Ely & Thomas, 2001',
      },
      {
        text: 'Une équipe qui valorise la rapidité de décision au détriment de la délibération collective affaiblit progressivement la participation et l\'engagement de ses membres les moins assertifs.',
        source: 'Edmondson, 1999',
      },
    ],
  },
  sources: {
    title: 'Sources mobilisées',
    references: [
      'M. L. Wang, A. S. Gomes, M. Rosa, P. Copeland, and V. J. Santana, “A systematic review of diversity, equity, and inclusion and antiracism training studies: Findings and future directions,” Translational Behavioral Medicine, vol. 14, no. 3, pp. 156–171, 2024. [Online]. Available: https://pmc.ncbi.nlm.nih.gov/articles/PMC10890819/ ',
      'V. Hunt, S. Prince, S. Dixon-Fyle, and K. Dolan, Diversity Wins: How Inclusion Matters. McKinsey & Company, 2020. [Online]. Available: https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/diversity%20wins%20how%20inclusion%20matters/diversity-wins-how-inclusion-matters-vf.pdf ',
      'Observatoire sur la réussite en enseignement supérieur, Équité, diversité et inclusion (EDI) : au cœur de la réussite étudiante. Québec, QC, Canada: ORES, 2023. [Online]. Available: https://oresquebec.ca/wp-content/uploads/2023/07/EDI-au-coeur-de-la-reussite-etudiante_Dossier_2023.pdf',
    ],
  },
};

export { situations, videos, finalSynthesis };

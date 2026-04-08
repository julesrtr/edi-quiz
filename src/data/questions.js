// Situations EDI — 4 cas réalistes d'angles morts en équipe
const situations = [
  {
    id: 1,
    title: 'Tout le monde est d\'accord… vraiment ?',
    description:
      'Deux membres proposent vite des idées et les autres suivent sans trop réagir.',
    context:
      'Lors d\'une réunion d\'équipe, deux personnes proposent rapidement des idées. Les autres membres hochent la tête, mais ne s\'expriment pas vraiment. Le groupe semble avancer efficacement, pourtant certaines voix restent silencieuses.',
    prompt: 'Que feriez-vous dans cette situation ?',
    image: null, // Replace with image path, e.g. '/images/situation-1.jpg'
    icon: '💬',
    tag: 'Inclusion',
    color: '#c4956a',
    choices: [
      {
        id: 'a',
        text: 'On avance, si personne ne dit rien c\'est que tout le monde est d\'accord.',
      },
      {
        id: 'b',
        text: 'On fait un tour de table rapide pour vérifier que chacun a pu s\'exprimer.',
      },
      {
        id: 'c',
        text: 'On propose un moment de réflexion individuelle avant de reprendre la discussion.',
      },
    ],
  },
  {
    id: 2,
    title: 'Un horaire efficace pour qui ?',
    description:
      'La majorité est disponible, mais un membre participe de moins en moins.',
    context:
      'L\'équipe a fixé ses réunions le mercredi à 8 h. La plupart sont présents, mais un membre commence à manquer de plus en plus souvent. Personne ne lui a demandé pourquoi.',
    prompt: 'Que ferait votre équipe ?',
    image: null,
    icon: '🕐',
    tag: 'Équité',
    color: '#b07d62',
    choices: [
      {
        id: 'a',
        text: 'On garde l\'horaire, c\'est celui qui convient à la majorité.',
      },
      {
        id: 'b',
        text: 'On demande directement à la personne si l\'horaire lui pose un problème.',
      },
      {
        id: 'c',
        text: 'On propose un sondage anonyme pour trouver un créneau qui fonctionne pour tous.',
      },
    ],
  },
  {
    id: 3,
    title: 'La personne "fiable"',
    description:
      'La même personne organise, corrige et relance toujours le groupe.',
    context:
      'Dans votre équipe, une personne prend systématiquement en charge l\'organisation : elle planifie les réunions, relit les documents, relance les retardataires. Les autres la trouvent "fiable" et la laissent faire.',
    prompt: 'Que feriez-vous dans cette situation ?',
    image: null,
    icon: '📋',
    tag: 'Équité + inclusion',
    color: '#8a9a6c',
    choices: [
      {
        id: 'a',
        text: 'On la remercie, elle fait bien ce travail et ça profite à tout le monde.',
      },
      {
        id: 'b',
        text: 'On met en place une rotation des rôles pour mieux répartir la charge.',
      },
      {
        id: 'c',
        text: 'On ouvre une discussion d\'équipe sur la répartition invisible du travail.',
      },
    ],
  },
  {
    id: 4,
    title: 'Une autre façon de faire',
    description:
      'Une méthode différente est proposée, mais rejetée parce qu\'elle sort des habitudes.',
    context:
      'Un membre de l\'équipe propose une approche différente pour le projet. Les autres répondent poliment que « ce n\'est pas comme ça qu\'on fait d\'habitude ». L\'idée est abandonnée sans vrai examen.',
    prompt: 'Que ferait votre équipe ?',
    image: null,
    icon: '🔀',
    tag: 'Diversité',
    color: '#c9a84c',
    choices: [
      {
        id: 'a',
        text: 'On s\'en tient à la méthode habituelle, elle a fait ses preuves.',
      },
      {
        id: 'b',
        text: 'On demande à la personne de présenter son idée plus en détail avant de décider.',
      },
      {
        id: 'c',
        text: 'On teste les deux approches sur une petite partie du projet pour comparer.',
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

export { situations, videos };

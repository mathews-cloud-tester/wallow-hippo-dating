export type HippoProfile = {
  id: string
  name: string
  age: number
  location: string
  bio: string
  photo: string
  /** Deterministic: likes you back if true */
  likesYou: boolean
}

export const profiles: HippoProfile[] = [
  {
    id: 'nile',
    name: 'Nile',
    age: 8,
    location: 'Lower Delta reeds',
    bio: 'Sunrise wallower. Looking for someone who appreciates a good mud bath and long silences underwater.',
    photo: '/hippos/nile.svg',
    likesYou: true,
  },
  {
    id: 'bubbles',
    name: 'Bubbles',
    age: 6,
    location: 'Oxbow lagoon',
    bio: 'Professional napper. Will trade river gossip for half an acre of soft silt.',
    photo: '/hippos/bubbles.svg',
    likesYou: false,
  },
  {
    id: 'mudo',
    name: 'Mudo',
    age: 11,
    location: 'Hippo Creek bend',
    bio: 'Territorial by day, tender by dusk. Must love deep water and zero small talk.',
    photo: '/hippos/mudo.svg',
    likesYou: true,
  },
  {
    id: 'pearl',
    name: 'Pearl',
    age: 7,
    location: 'Sandy shoals',
    bio: 'Part-time sundial. Looking for a mudmate who laughs with their whole snout.',
    photo: '/hippos/pearl.svg',
    likesYou: false,
  },
  {
    id: 'tako',
    name: 'Tako',
    age: 9,
    location: 'Papyrus flats',
    bio: 'Birds nest on me sometimes. It’s fine. Seeking a partner who doesn’t mind feathers.',
    photo: '/hippos/tako.svg',
    likesYou: true,
  },
  {
    id: 'silt',
    name: 'Silt',
    age: 5,
    location: 'Upstream shallows',
    bio: 'New to the herd. Still learning which end of the river is upstream. Patient teachers preferred.',
    photo: '/hippos/silt.svg',
    likesYou: false,
  },
  {
    id: 'reedah',
    name: 'Reedah',
    age: 10,
    location: 'Hidden cove',
    bio: 'Night swimmer. Day dreamer. Will show you the best submerged caves if you bring fish.',
    photo: '/hippos/reedah.svg',
    likesYou: true,
  },
  {
    id: 'gus',
    name: 'Gus',
    age: 12,
    location: 'Rock ledge pool',
    bio: 'Grumpy exterior, warm belly. Dislikes egret tourism. Loves shared submerged naps.',
    photo: '/hippos/gus.svg',
    likesYou: false,
  },
  {
    id: 'willa',
    name: 'Willa',
    age: 8,
    location: 'Marsh east bank',
    bio: 'Poet of puddles. Writes sonnets about silt density. Looking for my co-author.',
    photo: '/hippos/willa.svg',
    likesYou: true,
  },
  {
    id: 'chunk',
    name: 'Chunk',
    age: 14,
    location: 'Deep channel',
    bio: 'Biggest splash east of the falls. Soft on the inside. Prefer quiet evenings in warm mud.',
    photo: '/hippos/chunk.svg',
    likesYou: false,
  },
]

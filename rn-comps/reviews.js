const reviews = [
  {
    url: 'one.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some long title',
    key: '01',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'two.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longer title',
    key: '02',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'three.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longest title',
    key: '03',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'four.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some insanely long title',
    key: '04',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'five.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some unbelievably long title',
    key: '05',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'one.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some long title',
    key: '06',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'two.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longer title',
    key: '07',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'three.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longest title',
    key: '08',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'four.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some insanely long title',
    key: '09',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'five.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some unbelievably long title',
    key: '10',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'one.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some long title',
    key: '11',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'two.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longer title',
    key: '12',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'three.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some longest title',
    key: '13',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'four.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some insanely long title',
    key: '14',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  },
  {
    url: 'five.com',
    text: 'Lorem ipsum dolor amet taiyaki pork belly retro shabby chic polaroid, crucifix scenester hammock dreamcatcher jean shorts poke live-edge chambray. Cliche lumbersexual chia organic meh enamel pin banh mi vape wolf skateboard you probably havent heard of them. Neutra butcher pork belly, tacos XOXO af direct trade. ',
    name: 'Some unbelievably long title',
    key: '15',
    avatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    best: true
  }
]

export const getReviews = () => reviews
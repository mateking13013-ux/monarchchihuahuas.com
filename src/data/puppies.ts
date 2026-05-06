export interface Puppy {
  name: string;
  images: string[];
  sex: 'Male' | 'Female' | 'Males';
  age: string;
  status: string;
  price: number;
  description: string;
  coat: string;
  breed: string;
  puppyId: string;
  registration: string;
  healthStatus: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Atlas',
    images: ['/images/atlas-1.jpg', '/images/atlas-1.jpg', '/images/atlas-1.jpg'],
    sex: 'Male',
    age: '5 weeks',
    status: 'Available',
    price: 500,
    description: "Massive and majestic — this fawn male Boerboel pup carries the blocky head, wide chest, and calm, steady temperament of true African Mastiff royalty. Health-tested champion parents, vaccinated and dewormed on schedule, and already showing the gentle giant temperament Boerboel families love.",
    coat: 'Fawn — classic Boerboel coat',
    breed: 'BoerBoel',
    puppyId: 'EB001',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Brutus',
    images: ['/images/brutus-1.jpg', '/images/brutus-1.jpg', '/images/brutus-1.jpg'],
    sex: 'Male',
    age: '10 weeks',
    status: 'Available',
    price: 850,
    description: "Powerful build, confident nature, and deeply loyal from the very first introduction. Brutus comes from proven champion bloodlines and arrives fully vaccinated and dewormed — a forever guardian in the making, ready to bond with the family that becomes his world.",
    coat: 'Fawn with dark mask',
    breed: 'BoerBoel',
    puppyId: 'EB002',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Valkyrie',
    images: ['/images/valkyrie-1.jpg', '/images/valkyrie-1.jpg', '/images/valkyrie-1.jpg'],
    sex: 'Female',
    age: '10 weeks',
    status: 'Available',
    price: 850,
    description: "A bold and confident pup with a playful personality and an enormous heart. Valkyrie has been raised inside a family environment with thorough socialization — a perfect fit for an active home that wants a confident, devoted Boerboel companion.",
    coat: 'Fawn — Boerboel standard',
    breed: 'BoerBoel',
    puppyId: 'EB003',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Magnum',
    images: ['/images/magnum-1.jpg', '/images/magnum-1.jpg', '/images/magnum-1.jpg'],
    sex: 'Male',
    age: '10 weeks',
    status: 'Available',
    price: 850,
    description: "A curious, energetic pup absolutely bursting with personality and charm. Magnum loves an adventure with his siblings just as much as he loves a quiet evening of cuddles, making him a versatile match for an active, loving home.",
    coat: 'Fawn with mask',
    breed: 'BoerBoel',
    puppyId: 'EB004',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Martha',
    images: ['/images/martha-1.jpg', '/images/martha-1.jpg', '/images/martha-1.jpg'],
    sex: 'Female',
    age: '10 weeks',
    status: 'Available',
    price: 850,
    description: "A gentle giant with a fearless yet loving nature. Martha is action-loving when there's an adventure to chase but turns straight into a calm, devoted cuddle-companion when the day winds down. Well-socialized and family-raised since day one.",
    coat: 'Fawn — soft Boerboel coat',
    breed: 'BoerBoel',
    puppyId: 'EB005',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Bruiser & Duma',
    images: ['/images/bruiser-duma-1.jpg', '/images/bruiser-duma-1.jpg', '/images/bruiser-duma-1.jpg'],
    sex: 'Males',
    age: '10 weeks',
    status: 'Available',
    price: 1600,
    description: "A bonded brother pair available together for a single forever home — confident, big-hearted boys who balance adventure with affection perfectly. Raised side-by-side, they'll thrive in a family that wants two devoted Boerboel guardians at once.",
    coat: 'Fawn — paired litter mates',
    breed: 'BoerBoel',
    puppyId: 'EB006',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Tasha',
    images: ['/images/tasha-1.jpg', '/images/tasha-1.jpg', '/images/tasha-1.jpg'],
    sex: 'Female',
    age: '10 weeks',
    status: 'Available',
    price: 850,
    description: "A spirited, bold pup with endless energy and a warm, loving soul. Tasha loves being outdoors, exploring with her people, and curling up close once the adventure is done. Family-raised and beautifully socialized.",
    coat: 'Fawn — Boerboel standard',
    breed: 'BoerBoel',
    puppyId: 'EB007',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Sheba',
    images: ['/images/sheba-1.jpg', '/images/sheba-1.jpg', '/images/sheba-1.jpg'],
    sex: 'Female',
    age: '10 weeks',
    status: 'Sold',
    price: 850,
    description: "A charismatic, fearless pup with a naturally affectionate and warm personality. Sheba loves a good wrestle with her siblings, was raised in the middle of family life, and brings the steady Boerboel confidence wherever she goes.",
    coat: 'Fawn with mask',
    breed: 'BoerBoel',
    puppyId: 'EB008',
    registration: 'AKC & SABBS',
    healthStatus: 'DNA and Health checked'
  }
];

export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.images[0],
  price: p.price
}));

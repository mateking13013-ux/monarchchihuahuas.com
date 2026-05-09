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

const img = (file: string) => [`/images/${file}`, `/images/${file}`, `/images/${file}`];

export const puppies: Puppy[] = [
  {
    name: 'Charles', images: img('charles-1.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A regal little gentleman with a flowing coat and a sweet, easygoing temperament. Charles loves a soft lap, gentle play, and being right where his people are. Raised in a family environment, fully vaccinated and dewormed, ready for his forever palace.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP101', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Cristel', images: img('cristel-1.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 750,
    description: "A delicate, affectionate princess with bright eyes and a heart full of love. Cristel is gentle, social, and adores cuddle time after a little burst of play. From champion lines, current on shots and deworming, beautifully socialized.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP102', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Finn', images: img('finn-1.png'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A playful, curious little prince who greets every moment with a wagging tail. Finn loves soft toys, sibling chase games, and a gentle nap on the couch. Family-raised with thorough socialization, vaccinated and dewormed.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP103', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Hazel', images: img('hazel-1.png'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A warm, mellow soul with a teddy-bear face and a melt-in-your-arms personality. Hazel is the calm one of the litter — perfect for a family that wants a devoted, easygoing Shih Tzu companion.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP104', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Maxwel', images: img('maxwel-1.png'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A confident little charmer with a playful spirit and a deeply loving heart. Maxwel loves attention, adventure, and a soft cuddle when the day winds down. Raised with care, fully vaccinated and dewormed.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP105', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Nella', images: img('nella-1.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 750,
    description: "A sweet, dainty princess with the softest expression and a gentle, devoted nature. Nella is happy on a lap, happy at your feet — she just wants to be near her people. Champion lines, vaccinated and dewormed.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP106', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Tony', images: img('tony-1.png'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A bold, joyful little prince bursting with character. Tony plays hard, loves harder, and turns straight into a snuggle bug at rest. Family-raised, beautifully socialized, fully up to date on shots and deworming.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP107', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Ziggy', images: img('ziggy-1.png'), sex: 'Male', age: '10 weeks', status: 'Available', price: 750,
    description: "A spirited, curious pup with a playful streak and an enormous heart. Ziggy is full of personality and ready to bond with the family that becomes his world. Vaccinated, dewormed, and beautifully family-raised.",
    coat: 'Silky long Shih Tzu coat', breed: 'Shih Tzu', puppyId: 'CP108', registration: 'AKC', healthStatus: 'DNA and Health checked'
  }
];

export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.images[0],
  price: p.price
}));

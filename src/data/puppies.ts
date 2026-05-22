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
    name: 'Bella', images: img('bella.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 1200,
    description: "A dainty little princess with the sweetest apple-domed head and the biggest expressive eyes. Bella is gentle, affectionate, and adores being carried close to her people. Raised in our home, fully vaccinated and dewormed, ready for her forever throne.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC101', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Bruno', images: img('bruno.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 1200,
    description: "A bold little prince with a confident strut and a huge heart in a tiny body. Bruno is brave, playful, and turns into a complete lap warmer at rest. Family-raised, beautifully socialized, fully up to date on shots and deworming.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC102', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Chico', images: img('chico.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 1200,
    description: "A spunky pocket-sized charmer with a wagging tail and an even bigger personality. Chico loves play sessions, soft chew toys, and being right at his person's heels. From champion lines, vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC103', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Chiquita', images: img('chiquita.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 1200,
    description: "A delicate little duchess with sparkling eyes and a heart of pure devotion. Chiquita is gentle, social, and adores cuddle time after a quick zoom around the room. Raised with care, fully vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC104', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Daisy', images: img('daisy.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 1200,
    description: "A sunshine-bright little lady with the softest expression and a gentle, devoted nature. Daisy is happy on a lap, happy at your feet — she just wants to be near her people. Champion lines, vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC105', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Gizmo', images: img('gizmo.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 1200,
    description: "A curious little gentleman with perky ears and a charm that wins every room. Gizmo loves attention, soft toys, and a snug blanket nest. Raised in a family environment, fully vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC106', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Lola', images: img('lola.jpg'), sex: 'Female', age: '8 weeks', status: 'Available', price: 1200,
    description: "A tiny, treasured princess with the brightest eyes and a melt-in-your-arms personality. Lola is calm, affectionate, and just wants to be loved. Beautifully socialized, vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC107', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Luna', images: img('luna.jpg'), sex: 'Female', age: '8 weeks', status: 'Available', price: 1200,
    description: "A moonlit little sweetheart with elegant features and a quiet, loving nature. Luna is the calm one of the litter — perfect for a family that wants a devoted, gentle Chihuahua companion.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC108', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Nacho', images: img('nacho.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 1200,
    description: "A spicy little personality in the tiniest royal package. Nacho is playful, curious, and never far from his people. Fully vaccinated, dewormed, and beautifully family-raised.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC109', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Rosie', images: img('rosie.jpg'), sex: 'Female', age: '10 weeks', status: 'Available', price: 1200,
    description: "A blossom of a girl with the softest coat and a heart full of love. Rosie is gentle, social, and a perfect little shadow for the lucky family she joins. Champion lines, vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC110', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Taco', images: img('taco.jpg'), sex: 'Male', age: '10 weeks', status: 'Available', price: 1200,
    description: "A bold, joyful little prince bursting with character. Taco plays hard, loves harder, and turns straight into a snuggle bug at rest. Family-raised, beautifully socialized, fully up to date on shots and deworming.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC111', registration: 'AKC', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Tinkerbell', images: img('tinkerbell.jpg'), sex: 'Female', age: '8 weeks', status: 'Available', price: 1200,
    description: "A tiny fairy of a girl with a sparkling personality and the most adorable little face. Tinkerbell is gentle, playful, and absolutely treasured. Raised with care, fully vaccinated and dewormed.",
    coat: 'Smooth short Chihuahua coat', breed: 'Chihuahua', puppyId: 'MC112', registration: 'AKC', healthStatus: 'DNA and Health checked'
  }
];

export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.images[0],
  price: p.price
}));

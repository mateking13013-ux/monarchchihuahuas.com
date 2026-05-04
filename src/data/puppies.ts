export interface Puppy {
  name: string;
  images: string[];
  sex: 'Male' | 'Female';
  age: string;
  status: string;
  price: number;
  description: string;
  coat: string;
  breed: string;
  puppyId: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Atlas',
    images: ['/images/atlas-1.jpg', '/images/atlas-2.jpg', '/images/atlas-3.jpg'],
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Atlas is a laid-back, gentle gentleman with a warm, people-loving personality. He adores quiet snuggles just as much as a casual game of fetch. Vet checked, fully vaccinated, and well underway with crate and potty training. Expected adult weight 50–60 lbs.",
    coat: 'Cream and golden, soft wavy low-shedding coat',
    breed: 'F1 Standard Goldendoodle',
    puppyId: 'MD001'
  },
  {
    name: 'Avalanche',
    images: ['/images/avalanche-1.jpg', '/images/avalanche-2.jpg', '/images/avalanche-3.jpg'],
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Avalanche is a stunning little gentleman with a soft, snowy cream coat and a calm, easy confidence. He's playful, cuddly, and already loves people of every age. His wavy, low-shedding, allergy-friendly coat makes him a beautiful fit for almost any home. Expected 12–19 lbs.",
    coat: 'Snowy cream, wavy low-shedding coat',
    breed: 'F1b Mini Goldendoodle',
    puppyId: 'MD002'
  },
  {
    name: 'Bear',
    images: ['/images/bear-1.jpg', '/images/bear-2.jpg', '/images/bear-3.jpg'],
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Bear is an adorable little teddy bear, full of charm and playful energy. His soft curly low-shedding coat makes him impossibly huggable, and his sweet personality wins everyone over. Vet checked, vaccinated, and doing well with crate and potty training. Expected 13–19 lbs.",
    coat: 'Golden curly, low-shedding',
    breed: 'F1b Mini Goldendoodle',
    puppyId: 'MD003'
  },
  {
    name: 'Bumblebee',
    images: ['/images/bumblebee-1.jpg', '/images/bumblebee-2.jpg', '/images/bumblebee-3.jpg'],
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Bumblebee buzzes with personality and charm — rich apricot curls, bright eyes, and a heart that loves chasing toys and cuddling on the sofa. His wavy, low-shedding coat is perfect for families with allergies. He's smart, social, and ready to fit right into your home. Expected 12–18 lbs.",
    coat: 'Rich apricot curls, low-shedding',
    breed: 'F1b Mini Goldendoodle',
    puppyId: 'MD004'
  },
  {
    name: 'Pansy',
    images: ['/images/pansy-1.jpg', '/images/pansy-2.jpg', '/images/pansy-3.jpg'],
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Pansy is cheerful, affectionate, confident, and smart — a lovely little doodle with a sweet streak a mile wide. She loves exploring on her short little legs and curling up in your lap when the day is done. Soft, low-shedding wavy coat. Expected 12–18 lbs.",
    coat: 'Cream wavy, low-shedding',
    breed: 'F1b Mini Goldendoodle',
    puppyId: 'MD005'
  },
  {
    name: 'Nala',
    images: ['/images/nala-1.jpg', '/images/nala-2.jpg', '/images/nala-3.jpg'],
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Nala is beautifully balanced — playful, affectionate, and right at home with people. She loves a tug toy and outdoor adventures, then turns straight into a snuggler the moment she comes inside. Her soft, low-shedding coat is allergy-friendly and easy to live with. Expected 35–60 lbs.",
    coat: 'Cream and apricot, soft low-shedding',
    breed: 'F1 Standard Goldendoodle',
    puppyId: 'MD006'
  },
  {
    name: 'Willow',
    images: ['/images/willow-1.jpg', '/images/willow-2.jpg', '/images/willow-3.jpg'],
    sex: 'Female',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: "Willow is a beautiful, affectionate girl with a calm, nurturing personality — she gravitates straight to children and the gentlest play. Her soft fluffy low-shedding coat is built for cuddles, and her steady temperament suits a family that wants a graceful, gentle companion. Expected 55–65 lbs.",
    coat: 'Black and white, soft fluffy low-shedding coat',
    breed: 'F1 Standard Sheepadoodle',
    puppyId: 'MD007'
  },
  {
    name: 'Luna',
    images: ['/images/luna-1.jpg', '/images/luna-2.jpg', '/images/luna-3.jpg'],
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Luna is a sweet, graceful girl with a gentle spirit and a bright, intelligent mind. She loves a good game of fetch but is just as content snuggling beside you on the couch in the evening. Her soft, wavy, low-shedding coat is allergy-friendly. Expected 55–65 lbs.",
    coat: 'Black and white, soft wavy low-shedding coat',
    breed: 'F1 Standard Sheepadoodle',
    puppyId: 'MD008'
  },
  {
    name: 'Jasper',
    images: ['/images/jasper-1.jpg', '/images/jasper-2.jpg', '/images/jasper-3.jpg'],
    sex: 'Male',
    age: '10 Weeks',
    status: 'Available',
    price: 750,
    description: "Jasper is a bright, playful boy who thrives on interaction and outdoor fun — he's the kind of pup that turns a backyard into an adventure. He's curious, easy to train, and is already picking up basic routines quickly. Thick hypoallergenic-style coat. Expected 60–70 lbs.",
    coat: 'Black and white, thick hypoallergenic-style coat',
    breed: 'F1 Standard Sheepadoodle',
    puppyId: 'MD009'
  },
  {
    name: 'Rocky',
    images: ['/images/rocky-1.jpg', '/images/rocky-2.jpg', '/images/rocky-3.jpg'],
    sex: 'Male',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Rocky is a happy-go-lucky boy with a brave, curious spirit. He loves running, toys, and people of all kinds — and his fluffy low-shedding coat means he's just as comfortable on the rug as he is on a hike. He'll fit right into an active, loving home. Expected 28–35 lbs.",
    coat: 'Black and white, fluffy low-shedding',
    breed: 'F1 Mini Sheepadoodle',
    puppyId: 'MD010'
  },
  {
    name: 'Hazel',
    images: ['/images/hazel-1.jpg', '/images/hazel-2.jpg', '/images/hazel-3.jpg'],
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Hazel is a bright, fun-loving girl with a lights-up-the-room personality. She's smart, curious, and adores human interaction — already responding to her name and learning early manners. Her soft fluffy low-shedding coat is wonderfully allergy-friendly. Expected 25–32 lbs.",
    coat: 'Black and white, soft fluffy low-shedding',
    breed: 'F1 Mini Sheepadoodle',
    puppyId: 'MD011'
  },
  {
    name: 'Bella',
    images: ['/images/bella-1.jpg', '/images/bella-2.jpg', '/images/bella-3.jpg'],
    sex: 'Female',
    age: '8 Weeks',
    status: 'Available',
    price: 750,
    description: "Bella is a bright, affectionate, confident little lady — she loves attention and is already learning her basic commands. Her soft fluffy low-shedding coat makes her a wonderful fit for families with allergies, and her gentle spirit makes her a beautiful family companion. Expected 25–35 lbs.",
    coat: 'Black and white, soft fluffy low-shedding',
    breed: 'F1 Mini Sheepadoodle',
    puppyId: 'MD012'
  }
];

export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.images[0],
  price: p.price
}));

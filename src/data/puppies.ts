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

const img = (name: string) => [`/images/${name}-1.jpg`, `/images/${name}-1.jpg`, `/images/${name}-1.jpg`];

// 8 images we have locally; the other 25 puppies cycle through them as fallback
const FB = ['atlas','brutus','valkyrie','magnum','martha','bruiser-duma','tasha','sheba'];
const fb = (i: number) => img(FB[i % FB.length]);

export const puppies: Puppy[] = [
  {
    name: 'Serah', images: img('serah'), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "With the stocky frame of a true Boerboel and a heart full of devotion, this little one is searching for their person. Sired from champion lines and current on vaccinations and deworming, confident and calm, prepared to grow up by your side.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB101', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Mandee', images: fb(4), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "Don't let the puppy eyes fool you — beneath that soft coat is the powerful build and confident nature of a future guardian. From champion bloodlines and fully vetted, this deeply loyal companion is ready to bond with their new family.",
    coat: 'Fawn — soft Boerboel coat', breed: 'BoerBoel', puppyId: 'EB102', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Rena', images: fb(6), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "Deeply loyal from the moment they lock eyes with you, this stunning puppy embodies the Boerboel spirit. With the powerful build expected from champion bloodlines, and coming to you vaccinated and dewormed for a healthy, happy start.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB103', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Legatha', images: fb(7), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "Experience the perfect balance of power and love. This puppy, from proven champion bloodlines, showcases the breed's signature confident nature and robust build. Vaccinated and dewormed, ready to begin a lifelong duty as your faithful companion.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB104', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Sabrina', images: fb(2), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "Arriving with a powerful build and a naturally confident disposition, this puppy is the real deal. Born from champion lines and given the best start with vaccinations and deworming, deep loyalty is just waiting to be pledged to you.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB105', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Atlas', images: img('atlas'), sex: 'Male', age: '5 weeks', status: 'Available', price: 500,
    description: "Massive and majestic — this fawn male Boerboel pup carries the blocky head, wide chest, and calm, steady temperament of true African Mastiff royalty. Health-tested champion parents, vaccinated and dewormed on schedule, and already showing the gentle giant temperament Boerboel families love.",
    coat: 'Fawn — classic Boerboel coat', breed: 'BoerBoel', puppyId: 'EB001', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Brutus', images: img('brutus'), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "Powerful build, confident nature, and deeply loyal from the very first introduction. Brutus comes from proven champion bloodlines and arrives fully vaccinated and dewormed — a forever guardian in the making, ready to bond with the family that becomes his world.",
    coat: 'Fawn with dark mask', breed: 'BoerBoel', puppyId: 'EB002', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Valkyrie', images: img('valkyrie'), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "A bold and confident pup with a playful personality and an enormous heart. Valkyrie has been raised inside a family environment with thorough socialization — a perfect fit for an active home that wants a confident, devoted Boerboel companion.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB003', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Magnum', images: img('magnum'), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A curious, energetic pup absolutely bursting with personality and charm. Magnum loves an adventure with his siblings just as much as he loves a quiet evening of cuddles, making him a versatile match for an active, loving home.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB004', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Martha', images: img('martha'), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "A gentle giant with a fearless yet loving nature. Martha is action-loving when there's an adventure to chase but turns straight into a calm, devoted cuddle-companion when the day winds down. Well-socialized and family-raised since day one.",
    coat: 'Fawn — soft Boerboel coat', breed: 'BoerBoel', puppyId: 'EB005', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Bruiser & Duma', images: img('bruiser-duma'), sex: 'Males', age: '10 weeks', status: 'Available', price: 1600,
    description: "A bonded brother pair available together for a single forever home — confident, big-hearted boys who balance adventure with affection perfectly. Raised side-by-side, they'll thrive in a family that wants two devoted Boerboel guardians at once.",
    coat: 'Fawn — paired litter mates', breed: 'BoerBoel', puppyId: 'EB006', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Tasha', images: img('tasha'), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "A spirited, bold pup with endless energy and a warm, loving soul. Tasha loves being outdoors, exploring with her people, and curling up close once the adventure is done. Family-raised and beautifully socialized.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB007', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Sheba', images: img('sheba'), sex: 'Female', age: '10 weeks', status: 'Sold', price: 850,
    description: "A charismatic, fearless pup with a naturally affectionate and warm personality. Sheba loves a good wrestle with her siblings, was raised in the middle of family life, and brings the steady Boerboel confidence wherever she goes.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB008', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Kong', images: fb(0), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A lively, confident pup who approaches every day with curiosity and enthusiasm. Kong is happy playing hard one moment and resting beside his family the next — a balanced, devoted Boerboel ready for a confident home.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB201', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Havoc', images: fb(1), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A playful, adventurous pup with a heart full of love and loyalty. Havoc thrives on action and sibling play, then settles right into a calm cuddle when the day winds down — exactly the Boerboel temperament families fall for.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB202', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Vito', images: fb(3), sex: 'Male', age: '10 weeks', status: 'Sold', price: 850,
    description: "A bold, outgoing pup with a joyful and loving temperament. Vito loves exploration, play, and any action-oriented activity that keeps a Boerboel happy and engaged. Family-raised with thorough socialization from day one.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB203', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Diesel', images: fb(5), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A fun-loving, confident pup with an adventurous streak and a gentle heart. Diesel enjoys wrestling, exploring, and cuddling in equal measure — a true balanced Boerboel companion ready for his forever family.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB204', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Benson', images: fb(0), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A strong, playful pup with a big personality and an even bigger heart. Benson loves an adventure and a game with his siblings, then settles into a warm family environment with the steady, loyal Boerboel temperament you'd hope for.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB205', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Kodak', images: fb(1), sex: 'Male', age: '5 weeks', status: 'Available', price: 500,
    description: "A fearless yet affectionate pup who loves life and the people around them. Kodak thrives on exploration and play, raised in a family environment with a confident, curious Boerboel spirit from his very first weeks.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB206', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Bronx', images: fb(3), sex: 'Male', age: '10 weeks', status: 'Sold', price: 850,
    description: "A confident, curious pup full of energy, love, and personality. Bronx is action-loving when there's something to chase but happily content in cuddle mode at the end of the day — beautifully family-raised.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB207', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Lobo', images: fb(5), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A bold, joyful pup with a natural love for adventure and affection. Lobo is active and playful when invited, peaceful and loving when it's downtime — well-socialized in a thoughtful family environment.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB208', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Dutch', images: fb(0), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A playful, big-hearted pup who loves to explore and be involved in everything. Dutch balances energy with deep affection, suiting an active household that wants a present, devoted Boerboel companion.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB209', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Hilda', images: fb(2), sex: 'Female', age: '5 weeks', status: 'Available', price: 500,
    description: "A spirited, loving pup with a confident and outgoing personality. Hilda already loves sibling play, the outdoors, and a soft cuddle — a perfect Boerboel start with all the calm power and warmth the breed is known for.",
    coat: 'Fawn — soft Boerboel coat', breed: 'BoerBoel', puppyId: 'EB210', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Zara', images: fb(4), sex: 'Female', age: '11 weeks', status: 'Available', price: 850,
    description: "A warm, adventurous pup with a bold personality and a deeply affectionate nature. Zara loves being active and being close to her family — well-socialized from day one in a thoughtful, hands-on home.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB211', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Titan', images: fb(1), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A confident, playful pup who brings energy and love wherever he goes. Titan loves exploring, wrestling, and snuggling in equal measure — a balanced, devoted Boerboel companion in the making.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB212', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Xena', images: fb(6), sex: 'Female', age: '11 weeks', status: 'Sold', price: 850,
    description: "A big-hearted, fearless pup with a fun-loving and affectionate temperament. Xena loves action, sibling interaction, and the closeness of her people — every inch a true Boerboel companion.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB213', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Bozo', images: fb(3), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A bold, loving pup with an adventurous spirit and a gentle, devoted heart. Bozo thrives in an active environment and loves deeply — exactly the kind of confident Boerboel a family looks for.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB214', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Jack', images: fb(5), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A curious, strong-willed pup with a playful heart and natural confidence. Jack loves exploring every corner, sibling play, and a good cuddle session — beautifully socialized and ready for his family.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB215', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Nala', images: fb(2), sex: 'Female', age: '10 weeks', status: 'Available', price: 850,
    description: "A lively, affectionate pup who thrives on attention and adventure. Nala loves investigating new things and snuggling close once she's done — well-socialized and beautifully family-raised.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB216', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Nova', images: fb(4), sex: 'Female', age: '11 weeks', status: 'Available', price: 850,
    description: "A bold, energetic pup with a larger-than-life personality and a tender heart. Nova loves rough play, outdoor adventure, and a warm family evening — a beautifully balanced young Boerboel.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB217', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Khan', images: fb(1), sex: 'Male', age: '10 weeks', status: 'Available', price: 850,
    description: "A confident, warm-natured pup who loves being involved in every moment. Khan is passionate about play and bonding alike — a thoughtful, family-raised Boerboel ready to give devotion to the home that earns it.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB218', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Hulk', images: fb(0), sex: 'Male', age: '11 weeks', status: 'Available', price: 850,
    description: "A strong, spirited pup with a joyful outlook and a deeply loving nature. Hulk loves to explore, plays hard, and rests close to family — beautifully balanced and showing classic Boerboel temperament early.",
    coat: 'Fawn — Boerboel standard', breed: 'BoerBoel', puppyId: 'EB219', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  },
  {
    name: 'Cyndi', images: fb(7), sex: 'Female', age: '10 weeks', status: 'Sold', price: 850,
    description: "A fearless, fun-loving pup bursting with personality and genuine affection. Cyndi loves sibling play, exploration, and a deep cuddle — every bit the warm, devoted Boerboel companion her family was looking for.",
    coat: 'Fawn with mask', breed: 'BoerBoel', puppyId: 'EB220', registration: 'AKC & SABBS', healthStatus: 'DNA and Health checked'
  }
];

export const featuredPuppies = puppies.slice(0, 5).map(p => ({
  name: p.name,
  image: p.images[0],
  price: p.price
}));

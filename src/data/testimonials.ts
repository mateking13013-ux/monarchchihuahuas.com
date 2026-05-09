export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  puppyName: string;
  text: string;
}

export interface TestimonialPreview {
  initials: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  timeAgo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'The Whitman Family',
    location: 'Austin, TX',
    rating: 5,
    puppyName: 'Pearl',
    text: "Pearl is the sweetest little Shih Tzu we could have ever asked for. From her tiny topknot to her endless cuddles, she has completely won our hearts. Crown Palace raised her so beautifully — she came home confident, social, and already crate-trained. The communication leading up to pickup was lovely; we got weekly photos and weight updates. Anyone considering a Shih Tzu should look here first."
  },
  {
    name: 'Marisol Hernandez',
    location: 'San Diego, CA',
    rating: 5,
    puppyName: 'Mochi',
    text: "Mochi is the joy of our home. She's tiny, fluffy, and has the funniest little personality — bossy in the best way. Crown Palace made the whole adoption process feel personal; they took the time to ask about our lifestyle and matched her temperament to our family. She came with a thoughtful starter kit, full vet records, and a written health guarantee. We feel so lucky."
  },
  {
    name: 'Jonathan & Priya Singh',
    location: 'Atlanta, GA',
    rating: 5,
    puppyName: 'Dumpling',
    text: "We've had Dumpling for two months and she has been an absolute dream. Healthy, gentle, and so smart — she picked up sit and her name within the first week. The Crown Palace family clearly puts in real work raising these little ones. Every text we sent was answered, and the post-adoption support has continued without us even having to ask. A truly ethical breeder."
  },
  {
    name: 'Helena Brooks',
    location: 'Charlotte, NC',
    rating: 5,
    puppyName: 'Biscuit',
    text: "Biscuit is the most affectionate little Shih Tzu I have ever met — and I grew up with the breed. He's calm, confident, and adores being on a lap. Crown Palace's home-raised approach really shines through; he wasn't startled by anything when we brought him home. The vet said he was in perfect condition. Five stars and then some."
  },
  {
    name: 'The Patel Family',
    location: 'Phoenix, AZ',
    rating: 5,
    puppyName: 'Kiwi',
    text: "Our kids fell in love with Kiwi the moment we met him. He's playful but gentle, exactly the temperament we were hoping for in a family Shih Tzu. Crown Palace was patient with all of our first-time-puppy questions and never made us feel rushed. We received his pedigree, AKC papers, and a thorough care binder. He's perfect."
  },
  {
    name: 'Rebecca Chen',
    location: 'Seattle, WA',
    rating: 5,
    puppyName: 'Mr. Bean',
    text: "Mr. Bean is the funniest little dog. Tiny body, huge personality. He's healthy, beautifully coated, and has the classic Shih Tzu underbite that makes him irresistible. Crown Palace clearly raises these puppies in a real home — he came to me already used to people, vacuums, and other dogs. The transition was seamless and I couldn't be more grateful."
  },
  {
    name: "Damon & Sofia Greene",
    location: 'Denver, CO',
    rating: 5,
    puppyName: 'Ruby',
    text: "Ruby has been pure sunshine since the day she arrived. She's a sweet imperial Shih Tzu with the softest expression — strangers stop us on walks just to ask about her. Crown Palace's process is honest, organized, and genuinely warm. They sent us home with everything we needed and have checked in twice since pickup. We will absolutely be coming back for puppy number two."
  },
  {
    name: 'Aaliyah Foster',
    location: 'Brooklyn, NY',
    rating: 5,
    puppyName: 'Toulouse',
    text: "Toulouse is a perfect little gentleman. He's calm in the apartment, brave on walks, and an absolute snuggler at night. As a city Shih Tzu owner, I really appreciated how well-socialized he was — Crown Palace exposes them to noise, handling, and travel before they leave, and it shows. Highly recommend to anyone looking for a healthy, well-tempered Shih Tzu."
  },
  {
    name: 'The Johansson Family',
    location: 'Minneapolis, MN',
    rating: 5,
    puppyName: 'Olive',
    text: "We waited almost a year for the right Shih Tzu, and Olive was worth every minute. She's gorgeous, gentle, and beautifully bred — her parents' temperaments clearly carried through. Crown Palace was transparent about every step, never pushy, and gave us a full health guarantee in writing. The level of care here is something you can feel."
  },
  {
    name: 'Yusuf & Lina Ahmed',
    location: 'Dallas, TX',
    rating: 5,
    puppyName: 'Saffron',
    text: "Saffron has filled our home with so much warmth. She is the textbook Shih Tzu — affectionate, dignified, and a little bit dramatic in the most charming way. Crown Palace's communication was top-tier; we knew exactly what to expect on pickup day. She came up to date on shots, dewormed, and microchipped. Truly a five-star experience."
  },
  {
    name: 'Margot Whitfield',
    location: 'Nashville, TN',
    rating: 5,
    puppyName: 'Pippin',
    text: "Pippin is everything I hoped for in a Shih Tzu and more. He's bright, healthy, and has the most beautiful long coat. Grooming has been easy because Crown Palace got him used to handling early. They genuinely care about where their puppies end up — the application process was thorough but never invasive. I'll recommend them to anyone who asks."
  },
  {
    name: 'The Romero Family',
    location: 'Miami, FL',
    rating: 5,
    puppyName: 'Cookie',
    text: "Cookie is our first Shih Tzu and she has set the bar impossibly high. She's loving, low-maintenance, and gets along with our cat and toddler beautifully. Crown Palace gave us so much guidance about feeding, grooming, and crate training that we honestly felt over-prepared. The aftercare support has been the cherry on top. Thank you for raising her with so much love."
  }
];

export const testimonialPreviews: TestimonialPreview[] = testimonials.map(t => ({
  initials: t.name.split(' ').filter(w => w[0] && /[A-Z]/.test(w[0])).map(w => w[0]).join('').slice(0, 2) || t.name.slice(0, 2).toUpperCase(),
  name: t.name,
  rating: t.rating,
  text: t.text,
  location: t.location,
  timeAgo: 'Recently'
}));

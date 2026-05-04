export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
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
    name: 'Mira and Family',
    location: 'Austin, TX',
    rating: 5,
    image: '/images/testi-1.jpg',
    puppyName: 'Oliver',
    text: "Our doodle pup, Oliver, is absolutely everything we hoped for and more. From the moment he stepped paw into our home he has been smart, friendly, and confident — he's already become the heart of our household. Throughout the entire adoption process the Monarch Doodles team felt more like family than a breeder, walking us through every step with patience, honesty, and warmth. We always felt informed, never rushed, and the support didn't stop the day we drove home — they've stayed in touch ever since. We can't recommend Monarch Doodles enough to any family looking for a healthy, well-loved doodle pup."
  },
  {
    name: 'Michel',
    location: 'Nashville, TN',
    rating: 5,
    image: '/images/testi-2.jpg',
    puppyName: 'Oliver',
    text: "My pup Oliver is smart, affectionate, and full of joyful energy — every single day he reminds me how lucky I am to have him in my life. The dedication and care that clearly went into raising him were obvious from our very first meeting; he came home confident, well-socialized, and already knowing the basics of crate and potty routines. The Monarch Doodles family treated this like a partnership and not a transaction, and that has made all the difference. We absolutely could not have asked for a better-matched companion. Thank you for raising puppies the right way."
  },
  {
    name: 'Sophie & Tina',
    location: 'Denver, CO',
    rating: 5,
    image: '/images/testi-3.jpg',
    puppyName: 'Luna',
    text: "As first-time dog owners, we came in with a thousand questions — and Monarch Doodles answered every single one with kindness, patience, and zero pressure. Luna is not only stunningly beautiful but also one of the most loving and gentle pups we have ever met. She fit into our home almost overnight thanks to the head-start she received with early socialization and gentle handling. We've recommended Monarch Doodles to everyone in our circle who's even thinking about a doodle. They are the real deal — ethical, transparent, and clearly devoted to these dogs."
  },
  {
    name: 'Amanda Jones',
    location: 'Charlotte, NC',
    rating: 5,
    image: '/images/testi-4.jpg',
    puppyName: 'Cooper',
    text: "I fell in love with Cooper the very second I met him, and that feeling has only grown stronger every day since. He arrived healthy, playful, and so well-socialized that bringing him into our home felt completely seamless. It's incredibly clear that he came from a place where puppies aren't just bred — they are truly cherished, hand-raised, and given the kind of foundation that lasts a lifetime. The follow-up support has been outstanding too. If you're searching for a quality doodle from people who genuinely love this breed, you've found them."
  },
  {
    name: 'Scott Lewis & Fidel Turner',
    location: 'Scottsdale, AZ',
    rating: 5,
    image: '/images/testi-5.jpg',
    puppyName: 'Rosie',
    text: "Rosie is, hands-down, the sweetest pup we could have ever asked for — cuddly, joyful, endlessly happy, and somehow she brings a smile to absolutely everyone she meets. From our very first inquiry to the day we brought her home, the Monarch Doodles team went above and beyond, sending us photos, weight updates, and answering our many texts. We never once felt like just a customer. Thank you for helping us find our perfect match — we'll be lifelong fans of this little family-run program."
  },
  {
    name: 'Fany & Family',
    location: 'Portland, OR',
    rating: 5,
    image: '/images/testi-6.jpg',
    puppyName: 'Cooper',
    text: "We fell in love with Cooper the moment we met him, and bringing him home has only deepened that love every single day. He's healthy, playful, beautifully socialized, and clearly came from a home where puppies are truly cherished from day one. Our kids adore him, and he's already learning his basic commands at lightning speed. Monarch Doodles' attention to temperament and early development is something you really can feel — it isn't just a marketing claim. We'll absolutely be coming back when it's time for puppy number two."
  },
  {
    name: 'Rachel Thompson & Olivia Scott',
    location: 'Atlanta, GA',
    rating: 5,
    image: '/images/testi-7.jpg',
    puppyName: 'Rosie',
    text: "Rosie is the absolute sweetest pup we could have asked for — cuddly, happy, and somehow she manages to brighten every single room she walks into. From the first inquiry to the day we drove her home, Monarch Doodles handled everything with total professionalism and warmth. They were patient with our questions, transparent about every detail, and genuinely invested in matching her to the right family. The starter kit, vet records, and ongoing check-ins have been such a thoughtful touch. We are forever grateful."
  },
  {
    name: "Jason's Family",
    location: 'San Diego, CA',
    rating: 5,
    image: '/images/testi-8.jpg',
    puppyName: 'Milo',
    text: "Milo has been such an incredible blessing to our family. He settled in almost immediately, loves playing endless games with our kids, and has already learned a handful of basic commands at his own pace. The professionalism and kindness we experienced throughout the entire process truly stood out — we felt informed, supported, and never pressured at any stage. The Monarch Doodles team clearly treats every puppy like one of their own, and you can see that in every detail. Thank you for trusting us with our perfect boy."
  },
  {
    name: 'Grace Parker & Hannah Mitchell',
    location: 'Dallas, TX',
    rating: 5,
    image: '/images/testi-9.jpg',
    puppyName: 'Zoey',
    text: "Zoey has the most loving personality — she's playful and silly during the day, then turns into the world's most dedicated snuggler at night. The adoption process with Monarch Doodles was smooth, transparent, and refreshingly honest from start to finish. We received clear updates, well-organized paperwork, and a starter kit that helped her transition easily into our home. We couldn't be happier with our experience and we recommend them to every doodle-curious friend we have."
  },
  {
    name: 'Joseph Nu',
    location: 'Chicago, IL',
    rating: 5,
    image: '/images/testi-10.jpg',
    puppyName: 'Bailey',
    text: "Bailey is the perfect addition to our home in every possible way. He's healthy, happy, and so incredibly affectionate that it's hard to imagine our family without him. We're so grateful for the care, honesty, and clear dedication that went into raising him during those important first weeks of his life. Monarch Doodles communicated with us regularly, sent thoughtful updates, and always made us feel like part of his story. They've raised a wonderful little soul, and we're proud to be his forever family."
  },
  {
    name: 'Natalie Greene & Daniel Carter',
    location: 'Miami, FL',
    rating: 5,
    image: '/images/testi-11.jpg',
    puppyName: 'Charlie',
    text: "Bringing Charlie home has been one of the greatest joys of our entire year. He's playful, healthy, beautifully tempered, and already feels like he's been part of our family forever. The whole experience with Monarch Doodles was seamless and filled with the kind of genuine care that's nearly impossible to find these days. They patiently answered every question, sent regular photo updates, and truly seemed as invested in our happiness as we were. Charlie is proof of what ethical, family-based breeding can look like."
  },
  {
    name: 'Johns and Kids',
    location: 'Seattle, WA',
    rating: 5,
    image: '/images/testi-12.jpg',
    puppyName: 'Bella',
    text: "From the very first phone call to the day we picked Bella up, we felt completely supported, well-informed, and never once rushed into a decision. She's gentle, fun-loving, and so affectionate — exactly the kind of family-friendly companion we hoped for. Our kids adore her, and she has settled into our routine beautifully. Monarch Doodles' transparency, kindness, and follow-up support have been outstanding throughout. They are everything you'd hope a small family breeder would be."
  },
  {
    name: 'Ethan Reynolds & Sophia Clark',
    location: 'Phoenix, AZ',
    rating: 5,
    image: '/images/testi-13.jpg',
    puppyName: 'Maggie',
    text: "Maggie is the most wonderful pup we could have hoped for. She adjusted to our household within days, and her sweet, snuggly personality immediately won everyone over — including our cat, who tolerates her surprisingly well. We are deeply grateful for such an ethical, loving, and clearly conscientious breeder. Monarch Doodles went above and beyond to make this experience smooth, informative, and even joyful. We are committed Monarch Doodles families for life."
  },
  {
    name: 'Joseph Nu',
    location: 'Houston, TX',
    rating: 5,
    image: '/images/testi-14.jpg',
    puppyName: 'Teddy',
    text: "Our doodle, Teddy, is a wonderful bundle of love and energy who has completely changed the rhythm of our home for the better. The whole adoption process was easy and surprisingly enjoyable, and we genuinely appreciated the thoughtful updates we received along the way. You can absolutely tell these puppies are raised with kindness, structure, and a tremendous amount of hands-on attention from a real family. We've already recommended Monarch Doodles to two other friends. Thank you for raising such a remarkable little guy."
  },
  {
    name: 'Benjamin Ross & Lily Foster',
    location: 'Boston, MA',
    rating: 5,
    image: '/images/testi-15.jpg',
    puppyName: 'CoCo',
    text: "CoCo has brought so much happiness, laughter, and warmth into our home in just a few short weeks. She's playful, deeply loving, and beautifully healthy — and her temperament is exactly what we were dreaming of. We could not have asked for a better experience from start to finish. The Monarch Doodles team made every step feel personal, organized, and genuinely caring. The check-ins after pickup were a lovely surprise we didn't expect. Highly, highly recommended for any future doodle family."
  },
  {
    name: "Kingley's Family",
    location: 'Minneapolis, MN',
    rating: 5,
    image: '/images/testi-16.jpg',
    puppyName: 'Oliver',
    text: "We are absolutely beyond thrilled with Oliver. He's bright, affectionate, and has the kind of personality that makes friends with every person, dog, and even neighborhood squirrel he meets. The thoughtful support we received during the adoption process made everything feel stress-free, even though we'd been nervous beforehand. Monarch Doodles took the time to truly get to know us and matched us with the perfect pup. He's the best decision we've made all year — possibly all decade."
  },
  {
    name: 'Hannah Cooper & Matthew Brooks',
    location: 'Raleigh, NC',
    rating: 5,
    image: '/images/testi-17.jpg',
    puppyName: 'Luna',
    text: "Our pup Luna is such a sweetheart it nearly melts our hearts every morning. She's healthy, energetic, and gets along incredibly well with our older dog and our visiting nieces. We could not be happier with the entire experience that Monarch Doodles offered us. They were responsive, transparent, ethical, and clearly invested in their puppies long after they leave the home. The lifetime support has already come in handy more than once. They're a five-star breeder, full stop."
  },
  {
    name: 'Jefferson',
    location: 'Columbus, OH',
    rating: 5,
    image: '/images/testi-18.jpg',
    puppyName: 'Max',
    text: "From the very first video call to the day we brought Max home, every single detail was handled with remarkable professionalism and warmth. Max is playful, cuddly, and has already managed to steal every heart in this house — including the more skeptical ones. His health was perfect on arrival, his temperament has been steady from day one, and he is clearly the product of careful, loving breeding. Monarch Doodles is, without exaggeration, the best breeding program we've encountered. We're already daydreaming about a sibling for him."
  },
  {
    name: 'Evans and Kids',
    location: 'Tampa, FL',
    rating: 5,
    image: '/images/testi-19.jpg',
    puppyName: 'Bruno',
    text: "Bruno is the perfect addition to our home — smart, deeply affectionate, and clearly raised with so much love and individual attention from his very first weeks. The kids are obsessed with him and he's been remarkably gentle with them in return, even during play. The entire process with Monarch Doodles was easy, transparent, and full of warmth. We highly recommend them to anyone considering a doodle puppy and can't imagine going through this experience with any other breeder."
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

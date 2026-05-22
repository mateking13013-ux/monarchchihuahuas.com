export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Is a Chihuahua a good breed?',
    answer: 'Chihuahuas are loyal, spirited, and devoted companions known for forming a fierce bond with their person. Despite their tiny size, they have huge personalities and make excellent family companions when properly socialized.'
  },
  {
    question: 'Is a Chihuahua good for beginners?',
    answer: 'Yes, Chihuahuas can be great for first-time dog owners. They are intelligent, portable, and adapt easily to apartment living. They respond beautifully to gentle, consistent training and form deep bonds with their families.'
  },
  {
    question: 'Do Chihuahuas make good family pets?',
    answer: 'Chihuahuas make wonderful family pets in the right home. They thrive in households with older children who can handle them gently, and they form devoted bonds with all members of the family.'
  },
  {
    question: 'How much exercise does a Chihuahua need?',
    answer: 'Chihuahuas need around 30 minutes of exercise per day — a short walk plus indoor play is usually plenty. They love interactive games, puzzle toys, and following their person from room to room.'
  },
  {
    question: 'Are Chihuahuas easy to train?',
    answer: 'Chihuahuas are very intelligent and eager to please, but they can be a little stubborn. They do best with positive reinforcement, patience, and short, consistent training sessions. Early socialization is key to a confident, well-mannered adult.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Food', cost: '$30 – $60' },
  { item: 'Treats', cost: '$10 – $20' },
  { item: 'Veterinary Care', cost: '$20 – $50' },
  { item: 'Pet Insurance', cost: '$30 – $60' },
  { item: 'Grooming', cost: '$20 – $40' },
  { item: 'Training Classes', cost: '$50 – $100' },
  { item: 'Toys', cost: '$10 – $20' },
  { item: 'Supplies (bed, leash, etc.)', cost: '$10 – $15' },
  { item: 'Miscellaneous', cost: '$10 – $20' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Food', text: 'Chihuahuas eat very little — a small bag of quality kibble lasts a long time.' },
  { label: 'Veterinary Care', text: 'This includes routine check-ups, vaccinations, and preventative care.' },
  { label: 'Pet Insurance', text: 'Costs can vary based on coverage and provider.' },
  { label: 'Training Classes', text: 'Group classes may be less expensive than private sessions.' },
  { label: 'Grooming', text: 'Smooth-coat Chihuahuas need only weekly brushing and occasional baths.' }
];

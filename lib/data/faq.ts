export type FaqItem = { question: string; answer: string };

export type FaqGroup = { title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Booking",
    items: [
      { question: "How do I enquire about a retreat?", answer: "Use the enquiry form, message us on WhatsApp, or call the centre. We confirm dates, pricing, and availability with you personally before anything is committed." },
      { question: "Is online payment available?", answer: "Not yet. Every booking is confirmed in conversation first, and payment is arranged directly with the centre. The enquiry flow is built so online payment can be added later." },
      { question: "Can I change or cancel my dates?", answer: "Ask us as early as you can. Short retreats are usually easy to move; teacher training dates are harder because places are held. We will always tell you the honest position." },
      { question: "Do you offer a personalised programme?", answer: "Yes. Share your dates, budget, and what you are hoping for, and we will build a schedule around it rather than fitting you into a fixed one." },
    ],
  },
  {
    title: "The practice",
    items: [
      { question: "I have never done yoga. Is that a problem?", answer: "No. Most of our retreats are taught for all levels, and beginners are common. If a posture is not right for your body, you will be given something that is." },
      { question: "How physically demanding is a day here?", answer: "There are usually two practice sessions with a long, genuinely restful middle of the day. Everything on the timetable is an invitation — skipping a session is a valid choice, not a failure." },
      { question: "Do you teach in English?", answer: "Yes. All classes, consultations, and courses are taught in English, with Hindi available." },
    ],
  },
  {
    title: "Staying with us",
    items: [
      { question: "Where exactly are you?", answer: "Plot no 30, Nirmal Bag Block C, Pashulok, Rishikesh, Uttarakhand 249204, India — on the quieter side of Rishikesh, away from the busiest ghats." },
      { question: "What is the food like?", answer: "Sattvic vegetarian, cooked fresh, seasonal, and light. Vegan, gluten-free, and Ayurvedically prescribed diets are all catered for — tell us in advance." },
      { question: "Is alcohol allowed?", answer: "Rishikesh is a dry city and the centre is alcohol-free. The same goes for smoking and meat on the premises." },
      { question: "Can I arrive early or stay on?", answer: "Usually yes, subject to availability. Ask when you enquire so we can hold the room." },
    ],
  },
  {
    title: "Getting here",
    items: [
      { question: "What is the nearest airport?", answer: "Dehradun (Jolly Grant, DED) is around 20 km away, about 40 minutes by road. Delhi (DEL) is the main international gateway, roughly 6 hours by car or a short domestic connection." },
      { question: "Can you arrange a pick-up?", answer: "Yes. Send us your flight or train details and we will arrange a driver. Ask before you book a taxi at the airport." },
      { question: "Do I need a visa?", answer: "Most visitors need an Indian visa, and the e-Visa covers tourism for most nationalities. Apply through the official Indian government portal only, and allow time before you travel." },
    ],
  },
];

/** Flattened list for the FAQPage structured data and for shorter FAQ blocks. */
export const allFaqs: FaqItem[] = faqGroups.flatMap((group) => group.items);

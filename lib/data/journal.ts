import { media, site } from "@/lib/data/site";

export type JournalSection = { heading?: string; paragraphs: string[] };

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Practice" | "Ayurveda" | "Rishikesh" | "Preparing";
  date: string;
  readingTime: string;
  image: string;
  sections: JournalSection[];
};

export const journal: JournalPost[] = [
  {
    slug: "when-to-visit-rishikesh",
    title: "When to come to Rishikesh",
    excerpt: "The season you choose changes the retreat more than the retreat you choose. A month-by-month look at heat, monsoon, and the quiet weeks.",
    category: "Rishikesh",
    date: "2025-11-04",
    readingTime: "5 min",
    image: media[2].src,
    sections: [
      {
        paragraphs: [
          "Rishikesh sits at about 370 metres, where the Ganga leaves the Himalaya and enters the plains. That position gives it four distinct seasons in a place many people assume is uniformly hot. The month you arrive shapes how you sleep, how you practise, and how much of the day you spend outdoors.",
        ],
      },
      {
        heading: "October to March — the long good season",
        paragraphs: [
          "Mornings are cold enough for a shawl, days settle around 18-25°C, and the air is clear enough to see the foothills properly. This is when practice feels easiest: you can hold a longer morning session without overheating, and evenings on the ghats are comfortable.",
          "It is also the busiest window. If you want specific dates in December or January, ask early.",
        ],
      },
      {
        heading: "April to June — heat and early mornings",
        paragraphs: [
          "Daytime temperatures climb past 35°C. The retreat day shifts around it: practice moves earlier, the middle of the day becomes genuinely restful, and evening sessions move later. Many people find this rhythm suits them better than they expected.",
          "It is a good window for detox and Ayurvedic work, where rest is part of the treatment rather than a compromise.",
        ],
      },
      {
        heading: "July to September — monsoon",
        paragraphs: [
          "The rain arrives, the river runs high and brown, and the hills turn an improbable green. Fewer people come, which means smaller groups and more individual attention. Bring waterproof shoes and accept that some outdoor plans will move indoors.",
          "Rafting stops during the monsoon, and some hill roads become unreliable, so build slack into travel days.",
        ],
      },
      {
        heading: "So which month?",
        paragraphs: [
          "If you want the classic Rishikesh experience, come between October and March. If you want quiet and a lower price, come in the monsoon. If you are coming primarily for therapy rather than asana, the summer works well.",
          "Tell us what matters most and we will be honest about which weeks suit it.",
        ],
      },
    ],
  },
  {
    slug: "what-to-pack-for-a-yoga-retreat",
    title: "What to actually pack for a yoga retreat",
    excerpt: "Most packing lists are too long. Here is what genuinely matters for a week of practice in the Himalayan foothills.",
    category: "Preparing",
    date: "2025-10-18",
    readingTime: "4 min",
    image: media[5].src,
    sections: [
      {
        paragraphs: [
          "You will wear about four things on repeat. Everything else is weight. This list assumes a week to ten days at the centre, with laundry available midway.",
        ],
      },
      {
        heading: "Clothing",
        paragraphs: [
          "Three sets of practice clothes, loose rather than tight — you will be sitting cross-legged and folding forward far more than in a gym class. One warm layer for early mornings, which are cold from October onward, and one set of clothes that covers shoulders and knees for temple visits and the ghats.",
          "Slip-on shoes matter more than good shoes. You will take them off at every doorway.",
        ],
      },
      {
        heading: "Practical items",
        paragraphs: [
          "A refillable water bottle, a headtorch for the walk back after evening aarti, basic medication you rely on, and a plug adaptor for Indian sockets (Type C and D). Mats, bolsters, and blankets are provided — bring your own mat only if you are attached to it.",
          "Cash in small notes is useful. Cards work in most places in town but not all of them.",
        ],
      },
      {
        heading: "For Ayurvedic treatments",
        paragraphs: [
          "Bring old clothes and an old towel you do not mind staining. Treatment oils are medicated, generous, and permanent on fabric. Skip perfume and heavy cosmetics on treatment days.",
        ],
      },
      {
        heading: "What to leave behind",
        paragraphs: [
          "Alcohol, expectations about how flexible you should be, and a full work laptop if you can manage it. The days are structured around not needing one.",
        ],
      },
    ],
  },
  {
    slug: "reading-your-dosha",
    title: "Before your first Ayurvedic consultation",
    excerpt: "What a dosha assessment actually involves, what the practitioner is looking for, and how to get something useful out of it.",
    category: "Ayurveda",
    date: "2025-09-22",
    readingTime: "6 min",
    image: media[4].src,
    sections: [
      {
        paragraphs: [
          "An Ayurvedic consultation is not a personality quiz. It is a structured reading of how your particular body currently behaves — digestion, sleep, temperature, energy through the day — and where that has drifted from its baseline.",
        ],
      },
      {
        heading: "What the practitioner looks at",
        paragraphs: [
          "Pulse, tongue, skin, and a long conversation about your daily routine. Expect questions that feel unrelated: when you get hungry, whether you wake at the same hour each night, how you respond to cold. These are the actual data.",
          "You will be given two readings: prakriti, your constitution, and vikriti, your current state. The gap between them is what the treatment plan addresses.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "Come to the consultation before breakfast if you can, and without having scraped your tongue that morning. Bring a list of any medication you take and any diagnosis you are working with — Ayurvedic care sits alongside medical treatment, it does not replace it.",
          "Be specific about what is bothering you. 'Low energy after lunch every day for two years' is more useful than 'I am tired'.",
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "A therapy sequence — Abhyanga, Shirodhara, Swedana, or Basti as appropriate — plus a diet and daily routine. The routine is the part that does the long-term work, and the part most people abandon in week three at home.",
          "Ask the practitioner to name the two changes that matter most. Do those.",
        ],
      },
    ],
  },
  {
    slug: "a-practice-that-survives-going-home",
    title: "A practice that survives going home",
    excerpt: "The retreat is the easy part. Here is what tends to work in the first month back, and what reliably does not.",
    category: "Practice",
    date: "2025-08-30",
    readingTime: "5 min",
    image: site.heroImage,
    sections: [
      {
        paragraphs: [
          "Nearly everyone leaves a retreat intending to keep practising daily. A month later, most have not. This is not a discipline failure — it is a design failure. A retreat practice is built on a structure that no longer exists once you are home.",
        ],
      },
      {
        heading: "Shrink it drastically",
        paragraphs: [
          "The ninety-minute morning session is not portable. Twelve minutes is. Pick one short sequence and one breath practice, and treat those as the whole commitment. Anything more is a bonus, not the target.",
          "A practice you actually do at twelve minutes beats a practice you intend to do at ninety.",
        ],
      },
      {
        heading: "Anchor it to something that already happens",
        paragraphs: [
          "Attach the practice to an existing fixed point — before the first coffee, after the school run, immediately on closing the laptop. Time-of-day intentions fail; sequence-based ones hold.",
        ],
      },
      {
        heading: "Keep one thread to the place",
        paragraphs: [
          "A monthly online session, a message to a teacher when something in your body changes, or a return date already in the calendar. The people who sustain a practice almost always keep some contact with the context where they built it.",
          "If you want a short check-in call a month after you leave, ask us for one. We would rather do that than have you start over.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => journal.find((post) => post.slug === slug);

export const journalCategories = Array.from(new Set(journal.map((post) => post.category)));

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

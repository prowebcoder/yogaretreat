import { media, site } from "@/lib/data/site";

export type RetreatDay = { time: string; title: string; detail: string };

export type Retreat = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  nights: number;
  level: "All levels" | "Beginner" | "Intermediate";
  focus: "Yoga" | "Detox" | "Ayurveda" | "Nature" | "Personalised";
  location: string;
  price: string;
  priceNote: string;
  status: string;
  image: string;
  featured?: boolean;
  bookingUrl?: string;
  highlights: string[];
  includes: string[];
  rhythm: RetreatDay[];
};

const day = (time: string, title: string, detail: string): RetreatDay => ({ time, title, detail });

/** The shared daily shape most short retreats follow. Individual retreats override where they differ. */
const classicRhythm: RetreatDay[] = [
  day("06:00", "Wake and warm water", "A gentle start with lemon water and time by the river before the day begins."),
  day("06:45", "Pranayama and meditation", "Breathwork and seated meditation to settle the nervous system."),
  day("07:30", "Morning hatha practice", "A grounding asana practice suited to every body in the room."),
  day("09:30", "Sattvic breakfast", "Fresh, seasonal vegetarian food prepared for easy digestion."),
  day("11:00", "Therapy or free time", "An Ayurvedic or naturopathy treatment, or space to rest and read."),
  day("13:00", "Lunch", "The main meal of the day, eaten slowly and without screens."),
  day("16:30", "Yoga nidra or workshop", "Restorative practice, philosophy, or a guided sound session."),
  day("18:30", "Evening aarti or satsang", "Ganga aarti on the ghats, or a chanting circle at the centre."),
  day("20:00", "Light dinner and rest", "An early, simple meal so the body can sleep well."),
];

export const retreats: Retreat[] = [
  {
    slug: "7-day-yoga-retreat-rishikesh",
    title: "7-Day Yoga Retreat in Rishikesh",
    summary:
      "A full week of daily asana, pranayama, and meditation on the banks of the Ganga, with time for therapy, silence, and the Himalayan foothills.",
    duration: "7 days / 6 nights",
    nights: 6,
    level: "All levels",
    focus: "Yoga",
    location: "Rishikesh, Uttarakhand",
    price: "From US$999",
    priceNote: "Twin-share accommodation and all meals included.",
    status: "Enquire for dates",
    image: site.heroImage,
    featured: true,
    bookingUrl: "https://bookretreats.com/r/7-day-yoga-retreat-in-rishikesh-uttarakhand-india",
    highlights: [
      "Two daily yoga sessions with experienced instructors",
      "Pranayama, meditation, and yoga nidra",
      "One Ayurvedic therapy session included",
      "Ganga aarti and a Himalayan foothill walk",
    ],
    includes: ["6 nights accommodation", "3 sattvic meals daily", "All yoga and meditation sessions", "One Ayurvedic therapy", "Airport pick-up on request"],
    rhythm: classicRhythm,
  },
  {
    slug: "7-day-detox-naturopathy-ayurveda",
    title: "7-Day Detox Retreat: Naturopathy & Ayurveda",
    summary:
      "A guided reset combining naturopathy, Panchakarma-informed Ayurvedic care, cleansing food, and a gentle daily practice.",
    duration: "7 days / 6 nights",
    nights: 6,
    level: "All levels",
    focus: "Detox",
    location: "Rishikesh, Uttarakhand",
    price: "From US$1,100",
    priceNote: "Includes consultation, therapies, and a personalised diet plan.",
    status: "Enquire for dates",
    image: media[4].src,
    featured: true,
    bookingUrl: "https://bookretreats.com/r/7-day-detox-retreat-plan-combining-naturopathy-ayurveda-india",
    highlights: [
      "Initial consultation and dosha assessment",
      "Daily Ayurvedic and naturopathy treatments",
      "Cleansing sattvic diet, planned for you",
      "Gentle yoga, breathwork, and rest",
    ],
    includes: ["6 nights accommodation", "Personalised detox diet", "Daily therapies", "Consultation and follow-up plan", "All yoga sessions"],
    rhythm: [
      day("06:00", "Warm herbal infusion", "A prescribed drink to begin the day's cleansing."),
      day("06:45", "Gentle practice", "Slow asana and pranayama chosen for a detoxing body."),
      day("08:30", "Light breakfast", "Simple food that supports the treatment plan."),
      day("10:00", "Ayurvedic therapy", "Abhyanga, Shirodhara, Swedana, or Basti as prescribed."),
      day("13:00", "Cleansing lunch", "The main meal, planned around your constitution."),
      day("15:30", "Naturopathy session", "Hydrotherapy, mud therapy, or steam and sauna."),
      day("17:30", "Yoga nidra", "Deep restorative rest to let the treatments settle."),
      day("19:30", "Light dinner", "An early, easily digested meal."),
    ],
  },
  {
    slug: "5-day-yoga-retreat-dharamshala",
    title: "5-Day Yoga Retreat in Dharamshala",
    summary:
      "Practice at altitude in the Dhauladhar foothills, with mountain air, Tibetan sound work, and long, unhurried afternoons.",
    duration: "5 days / 4 nights",
    nights: 4,
    level: "All levels",
    focus: "Nature",
    location: "Dharamshala, Himachal Pradesh",
    price: "From US$740",
    priceNote: "Accommodation, meals, and all sessions included.",
    status: "Seasonal dates",
    image: media[2].src,
    bookingUrl: "https://bookretreats.com/r/5-day-yoga-retreat-in-dharamshala-india",
    highlights: [
      "Daily practice with views of the Dhauladhar range",
      "Tibetan singing bowl sound bath",
      "Guided mountain walk and forest sitting",
      "Evening meditation and journaling",
    ],
    includes: ["4 nights accommodation", "All meals", "Daily yoga and meditation", "One sound healing session", "Guided mountain walk"],
    rhythm: classicRhythm,
  },
  {
    slug: "3-day-stillness-ayurveda-ganga",
    title: "3-Day Stillness: Ayurveda, Sunrise & the Sacred Ganga",
    summary:
      "A short immersion built around sunrise practice, one deep Ayurvedic treatment, and the evening aarti on the river.",
    duration: "3 days / 2 nights",
    nights: 2,
    level: "Beginner",
    focus: "Ayurveda",
    location: "Rishikesh, Uttarakhand",
    price: "From US$465",
    priceNote: "Ideal as a first retreat or an add-on to a longer trip.",
    status: "Available year round",
    image: media[3].src,
    featured: true,
    bookingUrl: "https://bookretreats.com/r/3-day-stillness-ayurveda-sunrise-the-sacred-ganga-in-india",
    highlights: [
      "Sunrise yoga beside the Ganga",
      "One full Abhyanga and Shirodhara session",
      "Guided evening aarti",
      "Silent morning on the final day",
    ],
    includes: ["2 nights accommodation", "All meals", "One Ayurvedic therapy", "All yoga and meditation sessions"],
    rhythm: classicRhythm.slice(0, 7),
  },
  {
    slug: "3-day-kunjapuri-sunrise-sunset",
    title: "3-Day Kunjapuri Sunrise & Sunset Retreat",
    summary:
      "A light, moving retreat: a pre-dawn drive to the Kunjapuri temple, practice above the clouds, and two slow days back at the centre.",
    duration: "3 days / 2 nights",
    nights: 2,
    level: "All levels",
    focus: "Nature",
    location: "Rishikesh & Kunjapuri",
    price: "From US$210",
    priceNote: "The most accessible way to begin.",
    status: "Available year round",
    image: media[1].src,
    bookingUrl: "https://bookretreats.com/r/3-day-a-kunjapuri-sunrise-sunset-yoga-retreat-in-india",
    highlights: [
      "Sunrise practice at the Kunjapuri temple",
      "Sunset meditation over the valley",
      "Daily hatha and pranayama",
      "Local vegetarian food throughout",
    ],
    includes: ["2 nights accommodation", "All meals", "Kunjapuri transport", "All yoga sessions"],
    rhythm: classicRhythm.slice(0, 6),
  },
  {
    slug: "2-day-yoga-ayurvedic-therapy",
    title: "2-Day Yoga Retreat with Ayurvedic Therapy",
    summary:
      "A weekend pause. Two days of practice, one therapy session, and enough quiet to notice the difference.",
    duration: "2 days / 1 night",
    nights: 1,
    level: "Beginner",
    focus: "Ayurveda",
    location: "Rishikesh, Uttarakhand",
    price: "From US$250",
    priceNote: "A good first step if you are short on time.",
    status: "Available year round",
    image: media[5].src,
    bookingUrl: "https://bookretreats.com/r/2-day-yoga-retreat-with-ayurvedic-therapy-in-rishikesh-india",
    highlights: [
      "Two guided yoga sessions",
      "One Ayurvedic massage or Shirodhara",
      "Evening meditation",
      "Sattvic meals throughout",
    ],
    includes: ["1 night accommodation", "All meals", "One Ayurvedic therapy", "All yoga sessions"],
    rhythm: classicRhythm.slice(0, 5),
  },
  {
    slug: "personalised-yoga-journey",
    title: "A personalised yoga journey",
    summary:
      "Begin with a conversation. We will help you find the right rhythm of yoga and holistic healing for where you are now.",
    duration: "Flexible duration",
    nights: 0,
    level: "All levels",
    focus: "Personalised",
    location: "Rishikesh, Uttarakhand",
    price: "On enquiry",
    priceNote: "Built around your dates, budget, and intentions.",
    status: "Enquire for availability",
    image: media[0].src,
    highlights: [
      "Ancient yoga techniques",
      "Holistic healing practices",
      "Guidance from experienced instructors",
      "A schedule shaped around your needs",
    ],
    includes: ["Accommodation arranged to suit you", "Meals to your dietary needs", "Chosen therapies and sessions", "One-to-one guidance"],
    rhythm: classicRhythm,
  },
];

export const featuredRetreats = retreats.filter((retreat) => retreat.featured);

export const getRetreat = (slug: string) => retreats.find((retreat) => retreat.slug === slug);

export const retreatFocuses = Array.from(new Set(retreats.map((retreat) => retreat.focus)));

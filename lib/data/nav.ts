export type NavLink = { href: string; label: string; detail?: string };
export type NavGroup = { label: string; blurb: string; links: NavLink[] };

/** Source of truth for the header mega menu, the mobile drawer, and the footer. */
export const navGroups: NavGroup[] = [
  {
    label: "Retreats",
    blurb: "Two nights to a full week, in Rishikesh and the Himalayan foothills.",
    links: [
      { href: "/retreats", label: "All retreats", detail: "Browse by focus, length, and price" },
      { href: "/schedule", label: "A day here", detail: "The daily rhythm and class timetable" },
      { href: "/accommodation", label: "Where you stay", detail: "Rooms, meals, and the grounds" },
      { href: "/plan-your-visit", label: "Plan your visit", detail: "Travel, visas, seasons, what to pack" },
    ],
  },
  {
    label: "Wellness",
    blurb: "Ayurveda, naturopathy, sound, breath, and energy work.",
    links: [
      { href: "/ayurveda-therapies", label: "Ayurveda & detox", detail: "Abhyanga, Shirodhara, Panchakarma" },
      { href: "/naturopathy-treatments", label: "Naturopathy", detail: "Hydrotherapy, mud, steam, and diet" },
      { href: "/healing-therapies", label: "Healing therapies", detail: "Massage, reflexology, energy work" },
      { href: "/meditation-and-breathwork", label: "Meditation & breathwork", detail: "Sessions, retreats, and training" },
      { href: "/sound-healing-therapies", label: "Sound healing", detail: "Bowls, gongs, and sound baths" },
      { href: "/pranic-healing", label: "Pranic healing", detail: "Sessions, programmes, certification" },
    ],
  },
  {
    label: "Learn",
    blurb: "Go deeper, or train to teach.",
    links: [
      { href: "/yoga", label: "Yoga at Mysticism", detail: "How and what we teach" },
      { href: "/teacher-training", label: "Teacher training", detail: "100, 200, and 300-hour courses" },
      { href: "/sound-healing-course", label: "Sound healing course", detail: "Certification and workshops" },
      { href: "/journal", label: "Journal", detail: "Notes on practice, Ayurveda, and Rishikesh" },
    ],
  },
  {
    label: "About",
    blurb: "The centre, the people, and how to reach us.",
    links: [
      { href: "/about", label: "Our story", detail: "How Mysticism Yoga began" },
      { href: "/teachers", label: "Teachers", detail: "Who you will practise with" },
      { href: "/gallery", label: "Gallery", detail: "The place, in pictures" },
      { href: "/faq", label: "FAQ", detail: "Answers before you ask" },
      { href: "/contact", label: "Contact", detail: "Call, message, or visit" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Retreats",
    links: [
      { href: "/retreats", label: "All retreats" },
      { href: "/schedule", label: "A day here" },
      { href: "/accommodation", label: "Where you stay" },
      { href: "/plan-your-visit", label: "Plan your visit" },
      { href: "/booking", label: "Make an enquiry" },
    ],
  },
  {
    title: "Wellness",
    links: [
      { href: "/healing", label: "Holistic healing" },
      { href: "/ayurveda-therapies", label: "Ayurveda & detox" },
      { href: "/naturopathy-treatments", label: "Naturopathy" },
      { href: "/sound-healing-therapies", label: "Sound healing" },
      { href: "/meditation-and-breathwork", label: "Meditation & breathwork" },
      { href: "/pranic-healing", label: "Pranic healing" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/yoga", label: "Yoga" },
      { href: "/teacher-training", label: "Teacher training" },
      { href: "/sound-healing-course", label: "Sound healing course" },
      { href: "/journal", label: "Journal" },
      { href: "/teachers", label: "Teachers" },
    ],
  },
] as const;

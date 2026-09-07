export type TrainingModule = { title: string; detail: string };

export type Training = {
  slug: string;
  title: string;
  hours: string;
  duration: string;
  level: string;
  price: string;
  priceNote: string;
  intro: string;
  modules: TrainingModule[];
  includes: string[];
  suitedTo: string;
};

/** Confirm hours, pricing, and any accreditation claims with the centre before publishing. */
export const trainings: Training[] = [
  {
    slug: "200-hour",
    title: "200-Hour Yoga Teacher Training",
    hours: "200 hours",
    duration: "24 days, residential",
    level: "Foundation — open to committed practitioners",
    price: "On enquiry",
    priceNote: "Shared and private room options. Meals included.",
    intro:
      "The foundation course. You leave able to plan and hold a class, explain what you are asking for and why, and keep your own practice alive once the training ends.",
    modules: [
      { title: "Asana & alignment", detail: "The core hatha postures, how to sequence them, and how to adapt them for real bodies." },
      { title: "Pranayama & kriya", detail: "Breath practices, the cleansing kriyas, and when each one is and is not appropriate." },
      { title: "Anatomy & physiology", detail: "Applied anatomy for teachers: joints, spine, breath mechanics, and common contraindications." },
      { title: "Philosophy & the Sutras", detail: "Patanjali's eight limbs, read closely and applied to a modern life rather than recited." },
      { title: "Teaching methodology", detail: "Voice, sequencing, cueing, hands-off adjustment, and holding a room with care." },
      { title: "Practicum", detail: "Supervised teaching from week two onward, with feedback after every session." },
    ],
    includes: ["24 nights accommodation", "3 sattvic meals daily", "Course manual and materials", "One Ayurvedic therapy", "Certificate on completion"],
    suitedTo: "Practitioners with at least six months of regular practice who want to teach, or to understand their own practice far more deeply.",
  },
  {
    slug: "300-hour",
    title: "300-Hour Advanced Teacher Training",
    hours: "300 hours",
    duration: "32 days, residential",
    level: "Advanced — for 200-hour certified teachers",
    price: "On enquiry",
    priceNote: "Shared and private room options. Meals included.",
    intro:
      "For teachers who already have the foundation and want depth: subtler practices, therapeutic application, and the confidence to teach beyond a fixed sequence.",
    modules: [
      { title: "Advanced asana & inversions", detail: "Progressions, preparation, and the honest question of who a posture is actually for." },
      { title: "Yoga therapy", detail: "Working with back pain, anxiety, insomnia, and post-injury students in a group setting." },
      { title: "Subtle anatomy & bandhas", detail: "Nadis, chakras, bandhas, and mudras, taught practically rather than decoratively." },
      { title: "Advanced pranayama", detail: "Longer ratios, retention, and how to teach them safely." },
      { title: "Meditation & mantra", detail: "Building a personal sadhana and guiding others into one." },
      { title: "Teaching business", detail: "Building a class, a retreat, and a sustainable teaching life." },
    ],
    includes: ["32 nights accommodation", "3 sattvic meals daily", "Advanced manual", "Two Ayurvedic therapies", "Certificate on completion"],
    suitedTo: "Certified 200-hour teachers with active teaching experience who want to specialise.",
  },
  {
    slug: "100-hour",
    title: "100-Hour Immersion",
    hours: "100 hours",
    duration: "14 days, residential",
    level: "Foundation — no teaching intent required",
    price: "On enquiry",
    priceNote: "Can be credited toward the 200-hour course later.",
    intro:
      "Half the foundation course, all of the depth, none of the pressure to teach. A good option if two weeks is what you have.",
    modules: [
      { title: "Asana foundations", detail: "The core postures and how to practise them without hurting yourself." },
      { title: "Breath & meditation", detail: "A daily pranayama and meditation practice you can keep at home." },
      { title: "Philosophy basics", detail: "Where these practices came from and what they were meant to do." },
      { title: "Ayurveda for practitioners", detail: "Constitution, daily routine, and eating for your own body." },
    ],
    includes: ["14 nights accommodation", "3 sattvic meals daily", "Course manual", "Certificate of completion"],
    suitedTo: "Anyone wanting a serious immersion without committing to a full teaching qualification.",
  },
];

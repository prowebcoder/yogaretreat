export type Teacher = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  credentials: string[];
};

/**
 * Yogi Rahul is the founder named in the centre's own material. The remaining
 * profiles are placeholders — replace the names, bios, and credentials with the
 * real team before this page goes live.
 */
export const teachers: Teacher[] = [
  {
    name: "Yogi Rahul",
    role: "Founder & lead teacher",
    focus: "Hatha, pranayama, philosophy",
    bio: "Rahul founded Mysticism Yoga in 2024 out of a long practice in traditional hatha yoga and a wish to teach it without ceremony. His classes move slowly, explain the why, and leave room for questions.",
    credentials: ["Traditional hatha lineage", "Pranayama and kriya", "Yoga philosophy"],
  },
  {
    name: "Placeholder — Ayurvedic doctor",
    role: "Ayurveda & Panchakarma",
    focus: "Consultation, therapy planning",
    bio: "Leads the initial consultation, reads your constitution, and designs the therapy sequence for detox and healing guests. Replace this profile with the practitioner's real details.",
    credentials: ["BAMS or equivalent", "Panchakarma supervision", "Diet and lifestyle planning"],
  },
  {
    name: "Placeholder — Sound healing facilitator",
    role: "Naad & sound therapy",
    focus: "Singing bowls, gongs, sound baths",
    bio: "Runs the group sound baths, one-to-one vibrational sessions, and the sound healing certification course. Replace this profile with the facilitator's real details.",
    credentials: ["Himalayan bowl training", "Trauma-informed sound work", "Teacher training delivery"],
  },
  {
    name: "Placeholder — Meditation teacher",
    role: "Meditation & breathwork",
    focus: "Mindfulness, mantra, yoga nidra",
    bio: "Guides the morning meditations, breathwork sessions, and the meditation teacher training. Replace this profile with the teacher's real details.",
    credentials: ["Mindfulness training", "Mantra and japa", "Yoga nidra facilitation"],
  },
];

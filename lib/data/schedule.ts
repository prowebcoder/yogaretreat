export type ScheduleSlot = { time: string; title: string; detail: string; kind: "practice" | "rest" | "meal" | "therapy" };

/** The daily rhythm at the centre. Adjust the times to match the real timetable. */
export const dailyRhythm: ScheduleSlot[] = [
  { time: "05:45", kind: "rest", title: "Wake and warm water", detail: "Lemon water, a short walk, and time to arrive in the day before anything is asked of you." },
  { time: "06:30", kind: "practice", title: "Pranayama & meditation", detail: "Forty-five minutes of breathwork and seated meditation to settle the nervous system." },
  { time: "07:30", kind: "practice", title: "Morning hatha", detail: "A ninety-minute grounding asana practice, taught for the bodies actually in the room." },
  { time: "09:15", kind: "meal", title: "Sattvic breakfast", detail: "Seasonal vegetarian food, prepared for easy digestion." },
  { time: "10:30", kind: "therapy", title: "Therapy or consultation", detail: "Ayurvedic, naturopathy, or sound work, booked to your plan. Free time if you have none scheduled." },
  { time: "13:00", kind: "meal", title: "Lunch", detail: "The main meal of the day, eaten slowly and without screens." },
  { time: "14:30", kind: "rest", title: "Rest & silence", detail: "The quietest part of the day. Read, sleep, sit by the river, or do nothing at all." },
  { time: "16:30", kind: "practice", title: "Workshop or yoga nidra", detail: "Philosophy, restorative practice, alignment clinics, or a guided sound bath." },
  { time: "18:15", kind: "practice", title: "Aarti or satsang", detail: "Evening aarti on the ghats, or chanting and conversation at the centre." },
  { time: "19:45", kind: "meal", title: "Light dinner", detail: "An early, simple meal so the body can sleep well." },
  { time: "21:30", kind: "rest", title: "Lights low", detail: "The centre goes quiet. Early nights make the early mornings possible." },
];

export type ClassSlot = { day: string; morning: string; evening: string };

/** Weekly drop-in timetable for guests staying locally. */
export const weeklyClasses: ClassSlot[] = [
  { day: "Monday", morning: "Hatha — all levels", evening: "Yin & yoga nidra" },
  { day: "Tuesday", morning: "Vinyasa flow", evening: "Pranayama & meditation" },
  { day: "Wednesday", morning: "Hatha — alignment focus", evening: "Sound bath (group)" },
  { day: "Thursday", morning: "Vinyasa flow", evening: "Yin & restorative" },
  { day: "Friday", morning: "Hatha — all levels", evening: "Mantra & satsang" },
  { day: "Saturday", morning: "Slow flow & breath", evening: "Ganga aarti walk" },
  { day: "Sunday", morning: "Silent practice", evening: "Rest day" },
];

export const scheduleNotes = [
  "Classes run in a small group. Ninety minutes in the morning, sixty in the evening.",
  "Everything on the timetable is an invitation, not an obligation. Skipping a session is a valid choice.",
  "Therapy slots are booked around the class times, so you never have to choose between the two.",
  "Timings shift by around thirty minutes between summer and winter to follow the sunrise.",
];

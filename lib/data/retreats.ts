export type Retreat = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  status: string;
  highlights: string[];
};

export const retreats: Retreat[] = [
  {
    slug: "personalised-yoga-journey",
    title: "A personalised yoga journey",
    summary: "Begin with a conversation. We will help you find the right rhythm of yoga and holistic healing for where you are now.",
    duration: "Flexible duration",
    status: "Enquire for availability",
    highlights: ["Ancient yoga techniques", "Holistic healing practices", "Guidance from experienced instructors"],
  },
];
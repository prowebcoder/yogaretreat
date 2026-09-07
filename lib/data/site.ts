export const site = {
  name: "Mysticism Yoga",
  fullName: "Mysticism Yoga and Wellness Centre",
  tagline: "Discover your inner peace",
  description:
    "Ancient yoga techniques and holistic healing practices in the heart of Rishikesh.",
  url: "https://www.mysticismyoga.com",
  address: "Plot no 30, Nirmal Bag Block C, Pashulok, Rishikesh, Uttarakhand 249204, India",
  addressLines: ["Plot no 30, Nirmal Bag Block C", "Pashulok, Rishikesh", "Uttarakhand 249204, India"],
  locality: "Rishikesh",
  region: "Uttarakhand",
  postalCode: "249204",
  country: "IN",
  geo: { latitude: 30.0869, longitude: 78.2676 },
  email: "info@mysticismyoga.com",
  phone: "+918320661954",
  phoneDisplay: "+91 83206 61954",
  whatsapp: "918320661954",
  founded: "2024",
  openingHours: "Daily, 06:00 - 20:00 IST",
  instagram: "https://www.instagram.com/mysticismyoga?igsh=cHdwNThxcWNucmI2",
  facebook: "https://www.facebook.com/share/1DJg7psbzL/",
  heroImage:
    "https://img1.wsimg.com/isteam/ip/4e1cda76-6493-41ea-a488-c32202ceca82/1000071989.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1800,cg:true",
  heroVideo: "",
} as const;

/** Pre-filled WhatsApp deep link. Text is encoded so it survives the query string. */
export const whatsappLink = (message = "Hello Mysticism Yoga, I would like to know more about your retreats.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type MediaItem = (typeof media)[number];

export const media = [
  { src: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=85", alt: "Person practicing yoga in a sunlit studio", label: "The practice", category: "Yoga" },
  { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85", alt: "Mountain valley in warm morning light", label: "The landscape", category: "Nature" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85", alt: "Himalayan mountain ridgeline", label: "The journey", category: "Nature" },
  { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85", alt: "Quiet wellness moment with warm natural light", label: "The pause", category: "Healing" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85", alt: "Peaceful wellness treatment room", label: "A quiet room", category: "Healing" },
  { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=85", alt: "Warm natural textures in a wellness space", label: "The welcome", category: "Stay" },
] as const;

export const experiences = [
  { eyebrow: "01 / Practice", title: "Yoga that brings you back to yourself.", text: "At Mysticism Yoga, ancient yoga techniques become a grounded, personal practice for the mind, body, and spirit." },
  { eyebrow: "02 / Healing", title: "A holistic approach to inner peace.", text: "Our experienced instructors guide you through practices designed to rejuvenate your whole being and create space for stillness." },
  { eyebrow: "03 / Place", title: "Rishikesh, held gently.", text: "Come to Pashulok, Rishikesh, and take time to explore an authentic yoga and wellness experience in Uttarakhand." },
] as const;

export const pathways = [
  { label: "Yoga", href: "/yoga", image: media[0].src },
  { label: "Holistic healing", href: "/healing", image: media[3].src },
  { label: "Stay with us", href: "/accommodation", image: media[1].src },
] as const;

/** Small proof points shown under the hero. Confirm the numbers before publishing. */
export const stats = [
  { value: "2024", label: "Founded in Rishikesh" },
  { value: "7", label: "Wellness disciplines" },
  { value: "200+", label: "Hours of training" },
  { value: "1:1", label: "Personal guidance" },
] as const;

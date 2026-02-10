
export const CLINIC_INFO = {
  name: "Lumina Dental",
  tagline: "Dentistry, refined.",
  phone: "+1 (555) 000-1234",
  phoneFormatted: "15550001234",
  whatsapp: "+15550001234",
  email: "care@luminadental.com",
  address: "123 Wellness Way, Suite 100, Beverly Hills, CA 90210",
  // Map embed URL is kept as fallback, but App.tsx will prioritize a local image if offline
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.452627916962!2d-118.40263912344794!3d34.07071341675718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c37927bd4436!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1710345678901!5m2!1sen!2sus",
  mapPlaceholder: "./assets/images/map.jpg", 
  hours: "Mon - Fri: 8am - 6pm | Sat: 9am - 2pm",
  doctor: {
    name: "Dr. Julian White",
    credentials: "DDS, MS | Cosmetic & Restorative Specialist",
    experience: "15+ Years Experience",
    bio: "We don't just fix teeth; we restore confidence. My mission is to provide world-class dental care in an environment that feels more like a spa than a clinic.",
    imagePath: "./assets/images/doctor.jpg" 
  }
};

export const SERVICES = [
  {
    id: "implants",
    title: "Dental Implants",
    benefit: "Eat what you love again.",
    description: "Permanent, natural-looking tooth replacement designed to last a lifetime.",
    outcome: "Functional, beautiful smile."
  },
  {
    id: "aligners",
    title: "Clear Aligners",
    benefit: "Straighten without wires.",
    description: "Discrete, comfortable teeth straightening for adults and teens.",
    outcome: "Perfect alignment, zero metal."
  },
  {
    id: "root-canal",
    title: "Gentle Root Canal",
    benefit: "Save your natural tooth.",
    description: "Painless procedures focused on infection removal and tooth preservation.",
    outcome: "Immediate pain relief."
  },
  {
    id: "cosmetic",
    title: "Smile Design",
    benefit: "Your best self, realized.",
    description: "Veneers and whitening tailored to your unique facial features.",
    outcome: "High-impact aesthetics."
  }
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I used to be terrified of the dentist. Dr. White and the team changed everything. It was actually relaxing."
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The technology here is insane. Everything was digital, quick, and completely painless."
  },
  {
    name: "David K.",
    rating: 5,
    text: "Best dental experience I've had in 20 years. Professional, clean, and extremely high-end."
  }
];

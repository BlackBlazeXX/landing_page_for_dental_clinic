
export const CLINIC_INFO = {
  name: "Lumina Dental",
  tagline: "Advanced Restorative Medicine.",
  phone: "+1 (555) 000-1234",
  phoneFormatted: "15550001234",
  whatsapp: "+15550001234",
  email: "care@luminadental.com",
  address: "123 Wellness Way, Suite 100, Beverly Hills, CA 90210",
  // Map embed URL is kept as fallback, but App.tsx will prioritize a local image if offline
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.452627916962!2d-118.40263912344794!3d34.07071341675718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c37927bd4436!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1710345678901!5m2!1sen!2sus",
  mapPlaceholder: "./assets/images/map.jpg", 
  hours: "Mon - Fri: 8am - 6pm | Sat: By Appointment",
  doctor: {
    name: "Dr. Julian White",
    credentials: "DDS, MSD | Prosthodontist",
    experience: "15 Years Clinical Practice",
    bio: "Specializing in complex rehabilitation and esthetic integration. Focus on minimally invasive protocols and long-term functional stability.",
    imagePath: "./assets/images/doctor.jpg" 
  }
};

export const SERVICES = [
  {
    id: "implants",
    title: "Implantology",
    benefit: "Functional Restoration",
    description: "Titanium and zirconia implant systems for single-tooth to full-arch reconstruction.",
    outcome: "Structural Integrity"
  },
  {
    id: "aligners",
    title: "Orthodontics",
    benefit: "Alignment Correction",
    description: "Digital treatment planning for bite correction and aesthetic alignment.",
    outcome: "Occlusal Stability"
  },
  {
    id: "root-canal",
    title: "Endodontics",
    benefit: "Tooth Preservation",
    description: "Microscopic root canal therapy focusing on infection elimination and retention.",
    outcome: "Pathology Resolution"
  },
  {
    id: "cosmetic",
    title: "Prosthodontics",
    benefit: "Esthetic Rehabilitation",
    description: "Ceramic veneers and crowns engineered for natural optics and durability.",
    outcome: "Biomimetic Results"
  }
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Professional, clean, and efficient. The sedation protocols made the procedure manageable."
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Dr. White explained the clinical logic behind every step. I felt informed and safe."
  },
  {
    name: "David K.",
    rating: 5,
    text: "The customized treatment plan addressed my complex case perfectly. Highly recommended."
  }
];

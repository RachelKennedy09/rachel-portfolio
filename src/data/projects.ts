export type ProjectLink = {
  label: string;
  href: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  links: {
    live?: string;
    code?: string;
    mobile?: string;
    demo?: string;
  };
};


export type SelectedProject = {
  title: string;
  bullets: string[];
  tech: string[];
  links: {
    details?: string; // optional anchor link or future route
    live?: string;
    code?: string;
  };
};

export const featuredProject = {
  title: "Rocky Mountain Tails",
  description:
    "A full-stack platform for a dog-walking business, featuring a server-rendered web app built with Node.js, Express, EJS, and MongoDB, plus a companion mobile app built with React Native (Expo). Includes session-based authentication, protected routes, and full CRUD workflows for managing daily walk reports.",
  tech: [
    "Node.js",
    "Express",
    "EJS",
    "MongoDB",
    "Sessions/Auth",
    "CRUD",
    "MVC",
    "React Native (Expo)",
  ],
  imageSrc: "/RockyMountainTails-Screenshot.png",
  imageAlt: "Rocky Mountain Tails full-stack platform screenshot",
  links: {
    live: "https://rockymountaintails-fullstack.onrender.com",
    code: "https://github.com/RachelKennedy09/RockyMountainTails",
    mobile: "https://github.com/RachelKennedy09/RMT-Expo-Go-App",
  },
};




export const selectedProjects: SelectedProject[] = [
  {
    title: "Guided Psychotherapy Collective (Professional Website)",
    tech: ["React", "Tailwind CSS", "Netlify Auth", "Accessibility"],
    bullets: [
      "Accessible multi-page website built for a psychotherapy clinic, designed in collaboration with the Medical Director.",
      "Implemented secure email-based authentication through Netlify for patient intake and protected content.",
      "Integrated local photography and artwork to create a grounded, community-focused visual identity.",
      "Built with React and Tailwind CSS, emphasizing clarity, readability, and a calm user experience.",
    ],
    links: {
      details: "#", 
      live: "https://guided-collective.netlify.app/",
      code: "https://github.com/RachelKennedy09/Guided",
    },
  },
  {
    title: "Summit Scene (Mobile App)",
    tech: ["React Native (Expo)", "Mobile UI/UX", "Local Storage"],
    bullets: [
      "Mobile app designed to capture and share mountain conditions, trail notes, and local insights in real time.",
      "Built with React Native (Expo) using mobile-first UI patterns and smooth, intuitive navigation.",
      "Stores user-generated data locally for offline use — ideal for mountain environments with limited service.",
      "Designed with functional, nature-inspired interactions and clean visual hierarchy.",
    ],
    links: {
      details: "#",
      live: "#",
      code: "#",
    },
  },
];

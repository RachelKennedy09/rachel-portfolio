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

export const featuredProject: FeaturedProject = {
  title: "Rocky Mountain Tails",
  description:
    "A full-stack dog-walking application built with React, Node.js, Express, and MongoDB. Features include user authentication, protected routes, a note-taking system, and a responsive UI designed for real-world use.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Authentication", "CRUD"],
  imageSrc: "/images/projects/rmt-hero.png",
  imageAlt: "Rocky Mountain Tails App Screenshot",
  links: {
    live: "#", 
    code: "#", 
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
      live: "#",
      code: "#",
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

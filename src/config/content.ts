export const siteConfig = {
  name: "Rolando Roja",
  title: "Mechanical Engineer | Design & Project Engineering",
  description: "A showcase of my projects",
  social: {
    Linkedin: "https://www.linkedin.com/in/rolandoroja",
    email: "rojarolando@gmail.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Rolando Roja",
  description:
    "Mechanical Engineer focused on mechanical design, project planning and technical documentation.",
  buttons: {
    about: {
      text: "About Me",
      href: "/about/",
    },
    posts: {
      text: "View Projects",
      href: "/projects/",
    },
  },
  images: {
    light: "/assets/images/home/home-bg-light.png",
    dark: "/assets/images/home/home-bg-dark.png",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Your Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I am a responsible and proactive Mechanical Engineer with extensive experience in mechanical design, project planning, and on-site documentation. Committed to continuous learning and applying engineering to improve everyday life. I am analytical, adaptable, with great attention to detail, excellent communication skills and eager to take on new challenges.",
  skills: [
    "Advance proficiency Autodesk Inventor",
    "English Level B2 (IELTS Band 6 - 2025)",
    "SAP (Material Management & Maintenance)",
    "Stress analysis simulations - Ansys Workbench",
    "Large-scale engineering projects",
  ],
  image: {
    src: "/assets/images/about/coder.png",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Dec 2024 - Oct 2025",
        position: "Project Supervisor",
        company: "Ascensores Servas S.A.",
        description:
          "Responsible for project planning, reporting directly to management.",
      },
      {
        period: "Sep 2020 - Dec 2024",
        position: "Mechanical Designer",
        company: "Ascensores Servas S.A",
        description:
          "Resposible for the mechanical design of projects and new products, applying innovative solutions in lifting systems ans steel structures",
      },
      {
        period: "Aug 2018 - Feb 2020",
        position: "TPM Technician",
        company: "Groupe PSA",
        description: "Preparation of maintenance instructions",
      },
       {
        period: "Dec 2013 - Feb 2015",
        position: "Technical Draftsperson",
        company: "Inntekne Ingeniería S.A",
        description: "Create 3D models of parts, mechanical components and technical drawings using Autodesk Inventor",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "If you’d like to get in touch regarding projects, opportunities, or collaborations, feel free to reach me directly by ",
    email: {
      text: "email",
      href: "mailto:rojarolando@gmail.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects | Rolando Roja",
    description: "Selected mechanical engineering projects and design work.",
  },
  title: "Projects",
  description:
    "A selection of mechanical design and project engineering work. Each project includes context, scope and outcomes.",
  projects: [
    {
      title: "Mirador del Obelisco (2024)",
      description:
        "Mechanical design and installation documentation for a large-scale public elevator project. Scope included detailed 3D modeling, assembly drawings, and coordination with site constraints to ensure safe installation and compliance.",
      image: "/assets/images/projects/obelisco1.jpg",
      href: "/projects/obelisco",
    },
    {
      title: "Confiteria del Molino - Elevator Modernization (2022)",
      description:
        "Modernization of heritage elevators in a historic building. Responsibilities included technical coordination, mechanical redesign, and preparation of detailed documentation while respecting architectural and heritage requirements.",
      image: "/assets/images/projects/molino1.jpg",
      href: "/projects/molino",
    },
    {
      title: "Parametric 3D Models in Autodesk Inventor",
      description:
        "Development of parametric 3D models in Autodesk Inventor to automate design variations. Implemented iLogic rules and configurable parameters to generate multiple product variants, reduce design time, and minimize errors in bills of materials.",
      image: "/assets/images/projects/inventor1.jpg",
      href: "/projects/inventor-parametric",
    },
  ],
};


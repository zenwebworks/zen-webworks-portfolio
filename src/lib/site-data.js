// ---------------------------------------------------------------------
// Zen WebWorks — site content
// Edit this file to update every piece of text, link, and data point
// across the whole site. Components pull from here so you only have to
// change things in ONE place.
// ---------------------------------------------------------------------

export const siteConfig = {
  brand: "Zen WebWorks",
  name: "Suresh",
  fullName: "Suresh",
  title: "Full Stack Developer & Freelance Web Developer",
  roles: [
    "Full Stack Developer",
    "Freelance Web Developer",
    "MERN Stack Developer",
    "Scalable Web Architect",
  ],
  tagline:
    "I build modern, scalable, and high-performance web applications for startups, businesses, and entrepreneurs. From landing pages and business websites to full-featured SaaS platforms, I create fast, reliable solutions that help brands grow online.",
  bio:
    "I'm a full stack developer specialising in modern JavaScript — React, Next.js, and Node.js — with a strong focus on clean UI, secure APIs, and scalable architecture. Whether it's a marketing site, an internal dashboard, or a full product build, I work closely with clients to ship reliable software on time.",
  location: "Chennai, India",
  email: "suresh.zenwebworks@gmail.com",
  phone: "+91 00000 00000",
  availability: "Available for freelance projects",
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/zenwebworks", icon: "github" },
  { name: "Instagram", href: "https://www.instagram.com/zen.web.works", icon: "instagram" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------
// Skills — shown as high-quality icon badges instead of progress bars.
// Icons are served live from skillicons.dev. To change the set, edit the
// `icon` id to match any id listed at https://skillicons.dev
// ---------------------------------------------------------------------
export const skillGroups = [
  {
    title: "Frontend",
    description: "Building fast, accessible interfaces",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Material UI", icon: "materialui" },
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, and server logic",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "How I build, ship, and collaborate",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

// ---------------------------------------------------------------------
// Projects / client work — replace image, links, and copy with your own.
// Place project images in /public/images/projects/
// ---------------------------------------------------------------------
export const projects = [
  {
    title: "IIFM Academy Recruitment CRM",
    description:
      "Streamline candidate management, lead assignment, follow-ups, and admissions workflows with a centralized platform built for HR teams and administrators.",
    image: "/images/projects/IIFM-CRM.png",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://crm.iifmacademy.com/",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "IIFM Academy Official Website",
    description:
      "A modern, responsive website showcasing the academy's Courses, Placement, and Contact information, built with a focus on performance and SEO.",
    image: "/images/projects/IIFM-Academy.png",
    tags: ["Next.js", "MongoDB", "Firebase", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://www.iifmacademy.com/",
    codeUrl: "#",
    featured: false,
  },
  {
    title: "IIFM Global Verification System",
    description:
      "A secure, scalable verification platform for validating academic credentials and certifications. manage candidate records through secure admin dashboard.",
    image: "/images/projects/IIFM-Global-Verification.png",
    tags: ["React", "Vite", "Firebase", "Material UI"],
    liveUrl: "https://verify.iifmacademy.com/",
    codeUrl: "#",
    featured: false,
  },
];

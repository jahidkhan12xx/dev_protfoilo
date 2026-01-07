import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiFramer
} from "react-icons/si";
import { FaBug, FaCode } from "react-icons/fa6";

export const personalInfo = {
  name: "Zahid Hassan Khan",
  title: "Full Stack Developer",
  tagline: "Building digital experiences with modern technologies.",
  email: "jahidkhan12xx@gmail.com", // Replace
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/jahidkhan12xx", // Replace with actual
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jahid-khan-aa18802a0/", // Replace with actual
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jahidkhan12xx@gmail.com",
      icon: Mail,
    },
  ],
};

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "SQA", icon: FaBug, color: "#E34F26" }, // Using bug icon for QA
  { name: "DSA", icon: FaCode, color: "#F7DF1E" }, // Using code icon for DSA
];

export const projects = [
  {
    title: "Expense Management",
    description: "A specialized dashboard for expense management.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    githubUrl: "#", // Replace with actual GitHub URL
    liveUrl: "#",   // Replace with actual Live URL
    image: "/expense.png",
  },
  {
    title: "Ecommerce website",
    description: "E-commerce platform with real-time updates.",
    tags: ["React", "Firebase", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/ecommerce.png",
  },
  {
    title: "Employee Management",
    description: "Social media application for developers.",
    tags: ["Node.js", "MongoDB", "Next.js"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/management.png",
  },
];

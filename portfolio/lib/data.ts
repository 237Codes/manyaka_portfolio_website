import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// Importing Images from the public folder
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 

  {
    title: "Software Development Intern",
    location: "Numa Staffing,Columbia, MD",
    description:
      "Improved a JavaScript-based web application, for a temporary staffing company, resulting in a 15% reduction in customer support tickets. Served as an assistant team lead, leading code testing efforts with a team of four developers, leading to a 20% increase in user engagement",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },

  {
    title: "WordPress Developer",
    location: "TMAC Communications LLC, Columbia, MD",
    description:
      "I built custom wordpress themes for a local spa client using HTML,CSS and JavaScript. I also did website maintainance and SEO management which led to 7% increased spa bookings.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },

  {
    title: "Arcade Technician",
    location: "Round One Bowling, Towson, MD",
    description:
      "I work as an arcade technician while being a full time student. My primary duties are testing, debugging and fixing faults in arcade machines.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },

  {
    title: "Sales Associate",
    location: "Sunglass Hut, Columbia, MD",
    description:
      "I am a sales associate at Sunglass Hut acting as an intermediary between a customer and a product. I apply leadership, time management and customer service in order to enhance customer experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },

] as const;

// ProjectsData is a list of the projects that I have worked on.
//An array in JS with each projects represented by an obejct.
export const projectsData = [
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C++",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "Express",
  "Framer Motion",
  "Spring",
  "Django",
  "Perspective",
  "WordPress",
  "Node.js",
  "MongoDB",
  "Prisma",
  "PostgreSQL",
  "GraphQL",
  "Git",
  "GitHub",
  "AWS",
  "Figma",
] as const;

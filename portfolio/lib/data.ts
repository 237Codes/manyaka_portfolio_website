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
    title: "Associates of Science",
    location: "Howard Community College, Columbia, MD",
    description:
      "I studied coursework in Computer Science to obtain an Associates of Science Degree in Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Bachelor of Science",
    location: "Towson University, Towson, MD",
    description:
      "I am currently taking coursework in computer science full-time, working towards a Bachelors in Computer Science Degree Program",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
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
    title: "Full-Stack Developer",
    location: "Columbia, MD",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// ProjectsData is a list of the projects that I have worked on.
//An array in JS with each projects represented by an obejct.
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
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
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Perspective",
] as const;

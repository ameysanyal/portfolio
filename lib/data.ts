import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// importing images
import classroom from "@/public/classroom.png";
import crm from "@/public/crm.png";
import user from "@/public/user.png";
import clock from "@/public/clock.png";
import bootstrap from "@/public/bootstrap.png";
import scrape from "@/public/scrape.png";
import todo from "@/public/todo.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

//With 'as const' The name and url properties are inferred as literal types ("Home", "About", "Contact") instead of general string.
export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CRM Statistics",
    deployedLink: "https://crm-statistics.netlify.app/",
    videoDemo:
      "https://drive.google.com/file/d/15oEcRJ2h71ptV-gnFY060_3bDAboF3YG/view",
    githubRepo: "https://github.com/ameysanyal/CRM-NextJS",
    description:
      "I built a CRM statistics page using NextJS and Chart.js Library",
    tags: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
    imageUrl: crm,
  },
  {
    title: "Users Managment Application",
    deployedLink: "https://heliverse-client-eight.vercel.app/",
    videoDemo: "https://shorturl.at/DXo4P",
    githubRepo: "https://github.com/ameysanyal/Heliverse",
    description:
      "It is application in which user can search, filter, paginate users, add a user to the team, and create a new User",
    tags: [
      "ReactJS",
      "Redux",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Tailwind CSS",
    ],
    imageUrl: user,
  },
  {
    title: "Full Stack Classroom Web App",
    deployedLink: "https://classroom-frontend-klx8.onrender.com/",
    videoDemo: "https://youtu.be/Fc4qWPOs8s8",
    githubRepo: "https://github.com/ameysanyal/classroom",
    description:
      "It is a full stack multi-user web app Classroom, where principal (admin), teachers and students has different scope of functionality.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
    imageUrl: classroom,
  },

  {
    title: "Todos Application",
    deployedLink: "https://todos-frontend-5llw.onrender.com/",
    videoDemo: "",
    githubRepo: "https://github.com/ameysanyal/todos",
    description:
      "I Made a basic todos application with CRUD operation using React, Nodejs, Express, MongoDB and deployed both frontend, backend on render.",
    tags: ["React", "ExpressJS", "MongoDB", "NodeJS"],
    imageUrl: todo,
  },
  {
    title: "LinkedIn Scraping Chrome Extension",
    deployedLink: "",
    videoDemo: "https://shorturl.at/PMqYs",
    githubRepo: "https://github.com/ameysanyal/chrome-extension",
    description:
      "I built a chrome for Scraping linkedin profile details and store it in MySQL database",
    tags: ["JavaScript", "NodeJS", "ExpressJS", "MySQL"],
    imageUrl: scrape,
  },
  {
    title: "Web page using BootStrap",
    deployedLink: "https://ameysanyal.github.io/bootstrap-webdesign.github.io/",
    videoDemo: "",
    githubRepo: "https://github.com/ameysanyal/bootstrap-webdesign.github.io",
    description: "I made a responsive web page using bootstrap grid layout",
    tags: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
    imageUrl: bootstrap,
  },
  {
    title: "Analog-clock using HTML, CSS and pure JavaScript",
    deployedLink: "https://ameysanyal.github.io/Analog-Clock.github.io/",
    videoDemo: "",
    githubRepo: "https://github.com/ameysanyal/Analog-Clock.github.io",
    description:
      "In this project , I have used div elements with absolute position for making hands of clock and added logic by using setInterval function , date object and tranform property.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: clock,
  },
] as const;

export const skillsData = [
  {
    skillName: "HTML",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    skillName: "CSS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    skillName: "JavaScript",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    skillName: "TypeScript",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    skillName: "ReactJS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    skillName: "NodeJS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    skillName: "ExpressJS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    skillName: "MongoDB",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    skillName: "MySQL",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    skillName: "Tailwind CSS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    skillName: "BootStrap",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    skillName: "NextJS",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    skillName: "Git",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    skillName: "GitHub",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    skillName: "VS Code",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    skillName: "Python",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    skillName: "Framer Motion",
    skillImage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
] as const;

//"as const" forces TypeScript to treat the values as their literal types and marks them as readonly.
// It provides type safety by ensuring immutability and preventing changes to the data.
// It’s especially useful for creating union types from arrays or objects, as it narrows down the type to the exact values.

//Key Features of as const:
// Literal Type Inference:

// Normally, when you define an object or array, TypeScript will infer general types for the values. Using as const forces TypeScript to infer literal types instead.
// Literal types are the exact values themselves, rather than broader types like string or number.
// Readonly:

// The as const assertion also marks the array or object as readonly, meaning that the values cannot be changed. It prevents the reassignment of values at the type level.

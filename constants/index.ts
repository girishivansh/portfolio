import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { TbApi } from "react-icons/tb";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const SKILL_DATA = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "C++", image: "", icon: SiCplusplus, color: "#00599C", width: 80, height: 80 },
  { skill_name: "Git", image: "", icon: FaGitAlt, color: "#F05032", width: 80, height: 80 },
  { skill_name: "GitHub", image: "", icon: FaGithub, color: "#6e5494", width: 80, height: 80 },
  { skill_name: "REST APIs", image: "", icon: TbApi, color: "#00a2ff", width: 80, height: 80 },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/girishivansh",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shivanshgiri/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/in/shivanshcodes/",
  },
] as const;



export const PROJECTS = [
  {
    title: "FraudShield AI",
    description:
      "AI-powered fraud detection platform that analyzes transactions and identifies suspicious activities using intelligent automation and risk analysis.",
    image: "/projects/fraudshield-v3.png",
    link: "https://fraudshield-security.vercel.app/",
  },
  {
    title: "LabSphere",
    description:
      "A smart chemistry lab inventory management system with role-based access control, inventory tracking, issue/return management, and QR-code-based asset management.",
    image: "/projects/labsphere-v2.png",
    link: "https://labsphere-henna.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/girishivansh",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shivanshgiri/",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/in/shivanshcodes/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/girishivansh/portfolio",
};

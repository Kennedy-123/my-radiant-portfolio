import valloraImg from "@/assets/vallora-luxe.png";
import autobotImg from "@/assets/autobot-academy-screenshot.png";
import firstChoiceImg from "@/assets/firstChoice.png";
import wayameImg from "@/assets/wayame.png";
import fourTowerHotel from "@/assets/four-tower-hotel.png";

export const site = {
  name: "Kennedy Okolo",
  shortName: "Kennedy",
  role: "Full Stack Developer",
  email: "kennedyokolo222@gmail.com",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export type SocialKey = "github" | "linkedin" | "x" | "instagram" | "tiktok";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/Kennedy-123" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/kennedy-okolo-888b4728a" },
  { key: "x", label: "X", href: "https://x.com/KennedyOko76411" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/okolo_kennedy" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@kennedy_okolo" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "vallora-luxe",
    title: "Vallora Luxe",
    category: "E-commerce · Brand",
    description: "A luxury lifestyle brand website showcasing high-end fashion and accessories.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    link: "https://vallora-luxe.netlify.app",
    image: valloraImg,
  },
  {
    slug: "autobot-academy",
    title: "Autobot Academy",
    category: "EdTech · Platform",
    description:
      "A coding school platform built with Next.js and Clerk to help aspiring developers learn full stack development.",
    tags: ["Next.js", "TailwindCSS", "Clerk", "TypeScript"],
    link: "https://autobot-academy.netlify.app",
    image: autobotImg,
  },
  {
    slug: "1stchoice-properties",
    title: "1stChoice Properties",
    category: "Real Estate · Listings",
    description:
      "A modern property listing platform for Nigeria, helping users discover, rent, and buy homes with ease.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://www.1stchoiceproperties.com.ng",
    image: firstChoiceImg,
  },
  {
    slug: "wayame",
    title: "Wayame",
    category: "Fintech · Payments",
    description:
      "A secure money transfer platform enabling users to send funds from EUR to NGN quickly and affordably.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    link: "https://wayaweb.netlify.app",
    image: wayameImg,
  },
  {
    slug: "four-tower-hotel",
    title: "Four Tower Hotel",
    category: "Hospitality · Booking",
    description:
      "A modern hotel booking platform for Nigeria, helping users discover and reserve rooms with ease.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    link: "https://four-tower-hotel.netlify.app",
    image: fourTowerHotel,
  },
];

export const services = [
  {
    title: "Web Development",
    short: "Custom websites and web apps built with performance and scalability in mind.",
    points: ["Business & brand websites", "Custom web applications", "Responsive, mobile-first builds", "CMS & third-party integrations"],
  },
  {
    title: "SEO Optimization",
    short: "Improve your website's visibility in search results and drive more organic traffic.",
    points: ["Technical SEO audits", "Core Web Vitals & speed", "Structured data & metadata", "Search-friendly content structure"],
  },
  {
    title: "App Development",
    short: "High-quality mobile apps for Android and iOS that deliver seamless experiences.",
    points: ["Cross-platform mobile apps", "Clean, intuitive interfaces", "API & backend integration", "Launch & store deployment support"],
  },
];

export const process = [
  { title: "Discover", text: "We talk through your goals, audience and what success looks like for the business." },
  { title: "Design", text: "I map out structure and interface so every page has a clear job to do." },
  { title: "Build", text: "Fast, accessible, responsive code — shared with you early and often." },
  { title: "Launch", text: "Deployment, testing and handover, plus support as your site grows." },
];

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const skills = [
  { name: "HTML5", icon: devicon("html5/html5-original.svg") },
  { name: "CSS3", icon: devicon("css3/css3-original.svg") },
  { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "React.js", icon: devicon("react/react-original.svg") },
  { name: "Next.js", icon: devicon("nextjs/nextjs-original.svg"), invert: true },
  { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
  { name: "Python", icon: devicon("python/python-original.svg") },
  { name: "Fastapi", icon: devicon("fastapi/fastapi-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") },
  { name: "TailwindCSS", icon: devicon("tailwindcss/tailwindcss-original.svg") },
];

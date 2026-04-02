import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import jumibotImg from "@/assets/jumibot-screenshot.png";
import autobotImg from "@/assets/autobot-academy-screenshot.png";
import firstChoiceImg from "@/assets/firstChoice.png";
import wayameImg from "@/assets/wayame.png";

const projects = [
  {
    title: "JumiBot",
    description: "A price-tracking bot for Jumia that monitors product prices and sends email alerts when prices drop.",
    tags: ["Flask", "Selenium", "React.js", "TailwindCSS", "MongoDB"],
    link: "https://github.com/Kennedy-123/jumibot",
    linkType: "code" as const,
    image: jumibotImg,
  },
  {
    title: "Autobot Academy",
    description: "A coding school platform built with Next.js and Clerk to help aspiring developers learn full stack development.",
    tags: ["Next.js", "TailwindCSS", "Clerk", "TypeScript"],
    link: "https://autobot-academy.netlify.app",
    linkType: "live" as const,
    image: autobotImg,
  },
  {
    title: "1stChoice Properties",
    description: "A modern property listing platform for Nigeria, helping users discover, rent, and buy homes with ease.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://1stchoiceproperties.com.ng",
    linkType: "live" as const,
    image: firstChoiceImg,
  },
  {
    title: "Wayame",
    description: "A secure money transfer platform enabling users to send funds from EUR to NGN quickly and affordably.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    link: "https://wayaweb.netlify.app",
    linkType: "live" as const,
    image: wayameImg,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-glow transition-all duration-500"
          >
            {/* Project screenshot */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={600}
                height={300}
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={project.linkType === "code" ? "View code" : "View live"}
                >
                  {project.linkType === "code" ? <Github size={18} /> : <ExternalLink size={18} />}
                </a>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

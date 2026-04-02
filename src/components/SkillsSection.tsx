import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-gradient-primary rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 hover:shadow-glow transition-colors duration-300 cursor-default"
          >
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="w-7 h-7"
              loading="lazy"
              width={28}
              height={28}
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;

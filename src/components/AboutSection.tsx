import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          Hi, I'm Kennedy — a Full Stack Developer passionate about building scalable,
          user-friendly digital solutions. With 3+ years of experience in frontend and
          backend development, I work with technologies like React.js, Next.js, Node.js,
          and Flask to create intuitive web apps, automation tools, and AI-driven platforms.
          I love learning, sharing knowledge, and collaborating on innovative projects.
          Let's create something awesome together!
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

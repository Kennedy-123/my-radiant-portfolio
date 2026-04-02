import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-gradient-primary rounded-full mb-8"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.p
          className="text-muted-foreground leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm Kennedy — a Full Stack Developer passionate about building scalable,
          user-friendly digital solutions. With 3+ years of experience in frontend and
          backend development, I work with technologies like React.js, Next.js, Node.js,
          and Flask to create intuitive web apps, automation tools, and AI-driven platforms.
          I love learning, sharing knowledge, and collaborating on innovative projects.
          Let's create something awesome together!
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

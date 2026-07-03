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
        <p className="text-white leading-relaxed text-lg">
          Hi, I'm Kennedy, a freelance web developer dedicated to helping
          businesses establish a strong online presence. I design and build
          modern, responsive, and high-performing websites that not only look
          great but also help attract customers and grow your business. From
          business websites to custom web applications, I deliver solutions that
          are fast, user-friendly, and tailored to your goals. If you're looking
          for a reliable developer to bring your ideas to life, I'd love to work
          with you.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const contacts = [
  { icon: Mail, href: "mailto:kennedyokolo222@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/kennedy-okolo-888b4728a", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/okolo_kennedy", label: "Instagram" },
];

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.div
          className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.p
          className="text-muted-foreground max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
        }}
        className="flex justify-center gap-6"
      >
        {contacts.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -90 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            whileHover={{
              scale: 1.15,
              y: -6,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:shadow-glow transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

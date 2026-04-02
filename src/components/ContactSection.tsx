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
        <h2 className="text-3xl font-bold mb-2">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-8" />
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center gap-6"
      >
        {contacts.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:shadow-glow transition-all duration-300"
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;

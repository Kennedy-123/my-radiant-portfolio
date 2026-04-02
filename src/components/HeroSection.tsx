import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

const socials = [
  { icon: Github, href: "https://github.com/Kennedy-123", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kennedy-okolo-888b4728a", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/okolo_kennedy", label: "Instagram" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-8"
      >
        <div className="w-36 h-36 rounded-full bg-gradient-primary p-1 shadow-glow">
          <img
            src={heroImg}
            alt="Kennedy"
            className="w-full h-full rounded-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
      >
        Hello, I'm Kennedy 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
      >
        A Full Stack Developer building{" "}
        <span className="text-gradient">modern web applications</span>.
      </motion.h1>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex gap-4 mt-10"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:shadow-glow transition-all duration-300"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

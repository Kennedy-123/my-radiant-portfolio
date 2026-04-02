import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import heroImg from "@/assets/pic.png";

const socials = [
  { icon: Github, href: "https://github.com/Kennedy-123", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kennedy-okolo-888b4728a", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/okolo_kennedy", label: "Instagram" },
];

const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Animated background glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.08, 0.15, 0.08],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[120px] pointer-events-none"
    />

    {/* Secondary glow */}
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.05, 0.1, 0.05],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent blur-[100px] pointer-events-none"
    />

    {/* Floating particles */}
    {floatingParticles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-primary/20"
        style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: p.delay,
        }}
      />
    ))}

    <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
      {/* Floating Avatar */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mb-8"
      >
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-36 rounded-full bg-gradient-primary p-1 shadow-glow"
        >
          <img
            src={heroImg}
            alt="Kennedy"
            className="w-full h-full rounded-full object-cover"
            width={512}
            height={512}
          />
        </motion.div>
      </motion.div>

      {/* Text with stagger */}
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-primary font-mono text-sm tracking-widest uppercase mb-4"
      >
        Hello, I'm Kennedy 👋
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
      >
        A Full Stack Developer building{" "}
        <motion.span
          className="text-gradient inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
        >
          modern web applications
        </motion.span>
        .
      </motion.h1>

      {/* Social links with stagger */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } },
        }}
        className="flex gap-4 mt-10"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:shadow-glow transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

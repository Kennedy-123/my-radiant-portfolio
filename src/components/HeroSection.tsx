import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import heroImg from "@/assets/pic.png";

const socials = [
  { href: "https://github.com/Kennedy-123", label: "GitHub" },
  {
    href: "https://linkedin.com/in/kennedy-okolo-888b4728a",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/okolo_kennedy",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@kennedy_okolo?_r=1&_t=ZS-97XdGHfQWxh",
    label: "TikTok",
  },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
  >
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
        {socials.map((social) => (
          <a key={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:shadow-glow transition-all duration-300"
            aria-label={social.label}>
            <SocialIcon url={social.href} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

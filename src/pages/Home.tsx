import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import SceneFrame from "@/components/three/SceneFrame";
import { HeroScene } from "@/components/three/lazy";
import Reveal, { EASE } from "@/components/site/Reveal";
import Marquee from "@/components/site/Marquee";
import TiltImage from "@/components/site/TiltImage";
import { projects, services, skills } from "@/data/site";

const headline = ["I build websites", "that help", "businesses grow."];

const Hero = () => (
  <section className="relative min-h-[100svh] overflow-hidden">
    <SceneFrame className="absolute inset-0">{(p) => <HeroScene {...p} />}</SceneFrame>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent md:hidden" />

    <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-[22.5rem] md:justify-center md:pb-20 md:pt-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Full stack developer · Open to new projects
      </motion.p>

      <h1
        className="max-w-[14ch] font-display font-bold leading-[0.95] tracking-[-0.045em]"
        style={{ fontSize: "clamp(3rem, 6.6vw, 7rem)" }}
      >
        {headline.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className={i === 2 ? "block text-gradient" : "block"}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: EASE }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
        className="mt-10 flex max-w-md flex-col gap-8"
      >
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          Hi, I'm Kennedy — a freelance developer crafting modern, responsive, high-performing sites and web apps with
          React, FastAPI and Tailwind CSS.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/work" className="btn-primary">
            See my work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Start a project
          </Link>
        </div>
      </motion.div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="eyebrow mt-14 hidden items-center gap-3 md:inline-flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
        Scroll
      </motion.a>
    </div>
  </section>
);

const Intro = () => (
  <section id="intro" className="container scroll-mt-24 py-24 md:py-36">
    <div className="grid gap-10 md:grid-cols-12">
      <Reveal className="md:col-span-3">
        <p className="eyebrow">(01) Intro</p>
      </Reveal>
      <div className="md:col-span-9">
        <Reveal>
          <p className="font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
            I help businesses establish a strong online presence with websites that{" "}
            <span className="text-muted-foreground">look great, load fast,</span> and{" "}
            <span className="text-gradient">attract customers.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/about" className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold">
            More about me
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

const SelectedWork = () => (
  <section className="container py-24 md:py-32">
    <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
      <Reveal>
        <p className="eyebrow mb-4">(02) Selected work</p>
        <h2 className="display-md">
          Recent <span className="text-gradient">projects</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Link to="/work" className="btn-ghost">
          All projects <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>

    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {projects.slice(0, 4).map((project, i) => (
        <Reveal key={project.slug} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-24" : ""}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
            <TiltImage src={project.image} alt={`${project.title} website screenshot`} className="aspect-[4/3]" />
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">{project.category}</p>
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h3>
              </div>
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="container py-24 md:py-32">
    <div className="grid gap-10 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <p className="eyebrow mb-4">(03) Services</p>
        <h2 className="display-md">
          How I can <span className="text-gradient">help</span>
        </h2>
      </Reveal>
      <ul className="border-b border-border md:col-span-8">
        {services.map((service, i) => (
          <motion.li
            key={service.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
          >
            <Link
              to="/services"
              className="group relative flex items-center gap-6 overflow-hidden border-t border-border py-8 md:gap-10 md:py-10"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-foreground/[0.04] transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="relative font-mono text-sm text-primary">0{i + 1}</span>
              <span className="relative flex-1">
                <span className="block font-display text-2xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {service.title}
                </span>
                <span className="mt-2 block max-w-lg text-sm text-muted-foreground">{service.short}</span>
              </span>
              <ArrowRight className="relative h-6 w-6 -translate-x-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <Marquee items={skills.map((s) => s.name)} />
    <Intro />
    <SelectedWork />
    <ServicesPreview />
  </>
);

export default Home;

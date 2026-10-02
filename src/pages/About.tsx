import { Gauge, MonitorSmartphone, Target } from "lucide-react";
import { motion } from "framer-motion";
import PageIntro from "@/components/site/PageIntro";
import Reveal, { EASE } from "@/components/site/Reveal";
import TiltImage from "@/components/site/TiltImage";
import portrait from "@/assets/portrait2.webp";
import { skills } from "@/data/site";

const facts = [
  { label: "Focus", value: "Web" },
  { label: "Stack", value: "React · Python · FastAPI" },
  { label: "Works", value: "Freelance, remote" },
];

const principles = [
  {
    icon: Gauge,
    title: "Fast by default",
    text: "High-performing builds that load quickly and keep visitors engaged — speed is part of the design, not an afterthought.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive everywhere",
    text: "Every layout is crafted to feel right on phones, tablets and wide desktop screens alike.",
  },
  {
    icon: Target,
    title: "Built around your goals",
    text: "Solutions tailored to what your business actually needs — more enquiries, more sales, a stronger brand.",
  },
];

const About = () => (
  <>
    <PageIntro
      index="02"
      label="About"
      title={
        <>
          Developer, problem-solver, <span className="text-gradient">partner.</span>
        </>
      }
      lead="I design and build modern websites and web applications that don't just look great, they help attract customers and grow your business."
    />

    <section className="container py-16 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="group relative">
            <TiltImage src={portrait} alt="Portrait of Kennedy Okolo" className="aspect-[4/5]" />
            <div className="absolute -bottom-5 -right-3 rotate-[-4deg] rounded-full bg-foreground px-5 py-2.5 font-display text-sm font-bold text-background shadow-xl md:-right-6">
              Hi, I'm Kennedy 👋
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pt-4">
          <Reveal>
            <p className="eyebrow mb-6">(01) Story</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              I'm a freelance web developer dedicated to helping businesses establish a strong online presence.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I design and build modern, responsive, and high-performing websites that not only look great but also help
                attract customers and grow your business.
              </p>
              <p>
                From business websites to custom web applications, I deliver solutions that are fast, user-friendly, and
                tailored to your goals. If you're looking for a reliable developer to bring your ideas to life, I'd love to
                work with you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow mb-2">{f.label}</dt>
                  <dd className="font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="container py-24 md:py-32">
      <Reveal>
        <p className="eyebrow mb-4">(02) Principles</p>
        <h2 className="display-md mb-14 max-w-2xl">
          What you can <span className="text-gradient">count on</span>
        </h2>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {principles.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors duration-500 hover:border-primary/40">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-8 font-display text-xl font-bold tracking-tight">{title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow mb-4">(03) Toolkit</p>
          <h2 className="display-md">
            Tools I <span className="text-gradient">build</span> with
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            A modern, battle-tested stack for shipping fast, maintainable products.
          </p>
        </Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-8 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <img
                src={skill.icon}
                alt=""
                className={skill.invert ? "h-9 w-9 invert" : "h-9 w-9"}
                loading="lazy"
                width={36}
                height={36}
              />
              <span className="text-sm font-semibold">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default About;

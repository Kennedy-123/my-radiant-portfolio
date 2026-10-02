import { Check } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { process, services } from "@/data/site";

const Services = () => (
  <>
    <PageIntro
      index="04"
      label="Services"
      title={
        <>
          What I can <span className="text-gradient">build</span> for you.
        </>
      }
      lead="From a first website to a full product, I cover the build end to end — so you can focus on running your business."
    />

    <section className="container pb-12">
      <div className="border-b border-border">
        {services.map((service, i) => (
          <Reveal key={service.title}>
            <article className="grid gap-6 border-t border-border py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-mono text-sm text-primary">0{i + 1}</p>
                <h2 className="display-md mt-4">{service.title}</h2>
              </div>
              <div className="lg:col-span-7 lg:pt-9">
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">{service.short}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container py-24 md:py-32">
      <Reveal>
        <p className="eyebrow mb-4">(02) Process</p>
        <h2 className="display-md mb-16 max-w-2xl">
          A simple, <span className="text-gradient">transparent</span> process
        </h2>
      </Reveal>
      <ol className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.title} className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card">
            <Reveal delay={i * 0.08}>
              <span className="font-display text-6xl font-bold text-outline transition-colors duration-500 group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 font-display text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  </>
);

export default Services;

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal, { EASE } from "@/components/site/Reveal";
import TiltImage from "@/components/site/TiltImage";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

const ALL = "All";

const Work = () => {
  const [filter, setFilter] = useState(ALL);
  const filters = useMemo(() => [ALL, ...Array.from(new Set(projects.flatMap((p) => p.tags)))], []);
  const visible = filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <PageIntro
        index="03"
        label="Work"
        title={
          <>
            Selected <span className="text-gradient">work</span>
            <sup className="ml-2 align-top font-mono text-base font-normal tracking-normal text-muted-foreground md:text-xl">
              ({String(projects.length).padStart(2, "0")})
            </sup>
          </>
        }
        lead="Live products I've designed and built — from luxury e-commerce to fintech and education platforms."
      >
        {/* <Reveal delay={0.2}>
          <LayoutGroup>
            <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "relative rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    filter === f ? "border-foreground text-background" : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter === f && (
                    <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-foreground" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </Reveal> */}
      </PageIntro>

      <section className="container pb-24 md:pb-32">
        <motion.ul layout className="space-y-20 md:space-y-32">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-12">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={cn("md:col-span-7", i % 2 === 1 && "md:order-2")}
                  >
                    <TiltImage src={project.image} alt="" className="aspect-[16/11]" />
                  </a>
                  <div className={cn("md:col-span-5", i % 2 === 1 && "md:order-1")}>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-mono text-sm text-primary">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="eyebrow">{project.category}</span>
                    </div>
                    <h2 className="display-md">{project.title}</h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                      Visit live site <ArrowUpRight className="h-4 w-4" />
                      <span className="sr-only">for {project.title} (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>
    </>
  );
};

export default Work;

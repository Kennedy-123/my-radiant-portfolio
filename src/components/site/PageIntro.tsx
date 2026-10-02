import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type PageIntroProps = {
  index: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  scene?: ReactNode;
  children?: ReactNode;
};

/** Shared opening block for inner pages: numbered eyebrow, display title, optional 3D scene. */
const PageIntro = ({ index, label, title, lead, scene, children }: PageIntroProps) => (
  <section className="relative overflow-hidden pb-12 pt-32 md:pb-20 md:pt-44">
    <div className="container grid items-center gap-8 lg:grid-cols-12">
      <div className={cn(scene ? "lg:col-span-7" : "lg:col-span-11")}>
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="text-primary">{index}</span> <span className="mx-2 opacity-40">/</span> {label}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display-lg text-balance">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </Reveal>
        )}
        {children}
      </div>
      {scene && <div className="-mx-5 h-[320px] sm:h-[420px] lg:col-span-5 lg:mx-0 lg:h-[540px]">{scene}</div>}
    </div>
  </section>
);

export default PageIntro;

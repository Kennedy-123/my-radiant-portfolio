import { Link, useLocation } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navItems, site, socials } from "@/data/site";
import Reveal from "./Reveal";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const { pathname } = useLocation();
  const showCta = pathname !== "/contact";

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-gradient-brand opacity-[0.12] blur-[120px]" />

      {showCta && (
        <div className="container relative pb-16 pt-24 md:pb-24 md:pt-32">
          <Reveal>
            <p className="eyebrow mb-6">Have a project in mind?</p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link to="/contact" className="group inline-flex flex-wrap items-end gap-x-6 gap-y-2">
              <span className="display-xl">
                Let's build <br className="hidden sm:block" />
                something <span className="text-gradient">great.</span>
              </span>
              <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary md:mb-5 md:h-24 md:w-24">
                <ArrowUpRight className="h-7 w-7 md:h-10 md:w-10" />
              </span>
            </Link>
          </Reveal>
        </div>
      )}

      <div className="container relative grid gap-10 border-t border-border py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-bold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Freelance full stack developer building fast, modern websites and apps.
          </p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-sm font-semibold underline decoration-primary underline-offset-4 hover:text-primary">
            {site.email}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Pages</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <SocialIcon name={s.key} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container relative flex items-center justify-between border-t border-border py-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

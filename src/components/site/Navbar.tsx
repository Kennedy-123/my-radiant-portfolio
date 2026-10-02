import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navItems, site, socials } from "@/data/site";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={cn(
          "transition-colors duration-500",
          scrolled && !open ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "border-b border-transparent",
        )}
      >
        <nav className="container flex h-16 items-center justify-between md:h-20" aria-label="Main">
          <Link to="/" className="relative z-10 flex items-center gap-3" aria-label={`${site.name} — home`}>
            <img src={logo} alt="" className="h-9 w-9 object-contain" width={36} height={36} />
            <span className="font-display text-lg font-bold tracking-tight">{site.shortName}</span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/50 p-1 backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-background" : "text-muted-foreground hover:text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-foreground"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn-primary hidden !py-2.5 md:inline-flex">
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 42px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 42px) 32px)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 -z-10 flex flex-col bg-background px-5 pb-10 pt-24 md:hidden"
          >
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gradient-brand opacity-25 blur-[90px]" />
            <ul className="relative flex flex-1 flex-col justify-center gap-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn("flex items-baseline gap-4 py-1 font-display text-5xl font-bold tracking-tight", isActive ? "text-gradient" : "text-foreground")
                    }
                  >
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="relative space-y-4 border-t border-border pt-6">
              <a href={`mailto:${site.email}`} className="block text-sm text-muted-foreground">
                {site.email}
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {socials.map((s) => (
                  <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="text-foreground">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

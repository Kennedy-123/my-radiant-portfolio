import { Fragment } from "react";

/** Infinite horizontal ticker. Content is duplicated once so the loop is seamless. */
const Marquee = ({ items }: { items: string[] }) => (
  <div className="relative overflow-hidden border-y border-border py-6 md:py-8" aria-label={items.join(", ")}>
    <div className="flex w-max animate-marquee items-center" aria-hidden="true">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center">
          {items.map((item, i) => (
            <Fragment key={item}>
              <span
                className={
                  i % 2 === 0
                    ? "px-6 font-display text-4xl font-bold tracking-tight md:px-10 md:text-6xl"
                    : "text-outline px-6 font-display text-4xl font-bold tracking-tight md:px-10 md:text-6xl"
                }
              >
                {item}
              </span>
              <span className="text-2xl text-primary md:text-3xl">✦</span>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
  </div>
);

export default Marquee;

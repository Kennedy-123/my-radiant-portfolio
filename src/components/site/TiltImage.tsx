import { PointerEvent, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Screenshot frame that tilts in 3D toward the pointer, with a moving glare. */
const TiltImage = ({ src, alt, className }: TiltImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, hsl(0 0% 100% / 0.16), transparent 55%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ perspective: 1200 }} className={className}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0" />
        <div className={cn("pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5")} />
      </motion.div>
    </div>
  );
};

export default TiltImage;

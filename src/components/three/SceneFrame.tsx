import { Component, ReactNode, Suspense, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { trackPointer } from "./pointer";

export type SceneProps = {
  /** false while the canvas is scrolled offscreen — scenes stop rendering */
  active: boolean;
  /** render a single still frame instead of animating */
  reducedMotion: boolean;
};

class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

type SceneFrameProps = {
  className?: string;
  children: (props: SceneProps) => ReactNode;
};

/**
 * Hosts a lazily loaded three.js scene. Mounts it the first time it nears the
 * viewport, pauses it when offscreen, and keeps a CSS glow underneath so the
 * layout still looks finished if WebGL is unavailable.
 */
const SceneFrame = ({ className, children }: SceneFrameProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px 0px" });
  const reducedMotion = !!useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    trackPointer();
  }, []);

  useEffect(() => {
    if (inView) setMounted(true);
  }, [inView]);

  return (
    <div ref={ref} className={cn("relative", className)} aria-hidden="true">
      <div className="absolute inset-[15%] rounded-full bg-gradient-brand opacity-20 blur-[90px]" />
      {mounted && (
        <WebGLBoundary>
          <Suspense fallback={null}>
            <div className="absolute inset-0 animate-in fade-in duration-1000">
              {children({ active: inView, reducedMotion })}
            </div>
          </Suspense>
        </WebGLBoundary>
      )}
    </div>
  );
};

export default SceneFrame;

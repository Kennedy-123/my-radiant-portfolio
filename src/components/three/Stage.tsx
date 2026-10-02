import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import type { SceneProps } from "./SceneFrame";

type StageProps = SceneProps & {
  children: ReactNode;
  cameraZ?: number;
};

/** Shared transparent canvas: pauses offscreen, renders once for reduced motion. */
const Stage = ({ active, reducedMotion, children, cameraZ = 7 }: StageProps) => (
  <Canvas
    dpr={[1, 1.75]}
    camera={{ position: [0, 0, cameraZ], fov: 40 }}
    frameloop={reducedMotion ? "demand" : active ? "always" : "never"}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    style={{ pointerEvents: "none" }}
  >
    {children}
  </Canvas>
);

export default Stage;

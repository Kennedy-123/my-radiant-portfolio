import { lazy } from "react";

// three.js lives in its own chunks and only loads on pages that show a scene
export const HeroScene = lazy(() => import("./HeroScene"));

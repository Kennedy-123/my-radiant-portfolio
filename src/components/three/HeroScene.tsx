import { Suspense, useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Stage from "./Stage";
import Dust from "./Dust";
import { BRAND } from "./materials";
import { pointer } from "./pointer";
import type { SceneProps } from "./SceneFrame";
import portraitUrl from "@/assets/pic.png";

type Layout = "hero" | "center";

const Orbit = ({ radius, speed, tilt, opacity }: { radius: number; speed: number; tilt: [number, number, number]; opacity: number }) => {
  const moon = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    moon.current?.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0);
  });
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 8, 240]} />
        <meshBasicMaterial color={BRAND.cyan} transparent opacity={opacity} toneMapped={false} />
      </mesh>
      <mesh ref={moon} position={[radius, 0, 0]}>
        <sphereGeometry args={[0.06, 24, 24]} />
        <meshBasicMaterial color={BRAND.paper} toneMapped={false} />
      </mesh>
    </group>
  );
};

/**
 * Round photo on a finely subdivided plane: a soft ripple runs through it,
 * the edge picks up a blue → cyan rim that slowly rotates, and a halo glows behind.
 */
const Portrait = () => {
  const texture = useLoader(THREE.TextureLoader, portraitUrl);
  const gl = useThree((s) => s.gl);
  const mesh = useRef<THREE.Mesh>(null);

  const material = useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    return new THREE.ShaderMaterial({
      transparent: true,
      // Drawn over the orbit rings so no line ever crosses the face
      depthTest: false,
      uniforms: {
        uMap: { value: texture },
        uTime: { value: 0 },
        uEnergy: { value: 0 },
        uRimA: { value: BRAND.blue.clone() },
        uRimB: { value: BRAND.cyan.clone() },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uEnergy;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          float r = length(p.xy);
          p.z += sin(r * 3.5 - uTime * 1.4) * (0.035 + uEnergy * 0.05);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uTime;
        uniform vec3 uRimA;
        uniform vec3 uRimB;
        varying vec2 vUv;
        void main() {
          vec2 c = vUv - 0.5;
          float r = length(c) * 2.0;
          if (r > 1.0) discard;
          vec2 uv = 0.5 + c * 0.96 + c * sin(r * 12.0 - uTime * 1.2) * 0.004;
          vec3 col = texture2D(uMap, uv).rgb;
          float ang = atan(c.y, c.x);
          vec3 rim = mix(uRimA, uRimB, 0.5 + 0.5 * sin(ang * 2.0 + uTime * 0.8));
          col = mix(col, col * 0.55 + rim * 0.35, smoothstep(0.7, 1.0, r) * 0.7);
          col += rim * smoothstep(0.9, 1.0, r) * 1.4;
          float alpha = 1.0 - smoothstep(0.985, 1.0, r);
          gl_FragColor = vec4(col, alpha);
          #include <colorspace_fragment>
        }
      `,
    });
  }, [texture, gl]);

  const halo = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uColor: { value: BRAND.blue.clone() } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float r = length(vUv - 0.5) * 2.0;
            gl_FragColor = vec4(uColor, smoothstep(1.0, 0.45, r) * 0.55);
            #include <colorspace_fragment>
          }
        `,
      }),
    [],
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    material.uniforms.uTime.value = t;
    material.uniforms.uEnergy.value = THREE.MathUtils.damp(material.uniforms.uEnergy.value, Math.hypot(pointer.x, pointer.y), 2, delta);
    if (mesh.current) mesh.current.rotation.z = Math.sin(t * 0.3) * 0.03;
  });

  return (
    <>
      <mesh position={[0, 0, -0.3]} material={halo}>
        <planeGeometry args={[5.2, 5.2]} />
      </mesh>
      <mesh ref={mesh} material={material} renderOrder={10}>
        <planeGeometry args={[3, 3, 96, 96]} />
      </mesh>
    </>
  );
};

const Hero = ({ layout }: { layout: Layout }) => {
  const group = useRef<THREE.Group>(null);
  const viewport = useThree((s) => s.viewport);
  const size = useThree((s) => s.size);

  const wide = viewport.aspect > 1.05;
  let scale = wide ? Math.min(1, viewport.width / 9.5) : Math.min(0.75, viewport.width / 4.8);
  let baseX = layout === "hero" && wide ? viewport.width * 0.26 : 0;
  let baseY = layout === "hero" && !wide ? viewport.height * 0.27 : 0;

  // On narrow screens keep the photo in the band between the navbar and the headline
  if (layout === "hero" && !wide) {
    const pxPerUnit = size.height / viewport.height;
    const radiusPx = Math.min(140, size.width * 0.34);
    scale = radiusPx / (1.5 * pxPerUnit);
    baseX = 0;
    baseY = (size.height / 2 - (80 + radiusPx)) / pxPerUnit;
  }

  // Only a little tilt so the face stays readable
  const tilt = 0.25;

  useFrame((_, delta) => {
    const scroll = layout === "hero" ? Math.min(window.scrollY / window.innerHeight, 1.5) : 0;
    const g = group.current;
    if (!g) return;
    g.position.x = THREE.MathUtils.damp(g.position.x, baseX + pointer.x * 0.3, 2.5, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, baseY + pointer.y * 0.2 + scroll * 1.6, 2.5, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * tilt * 0.75, 2.5, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * tilt, 2.5, delta);
  });

  return (
    <group ref={group} position={[baseX, baseY, 0]} scale={scale}>
      <Suspense fallback={null}>
        <Portrait />
      </Suspense>
      <Orbit radius={2.35} speed={0.45} tilt={[1.25, 0.25, 0]} opacity={0.5} />
      <Orbit radius={2.85} speed={-0.28} tilt={[1.0, -0.5, 0.3]} opacity={0.2} />
    </group>
  );
};

type HeroSceneProps = SceneProps & { layout?: Layout };

const HeroScene = ({ layout = "hero", ...props }: HeroSceneProps) => (
  <Stage {...props}>
    <Hero layout={layout} />
    <Dust count={1100} radius={8} size={55} />
  </Stage>
);

export default HeroScene;

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BRAND, createDustMaterial } from "./materials";

type DustProps = {
  count?: number;
  radius?: number;
  size?: number;
  color?: THREE.Color;
  speed?: number;
};

/** A slowly rotating shell of soft particles. */
const Dust = ({ count = 900, radius = 6, size = 60, color = BRAND.paper, speed = 0.02 }: DustProps) => {
  const ref = useRef<THREE.Points>(null);

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.35 + Math.random() * 0.65);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = 0.3 + Math.random() * 0.7;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return { geometry: g, material: createDustMaterial(color, size) };
  }, [count, radius, size, color]);

  useFrame((state, delta) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return <points ref={ref} geometry={geometry} material={material} />;
};

export default Dust;

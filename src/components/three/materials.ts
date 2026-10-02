import * as THREE from "three";

export const BRAND = {
  blue: new THREE.Color("#3a7bf7"),
  cyan: new THREE.Color("#44d4fa"),
  ink: new THREE.Color("#0a1226"),
  paper: new THREE.Color("#eef3fb"),
};

/** Soft, round, gently twinkling points (additive so they glow over the dark page). */
export function createDustMaterial(color: THREE.Color, size: number) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: size },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.75) },
      uColor: { value: color.clone() },
    },
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uSize;
      uniform float uPixelRatio;
      attribute float aScale;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.3 + position.x * 2.0) * 0.05;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);
        vAlpha = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 1.5 + aScale * 40.0));
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(uColor, a * vAlpha);
        #include <colorspace_fragment>
      }
    `,
  });
}

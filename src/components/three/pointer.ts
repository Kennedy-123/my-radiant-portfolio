/**
 * Window-level pointer in normalized device coords (-1..1). Page content sits
 * on top of the canvases, so R3F's own pointer never sees most moves.
 */
export const pointer = { x: 0, y: 0 };

let listening = false;

export function trackPointer() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true },
  );
}

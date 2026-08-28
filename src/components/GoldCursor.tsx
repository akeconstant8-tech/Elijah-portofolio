import { useEffect, useState } from "react";

/**
 * Custom gold cursor — desktop only.
 * - Small dot follows the pointer
 * - Outer ring lags slightly
 * - Expands on hover over interactive elements
 * - Contracts on mouse down (click)
 */
export function GoldCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("gold-cursor-on");

    let rx = 0,
      ry = 0,
      tx = 0,
      ty = 0,
      raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const isLink = !!t?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="link"]',
      );
      setHover(isLink);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("gold-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  const ringSize = hover ? 56 : 32;
  const dotSize = pressed ? 4 : hover ? 6 : 8;

  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: ringPos.x,
          top: ringPos.y,
          width: ringSize,
          height: ringSize,
          transform: `translate(-50%, -50%) scale(${pressed ? 0.85 : 1})`,
          borderRadius: "9999px",
          border: `1px solid ${hover ? "#22c55e" : "rgba(34, 197, 94,0.7)"}`,
          boxShadow: hover
            ? "0 0 30px rgba(34, 197, 94,0.45), inset 0 0 12px rgba(34, 197, 94,0.2)"
            : "0 0 14px rgba(34, 197, 94,0.25)",
          background: hover ? "rgba(34, 197, 94,0.06)" : "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition:
            "width 200ms ease, height 200ms ease, background 200ms ease, border-color 200ms ease, box-shadow 200ms ease, opacity 200ms ease, transform 120ms ease",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: dotSize,
          height: dotSize,
          transform: "translate(-50%, -50%)",
          borderRadius: "9999px",
          background: "linear-gradient(135deg,#22c55e,#22c55e)",
          boxShadow: "0 0 12px rgba(34, 197, 94,0.9)",
          pointerEvents: "none",
          zIndex: 10000,
          opacity: visible ? 1 : 0,
          transition: "width 150ms ease, height 150ms ease, opacity 200ms ease",
        }}
      />
    </>
  );
}

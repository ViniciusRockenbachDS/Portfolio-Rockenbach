import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
  life: number;
  size: number;
};

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !context || !finePointer.matches || reducedMotion.matches) return;

    const points: TrailPoint[] = [];
    let animationFrame = 0;
    let isAnimating = false;
    let lastPoint = { x: 0, y: 0 };
    let accent = getComputedStyle(document.documentElement).getPropertyValue("--cursor-glow").trim();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      accent = getComputedStyle(document.documentElement).getPropertyValue("--cursor-glow").trim();
    };

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = points.length - 1; index >= 0; index -= 1) {
        const point = points[index];
        if (!point) continue;

        point.life -= 0.035;
        point.size += 0.15;
        if (point.life <= 0) {
          points.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.globalAlpha = Math.max(0, point.life * 0.24);
        context.fillStyle = accent;
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      if (points.length > 0) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        isAnimating = false;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y);
      if (distance < 5) return;

      lastPoint = { x: event.clientX, y: event.clientY };
      points.push({ x: event.clientX, y: event.clientY, life: 1, size: 3.5 });
      if (points.length > 26) points.shift();

      if (!isAnimating) {
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
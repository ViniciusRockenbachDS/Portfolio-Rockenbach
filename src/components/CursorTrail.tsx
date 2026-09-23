import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  depth: number;
};

type Ripple = { x: number; y: number; radius: number; life: number };

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !context || !finePointer.matches || reducedMotion.matches) return;

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    let animationFrame = 0;
    let isAnimating = false;
    let pointer = { x: 0, y: 0 };
    let cloud = { x: 0, y: 0 };
    let lastSpawn = { x: 0, y: 0 };
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

    const awaken = () => {
      if (isAnimating) return;
      isAnimating = true;
      animationFrame = window.requestAnimationFrame(render);
    };

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      cloud.x += (pointer.x - cloud.x) * 0.075;
      cloud.y += (pointer.y - cloud.y) * 0.075;

      if (particles.length > 0) {
        const cloudGlow = context.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, 105);
        cloudGlow.addColorStop(0, accent);
        cloudGlow.addColorStop(0.3, accent);
        cloudGlow.addColorStop(1, "transparent");
        context.globalAlpha = 0.055;
        context.fillStyle = cloudGlow;
        context.beginPath();
        context.arc(cloud.x, cloud.y, 105, 0, Math.PI * 2);
        context.fill();
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        if (!particle) continue;

        particle.life -= particle.decay;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }

        if (particle.depth < 0.55) {
          const haze = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 7,
          );
          haze.addColorStop(0, accent);
          haze.addColorStop(1, "transparent");
          context.globalAlpha = particle.life * 0.055;
          context.fillStyle = haze;
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size * 7, 0, Math.PI * 2);
          context.fill();
        }

        context.beginPath();
        context.globalAlpha = Math.max(0, particle.life * (0.25 + particle.depth * 0.65));
        context.fillStyle = accent;
        context.shadowColor = accent;
        context.shadowBlur = particle.depth > 0.7 ? 9 : 3;
        context.arc(particle.x, particle.y, particle.size * particle.depth, 0, Math.PI * 2);
        context.fill();
      }

      context.shadowBlur = 0;

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        if (!ripple) continue;
        ripple.radius += 3.2;
        ripple.life -= 0.032;
        if (ripple.life <= 0) {
          ripples.splice(index, 1);
          continue;
        }
        context.globalAlpha = ripple.life * 0.55;
        context.strokeStyle = accent;
        context.lineWidth = 1.2;
        context.beginPath();
        context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        context.stroke();
      }

      context.globalAlpha = 1;
      if (particles.length > 0 || ripples.length > 0) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        isAnimating = false;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (cloud.x === 0 && cloud.y === 0) cloud = { ...pointer };
      const distance = Math.hypot(event.clientX - lastSpawn.x, event.clientY - lastSpawn.y);
      if (distance >= 4) {
        const count = Math.min(8, 3 + Math.floor(distance / 12));
        for (let index = 0; index < count; index += 1) {
          const angle = Math.random() * Math.PI * 2;
          const spread = 8 + Math.random() * 42;
          const depth = 0.35 + Math.random() * 0.85;
          particles.push({
            x: event.clientX + Math.cos(angle) * spread,
            y: event.clientY + Math.sin(angle) * spread * 0.62,
            vx: Math.cos(angle) * (0.08 + Math.random() * 0.28) - event.movementX * 0.025,
            vy: Math.sin(angle) * (0.08 + Math.random() * 0.28) - event.movementY * 0.025,
            life: 0.75 + Math.random() * 0.35,
            decay: 0.008 + Math.random() * 0.012,
            size: 0.7 + Math.random() * 2.3,
            depth,
          });
        }
        lastSpawn = { ...pointer };
        if (particles.length > 180) particles.splice(0, particles.length - 180);
      }
      awaken();
    };

    const handlePointerDown = (event: PointerEvent) => {
      ripples.push({ x: event.clientX, y: event.clientY, radius: 8, life: 1 });
      for (let index = 0; index < 18; index += 1) {
        const angle = (Math.PI * 2 * index) / 18 + Math.random() * 0.18;
        const speed = 0.8 + Math.random() * 2.4;
        particles.push({
          x: event.clientX,
          y: event.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.018 + Math.random() * 0.012,
          size: 1 + Math.random() * 2.2,
          depth: 0.65 + Math.random() * 0.55,
        });
      }
      awaken();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
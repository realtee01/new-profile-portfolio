import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Import slim version for better performance
      const { loadSlim } = await import("@tsparticles/slim");
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 w-full h-full z-[-1]"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: {
            value: window.innerWidth < 768 ? 100 : 250, // More particles for "plenty" stars
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          links: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            direction: "none",
            speed: 0.1, // Slower for stars
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      } as any}
    />
  );
}

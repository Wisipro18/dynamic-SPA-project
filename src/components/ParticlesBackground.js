import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
        particles: {
          color: { value: ["#ff7f50", "#00ffff", "#ff69b4"] },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
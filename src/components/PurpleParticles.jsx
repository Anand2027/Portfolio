// src/PurpleParticles.js
import React from "react";
import { Particles } from "react-tsparticles"; // Correct import
import { loadFull } from "tsparticles";

const PurpleParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 100,
        },
        background: {
          color: {
            value: "#ffffff", // White background
          },
        },
        particles: {
          color: {
            value: "#800080", // Purple color
          },
          links: {
            enable: true,
            color: "#800080", // Purple lines
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default PurpleParticles;

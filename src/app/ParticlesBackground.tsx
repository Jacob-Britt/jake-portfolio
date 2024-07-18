import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container, ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '', // Ensure no background color to avoid overlapping
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#ff0000', '#0a0a0a', '#1a1a1a', '#2a2a2a', '#0a0aff'], // Dark reds, blacks, and subtle blues
        },
        links: {
          color: '#0a0a0a',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100, // Increase number for a denser effect
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'polygon', // Use polygon shapes for a techy look
          options: {
            polygon: {
              sides: 6, // Hexagons
            },
            type: [
              { type: 'polygon', polygon: { sides: 6 } }, // Hexagons
              { type: 'polygon', polygon: { sides: 5 } }, // Pentagons
              { type: 'polygon', polygon: { sides: 3 } }, // Triangles
              { type: 'star', star: { sides: 5, inset: 2 } }, // Stars
            ],
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;

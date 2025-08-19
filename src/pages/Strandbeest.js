import React from 'react';
import finalRobot from '../assets/proj-img/final_robot.jpg';
import gearClose from '../assets/proj-img/gear_close.jpeg';
import acrylicCutouts from '../assets/proj-img/acrylic_cutouts.jpeg';
import feetCad from '../assets/proj-img/feet_cad.png';
import printedFeet from '../assets/proj-img/printed_feet.jpeg';
import heroImg from '../assets/proj-img/strandbeest_hero.jpeg';
import oldRobot from '../assets/proj-img/old_robot_s.JPG';

function Strandbeest() {
  const feetImages = [
    { caption: "Old Robot", src: oldRobot },
    { caption: "Feet CAD", src: feetCad },
    { caption: "New Printed Feet", src: printedFeet },
  ];

  const linkageImages = [
    { caption: "Acrylic Cutouts", src: acrylicCutouts },
    { caption: "Final Robot", src: finalRobot },
    { caption: "Close-up of Gear System", src: gearClose },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Subtle blur overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            transform: 'scale(1.05)',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '2rem',
            color: 'white',
            textShadow: 'none',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 'bold' }}>Strandbeest</h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '5rem', marginRight: '5rem', fontSize: '1.1rem', lineHeight: '1.25' }}>
        <p className="mt-5">
          This was a revamp of a Strandbeest mechanism inspired by Theo Jansen. It consists of a system of linkages at specific proportions
          which together generates a smooth walking motion.
        </p>

        <h2>Improvements</h2>
        <p>
          This was a project funded and created by members of the T.U.R.T.L.E Robotics club at Texas A&M. The previous iteration had some
          issues we planned to fix. First, the feet were redesigned. Previously, 3D printed feet with bike tubing didn’t grip well. The new
          feet were 3D printed with embedded weights to help them stay parallel to the ground at the start of each step.
        </p>

        {/* Image Row - Feet improvements */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          {feetImages.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  height: '300px',
                  width: 'auto',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p>
          The next major improvement was replacing the plywood linkages with acrylic. Plywood linkages lacked stability and rigidity, and the
          plywood gears would skip unpredictably. Acrylic was chosen for its rigidity and ease of manufacturing. It was purchased from Home Depot
          and cut using the CO₂ laser cutter at the MEEN Rapid Prototyping Studio (RPS). Rusty old bearings were replaced with new ones to improve rotation.
        </p>

        {/* Image Row - Linkage improvements */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          {linkageImages.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  height: '300px',
                  width: 'auto',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strandbeest;

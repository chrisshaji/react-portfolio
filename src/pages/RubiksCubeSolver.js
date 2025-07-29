import React from 'react';
import basefail from "../assets/proj-img/basefail.jpg";
import baseplateprint from "../assets/proj-img/baseplateprint.jpg";
import breadboarding from "../assets/proj-img/breadboarding.png";
import motorinarch from "../assets/proj-img/motorinarch.jpg";
import rubixcad from "../assets/proj-img/rubixcad.png";
import heroimg from "../assets/img/project-img1.jpeg"; // ✅ fixed import path

function RubiksCubeSolver() {
  const designImages = [
    { caption: "Breadboarding the motors", src: breadboarding },
    { caption: "Motor screwed into the arch", src: motorinarch },
    { caption: "Assembly rendered in SolidWorks", src: rubixcad }
  ];

  const pimages = [
    { caption: "Base Plate Print ~24 hour", src: baseplateprint },
    { caption: "Failed due to poor adhesion :(", src: basefail }
  ];

  return (
    <div>
      {/* Hero Section with Blurred Background and Adjusted Scroll */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center -200px', // shifts image up
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            transform: 'scale(1.1)', // hide blur edge
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '2rem',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold' }}>
            Rubik's Cube Solver
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <h2 className="mt-5">Design Rationale</h2>
        <p>
          The motor and cube connectors were the first pieces to be designed and fabricated. These pieces had to be toleranced perfectly — too loose and they'd slip, too tight and removal would be hard. After a lot of testing and printing, I arrived at the perfect dimensions for a smooth fit. Screw holes were added as a backup for wear and vibration.
        </p>
        <p>
          The main design constraint was securely mounting each stepper motor to each cube face. The column pieces needed to support ~1 lb motors during high-speed movement. Caliper measurements and 8–10% tolerance were used, plus a honeycomb design for ventilation. Screw tabs were added for mounting.
        </p>
        <p>
          For the base plate and arch, I minimized filament use by hollowing patterns. Originally I planned to use neodymium magnets for arch removal, but they weren’t strong enough — screws and nuts worked better. The base plate allowed the columns and bottom motor to screw directly into place.
        </p>

        {/* Design Images Row */}
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
          {designImages.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  height: '350px',
                  width: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{item.caption}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-5">Fabrication</h2>
        <p>
          The enclosure, connectors, and motor holders were fully 3D printed on my Elegoo Neptune 3 Pro using PLA and sliced with Cura. The base plate took up the entire build volume and was the trickiest print. My first attempt failed due to poor tree support adhesion.
        </p>

        <h4>Print Settings:</h4>
        <ul>
          <li>Nozzle Temp: 210°C, Bed: 50°C</li>
          <li>10% infill on base plate with 3 walls</li>
          <li>15% infill and 2 walls on other parts</li>
          <li>Tree supports for the base plate</li>
        </ul>

        {/* Fabrication Images Row */}
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
          {pimages.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  height: '350px',
                  width: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px',
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

export default RubiksCubeSolver;

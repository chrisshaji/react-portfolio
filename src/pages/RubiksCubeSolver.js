import React from 'react';
// import images like: import image1 from '../assets/...';

function RubiksCubeSolver() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(/placeholder-hero.jpg)`, // Replace later
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
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
          {["Breadboarding the motors", "Motor screwed into the arch", "Assembly rendered in SolidWorks"].map((caption, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: '280px',
                  width: '275px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontStyle: 'italic',
                  color: '#666',
                }}
              >
                [Placeholder Image]
              </div>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{caption}</p>
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
          {["Base Plate Print ~24 hours", "Failed due to poor adhesion :("]
            .map((caption, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    height: '400px',
                    width: '300px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontStyle: 'italic',
                    color: '#666',
                  }}
                >
                  [Placeholder Image]
                </div>
                <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{caption}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RubiksCubeSolver;

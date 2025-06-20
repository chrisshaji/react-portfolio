import React from 'react';
// import image files later for production use

function Strandbeest() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(/placeholder-hero.jpg)`, // Replace with actual hero image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '2rem',
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold' }}>
            Strandbeest
          </h1>
        </div>
      </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
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
          {["Old robot", "Feet CAD", "New printed feet"].map((caption, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '260px',
                  height: '300px',
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
          {["Acrylic cutouts", "Final robot", "Close-up of gear system"].map((caption, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '260px',
                  height: '300px',
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

export default Strandbeest;

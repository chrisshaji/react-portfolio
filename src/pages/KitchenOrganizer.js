import React from 'react';
// import image files later for production use

function KitchenOrganizer() {
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
            Kitchen Organizer
          </h1>
        </div>
      </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <h2 className="mt-5">Design Rationale</h2>
        <p>
          My friend asked if I could make a drawer organizer for his kitchen to hold spatulas and cookware. We chose to 3D print it for cost-effectiveness and ease of fabrication.
          One constraint was the drawer size — the organizer had to be around 15 inches long. Since that exceeded the build volume of a typical printer, we split it into two pieces
          and connected them using snap-in joints.
        </p>

        {/* Image Row */}
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
          {["3D model of the part", "Test snap in joints", "Kitchen holder in use"].map((caption, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: i === 0 ? '390px' : '270px',
                  height: i === 0 ? '220px' : '355px',
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
          Designing the snap-in joints was trickier than expected. We tested different numbers of joints, lengths, hooks, and tolerances.
          Initially, we tried 4 snap-in joints, but they were hard to disconnect, so we switched to 2 per side.
        </p>
        <p>
          A surprising insight was that reducing thickness and increasing length made the joints more flexible and easier to use repeatedly.
          The final version was printed at the Texas A&M MEEN RPS using PLA (25% infill, 3 walls, tree supports).
        </p>

        {/* Final Exhibit Image */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div
            style={{
              width: '400px',
              height: '500px',
              backgroundColor: '#e0e0e0',
              borderRadius: '12px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontStyle: 'italic',
              color: '#666',
            }}
          >
            [Placeholder - Top-down view of the kitchen holder with utensils]
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
            Top-down view of the kitchen holder with some utensils
          </p>
        </div>
      </div>
    </div>
  );
}

export default KitchenOrganizer;

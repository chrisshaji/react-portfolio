import React from 'react';
import testSnapin from '../assets/proj-img/test_snapin.jpeg';
import topHolderView from '../assets/proj-img/top_holder_view.jpeg';
import fullHolder from '../assets/img/project-img4.jpeg';
import cadKitchenHolder from '../assets/proj-img/cad_kitchen_holder.png';

function KitchenOrganizer() {
  const images = [
    { caption: "3D model of the part", src: cadKitchenHolder },
    { caption: "Test snap in joints", src: testSnapin },
    { caption: "Kitchen holder in use", src: fullHolder },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(${fullHolder})`,
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
            backgroundImage: `url(${fullHolder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            transform: 'scale(1.0)',
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
          <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 'bold' }}>Kitchen Organizer</h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '5rem', marginRight: '5rem', fontSize: '1.1rem', lineHeight: '1.25' }}>
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
          {images.map((item, i) => (
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
          Designing the snap-in joints was trickier than expected. We tested different numbers of joints, lengths, hooks, and tolerances.
          Initially, we tried 4 snap-in joints, but they were hard to disconnect, so we switched to 2 per side.
        </p>
        <p>
          A surprising insight was that reducing thickness and increasing length made the joints more flexible and easier to use repeatedly.
          The final version was printed at the Texas A&M MEEN RPS using PLA (25% infill, 3 walls, tree supports).
        </p>

        {/* Final Exhibit Image */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src={topHolderView}
            alt="Top-down view of the kitchen holder with utensils"
            style={{
              width: '400px',
              height: '500px',
              borderRadius: '12px',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
            Top-down view of the kitchen holder with some utensils
          </p>
        </div>
      </div>
    </div>
  );
}

export default KitchenOrganizer;

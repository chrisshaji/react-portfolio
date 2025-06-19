import React from 'react';

function ScissorLift() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(/placeholder-hero.jpg)`, // Replace with real image later
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
            Scissor Lift
          </h1>
        </div>
      </div>

      {/* Placeholder Content */}
      <div style={{ margin: '5rem', textAlign: 'center' }}>
        <h2>🚧 Under Construction 🚧</h2>
        <p>
          This page is currently being written. More information and photos about the Scissor Lift project will be added soon!
        </p>
      </div>
    </div>
  );
}

export default ScissorLift;

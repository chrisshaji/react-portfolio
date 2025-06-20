import React from 'react';

function AutonomousRCCar() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(/placeholder-hero.jpg)`, // Replace with real hero image
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
            Autonomous RC Car
          </h1>
        </div>
      </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <p className="mt-5">
          The goal of this project is to make a self-driving autonomous RC car.
        </p>

        <h2>Why</h2>
        <p>
          We came across a competition called RoboRacer where teams build autonomous RC cars and compete for the fastest lap.
          While excited, we realized most teams were heavily sponsored and had budgets exceeding $5–6k.
          As college students, that was out of reach — but we were fortunate to receive $2.5k in funding from the CAST Lab at Texas A&M
          to bring this vision to life.
        </p>

        <h2>Components of the Car</h2>
        <p>
          We started with a 1/10 Traxxas ST Rally VXL Brushless RC car as the base. The body was removed and replaced with a custom top plate
          made from 1/8" acrylic, laser-cut at the MEEN RPS. This plate holds the NVIDIA Jetson Nano Orin, 360° LiDAR, VESC, powerboard,
          and other electronics. Custom 3D printed mounts were created for the NVIDIA Jetson Nano and the antenna, using M3 screws and standoffs for mounting.
        </p>

        {/* Image Row - Hardware Mounts */}
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
          {["Laser cut acrylic plate", "NVIDIA Jetson holder", "3D printed antenna mount"].map((caption, i) => (
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

        <h2 className="mt-5">Tuning the Car</h2>
        <p>
          The prebuilt RC car needed manual gear meshing due to gear skipping. Using a paper strip between the spur and pinion gears ensured
          correct spacing. Next, we tuned the VESC to smooth out acceleration around the track by adjusting its PID values in the VESC Tool.
        </p>

        {/* Image Row - Tuning */}
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
          {["Gear meshing", "PID tuning graph", "Final PID values"].map((caption, i) => (
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

        <h2 className="mt-5">Software Installation</h2>
        <p>
          We are currently installing all necessary software packages on the NVIDIA Jetson Nano to begin running control and perception stacks.
          <br />
          <em>&lt;more updates to come :)&gt;</em>
        </p>
      </div>
    </div>
  );
}

export default AutonomousRCCar;

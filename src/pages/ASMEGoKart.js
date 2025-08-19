import React from "react";
import goKartVideo from "../assets/video/Go-kart Video.mp4";
import steeringSupportImg from '../assets/proj-img/steering-column-support.png';
import frontsystem from '../assets/proj-img/front_system.jpg';
import knuckleweld from '../assets/proj-img/knuckle-weld.JPG';
import weldingsteering from '../assets/proj-img/welding-steering-knuckle.JPG';
import zipties from '../assets/proj-img/zipties.PNG';
import framelathe from '../assets/proj-img/frame-on-lathe.jpg';
import caliperbracket from '../assets/proj-img/caliper-bracket.PNG';
import enginemount from '../assets/proj-img/engine_mount.png';
import enginespring from '../assets/proj-img/enginespring.jpg';
import fengine from '../assets/proj-img/final_engine.jpg';
import diaweld from '../assets/proj-img/welding_diagram.png';
import fframe from '../assets/proj-img/front_frame.jpg';
import framepic from '../assets/proj-img/framepic.jpeg';
import asupport from '../assets/proj-img/asupport.png';
import rearweld from '../assets/proj-img/rearweld.png';
import fdraw from '../assets/proj-img/fdraw.png';
import tdraw from '../assets/proj-img/tdraw.png';
import rdraw from '../assets/proj-img/rdraw.png';
import ffea from '../assets/proj-img/ffea.png';
import cad from '../assets/proj-img/cad.png';
import heroImg from '../assets/proj-img/aesthethic-car.png';

function ASMEGoKart() {
  const paragraphStyle = { fontSize: '1.1rem', lineHeight: '1.25' };
  const captionStyle = { fontStyle: 'italic', marginTop: '0.5rem', fontSize: '1rem' };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(${heroImg})`,
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
           // textShadow: '0 2px 8px rgba(0,0,0,0.7)',
          }}
        >
          <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 'bold' }}>
            ASME Go-Kart 2024-25
          </h1>
        </div>
      </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <h2 className="mt-5">Initial Design Goals</h2>
        <p style={paragraphStyle}>
          We started off brainstorming ideas for our go-kart with two main goals in mind: maximum speed and good cornering. One factor that plays a
          major role in speed is having a low center of gravity. Our design had downward welds that would lower the middle section of the kart below
          the center of the wheels which effectively reduced the center of gravity. To improve aerodynamics, we optimized the spacing between components 
          like the engine, seat, and pedals while ensuring driver comfort. We also stayed under our $1300 budget.
        </p>

        {/* Top/Front/Right Drawings */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: tdraw, alt: 'Top Down View', caption: 'Top Down View'},
            {src: fdraw, alt: 'Front View', caption: 'Front View'},
            {src: rdraw, alt: 'Right View', caption: 'Right View'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.alt} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          We implemented Ackermann steering geometry to reduce tire slippage while cornering. Calculations involving turning radius, wheelbase, and wheel
          radius led to a 38° max steering angle and Ackermann ratio of 0.522. We also conducted FEA analysis to confirm the chassis could handle the total weight.
        </p>

        {/* FEA and CAD Images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: ffea, caption: 'FEA done in SolidWorks'},
            {src: cad, caption: 'SolidWorks CAD of the car'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-5">Fabrication Process</h2>
        <p style={paragraphStyle}>
          After finalizing our design, we fabricated the chassis by cutting pieces from a 24' square metal tube. These were MIG welded, with experienced team members
          handling the tougher angles. The angled welds can be seen in the picture and the ground clearance was only about 1.5" after putting the wheels on.
        </p>

        {/* Welding & Frame Images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: diaweld, caption: 'Rough Welding layout'},
            {src: framepic, caption: 'Frame in construction'},
            {src: fframe, caption: 'Front View of frame'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          We mounted the rear axle kit first, welding brackets and adjusting the frame to avoid interference with the sprocket. We replaced a horizontal
          bar with two angled supports to maintain integrity.
        </p>

        {/* Rear axle & Angled supports */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: asupport, caption: 'Angled support layout'},
            {src: rearweld, caption: 'Rear axle weld bracket'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          We then installed and upgraded a 6.5 HP Predator gas engine with new valve springs, flywheel, carburetor, intake, and exhaust. Installing the
          valve springs and removing the flywheel (with a 5-ton puller!) was a real challenge. Next, we welded mounts for the engine and seat using metal 
          tubing and drilled sheets with a milling machine.
        </p>

        {/* Engine Images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: enginespring, caption: 'Replacing the valve springs'},
            {src: fengine, caption: 'Final modded predator engine'},
            {src: enginemount, caption: 'Engine and seat mounts'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          For the brake system, a hydraulic brake kit was purchased from amazon. In order to attach the caliper to the rotor, we had to built a customized
          metal part that would be able to hold it in place that would go behind the kart. That part was welded to the frame and the caliper and was secure 
          enough for our use. We did have to brainstorm on ways on how to connect the pedal to the master cylinder as the cables were too short. A makeshift 
          system was put in place using two metal slabs and zipties and was more than sufficient for braking.
        </p>

        {/* Brake system images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: framelathe, caption: 'Drilling holes in the lathe'},
            {src: caliperbracket, caption: 'Brake caliper bracket'},
            {src: zipties, caption: 'DIY brake system'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          The steering system used a steel pipe as the steering rod which was connected to tie rods. The steering knuckle was initially welded at a slight 
          camber to test whether it would help better cornering. Lots of test-fitting and sanding was needed to get the smooth and even steering.
        </p>

        {/* Steering Images */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap', marginTop: '2rem' }}>
          {[{src: knuckleweld, caption: 'Preparing surface for welding'},
            {src: weldingsteering, caption: 'Welding Steering knuckles'},
            {src: frontsystem, caption: 'Full front steering setup'}].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <img src={item.src} alt={item.caption} style={{ height: '350px', width: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        <p style={paragraphStyle}>
          Finally, we added the chain and gas pedals for our first test. We found a few issues — sprocket alignment, low chain tension, and a snapped tie
          rod — which we addressed before race day. The reason that the tie rod snapped was because of the fact the steering column did not have enough
          structural integrity which made it easy for the driver to turn the kart more than it was supposed to. New tie rods were bought and installed and 
          the chain was tightened before the race day. 
        </p>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={steeringSupportImg} alt="Steering column support" style={{ maxWidth: '450px', width: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '1rem', color: '#ccc' }}>Steering support</p>
        </div>

        <p style={paragraphStyle}>
          On race day, the kart held up! We just had to re-tighten the CVT bolts between runs but the kart did not have any other problems. Huge shoutout to my 
          team — their collaboration and effort made this project both rewarding and fun.
        </p>

        <h2 className="mt-5">Video of Me Driving the Go-kart!</h2>
        <p style={paragraphStyle}>
          <video className="responsive-video" src={goKartVideo} controls />
        </p>
      </div>
    </div>
  );
}

export default ASMEGoKart;

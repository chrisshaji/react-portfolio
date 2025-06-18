import React from "react";
import goKartVideo from "../assets/video/Go-kart Video.mp4";
import steeringSupportImg from '../assets/proj-img/steering-column-support.png';
import frontsystem from '../assets/proj-img/front_system.jpg';
import knuckleweld from '../assets/proj-img/knuckle-weld.JPG';
import weldingsteering from '../assets/proj-img/welding-steering-knuckle.JPG';


function ASMEGoKart() {
  return (
    <div className="project-page container py-5">
      <h1 className="project-title">ASME Go Kart 2024–25</h1>
      <p>This was a very fun project where I got to work on creating a drivable Go-kart!</p>

      <h2 className="mt-5">Initial Design Goals</h2>
      <p>
        We started off brainstorming ideas for our go-kart with two main goals in mind: maximum speed and good cornering. One factor that plays a
        major role in speed is having a low center of gravity. Our design had downward welds that would lower the middle section of the kart below
        the center of the wheels which effectively reduced the center of gravity. To improve aerodynamics, we optimized the spacing between components 
        like the engine, seat, and pedals while ensuring driver comfort. We also stayed under our $1300 budget.
      </p>

      <p><em>[Sketches of car]</em></p>

      <p>
        We implemented Ackermann steering geometry to reduce tire slippage while cornering. Calculations involving turning radius, wheelbase, and wheel
        radius led to a 38° max steering angle and Ackermann ratio of 0.522. We also conducted FEA analysis to confirm the chassis could handle the total weight.
      </p>

      <p><em>[FEA screenshot], [CAD of car]</em></p>

      <h2 className="mt-5">Fabrication Process</h2>
      <p>
        After finalizing our design, we fabricated the chassis using a 24' metal tube. These were MIG welded, with experienced team members handling
        the tougher angles. All welds held up during testing.
      </p>

      <p><em>[Rough welding diagram], [Frame picture]</em></p>

      <p>
        We mounted the rear axle kit first, welding brackets and adjusting the frame to avoid interference with the sprocket. We replaced a horizontal
        bar with two angled supports to maintain integrity.
      </p>

      <p><em>[Angled support photo], [Mounting bracket weld]</em></p>

      <p>
        We then installed and upgraded a 6.5 HP Predator gas engine with new valve springs, flywheel, carburetor, intake, and exhaust. Installing the
        valve springs and removing the flywheel (with a 5-ton puller!) was a real challenge.
      </p>

      <p><em>[Engine front], [Spring installation], [Final modded engine]</em></p>

      <p>
        Next, we welded mounts for the engine and seat using metal tubing and drilled sheets with a milling machine. Brakes were mounted with a custom
        bracket and zip-tie assisted linkage to the master cylinder.
      </p>

      <p><em>[Lathe drilling], [Brake bracket], [Zip tie linkage photo]</em></p>

      <p>
        The steering system used a steel pipe as the steering rod which was connected to tie rods.The steering knuckle was initially welded at a slight 
        camber to test whether it would help better cornering. Lots of test-fitting and sanding was needed to get the smooth and even steering.
      </p>

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
  {[frontsystem, knuckleweld, weldingsteering].map((img, index) => (
    <div key={index} style={{ width: '250px', textAlign: 'center' }}>
      <img
        src={img}
        alt={`Image ${index + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          display: 'block',
          margin: '0 auto', 
        }}
      />
      <div style={{ height: '2rem', marginTop: '0.5rem' }}>
        <p style={{ fontStyle: 'italic', margin: 0 }}>
          {`Caption ${index + 1}`}
        </p>
      </div>
    </div>
  ))}
</div>




      <p>
        Finally, we added the chain and gas pedals for our first test. We found a few issues — sprocket alignment, low chain tension, and a snapped tie
        rod — which we addressed before race day. New tie rods were bought and installed and the chain was tightened before the race day. 
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <img
          src={steeringSupportImg}
          alt="Steering column support"
          style={{ maxWidth: '450px', width: '100%', borderRadius: '8px' }}
        />
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#ccc' }}>
          Steering support
        </p>
      </div>


      <p>
        On race day, the kart held up! We just had to re-tighten the CVT bolts between runs. Huge shoutout to my team — the collaboration and effort made
        this project both rewarding and fun.
      </p>

      <h2 className="mt-5">Video of Me Driving the Go-kart!</h2>
      <p>
      <video className="responsive-video" src={goKartVideo} controls />

      </p>
    </div>
  );
}

export default ASMEGoKart;
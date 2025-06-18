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

      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={tdraw}
              alt="Knuckle weld"
              style={{
                height: '350px',            
                width: 'auto',              
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Top Down View</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={fdraw}
              alt="Welding steering"
              style={{
                height: 'auto',
                maxHeight: '350px',        
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Front View</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img
              src={rdraw}
              alt="Front steering"
              style={{
                height: 'auto',
                maxHeight: '350px',       
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Right View</p>
          </div>
        </div>


      <p>
        We implemented Ackermann steering geometry to reduce tire slippage while cornering. Calculations involving turning radius, wheelbase, and wheel
        radius led to a 38° max steering angle and Ackermann ratio of 0.522. We also conducted FEA analysis to confirm the chassis could handle the total weight.
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
        <div style={{ textAlign: 'center' }}>
          <img
            src={ffea}
            alt="Angled support"
            style={{
              height: '350px',            
              width: 'auto',
              borderRadius: '12px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>FEA done in SolidWorks</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src={cad}
            alt="Rear axle weld"
            style={{
              height: 'auto',
              maxHeight: '350px',         
              width: 'auto',
              borderRadius: '12px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>SolidWorks CAD of the car</p>
        </div>
      </div>

      <h2 className="mt-5">Fabrication Process</h2>
      <p>
        After finalizing our design, we fabricated the chassis by cutting pieces from a 24' square metal tube. These were MIG welded, with experienced team members
        handling the tougher angles. The angled welds can be seen in the picture and the ground clearance was only about 1.5" after putting the wheels on.
      </p>

      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={diaweld}
              alt="Knuckle weld"
              style={{
                height: '350px',            
                width: 'auto',              
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Rough Welding layout</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={framepic}
              alt="Welding steering"
              style={{
                height: 'auto',
                maxHeight: '350px',        
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Frame in construction</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img
              src={fframe}
              alt="Front steering"
              style={{
                height: 'auto',
                maxHeight: '350px',       
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Front View of frame</p>
          </div>
        </div>

      <p>
        We mounted the rear axle kit first, welding brackets and adjusting the frame to avoid interference with the sprocket. We replaced a horizontal
        bar with two angled supports to maintain integrity.
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
        <div style={{ textAlign: 'center' }}>
          <img
            src={asupport}
            alt="Angled support"
            style={{
              height: '350px',            
              width: 'auto',
              borderRadius: '12px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Angled support layout</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img
            src={rearweld}
            alt="Rear axle weld"
            style={{
              height: 'auto',
              maxHeight: '350px',         
              width: 'auto',
              borderRadius: '12px',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Rear axle weld bracket</p>
        </div>
      </div>

      <p>
        We then installed and upgraded a 6.5 HP Predator gas engine with new valve springs, flywheel, carburetor, intake, and exhaust. Installing the
        valve springs and removing the flywheel (with a 5-ton puller!) was a real challenge. Next, we welded mounts for the engine and seat using metal 
        tubing and drilled sheets with a milling machine.
      </p>

      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={enginespring}
              alt="Replacing the valve spings"
              style={{
                height: '350px',            
                width: 'auto',              
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Replacing the valve spings</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={fengine}
              alt="Final modded predator engine"
              style={{
                height: 'auto',
                maxHeight: '350px',        
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Final modded predator engine</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img
              src={enginemount}
              alt="Engine and seat mounts"
              style={{
                height: 'auto',
                maxHeight: '350px',       
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Engine and seat mounts</p>
          </div>
        </div>

      <p>
        For the brake system, a hydraulic brake kit was purchased from amazon. In order to attach the caliper to the rotor, we had to built a customized
        metal part that would be able to hold it in place that would go behind the kart. That part was welded to the frame and the caliper and was secure 
        enough for our use. We did have to brainstorm on ways on how to connect the pedal to the master cylinder as the cables were too short. A makeshift 
        system was put in place using two metal slabs and zipties and was more than sufficient for braking.
      </p>

      <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '30px',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={framelathe}
              alt="Knuckle weld"
              style={{
                height: '350px',            
                width: 'auto',              
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Drilling holes in the lathe</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={caliperbracket}
              alt="Welding steering"
              style={{
                height: 'auto',
                maxHeight: '350px',        
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Brake caliper bracket</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img
              src={zipties}
              alt="Front steering"
              style={{
                height: 'auto',
                maxHeight: '350px',       
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>DIY brake system</p>
          </div>
        </div>

      <p>
        The steering system used a steel pipe as the steering rod which was connected to tie rods. The steering knuckle was initially welded at a slight 
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
          }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={knuckleweld}
              alt="Knuckle weld"
              style={{
                height: '350px',            
                width: 'auto',              
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Preparing surface for welding</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={weldingsteering}
              alt="Welding steering"
              style={{
                height: 'auto',
                maxHeight: '350px',        
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Welding Steering knuckles</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <img
              src={frontsystem}
              alt="Front steering"
              style={{
                height: 'auto',
                maxHeight: '350px',       
                width: 'auto',
                borderRadius: '12px',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Full front steering setup</p>
          </div>
        </div>

      <p>
        Finally, we added the chain and gas pedals for our first test. We found a few issues — sprocket alignment, low chain tension, and a snapped tie
        rod — which we addressed before race day. The reason that the tie rod snapped was because of the fact the the steering column did not have enough
        structural integrity which made it easy for the driver to turn the kart more than it was supposed to. New tie rods were bought and installed and 
        the chain was tightened before the race day. 
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
        On race day, the kart held up! We just had to re-tighten the CVT bolts between runs but the kart did not have any other problems. Huge shoutout to my 
        team — their collaboration and effort made this project both rewarding and fun.
      </p>

      <h2 className="mt-5">Video of Me Driving the Go-kart!</h2>
      <p>
      <video className="responsive-video" src={goKartVideo} controls />

      </p>
    </div>
  );
}

export default ASMEGoKart;
import React from 'react';

import acrylic from '../assets/proj-img/acrylic_pic.jpg';
import curr_exhibit from '../assets/proj-img/current_exhibit.jpg';
import cutting_wood from '../assets/proj-img/cutting_wood.jpg';
import old_exhibit from '../assets/proj-img/old_exhibit.jpg';
import spray_paint from '../assets/proj-img/spray_paint_piece.jpg';

function ChildrensMuseumExhibit() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '60vh',
          backgroundImage: `url(/placeholder-hero.jpg)`, // Replace with hero image
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
            Children's Museum Exhibit
          </h1>
        </div>
      </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <h2 className="mt-5">Brainstorming</h2>
        <p>
          We were tasked with revamping the whole right side of the exhibit as the kids did not find it engaging. It was just a ball going down the spiral path shown below.
          We were given complete creative freedom as long as the budget stayed under $500. After some brainstorming, we came up with a few ideas:
          replace the spiral path with a box, attach sliders so that you can control the path of the ball as it comes down. The ball would make its way to a ball catch that we
          remade since the old one was broken. We decided to build an Archimedes screw to show kids how the ancient Greeks managed to lift water uphill without using a pump.
        </p>

        {/* Old Exhibit Image */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <div
            style={{
              width: '600px',
              height: 'auto',
              backgroundColor: '#e0e0e0',
              borderRadius: '12px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontStyle: 'italic',
              color: '#666',
              padding: '2rem',
            }}
          >
            [Placeholder - Picture of the previous exhibit]
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Picture of the previous exhibit</p>
        </div>

        <h2>Design and Fabrication</h2>
        <p>
          For the walls, we bought acrylic from Home Depot and used the Fischer Engineering Design Center (FEDC) @ Zach to laser cut the parts.
          There were two sets of fixtures that would hold the acrylic in place (top and bottom), made from wood.
          We used a table saw to cut divots into the blocks and slid in the acrylic, securing it with acrylic bonder.
        </p>
        <p>
          For the sliders, there were 3 components: the outer piece, the inner pieces, and the sliding platform itself.
          They were 3D printed with careful tolerances and spray-painted for color. The ball catch and Archimedes screw were also 3D printed.
        </p>

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
          {["Acrylic cut outs", "Spray painted sliders", "Working on the wooden fixtures"].map((caption, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: '355px',
                  width: '250px',
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
            [Placeholder - Picture of the current exhibit]
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>Picture of the current exhibit</p>
        </div>
      </div>
    </div>
  );
}

export default ChildrensMuseumExhibit;

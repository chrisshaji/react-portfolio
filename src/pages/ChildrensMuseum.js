import React from 'react';

import acrylic from '../assets/proj-img/acrylic_pic.jpg';
import curr_exhibit from '../assets/proj-img/current_exhibit.jpg';
import cutting_wood from '../assets/proj-img/cutting_wood.jpg';
import old_exhibit from '../assets/proj-img/old_exhibit.jpg';
import spray_paint from '../assets/proj-img/spray_paint_piece.jpg';
import heromue from '../assets/img/project-img2.jpg';
function ChildrensMuseumExhibit() {
  const fabricationImages = [
    { src: acrylic, caption: "Acrylic cut outs" },
    { src: spray_paint, caption: "Spray painted sliders" },
    { src: cutting_wood, caption: "Working on the wooden fixtures" },
  ];

  const paragraphStyle = { fontSize: '1.1rem', lineHeight: '1.25' };
  const captionStyle = { fontStyle: 'italic', marginTop: '0.5rem', fontSize: '1rem' };

  return (
    <div>
      {/* Hero Section */}
<div
  style={{
    position: 'relative',
    height: '60vh',
    backgroundImage: `url(${heromue})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  }}
>
  {/* Blur overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${heromue})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(1.5px)', // stronger blur
        transform: 'scale(1.1)', // prevents edges showing after blur
        zIndex: 1,
      }}
    />

    <div
      style={{
        position: 'absolute',
        bottom: '0.75rem',
        left: '2rem',
        color: 'white',
        textShadow: '0 2px 8px rgba(0,0,0,0.7)', // improves readability
        zIndex: 2,
      }}
    >
      <h1 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 'bold' }}>
        Children's Museum Exhibit
      </h1>
    </div>
  </div>

      <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
        <h2 className="mt-5">Brainstorming</h2>
        <p style={paragraphStyle}>
          We were tasked with revamping the whole right side of the exhibit as the kids did not find it engaging. It was just a ball going down the spiral path shown below.
          We were given complete creative freedom as long as the budget stayed under $500. After some brainstorming, we came up with a few ideas:
          replace the spiral path with a box, attach sliders so that you can control the path of the ball as it comes down. The ball would make its way to a ball catch that we
          remade since the old one was broken. We decided to build an Archimedes screw to show kids how the ancient Greeks managed to lift water uphill without using a pump.
        </p>

        {/* Old Exhibit Image */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          {old_exhibit ? (
            <img
              src={old_exhibit}
              alt="Previous exhibit"
              style={{ width: '600px', borderRadius: '12px' }}
            />
          ) : (
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
          )}
          <p style={captionStyle}>Picture of the previous exhibit</p>
        </div>

        <h2>Design and Fabrication</h2>
        <p style={paragraphStyle}>
          For the walls, we bought acrylic from Home Depot and used the Fischer Engineering Design Center (FEDC) @ Zach to laser cut the parts.
          There were two sets of fixtures that would hold the acrylic in place (top and bottom), made from wood.
          We used a table saw to cut divots into the blocks and slid in the acrylic, securing it with acrylic bonder.
        </p>
        <p style={paragraphStyle}>
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
          {fabricationImages.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{ height: '355px', width: '250px', borderRadius: '12px', objectFit: 'cover' }}
                />
              ) : (
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
              )}
              <p style={captionStyle}>{item.caption}</p>
            </div>
          ))}
        </div>

        {/* Final Exhibit Image */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          {curr_exhibit ? (
            <img
              src={curr_exhibit}
              alt="Current exhibit"
              style={{ width: '400px', height: '500px', borderRadius: '12px', objectFit: 'cover' }}
            />
          ) : (
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
          )}
          <p style={captionStyle}>Picture of the current exhibit</p>
        </div>
      </div>
    </div>
  );
}

export default ChildrensMuseumExhibit;

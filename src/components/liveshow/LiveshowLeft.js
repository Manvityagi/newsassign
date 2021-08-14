import React from 'react';

const LiveshowLeft = () => {
  return (
    <div style={{ flex: 1 }}>
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '100%', height: '300px' }}
      />
      <div>timestamps</div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div>Heading</div>
        <div>badge</div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        consequatur quia quod facilis explicabo, earum voluptas quidem fuga at
        illum veniam alias aut, dolore ad distinctio totam labore porro, laborum
        repellendus blanditiis nam minus facere. Recusandae doloremque
        laboriosam beatae rem culpa, dolore expedita? Odit cum error quia earum
        quidem dolore.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div>badges</div>
        <div>badges</div>
        <div>badges</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Footer Left</div>
        <div>Footer right</div>
      </div>
    </div>
  );
};

export default LiveshowLeft;

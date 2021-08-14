import React from 'react';

const LiveshowRight = () => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div>Header left</div>
        <div>Header Right</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div>Week days</div>
        <div>Week days</div>
        <div>Week days</div>
        <div>Week days</div>
        <div>Week days</div>
        <div>Week days</div>
      </div>
      {/* this div is repeated 3 times */}
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          style={{ width: '30%', height: '100px' }}
        />
        <div>
          <div>image header</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            placeat.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
            <div>badges</div>
            <div>badges</div>
            <div>badges</div>
          </div>
        </div>
        <div>
          <div>badge</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          style={{ width: '30%', height: '100px' }}
        />
        <div>
          <div>image header</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            placeat.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
            <div>badges</div>
            <div>badges</div>
            <div>badges</div>
          </div>
        </div>
        <div>
          <div>badge</div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          style={{ width: '30%', height: '100px' }}
        />
        <div>
          <div>image header</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            placeat.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
            <div>badges</div>
            <div>badges</div>
            <div>badges</div>
          </div>
        </div>
        <div>
          <div>badge</div>
        </div>
      </div>
    </div>
  );
};

export default LiveshowRight;

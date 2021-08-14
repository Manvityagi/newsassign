import React from 'react';
import LiveshowLeft from './LiveshowLeft';
import LiveshowRight from './LiveshowRight';

const Liveshow = () => {
  return (
    <>
      Live News
      <div style={{ display: 'flex' }}>
        <LiveshowLeft />
        <LiveshowRight />
      </div>
    </>
  );
};

export default Liveshow;

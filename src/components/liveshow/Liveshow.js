import React from 'react';
import LiveshowLeft from './LiveshowLeft';
import LiveshowRight from './LiveshowRight';
import './liveshow.css'

const Liveshow = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"#F4F4F4"}}>
      <div className="live"><span className="bullet">Live Shows</span></div>
      <div style={{ display: 'flex' }}>
        <LiveshowLeft />
        <div className="v1"></div>
        <LiveshowRight />
        
      </div>
    </div>
  );
};

export default Liveshow;

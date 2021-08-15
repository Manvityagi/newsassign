import React from 'react';

const LiveshowRight = () => {
  return (
    <div style={{ flex: 1 }} style={{backgroundColor:"white"}}>
      <div className="container-fluid" style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div className="schedule">Live Schedule</div>
        <div className="schedule">View Live Schedule</div>
      </div>
      <div className="week container-fluid" style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>
      {/* this div is repeated 3 times */}
      
      <div className="container-fluid imageselect" style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <img
          src='https://picsum.photos/seed/picsum/200/300'
          style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
        />
        <div style={{paddingLeft:"10px"}}>
          <h5 style={{fontSize:"18px"}}>The lallantop Episode 5</h5>
          <p style={{fontSize:"14px",textAlign:"left",width:"300px"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            placeat.
          </p>
          <div className="imagesBadge" style={{ display: 'flex' }}>
            <p>#Police</p>
            <p>#Bihar</p>
            <p>#Politics</p>
          </div>
        </div>
        <div >
        <div className="notifyme">Notify me</div>
         <div className="time">start time</div>
         <div className="am">5:30 PM</div>
         <div className="time">Duration</div>
         <div className="am">20 Minutes</div>
        </div>
      </div>
      <hr style={{marginLeft:"20px",marginRight:"20px",color:"gray"}}/>
      <div className="container-fluid imageselect" style={{ display: 'flex', justifyContent: 'space-between ' }}>
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
      />
      <div style={{paddingLeft:"10px"}}>
        <h5 style={{fontSize:"18px"}}>The lallantop Episode 5</h5>
        <p style={{fontSize:"14px",textAlign:"left",width:"300px"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
          placeat.
        </p>
        <div className="imagesBadge" style={{ display: 'flex' }}>
          <p>#Police</p>
          <p>#Bihar</p>
          <p>#Politics</p>
        </div>
      </div>
      <div >
      <div className="notifyme">Notify me</div>
       <div className="time">start time</div>
       <div className="am">5:30 PM</div>
       <div className="time">Duration</div>
       <div className="am">20 Minutes</div>
      </div>
    </div>
    <hr style={{marginLeft:"20px",marginRight:"20px",color:"gray"}}/>
    <div className="container-fluid imageselect" style={{ display: 'flex', justifyContent: 'space-between ' }}>
    <img
      src='https://picsum.photos/seed/picsum/200/300'
      style={{ width: '150px', height: '120px',borderRadius:"4px" ,marginTop:"4px" }}
    />
    <div style={{paddingLeft:"10px"}}>
      <h5 style={{fontSize:"18px"}}>The lallantop Episode 5</h5>
      <p style={{fontSize:"14px",textAlign:"left",width:"300px"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
        placeat.
      </p>
      <div className="imagesBadge" style={{ display: 'flex' }}>
        <p>#Police</p>
        <p>#Bihar</p>
        <p>#Politics</p>
      </div>
    </div>
    <div >
    <div className="notifyme">Notify me</div>
     <div className="time">start time</div>
     <div className="am">5:30 PM</div>
     <div className="time">Duration</div>
     <div className="am">20 Minutes</div>
    </div>
  </div>
      </div>
      
  );
};

export default LiveshowRight;

import React from 'react';

const LiveshowLeft = () => {
  return (
    <div className="container" style={{ flex: 1,backgroundColor:"white" }} >
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '95%', height: '300px',marginTop:"20px",borderRadius:"4px" }}
      />
      <div style={{marginTop:"10px",marginBottom:"20px"}}>
      <div>13:45</div>
      <div style={{ display: 'flex', justifyContent: 'space-between ' }}>
        <h2 style={{fontSize:"18px"}}>The LallanTop Show: Episode 26</h2>
        <div className="ongoing" style={{marginRight:"35px",borderRadius:"4px",padding:"4px"}}>ONGOING</div>
      </div>
      </div>
     
      <p style={{textAlign:"justify",marginRight:"30px"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        consequatur quia quod facilis explicabo, earum voluptas quidem fuga at
        illum veniam alias aut, dolore ad distinctio totam labore porro, laborum
       
      </p>
      <div className="badges" style={{ display: 'flex' }}>
        <a>#Police</a>
        <a>#Bihar</a>
        <a>#Politics</a>
      </div>
      
      <div style={{ display: 'flex' ,marginLeft:"0px"}} >
      <p style={{marginRight:"30px"}}>7:18 PM</p>
      <li className="l" style={{marginRight:"30px"}}>January 22 2021</li>
      <li className="l">232</li>
      </div>
    </div>
  );
};

export default LiveshowLeft;

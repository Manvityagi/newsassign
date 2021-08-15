import React from 'react';
import tab from '../../Images/Assets-LT/tab.png'
import share from '../../Images/Assets-LT/share.png'

const BusinessBottomItem = () => {
  return (
    <div className="container-fluid " style={{ flex: 1,marginTop:"80px" }}>
    <img className="container "
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '100%', height: '300px' }}
      />
      <div className="container mt-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{display:"flex"}}><img style={{width:"20px",height:"20px",marginRight:"5px"}}src={share}/>232</div>
        <div >
        <img src={share} style={{width:"20px",height:"20px",marginRight:"10px"}}/>
        <img src={tab} style={{width:"20px",height:"20px"}}/>
        </div>
      </div>
      <div className="container mt-2" style={{fontSize:"15px",fontWeight:"500"}}>
        Image header - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis, sequi.
      </div>
      <p className="container mt-2" style={{fontSize:"13px"}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
        autem.
      </p>
      <div className="imagesBadge container" style={{ display: 'flex' }}>
      <p>#Police</p>
      <p>#Bihar</p>
      <p>#Politics</p>
      </div>
      <div className="container" style={{ display: 'flex' ,marginLeft:"0px"}} >
      <p style={{marginRight:"30px"}}>7:18 PM</p>
      <li className="l" style={{marginRight:"30px"}}>January 22 2021</li>
      <li className="l">232</li>
      </div>
    </div>
  );
};

export default BusinessBottomItem;

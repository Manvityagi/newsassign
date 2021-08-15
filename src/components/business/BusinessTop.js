import React from 'react';
import share from '../../Images/Assets-LT/share.png'
import tab from '../../Images/Assets-LT/tab.png'
import heart from '../../Images/Assets-LT/heart.png'

const BusinessTop = () => {
  return (
    // caraousal
    <div className="container-fluid " style={{ display: 'flex',backgroundColor:"white" }}>
    <img className="container-fluid mt-5 "
      src='https://picsum.photos/seed/picsum/200/300'
      style={{ width: '100%', height: '250px',borderRadius:"8px" }}
    />
    <div>
      <div className="mt-5 ml-0" style={{ display: 'flex' }}>
        <div style={{display:"flex"}}><img style={{width:"20px",height:"20px",marginRight:"5px"}}src={share}/>232</div>
       
        <div style={{ display: 'flex', justifyContent: 'space-between',marginLeft:"600px" }}>
        <div style={{marginRight:"20px"}}><img style={{width:"30px",height:"30px"}} src={share}/></div>
        <div style={{marginRight:"20px"}}><img style={{width:"20px",height:"30px"}} src={tab}/></div>
        <div className="takepoll" >Take Poll</div>
        </div>
      </div>
     
      <h5>News heading</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
        harum quia delectus incidunt fuga maiores animi deleniti quas dolorem
        tempore officia explicabo qui architecto consectetur, dolores et omnis
        veniam dignissimos praesentium facilis inventore totam provident
        mollitia! Autem voluptas nam laborum unde qui aspernatur soluta labore
        perferendis quibusdam, vel nobis?
      </p>
       <div className="imagesBadge" style={{ display: 'flex' }}>
      <p>#Police</p>
      <p>#Bihar</p>
      <p>#Politics</p>
      </div>
      <div style={{justifyContent:"space-between",display:"flex"}}>
      <div style={{ display: 'flex' ,marginLeft:"0px"}} >
      <p style={{marginRight:"30px"}}>7:18 PM</p>
      <li className="l" style={{marginRight:"30px"}}>January 22 2021</li>
      <li className="l">232</li>
      </div>
      <div className="heart" style={{marginRight:"30px",marginTop:"-10px"}} ><img style={{width:"30px",height:"30px",marginRight:"60px"}} src={heart}/></div>
      </div>
      
    </div>
  </div>
  );
};

export default BusinessTop;
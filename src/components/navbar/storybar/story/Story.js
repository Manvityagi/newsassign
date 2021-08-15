import React from 'react';
import './story.css'

const Story = () => {
  return (
    <div>
      <div className="outerimg" style={{marginBottom:"30px"}}>
        <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '70px', height: '70px', borderRadius: '50%' ,marginRight:"25px",border:"2px solid pink",marginLeft:"4px",marginTop:"5px",marginRight:"3px"}}
      />
      </div>
    </div>
  );
};

export default Story;

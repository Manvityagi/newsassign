import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './story.css'


const Story = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const story = async () => {
      const res = await axios.get('/appapi/lt/topstories');

      setContent(res.data);
      console.log(content);
    };

    story();
  }, []);
  console.log(content);
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

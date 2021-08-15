import React from 'react';
import Story from './story/Story';

const StoryBar = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"#F4F4F4"}}>
    <p>Stories</p>
    <div  style={{ display: 'flex' }}>
      
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
    </div>
    
  );
};

export default StoryBar;

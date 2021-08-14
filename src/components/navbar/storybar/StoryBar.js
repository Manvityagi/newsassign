import React from 'react';
import Story from './story/Story';

const StoryBar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Story />
      <Story />
    </div>
  );
};

export default StoryBar;

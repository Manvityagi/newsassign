import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Story from './story/Story';

const StoryBar = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const story = async () => {
      const res = await axios.get('/appapi/lt/topstories');
      setContent(res.data.data.splice(0, 13));
    };

    story();
  }, []);

  return (
    <div className='container-fluid' style={{ backgroundColor: '#F4F4F4' }}>
      <p>Stories</p>
      <div style={{ display: 'flex' }}>
        {content.map((item) => (
          <Story
            image={item.n_small_image}
            key={item.n_id}
            title={item.n_title}
            link={item.n_share_link}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryBar;

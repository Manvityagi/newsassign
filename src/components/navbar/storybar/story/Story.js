import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
    </div>
  );
};

export default Story;

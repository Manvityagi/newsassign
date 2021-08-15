import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsBottomItem from './NewsBottomItem';

const NewsBottom = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await axios.get('/appapi/lt/category/news');
      setContent(res.data.data.news.splice(0, 3));
    };

    fetchContent();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      {content.map((item) => (
        <NewsBottomItem key={item.n_id} item={item} />
      ))}
    </div>
  );
};

export default NewsBottom;

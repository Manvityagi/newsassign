import React from 'react';
import NewsBottomItem from './NewsBottomItem';

const NewsBottom = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <NewsBottomItem />
      <NewsBottomItem />
      <NewsBottomItem />
    </div>
  );
};

export default NewsBottom;

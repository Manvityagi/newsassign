import React from 'react';

const NewsBottomItem = () => {
  return (
    <div style={{ flex: 1 }}>
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '100%', height: '300px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>timestamps</div>
        <div>icons</div>
      </div>
      <div>
        Image header - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis, sequi.
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
        autem.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>badge</div>
        <div>badge</div>
        <div>badge</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>footer left</div>
        <div>footer right - like icon</div>
      </div>
    </div>
  );
};

export default NewsBottomItem;

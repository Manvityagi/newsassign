import React from 'react';

const NewsTop = () => {
  return (
    // caraousal
    <div style={{ display: 'flex' }}>
      <img
        src='https://picsum.photos/seed/picsum/200/300'
        style={{ width: '100%', height: '300px' }}
      />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>icons</div>
          <div>icons</div>
          <div>icons</div>
        </div>
        <div>News heading</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima
          harum quia delectus incidunt fuga maiores animi deleniti quas dolorem
          tempore officia explicabo qui architecto consectetur, dolores et omnis
          veniam dignissimos praesentium facilis inventore totam provident
          mollitia! Autem voluptas nam laborum unde qui aspernatur soluta labore
          perferendis quibusdam, vel nobis?
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
    </div>
  );
};

export default NewsTop;

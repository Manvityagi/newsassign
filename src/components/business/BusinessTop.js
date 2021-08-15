import React, { useEffect, useState } from 'react';
import axios from 'axios';
import share from '../../Images/Assets-LT/share.png';
import tab from '../../Images/Assets-LT/tab.png';
import heart from '../../Images/Assets-LT/heart.png';

const BusinessTop = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get('/appapi/lt/category/videos');
      setVideo(res.data.data.video[1]);
    };

    fetchVideo();
  }, []);

  return (
    // caraousal
    <div
      className='container-fluid '
      style={{ display: 'flex', backgroundColor: 'white' }}
    >
      <img
        className='container-fluid mt-5 '
        src={video.v_large_image}
        style={{
          width: '100%',
          height: '250px',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => window.open(video.v_share_url, '_blank')}
      />
      <div>
        <div className='mt-5' style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <img
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
              src={share}
            />
            {video.v_view_count}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '600px',
            }}
          >
            <div style={{ marginRight: '20px' }}>
              <img style={{ width: '30px', height: '30px' }} src={share} />
            </div>
            <div style={{ marginRight: '20px' }}>
              <img style={{ width: '20px', height: '30px' }} src={tab} />
            </div>
            <div className='takepoll'>Take Poll</div>
          </div>
        </div>

        <h5>{video.v_title}</h5>
        <p>{video.v_short_desc}</p>
        <div className='imagesBadge' style={{ display: 'flex' }}>
          <p>#Police</p>
          <p>#Bihar</p>
          <p>#Politics</p>
        </div>
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <div style={{ display: 'flex', marginLeft: '0px' }}>
            <p style={{ marginRight: '30px' }}>
              {video.v_updated_datetime?.substring(11) || ''}
            </p>
            <li className='l' style={{ marginRight: '30px' }}>
              {video.v_updated_datetime?.substring(0, 10) || ''}
            </li>
            <li className='l'>{video.v_duration}</li>
          </div>
          <div
            className='heart'
            style={{ marginRight: '30px', marginTop: '-10px' }}
          >
            <img
              style={{ width: '30px', height: '30px', marginRight: '60px' }}
              src={heart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTop;

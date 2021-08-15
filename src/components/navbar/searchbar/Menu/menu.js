import React,{useState,useEffect} from 'react';
import './menu.css';
import Submenu from './SubMenu/submenu';
import axios from 'axios';

const menu = ({ business, news, liveshow, home ,search}) => {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [content, setContent] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchContent = async () => {
      const res = await axios.get('/appapi/lt/horizontal_menu');
      setContent(res.data.data.horizontal_menu);
      console.log(res.data.data.horizontal_menu);
    };
    
    fetchContent();
  }, []);
  

  
  return (
    <div
      className='container-fluid'
      style={{ marginTop: '30px', padding: '0px' }}
    >
      <div className='navbar'>
        <a className={home && 'activeS'} style={{borderRadius: "5px 0px 0px 5px" }}  href='/'>
          <i className='fa fa-fw fa-home'></i> Home
        </a>
        <a href='/news' className={news && 'activeS'}>
          <i className='fa fa-fw fa-search'></i> News
        </a>
        <a href='/business' className={business && 'activeS'}>
          <i className='fa fa-fw fa-user'></i> Business
        </a>
        <a href='/liveshow' className={liveshow && 'activeS'}>
          <i className='fa fa-fw fa-search'></i> Live Show
        </a>
        <a href='/news'>
          <i className='fa fa-fw fa-envelope'></i> News
        </a>
        <a href='/business'>
          <i className='fa fa-fw fa-user'></i> Business
        </a>
        <a href='/liveshow'>
          <i className='fa fa-fw fa-search'></i> LiveShow
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-envelope'></i> News
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-user'></i> Business
        </a>
      </div>
      {/*{content.map((item)=>(
      //   <div>{item.id}</div>
      // ))}*/}
      <Submenu />
    </div>
  );
};

export default menu;

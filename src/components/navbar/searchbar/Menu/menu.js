import React from 'react';
import './menu.css';
import Submenu from './SubMenu/submenu';

const menu = ({ business, news, liveshow, home }) => {
  return (
    <div
      className='container-fluid'
      style={{ marginTop: '30px', padding: '0px' }}
    >
      <div className='navbar'>
        <a className={home && 'activeS'} href='/'>
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
        <a href='#'>
          <i className='fa fa-fw fa-envelope'></i> Contact
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-user'></i> Login
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-search'></i> Search
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-envelope'></i> Contact
        </a>
        <a href='#'>
          <i className='fa fa-fw fa-user'></i> Login
        </a>
      </div>
      <Submenu />
    </div>
  );
};

export default menu;

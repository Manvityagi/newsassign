import React from 'react';
import SearchBar from './searchbar/SearchBar';
import StoryBar from './storybar/StoryBar';
import header from '../../Images/Assets-LT/Lallantop.jpg';
import './navbar.css';
import heading from '../../Images/Assets-LT/heading.jpg';

const Navbar = ({ business, news, liveshow, home }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={header} className='header' />
        <img src={heading} className='heading' />
      </div>
      <SearchBar
        business={business}
        news={news}
        liveshow={liveshow}
        home={home}
      />
      <StoryBar />
    </div>
  );
};

export default Navbar;

import React from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faCoffee,
  faSearch,
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import noti from '../../../Images/Assets-LT/Vector.png';
import Menu from '../searchbar/Menu/menu';

const SearchBar = ({ business, news, liveshow, home }) => {
  return (
    <div className='container-fluid'>
      <span>
        <FontAwesomeIcon className='hamburger1' icon={faBars} size='2x' />
      </span>
      <input type='text' placeholder='Search news,videos audios and hashtags' />
      <img src={noti} className='notify' />
      <Menu business={business} news={news} liveshow={liveshow} home={home} />
    </div>
  );
};

export default SearchBar;

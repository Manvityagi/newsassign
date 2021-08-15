import React, { useState } from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import noti from '../../../Images/Assets-LT/Vector.png';
import Menu from '../searchbar/Menu/menu';

const SearchBar = ({ business, news, liveshow, home }) => {

  const [search,setSearch]=useState("");

  const onChange=(e)=>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className='container-fluid searchbar'>
      <span>
        <FontAwesomeIcon className='hamburger1' icon={faBars} size='2x' />
      </span>
      <input type='text' placeholder='Search news,videos audios and hashtags'  onChange={onChange} />
      <img  src={noti} className='notify' />
      <Menu business={business} news={news} liveshow={liveshow} home={home} search={search} />
    </div>
  );
};

export default SearchBar;

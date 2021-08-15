import React from 'react'
import './menu.css';
import { NavLink } from 'react-router-dom';
import Submenu from './SubMenu/submenu';

const menu = () => {
    return (
        <div className="container-fluid" style={{marginTop:"30px",padding:"0px"}}>
        <div className="navbar">
            <a className="activeS" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="/news"><i className="fa fa-fw fa-search"></i> News</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
            <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
            <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
            <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
      </div>
      <Submenu/>
        </div>
    )
}

export default menu

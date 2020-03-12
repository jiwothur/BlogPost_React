import React from 'react';
import './style.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [search,setSearch] = useState(false);

  const submitSearch = (e) =>{
    e.preventDefault();
    alert("searched");
  }
  const openSearch = () =>{
    setSearch(true);
  }

  const searchClass= search ? "searchInput active": "searchInput";

  return(
    <div className ="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about-js">About</NavLink></li>
        <li><NavLink to="post">Posts</NavLink></li>
        <li><NavLink to="contact-us">Contact Us</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search"/>
          <img onClick={openSearch}className="searchicon" src={require('../../assets/icon/search.png')} alt="Search" />
        </form>
      </div>
    </div>
   )

 }

export default Navbar;
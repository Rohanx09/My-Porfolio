import { Link } from "react-router-dom";
import "./Navbar.css";

import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
// (/fa is to select category)


const Navbar = () => {
  const[ click , setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // has become an event so eventlistener is required 
  const [color,setColor] = useState(false);
  const changeColor =() => {
    if(window.scrollY >= 100) {
      setColor(true);
    } else{
      setColor(false);
    }
    };

  window.addEventListener('scroll' , changeColor);
    
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> Rohan Kumar </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {/* ? suggest if else statement */}
        {click ? (
            <FaTimes size={20} style={{color:"#fff"}}></FaTimes>
        ):(
            <FaBars size={20} style={{color:"#fff"}}></FaBars>
                
        )}
        
      </div>
    </div>
  )
}

export default Navbar

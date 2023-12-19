import React , { useState } from 'react';
import './navbar.css';
import {FaBars, FaTimes , FaDatabase} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if(window.scrolly >=1){
  //     setColor(true);
  //   }else{
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll",changeColor);

  return (
    <div>
      <div className="nav">
        
        <div className="nav-items">
          <Link to='/'  className="logo">RUSI</Link>
     
       
           
          <ul className={click ? "nav-items active" : "nav-items ul"}>
          <li><a href='/'>HOME</a></li>
          <li><a href='/product'>PRODUCTS</a></li>
          <li><a href='/offer'>OFFERS</a></li>
          <li><a href='/services'>EXPERIENCE</a></li>
          <li><a href='/about'>ABOUT</a></li>
          <li><a href='/contact'>CONTACT</a></li>
          <li><a href='/database'><FaDatabase /></a></li>
          </ul>
   
          <div className='hamburget' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color : "#fff"}} />) : 
            ( <FaBars size={20} style={{color : "#fff"}} />)}
              
             
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar

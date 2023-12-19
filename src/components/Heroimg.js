import './heroimg.css';
import React from 'react'; 
import IntoImg from '../assets/2.jpg'
import { Link } from 'react-router-dom';
import Swipe from '../assets/swipe.gif'
import What from '../assets/whatapp.gif'
import '../routes/router.css'
const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntoImg} alt='IntoImg' />
        </div>
        <div className='content'>
            <p>Welcome! To.. </p>
            <h1>Rusi Agencies</h1>
        </div>
        <div className='swipe'>
  <img src={Swipe} alt='swipe'/>
</div>
<div className='whatsapp'>
  <a href='https://wa.me/918940118116' target='blank'><img src={What} alt='whatsapp'/></a>
  
</div>
       <div className='button'>
       <Link to="/services" className='btn'>Experience</Link>
        <Link to="/contact" className='btn-light'>Contact</Link>
       </div>
    </div>
  )
}

export default Heroimg

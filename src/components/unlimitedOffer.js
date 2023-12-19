import React from 'react'
import './unlimtedOffer.css'
import offer1 from '../assets/offer 1.jpeg'
import offer2 from '../assets/offer 2.jpeg'
import offer3 from '../assets/rusi2.jpeg'
import { NavLink } from 'react-router-dom'
function unlimitedOffer() {
  return (
    <div className='unlimited-container'>
        <h1 className='unlimited-heading'>unlimited Offer</h1>
        <div className='limited-container'>
            <div className='unlimited-card'>
                <img src={offer1} alt='img'/>
                <div className='unlimited-btn'>
                  
                  <NavLink to='/contact'className='btn1'>Purchase now</NavLink>
                </div>
                
            </div>
            <div className='unlimited-card'>
                <img src={offer2} alt='img'/>
                <div className='unlimited-btn'>
                  
                  <NavLink to='/contact'className='btn1'>Purchase now</NavLink>
                </div>
                
           </div>
        
            <div className='unlimited-card'>
                <img src={offer3} alt='img'/>
                <div className='unlimited-btn'>
                  
                  <NavLink to='/contact'className='btn1'>Purchase now</NavLink>
                </div>
                
            </div>
            
            
            
        
        </div>
       
    </div>
  )
}

export default unlimitedOffer
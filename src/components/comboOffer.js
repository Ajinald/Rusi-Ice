import './comboOffer.css'
import React from 'react'

const comboOffer = () => {
  return (
    <div className='combo-container'>
      <h1 className='combo-heading'>Combo Offer</h1>
      <div className='comboOffer-container'>
            <div className='combo-card'>
            <h2 className='combo-heading'></h2>
                <div className='combo-btn'>
                  
                  <NavLink to='/contact'className='btn1'>Purchase now</NavLink>
                </div>
                
            </div>
    </div>
    </div>
  )
}

export default comboOffer

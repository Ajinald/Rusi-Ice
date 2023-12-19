import './productCard.css'
import React from 'react'

import { NavLink } from 'react-router-dom'
function productCard(props) {
  return (
    <div className='product-card'>
              <img src={props.imgsrc} alt='img'/>
              <h2 className='product-title'>{props.title}</h2>
              <div className='product-details'>
                <p>{props.text}</p>
                <div className='product-btn'>
                  <a href="https://youtube.com/shorts/9qHb0X3V67M?feature=share" target='blank' className='btn1'>View</a>
                  <NavLink to='/contact'className='btn1'>Purchase</NavLink>
                </div>
              </div>
          </div>
  )
}

export default productCard
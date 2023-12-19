import React from 'react'
import './serviceCard.css'

import { NavLink } from 'react-router-dom'
function serviceCard(props) {
  return (
    <div className='service-card'>
    <img src={props.img} alt='img'/>
    <h2 className='service-title'>{props.title}</h2>
    <div className='sercice-detail'>
        <p>{props.text}</p>
        <div className='service-btn'>
            <NavLink to="/contact">Contact Us</NavLink>
        </div>
    </div>

</div>
  )
}

export default serviceCard

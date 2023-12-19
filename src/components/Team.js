import React from 'react'
import './team.css'

function Team(props) {
  return (
    <div className='team-card'>
    <img src={props.img} alt='img'/>
    
    <div className='team-detail'>
        <p>{props.text}</p>
        
    </div>

</div>
  )
}

export default Team
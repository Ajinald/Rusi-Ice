import React from 'react'
import './team.css'
import Team from './Team'
import TeamData from './TeamData'
function Team1() {
  return (
    <div className='tem-container'>
        <h1 className='team-heading'>Our Team</h1>
        <div className='team-container'>
    {TeamData.map((val, ind) =>{
        return(
            <Team 
            key={ind}
            img={val.img}
            
            text={val.text}
            />
        )
    })}
        </div>
      
    </div>
  )
}

export default Team1
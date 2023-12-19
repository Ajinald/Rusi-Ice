import React from 'react'
import './serviceCard.css'
import ServiceCard from './serviceCard'
import ServiceCardData from './serviceCardData'
function service1() {
  return (
    <div className='ser-container'>
        <h1 className='service-heading'>Our Experience</h1>
        <div className='service-container'>
    {ServiceCardData.map((val, ind) =>{
        return(
            <ServiceCard 
            key={ind}
            img={val.img}
            title={val.title}
            text={val.text}
            />
        )
    })}
        </div>
      
    </div>
  )
}

export default service1

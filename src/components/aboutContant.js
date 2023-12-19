import { Link } from 'react-router-dom'
import './aboutContant.css'
import React from 'react'
import abo1 from '../assets/WhatsApp Image 2023-05-01 at 1.38.06 AM.jpeg'
import abo2 from '../assets/WhatsApp Image 2023-05-01 at 1.38.06 AM (1).jpeg'

const aboutContant = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I ?</h1>
        <p>I am a LAZZA Ice-Creams Distubuter in Nagercoil,Kanayakumari to Parasala,TVM. And I am doing event managment as popcorn, cotton candy, tea & bajji, and etc......</p>
        <Link to='/contact' className='unlimited-btn'>CONTACT</Link>
      </div>

      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
             <img src={abo2} className='img' alt='img'/>
            </div>
            <div className='img-stack bottom'>
             <img src={abo1} className='img' alt='img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default aboutContant


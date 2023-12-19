import React from 'react'
import {FaUserSecret} from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/heroimg2'

function Database() {
  return (
    <div>
  <Navbar/>
   <Heroimg2 heading='Database.' text={<FaUserSecret/>} text1='Site is not completed ......  '/>
     
     <div className='nav-buttons'>
      <a href='/'>Go To Home</a>

     </div>
      
    </div>
    
  )
}

export default Database

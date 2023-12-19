import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Service1 from '../components/service1'
const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2  heading='Experience.' text='Some of our most recent works'/>
    <Service1/> 
      <Footer />
    </div>
  )
}

export default Services

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import AboutContant from '../components/aboutContant'
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading='ABOUT.' text='Life is short, so make it sweet.'/>
      <AboutContant/>
      <Footer />

    </div>
  )
}

export default About

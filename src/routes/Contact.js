import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Form from '../components/form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading='CONTACT.' text='Peace, love & ice cream.'/>
      <Form />
      <Footer />
     
    </div>
  )
}

export default Contact

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import Product1 from '../components/product1'
const Menu = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading='PRODUCTS.' text='The freshest ice cream on earth'/>
      <Product1  />
     <Footer />
    </div>
  )
}

export default Menu

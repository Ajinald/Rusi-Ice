import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Heroimg2 from '../components/heroimg2'
import UnlimitedOffer from '../components/unlimitedOffer'
function Offer() {
  return (
    <div>
    <Navbar />
    <Heroimg2  heading='OFFER ZONE.' text='The sweetness of everyday life.'/>
   <UnlimitedOffer/>
   <Footer />
  </div>
  )
}

export default Offer
import React from 'react';
import './router.css';
import Heroimg from '../components/Heroimg';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import UnlimitedOffer from '../components/unlimitedOffer';
import Team1 from '../components/Team1';
import OrderVideos from '../components/orderVideos';

const Home = () => {
  return (
    <div >
      <Navbar />
     <Heroimg />
     <OrderVideos/>
     <Team1 />
<UnlimitedOffer/>
<Footer/>

    </div>
    
  )
}

export default Home


import React from 'react';
import './App.css';

import Home from './routes/Home';
import Services from './routes/Services';
import About from './routes/About';
import Contact from './routes/Contact';
import Product from './routes/Product';
import Offer from './routes/Offer';
import Database from './routes/database';

import { Route, Routes } from 'react-router-dom';

//rafce
const App = () => {
  
  return (
    <div className='container'>
      <div className='navbar'>

      
        <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/offer" element={<Offer />}/>
          <Route path="/database" element={<Database />}/>
        </Routes>
        </>
      </div>
    
     </div>
  )
}

export default App


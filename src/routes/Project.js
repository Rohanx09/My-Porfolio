import React from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import PricingCart from '../Components/PricingCart';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 head ="PROJECTS." text ="Some of my latest "/>
      <Work></Work>
      <PricingCart></PricingCart>
      <Footer/>
      
    </div>
  )
}

export default Project

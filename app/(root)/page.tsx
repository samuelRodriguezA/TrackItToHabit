"use client"
import Content from '../../components/Content';
import Footer from '../../components/Footer';

import NavbarLanding from '../../components/NavbarLanding';
import React, { useRef } from 'react';

const HabitTrackerLandingPage: React.FC = () => {
  const parallaxRef = useRef(null);

  return (

    <div>
      <NavbarLanding/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default HabitTrackerLandingPage;

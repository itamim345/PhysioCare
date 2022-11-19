import React from 'react';
import Banner from '../../own-comp/Banner/Banner';
import Services from '../../own-comp/Services/Services';
import AboutPhysio from '../../own-comp/AboutPhysio/AboutPhysio';
import AboutMe from '../../own-comp/AboutMe/AboutMe';
import Contact from '../../own-comp/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutPhysio/>
      <Services/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

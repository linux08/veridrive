import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import FindMyCar from './components/FindMyCar';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Calculator />
      <FindMyCar />
      <Contact />
    </div>
  );
}

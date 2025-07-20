import React, { useRef } from 'react';
import Hero from './components/Hero';
import ForWho from './components/ForWho';
import WhatYouGet from './components/WhatYouGet';
import Program from './components/Program';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ApplicationForm from './components/ApplicationForm';

function App() {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToForm={scrollToForm} />
      <ForWho />
      <WhatYouGet />
      <Program />
      <HowItWorks />
      <Testimonials />
      <About />
      <Pricing onScrollToForm={scrollToForm} />
      <FAQ />
      <ApplicationForm ref={formRef} />
    </div>
  );
}

export default App;
import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import MouseFollower from './components/MouseFollower';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import AboutBook from './components/sections/AboutBook';
import HiddenTruth from './components/sections/HiddenTruth';
import Benefits from './components/sections/Benefits';
import EbookFragments from './components/sections/EbookFragments';
import TargetAudience from './components/sections/TargetAudience';
import AboutAuthor from './components/sections/AboutAuthor';
import CallToAction from './components/sections/CallToAction';
import FAQ from './components/sections/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <MatrixBackground />
      <MouseFollower />
      <Header />
      <Hero />
      <AboutBook />
      <HiddenTruth />
      <Benefits />
      <EbookFragments />
      <TargetAudience />
      <AboutAuthor />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import MouseFollower from '../components/MouseFollower';
import Header from '../components/Header';
import PrivacyPolicy from '../components/sections/PrivacyPolicy';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <MatrixBackground />
      <MouseFollower />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPage;

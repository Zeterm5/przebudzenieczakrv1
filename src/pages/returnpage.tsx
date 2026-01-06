import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import MouseFollower from '../components/MouseFollower';
import Header from '../components/Header';
import ReturnPolicy from '../components/sections/ReturnPolicy';
import Footer from '../components/Footer';

const ReturnPage = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <MatrixBackground />
      <MouseFollower />
      <Header />
      <ReturnPolicy />
      <Footer />
    </div>
  );
};

export default ReturnPage;

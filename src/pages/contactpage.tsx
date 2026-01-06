import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import MouseFollower from '../components/MouseFollower';
import Header from '../components/Header';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <MatrixBackground />
      <MouseFollower />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

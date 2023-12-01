import React, { useEffect } from 'react';
import Header from './components/header/Header';

import Aos from 'aos';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;

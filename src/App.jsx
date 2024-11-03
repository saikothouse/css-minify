import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Features from './components/Features';
import CSSMinifier from './components/CSSMinifier';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <CSSMinifier />
      <Footer />
    </div>
  );
};

export default App;

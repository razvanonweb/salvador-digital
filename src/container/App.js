import React from 'react';
import Custom from '../components/Custom/Custom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import OfferSection from '../components/OfferSection/OfferSection';
import SliderBox from '../components/SliderBox/SliderBox';
import Testimonials from '../components/Testimonials/Testimonials';
import '../css/App.min.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SliderBox />
      <OfferSection />
      <Custom />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

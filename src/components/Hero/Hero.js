import React from 'react';
import HeroImg from '../../assets/images/trnava-university-IoN-MstG3-o-unsplash 1.png';

const Hero = () => {
  return (
    <div className="container-fluid p-0 hero">
      <img className="hero-img" src={HeroImg} alt="hero-bkg" />
      <div className="container-xl">
        <div className="hero-desctiption">
          <h1 className="hero-title">Salvador Digital</h1>
          <p className="hero-txt">
            Salvador Digital Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="hero-button">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

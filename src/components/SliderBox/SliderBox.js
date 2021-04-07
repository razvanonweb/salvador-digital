import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BoxImg from '../../assets/images/xiaole-tao-Fo-HQUlRGkU-unsplash 1.jpg';

const SliderBox = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider__box">
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
      <div className="slider__box-1">
        <img className="slider-img" src={BoxImg} alt="box1" />
      </div>
    </Slider>
  );
};

export default SliderBox;

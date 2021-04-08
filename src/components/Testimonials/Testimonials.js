import React from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'green' }}
      onClick={onClick}
    />
  );
}
const Testimonials = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="container-fluid p-0 testimonials">
      <div className="container-xl p-0">
        <Slider {...settings}>
          <div>
            <div className="testimonials-box">
              <div className="testimonial-user">
                <div className="testimonial-icon"></div>
                <div className="testimonial-name">User 1</div>
              </div>
              <p className="testimonials-text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.”
              </p>
            </div>
          </div>
          <div>
            <div className="testimonials-box">
              <div className="testimonial-user">
                <div className="testimonial-icon"></div>
                <div className="testimonial-name">User 2</div>
              </div>
              <p className="testimonials-text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.” “Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text.”
              </p>
            </div>
          </div>
          <div>
            <div className="testimonials-box">
              <div className="testimonial-user">
                <div className="testimonial-icon"></div>
                <div className="testimonial-name">User 3</div>
              </div>
              <p className="testimonials-text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.” “Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text.”
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

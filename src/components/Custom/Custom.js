import React from 'react';
import CustomImg from '../../assets/images/undraw_buffer_wq43-removebg-preview 1.png';
import CustomImg2 from '../../assets/images/undraw_conceptual_idea_xw7k-removebg-preview 1.png';
import Triangle from './Triangle';

const Custom = () => {
  return (
    <>
      <div className="container-fluid p-0 custom">
        <div className="container-xl">
          <div className="row">
            <div className="col-sm p-0 custom-box">
              <img className="custom-img" src={CustomImg} alt="social-img" />
            </div>
            <div className="col-sm p-0 custom-box">
              <div className="custom-description">
                <p className="custom-title">Custom</p>
                <p className="custom-text text-end">
                  Custom Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </div>
            </div>
          </div>
          <Triangle />
        </div>
      </div>
      <div className="container-fluid p-0 custom2">
        <div className="container-xl">
          <div className="row">
            <div className="col-sm p-0 custom2-box">
              <div className="custom2-descrition">
                <p className="custom2-title">Some random title</p>
                <p className="custom2-text text-start">
                  Custom Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </div>
            </div>
            <div className="col-sm p-0 custom2-box">
              <img className="custom-img" src={CustomImg2} alt="social-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom;

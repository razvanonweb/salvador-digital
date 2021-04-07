import React from 'react';
import UserIcon from '../../assets/icons/user-circle 3.svg';

const OfferSection = () => {
  return (
    <div className="container-fluid p-0 offer__section">
      <div className="container-xl">
        <div className="row">
          <div className="col-md offer-box">
            <img className="offer-img" src={UserIcon} alt="user-icon" />
            <p className="offer-title">Lorem ipsum</p>
            <p className="offer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <button className="offer-button">see more</button>
          </div>
          <div className="col-md offer-box">
            <img className="offer-img" src={UserIcon} alt="user-icon" />
            <p className="offer-title">Lorem ipsum</p>
            <p className="offer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <button className="offer-button">see more</button>
          </div>
          <div className="col-md offer-box">
            <img className="offer-img" src={UserIcon} alt="user-icon" />
            <p className="offer-title">Lorem ipsum</p>
            <p className="offer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <button className="offer-button">see more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;

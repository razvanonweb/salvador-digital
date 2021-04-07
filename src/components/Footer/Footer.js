import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid p-0 footer">
      <div className="container-xl">
        <div className="row">
          <div className="col-sm p-0">
            <p className="logo__title footer-title">
              Salvador<span className="logo__span-footer">Digital</span>
            </p>
            <div className="footer-list">
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    discover
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    domains
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    downloads
                  </a>
                </li>
              </ul>
              <ul className="footer-ul">
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    home
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    about us
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="/">
                    sign in/sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm p-0">
            <div className="footer-contact">
              <a
                href="mailto:contact@email.com"
                className="footer-link-contact"
              >
                contact@email.com
              </a>
              <a href="tel:+40 700 000 000" className="footer-link-contact">
                +40 700 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
    </div>
  );
};

export default Footer;

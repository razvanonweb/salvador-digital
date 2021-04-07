import React, { useState } from 'react';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMobileMenu = () => {
    let showMobileMenu = '';
    if (showMenu) {
      showMobileMenu += 'show__menu-mobile ';
    } else {
      showMobileMenu += 'hide__menu-mobile ';
    }
    return showMobileMenu;
  };

  return (
    <div className="col-6 p-0 d-flex justify-content-end menu__navigation">
      {showMenu ? null : (
        <div className="hamburger__menu" onClick={() => setShowMenu(!showMenu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <ul
        className={
          showMenu
            ? handleMobileMenu() +
              'padding-ul flex-center menu__navigation-padding70 menu__list'
            : handleMobileMenu() +
              'padding-ul flex-center menu__navigation-padding0 menu__list'
        }
      >
        <div
          onClick={() => setShowMenu(!showMenu)}
          className={showMenu ? 'close__menu show__x' : 'hide__x'}
        >
          <div></div>
          <div></div>
        </div>
        <li className="menu__item">
          <a className="link" href="#">
            Prezentare
          </a>
        </li>
        <li className="menu__item">
          <a className="link" href="#">
            Beneficii
          </a>
        </li>
        <li className="menu__item">
          <a className="link" href="#">
            Facilitati
          </a>
        </li>
        <li className="menu__item">
          <a className="link" href="#">
            Echipa
          </a>
        </li>
        <li className="menu__item">
          <a className="contact" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

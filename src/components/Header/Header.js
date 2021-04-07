import React from 'react';
import Logo from './Logo/Logo';
import MenuUL from './Menu/Menu';

const Header = () => {
  return (
    <div className="container-fluid p-0 flex-center nav">
      <div className="container-xl">
        <div className="row">
          <Logo />
          <MenuUL />
        </div>
      </div>
    </div>
  );
};

export default Header;

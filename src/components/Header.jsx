import React from 'react';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default Header;
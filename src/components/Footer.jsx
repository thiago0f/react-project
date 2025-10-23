import React from 'react';
import './Footer.css';

const Footer = ({ companyName, year }) => {
  return (
    <footer className="footer">
      <p>&copy; {year} {companyName}. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
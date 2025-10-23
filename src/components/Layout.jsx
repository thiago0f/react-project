import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, headerTitle, headerSubtitle, footerCompanyName }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="layout">
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <main className="main-content">
        {children}
      </main>
      <Footer companyName={footerCompanyName} year={currentYear} />
    </div>
  );
};

export default Layout;
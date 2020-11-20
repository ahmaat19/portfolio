import React from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Work from "./Work";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='sticky-contact-left'>
        <i className='fab fa-github pl-2'></i>
        <i className='fab fa-twitter pl-2'></i>
        <i className='fab fa-youtube pl-2'></i>
      </div>
      <span className='sticky-contact-right'>ahmaat19@gmail.com</span>
      <About />
      <Work />
      {children}

      <Footer />
    </>
  );
};

export default Layout;

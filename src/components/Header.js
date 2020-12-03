import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-primary  sticky-top py-2'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='' width='35px' height='35px' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'></ul>
            <ul className='navbar-nav mx-right'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#about'
                >
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#work'>
                  Work
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='btn btn-outline-primary rounded-pill'
                  href='tel:+252615301507'
                >
                  <i className='fa fa-phone'></i> +252 61 530 1507
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
      >
        <div className='hero-section container px-5'>
          <h6 className='text-primary'>Hi, my name is</h6>
          <h1 className='display-4'>Ahmed Ibrahim.</h1>
          <h3 className='display-5'>I build things for the web.</h3>
          <p>
            I'm a software engineer based in Mogadishu specializing in building
            (and occasionally designing) <br /> exceptional websites,
            applications, and everything in between.
          </p>
          <a
            href='mailto:ahmaat19@gmail.com'
            className='btn btn-outline-primary my-5 py-3 px-4 rounded-pill'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-primary  sticky-top py-2'>
        <div class='container'>
          <a class='navbar-brand' href='#'>
            <img
              src='https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'
              alt=''
              width='30'
              height='24'
            />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav mx-auto'></ul>
            <ul class='navbar-nav mx-right'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#about'>
                  About
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Experience
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#work'>
                  Work
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='hero-section container p-5'>
        <h6 className='text-primary'>Hi, my name is</h6>
        <h1 className='display-3'>Ahmed Ibrahim.</h1>
        <h3 className='display-6'>I build things for the web.</h3>
        <p>
          I'm a software engineer based in Mogadishu specializing in building
          (and occasionally designing) <br /> exceptional websites,
          applications, and everything in between.
        </p>
        <a
          href='mailto:ahmaat19@gmail.com'
          className='btn btn-outline-primary mt-5 py-3 px-4'
        >
          Get In Touch
        </a>
      </div>
    </>
  );
};

export default Header;

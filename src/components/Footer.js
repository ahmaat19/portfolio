import React from "react";

const Footer = () => {
  return (
    <div className='footer-section container p-5 mt-5 text-center' id='contact'>
      <h3 className='text-primary'>What's Next?</h3>
      <p className='display-6 footer-title'>Get In Touch</p>
      <div className='row'>
        <div className='col-12 col-lg-6 col-md-8 col-sm-10 mx-auto'>
          <p>
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>
      </div>

      <a
        href='mailto:ahmaat19@gmail.com'
        className='btn btn-outline-primary my-3 py-3 px-4'
      >
        Say Hello
      </a>

      <p className='text-center text-primary mt-5 pt-5'>
        Designed & Built by Ahmed Ibrahim
      </p>
      <span className='float-left'>v1</span>
      <a href='#' className='float-right'>
        <i className='fa fa-arrow-circle-up footer-icon'></i>
      </a>
    </div>
  );
};

export default Footer;

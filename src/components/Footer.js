import React from 'react';

const Footer = () => {
  return (
    <>
      <div
        className='d-flex align-items-center justify-content-center'
        style={{ height: '100vh' }}
        id='contact'
      >
        <div className='footer-section container px-5 text-center'>
          <h3 className='text-primary'>What's Next?</h3>
          <p className='display-5 footer-title'>Get In Touch</p>
          <div className='row'>
            <div className='col-12 col-lg-6 col-md-8 col-sm-10 mx-auto'>
              <p>
                Interested in working together? We should queue up a chat. I’ll
                buy the coffee.
              </p>
              <a
                href='tel:+252615301507'
                className='btn btn-outline-primary my-3 py-3 px-4 rounded-pill'
              >
                <i className='fa fa-phone'></i> Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <p className='text-center text-primary mt-5 pt-5'>
          Designed & Built by Ahmed Ibrahim
        </p>
        <span className='float-left'>v1</span>
        <a href='#' className='float-right'>
          <i className='fa fa-arrow-circle-up footer-icon'></i>
        </a>
      </div>
    </>
  );
};

export default Footer;

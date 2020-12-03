import React from 'react';

const About = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center mt-5'
      style={{ height: '100vh' }}
      id='about'
    >
      <div className='about-section container px-5'>
        <h3 className='text-primary pt-2'>About</h3>
        <div className='row'>
          <div className='col-md-7'>
            <p>Hello! I'm Ahmed, a software engineer based in Mogadishu.</p>
            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performance
              experiences.
            </p>
            <p>
              Shortly after graduated University, I started freelancing on a
              wide variety of interesting and meaningful projects on a daily
              basis.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <div className='row'>
              <div className='col-12 col-md-6 col-lg-6 col-sm-6'>
                <p className='mr-5'>
                  <i className='fa fa-arrow-circle-right '></i> JavaScript
                  (ES6+)
                  <br />
                  <i className='fa fa-arrow-circle-right '></i> React
                  <br />
                  <i className='fa fa-arrow-circle-right '></i> Node.js
                  <br />
                </p>
              </div>
              <div className='col-12 col-md-6 col-lg-6 col-sm-6'>
                <p className='mr-5'>
                  <i className='fa fa-arrow-circle-right '></i> Python
                  <br />
                  <i className='fa fa-arrow-circle-right '></i> Django
                  <br />
                  <i className='fa fa-arrow-circle-right '></i> HTML & (S)CSS
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-5 text-center'>
            <img
              src='https://avatars3.githubusercontent.com/u/54572773?s=460&u=f300da8a085a091f4c6bcb5b3325a3a11bb1b230&v=4'
              alt=''
              className='img-fluid img-thumbnail'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

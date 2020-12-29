import React from 'react'

const Contact = () => {
  return (
    <div className='container py-5' id='contact'>
      <hr />
      <div className='row g-4 pt-3'>
        <div className='col-md-5 mx-auto text-center'>
          <p>Let's make something new, different great together.</p>
          <pre>Just Say Hello</pre>
          <address>
            <i className='fa fa-phone'></i>{' '}
            <a href='tel:+252615301507'>+252 61 530 1507</a> <br />
            <i className='fa fa-envelope'></i>{' '}
            <a href='mailto:ahmaat19@gmail.com'>ahmaat19@gmail.com</a> <br />
            <i className='fa fa-home'></i> Mogadishu - Somalia.
            <div class='social-links pt-2'>
              <a href='https://facebook.com/ahmaat19' target='blank'>
                <i class='fab fa-facebook'></i>
              </a>
              <a href='https://twitter.com/ahmaat19' target='blank'>
                <i class='fab fa-twitter px-4'></i>
              </a>
              <a href='https://github.com/ahmaat19' target='blank'>
                <i class='fab fa-github'></i>
              </a>
            </div>
          </address>
        </div>
      </div>
    </div>
  )
}

export default Contact

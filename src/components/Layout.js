import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Work from './Work'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='sticky-contact-left'>
        <a href='https://github.com/ahmaat19' target='blank'>
          <i className='fab fa-github pl-2'></i>
        </a>
        <a href='https://twitter.com/ahmaat19' target='blank'>
          <i className='fab fa-twitter pl-2'></i>
        </a>
        <a href='https://youtube.com/ahmaat19' target='blank'>
          <i className='fab fa-youtube pl-2'></i>
        </a>
      </div>
      <span className='sticky-contact-right text-primary'>
        <a href='mailto:ahmaat19@gmail.com'>ahmaat19@gmail.com</a>
      </span>
      <About />
      <Work />
      {children}

      <Footer />
    </>
  )
}

export default Layout

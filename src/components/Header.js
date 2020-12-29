import profile from '../images/profile.svg'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-md navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse mr-auto' id='navbarNav'>
            <ul className='navbar-nav mx-auto'></ul>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='#header'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#about'>
                  About
                </a>
              </li>{' '}
              <li className='nav-item'>
                <a className='nav-link active' href='#service'>
                  Service
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#work'>
                  Work
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className='container py-5'
        data-aos='fade-left'
        data-aos-duration='2000'
      >
        <div className='row py-5'>
          <div className='col-md-6 my-auto'>
            <h1 className='fw-bolder display-3'>
              <kbd>AHMED IBRAHIM</kbd>
            </h1>
            <p>Freelance Full Stack Web Developer Based In Mogadishu.</p>
            <div className='call-action mt-4'>
              <a href='#about' className='btn btn-dark shadow-sm'>
                <i className='fa fa-arrow-alt-circle-down'></i> KNOW MORE
              </a>
              <a
                href='#contact'
                className='btn btn-outline-light border border-dark text-dark mx-2 shadow-sm'
              >
                <i className='fa fa-envelope'></i> HIRE ME
              </a>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={profile} alt='profile' className='img-fluid' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

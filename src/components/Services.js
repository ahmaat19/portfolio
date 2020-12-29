import application from '../images/web-application.svg'
import portal from '../images/web-portal.svg'
import pwa from '../images/pwa.svg'
import website from '../images/website.svg'

const Services = () => {
  return (
    <div
      className='container py-5'
      id='service'
      data-aos='fade-right'
      data-aos-duration='2000'
    >
      <h2 className='text-center fw-bolder display-6 pt-3'>
        <kbd>SERVICE</kbd>
      </h2>
      <div className='row gy-3 pt-3'>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent '>
            <img
              src={website}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title py-3'>
                <kbd>Websites</kbd>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent '>
            <img
              src={application}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title py-3'>
                <kbd>Web Applications</kbd>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent '>
            <img
              src={portal}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title py-3'>
                <kbd>Web Portals</kbd>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent '>
            <img
              src={pwa}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title py-3'>
                <kbd>Progressive Web Apps</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

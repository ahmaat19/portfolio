import application from '../images/web-application.svg'
import portal from '../images/web-portal.svg'
import pwa from '../images/pwa.svg'
import website from '../images/website.svg'

const Services = () => {
  return (
    <div className='container py-5' id='service'>
      <h2 className='text-center fw-bolder display-6 pt-3'>
        <kbd>SERVICE</kbd>
      </h2>
      <div className='row gy-3 pt-3'>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent shadow-lg'>
            <img
              src={website}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title'>
                <kbd>Websites</kbd>
              </div>
              <p className='card-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent shadow-lg'>
            <img
              src={application}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title'>
                <kbd>Web Applications</kbd>
              </div>
              <p className='card-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent shadow-lg'>
            <img
              src={portal}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title'>
                <kbd>Web Portals</kbd>
              </div>
              <p className='card-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto'>
          <div className='card text-center bg-transparent shadow-lg'>
            <img
              src={pwa}
              className='card-img-top img-fluid mx-auto pt-2'
              alt='web design'
            />
            <div className='card-body'>
              <div className='card-title'>
                <kbd>Progressive Web Apps</kbd>
              </div>
              <p className='card-text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

import covid from '../images/covid.png'
import hr from '../images/hr.png'
import cerid from '../images/cerid.png'
import samtec from '../images/samtec.png'

const Projects = () => {
  return (
    <div className='container py-5' id='work'>
      <h2
        className='text-center fw-bolder display-6 pt-3'
        data-aos='zoom-in-up'
      >
        <kbd data-aos='zoom-in-up'>RECENT WORK</kbd>
      </h2>
      <div className='row g-4 pt-3' data-aos='fade-up'>
        <div className='col-md-6'>
          <div className='card text-center bg-transparent shadow-lg'>
            <a href='https://cerid.so' target='blank'>
              <img src={cerid} alt='cerid' className='img-fluid' />
            </a>
            <div className='card-body'>
              <div className='card-title'>
                <a href='https://cerid.so' target='blank'>
                  <kbd>Website</kbd>{' '}
                </a>
              </div>
              <p className='card-text d-flex justify-content-around'>
                <a href='https://cerid.so' target='blank'>
                  <i class='fa fa-play-circle'></i> Live
                </a>
                <p>
                  <i class='fa fa-code'></i> Private Source Code
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card text-center bg-transparent shadow-lg'>
            <a href='https://samtec.so' target='blank'>
              <img src={samtec} alt='samtec' className='img-fluid' />
            </a>
            <div className='card-body'>
              <div className='card-title'>
                <a href='https://samtec.so' target='blank'>
                  <kbd>Website</kbd>
                </a>
              </div>
              <p className='card-text d-flex justify-content-around'>
                <a href='https://samtec.so' target='blank'>
                  <i class='fa fa-play-circle'></i> Live
                </a>
                <p>
                  <i class='fa fa-code'></i> Private Source Code
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card text-center bg-transparent shadow-lg'>
            <img src={hr} alt='human resource' className='img-fluid' />
            <div className='card-body'>
              <div className='card-title'>
                <kbd>MERN-Stack HR System</kbd>
              </div>
              <p className='card-text d-flex justify-content-around'>
                <p>
                  <i class='fa fa-play-circle'></i> Offline
                </p>
                <a
                  href='https://github.com/ahmaat19/MERN-Stack-Leave-Request'
                  target='blank'
                >
                  <i class='fa fa-code'></i> Source Code
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card text-center bg-transparent shadow-lg'>
            <a
              href='https://ahmaat19.github.io/covid-19-tracker/'
              target='blank'
            >
              <img src={covid} alt='covid' className='img-fluid' />
            </a>
            <div className='card-body'>
              <div className='card-title'>
                <a
                  href='https://ahmaat19.github.io/covid-19-tracker/'
                  target='blank'
                >
                  <kbd>React COVID-19 Tracker</kbd>
                </a>
              </div>
              <p className='card-text d-flex justify-content-around'>
                <a
                  href='https://ahmaat19.github.io/covid-19-tracker/'
                  target='blank'
                >
                  <i class='fa fa-play-circle'></i> Live
                </a>
                <p>
                  <a
                    href='https://github.com/ahmaat19/covid-19-tracker'
                    target='blank'
                  >
                    <i class='fa fa-code'></i> Source Code
                  </a>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-12 text-center mt-4'>
          <button className='btn btn-dark'>
            <i className='fa fa-arrow-circle-down'></i> Load more projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects

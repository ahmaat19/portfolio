import node from '../images/nodejs.svg'
import react from '../images/react.svg'
import bootstrap from '../images/bootstrap.svg'
import mongodb from '../images/mongodb.svg'
import about from '../images/about.svg'

const About = () => {
  return (
    <div
      className='container py-5'
      id='about'
      data-aos='fade-left'
      data-aos-duration='2000'
    >
      <h2 className='text-center fw-bolder display-6 pt-3'>
        <kbd>ABOUT ME</kbd>
      </h2>
      <div className='row'>
        <div className='col-md-5 col-12'>
          <img src={about} alt='about-me' className='img-fluid' />
        </div>
        <div className='col-md-6 my-auto col-10'>
          <p>
            <p>
              Hello! I'm Ahmed, a full stack web developer based in Mogadishu.
            </p>
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
            <p>
              At the right side are a few technologies I've been working with
              recently:
            </p>
          </p>
        </div>
        <div className='col-md-1 my-auto col-2'>
          <div className='social-links d-flex flex-column'>
            <img
              src={node}
              alt='nodejs'
              className='img-fluid my-2'
              data-bs-toggle='tooltip'
              title='Nodejs'
            />
            <img
              src={mongodb}
              alt='mongodb'
              className='img-fluid my-2'
              data-bs-toggle='tooltip'
              title='MongoDB'
            />
            <img
              src={react}
              alt='react.js'
              className='img-fluid my-2'
              data-bs-toggle='tooltip'
              title='Reactjs'
            />
            <img
              src={bootstrap}
              alt='bootstrap'
              className='img-fluid my-2'
              data-bs-toggle='tooltip'
              title='Bootstrap'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

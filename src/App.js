import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactGA from 'react-ga'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  useEffect(() => {
    Aos.init({ offset: 200, duration: 600, easing: 'ease-in-sine', delay: 100 })
  })

  useEffect(() => {
    ReactGA.initialize('UA-186129874-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

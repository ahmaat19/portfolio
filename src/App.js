import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactGa from 'react-g'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  useEffect(() => {
    ReactGa.initialize('G-FFRN0N1PP2')
    ReactGa.pageview(window.location.pathname + window.location.search)

    Aos.init({ offset: 200, duration: 600, easing: 'ease-in-sine', delay: 100 })
  })
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

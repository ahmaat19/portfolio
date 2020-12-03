import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Work from './components/Work';

const App = () => {
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
      <Footer />
    </>
  );
};

export default App;

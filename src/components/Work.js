import Project from './Project';

const Work = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center mt-5'
      style={{ height: '100vh' }}
      id='work'
    >
      <div className='work-section container px-5'>
        <h3 className='text-primary pt-2'>Some Things I've Built</h3>
        <Project />
      </div>
    </div>
  );
};

export default Work;

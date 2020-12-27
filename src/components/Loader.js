import React from 'react'

const Loader = () => {
  return (
    <div className='text-light text-center mx-auto d-flex justify-content-center align-items-center vh-100'>
      <span
        className='spinner-border'
        style={{
          width: '200px',
          height: '200px',
          margin: 'auto',
          display: 'block',
        }}
      ></span>
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Loader

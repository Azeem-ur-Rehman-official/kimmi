import React from 'react'

const CustomCarosel = () => {
  return (
      <div className='container-fluid custom-carosel'>
          <div className='d-flex flex-column bg-content'>
              <h1 className='text-white bg-text'>Discovering Sense From
                  The Insanity Of The
                  Trading Market</h1>
              <button className='btn btn-primary bg-button'>Get Started</button>
              <span className='d-flex  align-items-center subscribe'><button className='btn btn-primary subscribe-button'>Subscribe</button><span className='m-auto text-white'>Subscribe to our news letter</span></span>
          </div>
      </div>
  )
}

export default CustomCarosel
import React from 'react'
import image from '../../assets/landing-img1.png';
import rs12 from '../../assets/rs12.png';
import rs24 from '../../assets/rs24.png';
import ticks from "../../assets/ticks.svg";
const PageContent = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'><h2>Why Infotra</h2></div>
        <div className='col-12 d-flex justify-content-center'><span className='underline'></span></div>
        <div className='col-12 wraper-content row '>
          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
            <h2 className='text-blue'>Discover opportunities in
            the historical data
            </h2>
          </div>
          <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'><img src={image} alt="img" width="400px" className='img-fluid' />
          </div>
        </div>
        
      </div>
      {/* flexible plans */}
      <div className='row py-5'>
        <div className='col-12 d-flex justify-content-center'><h2>Flexible Plans</h2></div>
        <div className='col-12 d-flex justify-content-center'><p>Choose a plan which work’s best for you </p></div>
        <div className='col-12 wraper-plans row '>
          <div className='col-md-4 col-12 d-flex '>
           <div className='plans-card w-100 py-2'>
      <div className='d-flex justify-content-between text-white p-2'><h3 className='fw-400'>Basic</h3><h2>Free</h2></div>
          <button className='plan-button mx-3 text-white'>Select</button>
          <div className='px-4 py-2 d-flex align-items-start '>
              <img src={ticks} alt="tick" />
              <span className='mx-2 text-white'>It is free and it is the default subscription</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You get access to the daily chart of 7 main currencies in the Forex market</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>The statistical results are shown for 5 year history of daily data.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You have access to all the configurations and to all current and future models</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You have access to all the statistical results</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You can explore all discovered opportunities - succeeded and failed.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You can export the first 5 succeeded opportunities and the first 5 failed opportunities as a CSV file 50 times every month.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start mb-4'>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You have access to 5 discovered patterns of the 7 main currencies coming from daily data</span>
              </div>
      </div>
          </div>
          <div className='col-md-4 col-12 d-flex '>
            <div className='plans-card w-100 '>
              <div className='d-flex justify-content-between text-white p-2'><h3 className='fw-400 py-2'>Bronz</h3><img src={rs12} alt='24' width="76px"></img></div>
          <button className='plan-button mx-3 text-white'>Select</button>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>All basic features</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>Ads free</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You get access to the daily chart of all current and future included currencies in the Forex market (all other time frames such as 4h, weekly and monthly will be included in the future without any extra cost)</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>The statistical results are shown for all available history.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You can export all succeeded and failed opportunities as a CSV file 50 times every month.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You have access to all discovered patterns of the all currencies.</span>
              </div>
      </div>
          </div>
          <div className='col-md-4 col-12 d-flex '>
            <div className='plans-card w-100 '>
              <div className='d-flex justify-content-between text-white p-2'><h3 className='fw-400 py-2'>Silver</h3><img src={rs24} alt='12' width="86px"></img></div>
          <button className='plan-button mx-3 text-white'>Select</button>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>All bronze features</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You get access to the daily chart of all current and future included pairs in Forex, Crypto and Stocks markets (all other time frames such as 4h, weekly and monthly will be included in the future without any extra cost)</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You can export all succeeded and failed opportunities as a CSV file 250 times every month.</span>
              </div>
              <div className='px-4 py-2 d-flex align-items-start '>
                <img src={ticks} alt="tick" />
                <span className='mx-2 text-white'>You have access to all discovered patterns of the all current and future included pairs in Forex, Crypto and Stocks markets.</span>
              </div>
      </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PageContent
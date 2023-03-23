import Footer from 'components/footer-io/Footer'
import Navbars from 'components/navbar-io/Navbar'
import React from 'react'
import CustomCarosel from './CustomCarosel'
import PageContent from './PageContent'
import './landingPage.css';
const LandingPage = () => {
  return (
      <div>
      <Navbars Dashboard={false} />
      <CustomCarosel />
      <PageContent />
      <Footer/>
          </div>
  )
}

export default LandingPage
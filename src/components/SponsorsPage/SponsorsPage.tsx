import React from 'react'
import './SponsorsPage.scss'
import AlitaliaLogo from '../../../src/images/AlitaliaLogo.jpg'
import AxonLogo from '../../../src/images/AxonLogo.jpg'
import ExpediaLogo from '../../../src/images/ExpediaLogo.jpg'
import JetstarLogo from '../../../src/images/JetstarLogo.jpg'
import QuantasLogo from '../../../src/images/QuantasLogo.jpg'

const SponsorsPage = () => {
  return (
    <div className="sponsorsPageWrapper">
          <article className="sponsorsPage">
            <div className="sponsorLogo"><img className="AxonLogo" src={AxonLogo}></img></div>
            <div className="sponsorLogo"><img className="JetstarLogo" src={JetstarLogo}></img></div>
            <div className="sponsorLogoCenter"><img className="ExpediaLogo" src={ExpediaLogo}></img></div>
            <div className="sponsorLogo"><img className="QuantasLogo" src={QuantasLogo}></img></div>
            <div className="sponsorLogo"><img className="AlitaliaLogo" src={AlitaliaLogo}></img></div> 
          </article>
        </div>
  )
}

export default SponsorsPage
import React from 'react'
import './HeroPage.scss'
import DecoreStripeVector from '../../../src/images/DecoreStripeVector.svg?url'
import PlaybuttonTriangle from '../../../src/images/PlaybuttonTriangle.svg?url'

const HeroPage = () => {
  return (
    <div className="heroPageWrapper">
      <div className="decoreRoundPurple"></div>
      <article className="heroPage"> 
            <div className="descriptionBlock">
              <section>
                <p className="taglineText">BEST DESTINATIONS AROUND THE WORLD</p>
                <h2 className="headingText">Travel, enjoy and live a new and full life</h2>
                 <img className="decoreStripeVector" src={DecoreStripeVector} alt=""/> 
                <p className="descriptionText">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. 
                Park gate sell they west hard for the.</p>
              </section>
              <section className="descriptionButtons">
                <button className="buttonDescFindOut">Find out more</button>
                <button className="buttonDescPlayDemo"><img className="playButtonTriangle" src={PlaybuttonTriangle} alt=""/></button> 
                <p className="spanDescPlayDemo">Play Demo</p>
              </section>
            </div>
      </article>
    </div>
  )
}

export default HeroPage
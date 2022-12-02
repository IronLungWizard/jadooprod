import React from 'react'
import './TopSellingPage.scss'
import DestinationCard from '../DestinationCard/DestinationCard'
import RomeImage from '../../../src/images/RomeImage.jpg'
import LondonImage from '../../../src/images/LondonImage.jpg'
import EuropeImage from '../../../src/images/EuropeImage.jpg'
import DestinationsSpiralDecore from '../../../src/images/DestinationsSpiralDecore.svg?url'

const TopSellingPage = () => {
    let descriptionData : [any[], string[], string[], string[]] = [
        [RomeImage, LondonImage, EuropeImage], 
        ["Rome, Italy", "London, UK", "Full Europe"]!, 
        ["$5,42k", "$4.2k", "$15k"]!, 
        ["10 Days Trip", "12 Days Trip", "28 Days Trip"]
      ];

  return (
    <div className="topSellingPageWrapper">
          <article className="topSellingPage">
              <p className="spanTopSelling">Top Selling</p>
              <h2 className="spanTopDestinations">Top Destinations</h2>
            <div className="topSelling">
              <DestinationCard picture={descriptionData[0][0]} name={descriptionData[1][0]} price={descriptionData[2][0]} duration={descriptionData[3][0]}></DestinationCard>
              <DestinationCard picture={descriptionData[0][1]} name={descriptionData[1][1]} price={descriptionData[2][1]} duration={descriptionData[3][1]}></DestinationCard>
              <DestinationCard picture={descriptionData[0][2]} name={descriptionData[1][2]} price={descriptionData[2][2]} duration={descriptionData[3][2]}></DestinationCard>
              <img className="destinationsSpiralDecore" src={DestinationsSpiralDecore} alt=""/>
            </div>
          </article>
    </div>
  )
} 

export default TopSellingPage
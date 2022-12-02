import React from 'react'
import './ServicesPage.scss'
import WeatherServiceVector from '../../../src/images/WeatherServiceVector.svg?url'
import FlightServiceVector from '../../../src/images/FlightServiceVector.svg?url'
import BestFlightRectangle from '../../../src/images/BestFlightRectangle.svg?url'
import EventsServiceVector from '../../../src/images/EventsServiceVector.svg?url'
import CustomisationServiceVector from '../../../src/images/CustomisationServiceVector.svg?url'


const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <p className="spanCategory">CATEGORY</p>
      <h2 className="spanWeOfferBestServices">We Offer Best Services</h2>
      <article className="services">
        <div className="services__calculatedWeather">
          <img className="weatherServiceVector" src={WeatherServiceVector} alt=""/>
          <div className="serviceInfo">
            <h3 className="spanServiceName">Calculated Weather</h3>
            <p className="spanServiceDescription">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
        <div className="services__bestFlights">
          <img className="flightServiceVector" src={FlightServiceVector} alt=""/>
          <div className="serviceInfo">
            <h3 className="spanServiceName">Best Flights</h3>
            <p className="spanServiceDescription">Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <img className="bestFlightRectangle" src={BestFlightRectangle} alt=""/>
        </div>
        <div className="services__localEvents">
          <img className="eventsServiceVector" src={EventsServiceVector} alt=""/>
          <div className="serviceInfo">
            <h3 className="spanServiceName">Local Events</h3>
            <p className="spanServiceDescription">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
          </div>
        </div>
        <div className="services__customisation">
          <img className="customisationServiceVector" src={CustomisationServiceVector} alt=""/>
          <div className="serviceInfo">
            <h3 className="spanServiceName">Customization</h3>
            <p className="spanServiceDescription">We deliver outsourced aviation services for military customers.</p>
          </div>
        </div>
      </article>
  </div>
  )
}

export default ServicesPage
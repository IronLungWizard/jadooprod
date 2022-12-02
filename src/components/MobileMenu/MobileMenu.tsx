import React from 'react'
import './MobileMenu.scss'
import NavBurger from '../../../src/images/NavBurger.svg?url'

const MobileMenu = () => {
 
  return (
<div >
  <div className="menuWrapper"></div>
    <div className="mobileMenu">     
            <img className="navBurger" src={NavBurger} alt=""/>
            <input className="dropDownCheckbox" type="checkbox"></input>
        <div className="mobileMenu-content">
        <ul className="mobileMenu-innerWrapper">
            <li>Destination</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
          </ul>
        </div>        
    </div>
  </div>
  )
}

export default MobileMenu
import React from 'react'
import  './Navbar.scss'
import Logo from '../../../src/images/Logo.svg?url';
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown';
import MobileMenu from '../MobileMenu/MobileMenu';


const Navbar = () => {

  var scrollPos = 0;
  window.addEventListener('scroll', function(){
    const navBar = document.querySelector('.navWrapper') as HTMLElement;
    if ((document.body.getBoundingClientRect()).top > scrollPos)
    {
      navBar!.style.position = 'sticky';
      navBar!.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navBar!.style.boxShadow ="0px 8px 16px 0px rgba(0,0,0,0.1)";
      navBar!.style.transitionDuration = "0.15s";
      if ((document.body.getBoundingClientRect()).top == 0)
      {
        navBar!.style.position = 'relative';
        navBar!.style.backgroundColor = '#21283200';
        navBar!.style.boxShadow ="none";
        console.log("2")
      }
      
    }
    else
    {
      navBar!.style.position = 'relative';
      navBar!.style.backgroundColor = '#21283200';
      navBar!.style.boxShadow ="none";
      console.log("2")
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  });

  return (
    <div className="navWrapper">
      <nav className="nav">
          <div className="nav__sectionLogo"> 
            <div className="nav__logo"><img className="logo" src={Logo} alt=""/></div>
            <div className="nav__itemMobileBurger"><MobileMenu></MobileMenu></div>
          </div>
          <ul className="nav__section">
            <li className="nav__itemDesitnations">Desitnations</li>
            <li className="nav__itemHotels">Hotels</li>
            <li className="nav__itemFlights">Flights</li>
            <li className="nav__itemBookings">Bookings</li>
            <li className="nav__itemMobileLogin">Login</li>
            <li className="nav__itemMobileSignUp"><button className="nav__signUpButton">Sign up</button></li>
            <li className="nav__itemMobileLanguageDropDown"><LanguageDropDown></LanguageDropDown></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
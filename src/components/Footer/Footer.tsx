import React from 'react'
import './Footer.scss'
import FooterFacebookIcon from '../../../src/images/FooterFacebookIcon.svg?url'
import FooterInstargamIcon from '../../../src/images/FooterInstagramIcon.jpg'
import FooterTwitterIcon from '../../../src/images/FooterTwitterIcon.svg?url'
import FooterPlayStoreImage from '../../../src/images/FooterPlayStoreImage.svg?url'
import FooterGooglePlayImage from '../../../src/images/FooterGooglePlayImage.svg?url'

const Footer = () => {
  return (
    <div className="footerWrapper">
    <article className="footer">
      <div className="footerRow">
        <hgroup className="footerColumn">
          <h3 className="footerJadooName">Jadoo.</h3>
          <p className="footerJadooTagline">Book your trip in minute, get full control for much longer.</p>
        </hgroup>
        <nav>
          <ul className="footerMiddleColumns">
            <li>
              <ul className="footerColumn">
                <li className="footerHeader"><h3>Company</h3></li>
                <li className="footerContent">About</li>
                <li className="footerContent">Careers</li>
                <li className="footerContent">Mobile</li>
              </ul>
            </li>
            <li>
              <ul className="footerColumn">
                <li className="footerHeader"><h3>Contact</h3></li>
                <li className="footerContent">Help/FAQ</li>
                <li className="footerContent">Press</li>
                <li className="footerContent">Affilates</li>
              </ul>
            </li>
            <li>
              <ul className="footerColumn">
                <li className="footerHeader"><h3>More</h3></li>
                <li className="footerContent">Airlinefees</li>
                <li className="footerContent">Airline</li>
                <li className="footerContent">Low fare tips</li>
              </ul>
            </li>
          </ul>
        </nav> 
        <section className="footerColumnLinks">
          <div className="footerRow">
            <img className="footerFacebookIcon" src={FooterFacebookIcon}></img>
            <img className="footerInstargamIcon" src={FooterInstargamIcon}></img>
            <img className="footerTwitterIcon" src={FooterTwitterIcon}></img>
          </div>
          <div className="footerRow">
            <span className="footerAppsHeader">Discover our app</span>
          </div>
          <div className="footerRow">
            <img className="footerGooglePlayImage" src={FooterGooglePlayImage}></img>
            <img className="footerPlayStoreImage" src={FooterPlayStoreImage}></img>
          </div>
        </section>
      </div>
      <aside className="footerLastWrapper"><span className="footerLast">All rights reserved@jadoo.com</span></aside>
    </article>
  </div>
  )
}

export default Footer
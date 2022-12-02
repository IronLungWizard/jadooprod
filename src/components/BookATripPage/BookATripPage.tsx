import React from 'react'
import './BookATripPage.scss'
import BookATripPointFirst from '../../../src/images/BookATripPointFirst.svg?url'
import BookATripPointSecond from '../../../src/images/BookATripPointSecond.svg?url'
import BookATripPointThird from '../../../src/images/BookATripPointThird.svg?url'
import TripToGreeceImage from '../../../src/images/TripToGreeceImage.jpg'
import BookATripCardLeaf from '../../../src/images/BookATripCardLeaf.svg?url'
import BookATripCardMap from '../../../src/images/BookATripCardMap.svg?url'
import BookATripCardSend from '../../../src/images/BookATripCardSend.svg?url'
import BookATripCardBuilding from '../../../src/images/BookATripCardBuilding.svg?url'
import BookATripCardHeart from '../../../src/images/BookATripCardHeart.svg?url'
import BookATripOngoingCardImage from '../../../src/images/BookATripOngoingCardImage.jpg'
import BookATripOngoingCardProgressBar from '../../../src/images/BookATripOngoingCardProgressBar.svg?url'

const BookATripPage = () => {
  return (
    <div className="bookATripPageWrapper">
          <article className="bookATripPage">
            <section className="bookATripLeft">
              <hgroup>
                <p className="bookATripPreHeader">Easy and Fast</p> 
                <h2 className="bookATripHeader">Book your next trip in 3 easy steps</h2>
              </hgroup>
              <ul className="bookATripPagePoints">
                <li className="bookATripPagePointFirst"> 
                  <img src={BookATripPointFirst}></img>  
                  <hgroup>
                    <h3 className="bookATripPointHeader">Choose Destination</h3> 
                    <p className="bookATripPointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                  </hgroup>
                </li>
                <li className="bookATripPagePointSecond"> 
                  <img src={BookATripPointSecond}></img>
                  <hgroup>
                    <h3 className="bookATripPointHeader">Make Payment</h3> 
                    <p className="bookATripPointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                  </hgroup>
                </li>
                <li className="bookATripPagePointThird"> 
                  <img src={BookATripPointThird}></img> 
                  <hgroup>
                    <h3 className="bookATripPointHeader">Reach Airport on Selected Date</h3> 
                    <p className="bookATripPointDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                  </hgroup>
                </li>
              </ul>
            </section>
            <section className="bookATripRight">
              <div className="decoreRoundBlue"></div>
              <div className="bookATripCardWrapper">
                <div className="bookATripCard">
                  <img className="tripToGreeceImage" src={TripToGreeceImage}></img>   
                  <span className="tripToGreeceHeader">Trip To Greece</span>
                  <div className="bookATripCardRow">
                    <div className="bookATripCardRowDecore">
                      <h3 className="tripToGreeceDates">14-29 June</h3>
                    </div>
                    <span className="tripToGreeceAuthor">by Robbin Joseph</span>
                  </div>
                  <div className="bookATripCardRowIcons">
                    <img className="bookATripCardIcon" src={BookATripCardLeaf}></img>
                    <img className="bookATripCardIcon" src={BookATripCardMap}></img>
                    <img className="bookATripCardIcon" src={BookATripCardSend}></img>
                  </div>
                  <div className="bookATripCardRow" >
                    <img className="bookATripCardBuilding" src={BookATripCardBuilding}></img>
                    <span className="bookATripCardPeopleAmount">24 people going</span>
                    <img className="bookATripCardHeart" src={BookATripCardHeart}></img>
                  </div>
                </div>
                <div className="bookATripOngoingCard"> 
                  <div className="bookATripOngoingCardRow">
                    <img className="bookATripOngoingCardImage" src={BookATripOngoingCardImage}></img>
                    <div className="bookATripOngoingCardColumn">
                      <p className="bookATripOngoingCardHeader">Ongoing</p>
                      <h3 className="bookATripOngoingCardDescription">Trip to Rome</h3>
                      <div className="bookATripOngoingCardRow">
                        <span className="bookATripOngoingCardPercent">40%</span>
                        <span className="bookATripOngoingCardCompleteness">completed</span>
                      </div>
                      <img className="bookATripOngoingCardProgressBar" src={BookATripOngoingCardProgressBar}></img>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
  )
}

export default BookATripPage
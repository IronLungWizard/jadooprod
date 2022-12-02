import React from 'react'
import './SubscribePage.scss'
import SubscribeCardIcon from '../../../src/images/SubscribeCardIcon.svg?url'
import SubscribeCardMailIcon from '../../../src/images/SubscribeCardMailIcon.svg?url'

const SubscribePage = () => {
  return (
    <div className="subscribePageWrapper">
          <article className="subscribePage">
            <img className="subscribeCardIcon" src={SubscribeCardIcon}></img>
            <div className="subscribeCard">
              <h2 className="subscribeCardTitle">Subscribe to get information, latest news and other interesting offers about Cobham</h2>
              <div className="subscribeCardRow">
                <div className="subscribeCardInsert">
                  <img className="subscribeCardMailIcon" src={SubscribeCardMailIcon}></img>
                  <p className="subscribeCardMailText">Your email</p>
                </div>
                <button className="subscribeCardMailButton"> 
                  <p className="subscribeCardMailButtonText">Subscribe</p> 
                </button>
              </div>
            </div>
          </article>
        </div>
  )
}

export default SubscribePage
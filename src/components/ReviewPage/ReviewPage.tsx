import React from 'react'
import './ReviewPage.scss'
import ReviewPageRightPhoto from '../../../src/images/ReviewPageRightPhoto.jpg'
import ReviewPageArrowUp from '../../../src/images/ReviewPageArrowUp.svg?url'
import ReviewPageArrowDown from '../../../src/images/ReviewPageArrowDown.svg?url'

const ReviewPage = () => {
  return (
    <div className="reviewPageWrapper">
    <article className="reviewPage">
      <section className="reviewPageLeft">
        <p className="reviewPageLeftPreheader">Testimonials</p> 
        <p className="reviewPageLeftHeader">What people say about Us.</p>
        <div className="reviewPageLeftDotsWrapper">
          <div className="reviewPageLeftDots"></div>
          <div className="reviewPageLeftDots"></div>
          <div className="reviewPageLeftDots"></div> 
        </div>
      </section>
      <section className="reviewPageRight">
        <img className="reviewPageRightPhoto" src={ReviewPageRightPhoto}></img>
        <img className="reviewPageRightArrowUp" src={ReviewPageArrowUp}></img>
        <img className="reviewPageRightArrowDown" src={ReviewPageArrowDown}></img>
        <div className="reviewPageRightFirstCard">
          <img className="reviewPageRightPhotoFirstTop" src={ReviewPageRightPhoto}></img>
          <div className="reviewPageRightFirstCardText">
            <p className="reviewPageRightFirstReviewText">“On the Windows talking painted pasture yet its express parties use. 
            Sure last upon he same as knew next. Of believed or diverted no.”</p>
          </div>
          <div className="reviewPageRightFirstCardInfo">
            <div>
              <p className="reviewPageRightFirstReviewName">Mike Taylor</p>
              <p className="reviewPageRightFirstReviewInfo">Lahore, Pakistan</p>
            </div>
            <img className="reviewPageRightPhotoFirstBottom" src={ReviewPageRightPhoto}></img>
          </div>
        </div>
        <div className="reviewPageRightSecondCard">
          <img className="reviewPageRightPhotoSecondTop" src={ReviewPageRightPhoto}></img>
          <div className="reviewPageRightSecondCardText">
            <p className="reviewPageRightSecondReviewText">“On the Windows talking painted pasture yet its express parties use. 
            Sure last upon he same as knew next. Of believed or diverted no.”</p>
          </div>
          <div className="reviewPageRightSecondCardInfo">
            <div>
              <p className="reviewPageRightSecondReviewName">Mike Taylor</p>
              <p className="reviewPageRightSecondReviewInfo">Lahore, Pakistan</p>
            </div>
            <img className="reviewPageRightPhotoSecondBottom" src={ReviewPageRightPhoto}></img>
          </div>
        </div>
        <div className="reviewPageRightThirdCard">
          <img className="reviewPageRightPhotoThirdTop" src={ReviewPageRightPhoto}></img>
          <div className="reviewPageRightThirdCardText">
            <p className="reviewPageRightThirdReviewText">“On the Windows talking painted pasture yet its express parties use. 
            Sure last upon he same as knew next. Of believed or diverted no. On the Windows talking painted pasture yet its express parties use. 
            Sure last upon he same as knew next. Of believed or diverted no.”</p>
          </div>
          <div className="reviewPageRightThirdCardInfo">
            <div>
              <p className="reviewPageRightThirdReviewName">Mike Taylor</p>
              <p className="reviewPageRightThirdReviewInfo">Lahore, Pakistan</p>
            </div>
            <img className="reviewPageRightPhotoThirdBottom" src={ReviewPageRightPhoto}></img>
          </div>
        </div>
      </section>  
    </article>
  </div>
  )
}

export default ReviewPage
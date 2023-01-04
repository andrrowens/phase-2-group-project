<<<<<<< .merge_file_af6HVE
import React from "react";
import { useState, useEffect } from "react"
import ReviewsPage from "./ReviewsPage"
import ReviewForm from "./ReviewForm"

const Reviews = ({parks}) => {

   console.log(parks.name)


    const [reviews, setReviews] = useState([])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const resp = await fetch("http://localhost:3000/reviews")
            const data = await resp.json()
            setReviews(data)
            console.log(data)
          } catch (error) {
            alert(error)
          }
      }
      fetchData()
      }, []);

  return (
    <div className="reviews-home"> 
      <h2 className="review-header"> Recent Visitor Reviews</h2>
      <div className="review-container">
        <ReviewForm setReviews={setReviews} parks={parks} />
      </div>
      <div className="reviews-container">
        <ReviewsPage reviews={reviews} setReviews={setReviews} />
      </div>
    </div>
  );
}

export default Reviews;

=======

const Reviews = () => {
    return(
        <h1>Reviews</h1>
    )
}

export default Reviews;
>>>>>>> .merge_file_eG2MQM

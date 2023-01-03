import React from "react";
import { useState, useEffect } from "react"
import ReviewsPage from "./ReviewsPage"

const Reviews = () => {

    // const [newReview, setNewReview] = useState({
    //   title: "",
    //   content: "",
    //   author: "",
    // })

    const [reviews, setReviews] = useState([])

    // const handleChange = e => {
    //   setNewReview({...newReview, [e.target.name]: e.target.value})
    // }

    // const handleSubmit = e => {
    //   e.preventDefault()

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

    //   fetch("http://localhost:3000/reviews", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(newReview)
    //   })
    //     .then(response => response.json())
    //     .then(review => newReview(currentReviewList => [
    //       review,
    //       ...currentReviewList
    //     ]))
    //     .catch(error => alert(error))

    //     newReview({
    //       title: "",
    //       content: "",
    //       author: "",
    //     })
    // }

  return (
    // <form className="new-review-form" onSubmit={handleSubmit}>
    //   <input onChange={handleChange} placeholder="Title" name="title" value={newReview.title} />
    //   <input onChange={handleChange} placeholder="Author" name="author" value={newReview.author} />
    //   <textarea onChange={handleChange} placeholder="Write your review here!" rows={10} name="content" value={newReview.content} />
    //   <input type="submit" value="Submit Review" />
    // </form>
    <div className="reviews-container">
    <ReviewsPage reviews={reviews}/>
    </div>
  );
}

export default Reviews;


// import React from 'react'

// const Reviews = () => {
//   return (
//     <div>Reviews</div>
//   )
// }
// export default Reviews
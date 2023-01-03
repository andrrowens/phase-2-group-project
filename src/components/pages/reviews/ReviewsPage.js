import React from 'react'
import ReviewsList from "./ReviewsList"

export default function ReviewsPage({reviews}) {

    const mappedReviews = reviews.map(review => <ReviewsList {...review} key={review.id} />);
    // console.log(mappedReviews)

  return (
    <div>{mappedReviews}
    </div>
  )
}

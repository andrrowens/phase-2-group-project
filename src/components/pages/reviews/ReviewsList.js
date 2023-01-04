import React from 'react'
export default function ReviewsList({id, title, content, author, image, park}) {
  return (
    <>
        <div className="review-box">
            <h3 className="park-select">{park}</h3>
            <h3 className="review-title">{title}</h3>
            <p className="review-content">{content}</p>
            <img className="review-image" src={image} alt={title} />
            <p className="review-author">- {author}</p>
        </div>
      </>
  )
}
import React from 'react'

export default function ReviewsList({id, title, content, author, image}) {
  return (
    <div className="review-box">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        <img className="review-image" src={image} alt={title} />
        <p className="author">{author}</p>
        
    </div>
  )
}

import React from "react";
import { useState } from "react"

const NewReview = ({setReviews, parks}) => {

    const [showForm, setShowForm] = useState(false);

    const [newReview, setNewReview] = useState({
      title: "",
      content: "",
      author: "",
      image: "",
    })

    const handleChange = ({target: {name, value}}) => {
      setNewReview({...newReview, [name]: value})
  }

    const handleSubmit = (e) => {
      e.preventDefault()

      fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newReview)
      })
        .then(response => response.json())
        .then(newData => setReviews(currentReviewList => 
          [newData, ...currentReviewList]))
        .catch(error => alert(error))
        setNewReview({
          title: "",
          content: "",
          author: "",
          image: "",
        })
    }

    const handleShowForm = () => {
      setShowForm(currentValue => !currentValue) 
    }

    return (
    <div>
      { showForm ? ( 
      <form className="new-review-form" onSubmit={handleSubmit}>
        <select name="selectList" id="selectList">
        <option value="option 1">Select A Park</option>
        <option value="option 2">Option 2</option>
        </select> < br />
        <label htmlFor="title"></label>
        <input onChange={handleChange} type="text" placeholder="Title" name="title" value={newReview.title} /> <br />
        <label htmlFor="author"></label>
        <input onChange={handleChange} type="text" placeholder="Author" name="author" value={newReview.author} /> <br />
        <label htmlFor="image"></label>
        <input onChange={handleChange} type="text" placeholder="Image" name="image" value={newReview.image} /> <br />
        <label htmlFor="content"></label>
        <textarea onChange={handleChange} type="text" placeholder="Write your review here!" rows={10} name="content" value={newReview.content} /> <br />
        <button type="submit">Submit</button>
     </form>
  ) : null}
     <button className="show-form" onClick={handleShowForm}>{ !showForm ? "Submit A Review!" : "Hide Review Form"}</button>
    </div>  
    )
}

export default NewReview;
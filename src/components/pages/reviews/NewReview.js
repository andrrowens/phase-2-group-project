import React from "react";
import { useState } from "react"

const NewReview = ({setReviews}) => {

    const [showForm, setShowForm] = useState(false);

    const [newReview, setNewReview] = useState({
      park: "",
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
          park: "",
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
        <label htmlFor="park"></label>
        <select onChange={handleChange} name="park" id="selectList">
        <option value="Park Not Selected">Select A Park</option>
        <option value="Denali">Denali</option>
        <option value="Gates of the Artic">Gates of the Artic</option>
        <option value="Glacier Bay">Glacier Bay</option>
        <option value="Katmai">Katmai</option>
        <option value="Kenai Fjords">Kenai Fjords</option>
        <option value="Kobuk Valley">Kobuk Valley</option>
        <option value="Lake Clark">Lake Clark</option>
        <option value="Wrangell-St.Elias">Wrangell-St.Elias</option>
        <option value="Crater Lake">Crater Lake</option>
        <option value="Mount Rainer<">Mount Rainer</option>
        <option value="North Cascades">North Cascades</option>
        <option value="Olympic">Olympic</option>
        <option value="Channel Islands">Channel Islands</option>
        <option value="Death Valley">Death Valley</option>
        <option value="Joshua Tree">Joshua Tree</option>
        <option value="Kings Canyon">Kings Canyon</option>
        <option value="Lassen Volanic">Lassen Volanic</option>
        <option value="Pinnacles">Pinnacles</option>
        <option value="Redwood">Redwood</option>
        <option value="Sequoia">Sequoia</option>
        <option value="Yosemite">Yosemite</option>
        <option value="Arches">Arches</option>
        <option value="Big Bend">Big Bend</option>
        <option value="Bryce Canyon">Bryce Canyon</option>
        <option value="Canyonlands">Canyonlands</option>
        <option value="Capitol Reef">Capitol Reef</option>
        <option value="Carlsbad Caverns">Carlsbad Caverns</option>
        <option value="Grand Canyon">Grand Canyon</option>
        <option value="Great Basin">Great Basin</option>
        <option value="Guadalupe Mountains">Guadalupe Mountains</option>
        <option value="Petrified Forest">Petrified Forest</option>
        <option value="Saguaro">Saguaro</option>
        <option value="White Sands">White Sands</option>
        <option value="Zion">Zion</option>
        <option value="Black Canyon of the Gunnison">Black Canyon of the Gunnison</option>
        <option value="Grand Teton">Grand Teton</option>
        <option value="Great Sand Dunes">Great Sand Dunes</option>
        <option value="Glacier">Glacier</option>
        <option value="Mesa Verde">Mesa Verde</option>
        <option value="Rocky Mountain">Rocky Mountain</option>
        <option value="Yellowstone">Yellowstone</option>
        <option value="Acadia">Acadia</option>
        <option value="Badlands">Badlands</option>
        <option value="Cuyahoga Valley">Cuyahoga Valley</option>
        <option value="Gateway Arch">Gateway Arch</option>
        <option value="Hot Springs">Hot Springs</option>
        <option value="Indiana Dunes">Indiana Dunes</option>
        <option value="Isle Royale">Isle Royale</option>
        <option value="Theodore Roosevelt">Theodore Roosevelt</option>
        <option value="Voyageurs">Voyageurs</option>
        <option value="Wind Cave">Wind Cave</option>
        <option value="Biscayne">Biscayne</option>
        <option value="Congaree">Congaree</option>
        <option value="Dry Tortugas">Dry Tortugas</option>
        <option value="Everglades">Everglades</option>
        <option value="Great Smoky Mountains">Great Smoky Mountains</option>
        <option value="Mammoth Cave">Mammoth Cave</option>
        <option value="Shenandoah">Shenandoah</option>
        <option value="New River Gorge">New River Gorge</option>
        <option value="Haleakala">Haleakala</option>
        <option value="Hawai'i Volcanoes">Hawai'i Volcanoes</option>
        <option value="American Samoa">American Samoa</option>
        <option value="Virgin Islands">Virgin Islands</option>
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
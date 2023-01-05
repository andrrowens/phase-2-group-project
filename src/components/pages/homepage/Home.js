
import { useState } from 'react'
import ReservationForm from "./ReservationForm"



import React from'react';


export default function Home() {
const [form, showForm] = useState(false)

const handleShowForm = () => {
showForm(currentValue => !currentValue)
}
  return (
    <div className="home-container">
    <div className="home-top-div">
        <span className="home-title">Welcome</span>
    </div>

    <div className="home-bottom-div">
      <div className="left-div">
      <p className="book-res">Explore the Beauty of America's National Parks</p>
      <p className="book-res-btn" onClick={handleShowForm} >Plan your trip</p>
      { form ? (
      <div className="reserve-div">
      <ReservationForm />
      </div>) : (<div className="reserve-hidden-div"></div>)}
      </div>
      <div className="right-div">right div weather tracker</div>
    </div>
    <div className="newsletter">sign up for it</div>

    <div className="home-bottom-div">Hello</div>

    </div>
  )
}


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
      <span className="home-title">Welcome</span>
      <div className="home-form">
        <p className="home-subtitle">Explore the Beauty of America's National Parks</p>
      </div>
      <div class="res-container">
	<p className="book-res-btn" onClick={handleShowForm}>Book a Reservation</p>
</div>
      
      { form ? (
      <div className="reserve-div">
      <ReservationForm />
      </div>) : null }
    </div>
  )
}

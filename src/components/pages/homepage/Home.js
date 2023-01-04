import React, { useState } from "react";

import ReservationForm from "./ReservationForm"



export default function Home() {
  return (
    <div className="home-container">
    <div className="home-top-div">
        <span className="home-title">Welcome</span>
    </div>
    <div className="home-bottom-div">
      <div className="left-div">
      <p className="book-res">Book a reservation</p>
      <div className="reserve-div">heres our calendar, select a date
      <ReservationForm />
      </div>
      </div>
      <div className="right-div">right div weather tracker</div>
    </div>
    <div className="newsletter">sign up for it</div>
    </div>
  )
}

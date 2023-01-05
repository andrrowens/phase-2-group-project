import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/homepage/Home';
import Explore from './components/pages/explore/Explore';
import Reviews from './components/pages/reviews/Reviews';
import Trivia from './components/pages/trivia/Trivia';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import questions from './questions'
import GameOver from './components/pages/trivia/GameOver';


function App() {
  
  
  
const [parks, setParks] = useState([])
const [scrollTop, setScrollTop] = useState(false);
const [searchPark, setSearchPark] = useState("")

useEffect(() => {
  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/parks")
      const data = await resp.json()
      setParks(data)
    } catch (error) {
      alert(error)
    }
}
fetchData()
}, []);


useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredParks = parks.filter(park => park.name.toLowerCase().includes(searchPark.toLowerCase()) || park.description.toLowerCase().includes(searchPark.toLowerCase()) || park.region.toLowerCase().includes(searchPark.toLowerCase()) || park.description.toLowerCase().includes(searchPark.toLowerCase()) || park.climate.toLowerCase().includes(searchPark.toLowerCase()));

  return (
      <><Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route path="/explore" element={<Explore parks={filteredParks} key={parks.id} searchPark={searchPark} setSearchPark={setSearchPark}/>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trivia" element={<Trivia className="trivia-container" questions={questions}/>} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
        {scrollTop && (
        <button onClick={bottomToTop} className="backToTop">
          &#8593;
        </button>
      )}
      </div>
      </>
  )
}

export default App;
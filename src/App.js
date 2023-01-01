import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Reviews from './components/pages/Reviews';
import Trivia from './components/pages/Trivia';
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
const [parks, setParks] = useState([])

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
 

  return (
      <><Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore parks={parks} key={parks.id}/>} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </div>
      </>
  )
}

export default App;

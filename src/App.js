import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Reviews from './components/pages/Reviews';
import Trivia from './components/pages/Trivia';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <><Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </div>
      </>
  )
}

export default App;

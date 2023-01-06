import React from'react';
import { useNavigate, useLocation } from 'react-router-dom'

const GameOver = ({points})=>{
 
  const navigateHome = useNavigate()
  const navigateTrivia = useNavigate()
  const location = useLocation()
  
  const { from } = location.state

  
  

  const handleGoHome = ()=> {
  return navigateHome('/') 
  } 
  const handleGoTrivia = ()=> {
  return navigateTrivia('/trivia')
  }
 

  
  return (
    <div className="game-over">
      <div className="waviy">
    
    <span style={{'--i':'1'}}>G</span>
   <span style={{'--i':'2'}}>A</span>
   <span style={{'--i':'3'}}>M</span>
   <span style={{'--i':'4'}}>E</span>
   <span style={{'--i':'5'}}>O</span>
   <span style={{'--i':'6'}}>V</span>
   <span style={{'--i':'7'}}>E</span>
   <span style={{'--i':'8'}}>R</span>
   
   </div>
    <div className="game-over-content">
    <h2> {from} </h2>
    </div>
    <button onClick={handleGoTrivia} className="play-again">Play Again</button>
    <button onClick={handleGoHome} className="back-home">Back Home</button>
    <div className="dancing">
      <img src="https://thumbs.gfycat.com/GoldenBogusHamster.webp" alt="game-over" />
    </div>
    </div>)
}
export default GameOver

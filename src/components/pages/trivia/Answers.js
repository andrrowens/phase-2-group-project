import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const GameOver = ({points})=>{
  const navigateHome = useNavigate()
  const navigateTrivia = useNavigate()
  

  const handleGoHome = ()=> {
  return navigateHome('/') 
  } 
  const handleGoTrivia = ()=> {
  return navigateTrivia('/trivia')
  }
 

  
  return (
    <div className="game-over">
    <h1>Game Over</h1>
    <h2>Total Points: {points}</h2>
    <button onClick={handleGoTrivia} className="play-again">Play Again</button>
    <button onClick={handleGoHome} className="back-home">Back Home</button>
    </div>)
}
export default GameOver
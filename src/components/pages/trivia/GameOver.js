import React from 'react'

const GameOver = ({points})=>{


  
  return (
    <div className="game-over">
    <h1>Game Over</h1>
    <h2>Total Points: {points}</h2>
    <button className="play-again">Play Again</button>
    <button className="back-home">Back Home</button>
    </div>)
            }
export default GameOver

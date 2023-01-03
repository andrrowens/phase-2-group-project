import React, {useState} from 'react'
import Question from './Question'



const Trivia = ({questions}) => {
 const [isRendered, setIsRendered] =  useState(false)
 const [isStartRendered, setIsStartRendered] = useState(true)
 

 const handleClick = (e) => {
    setIsRendered(true)
    setIsStartRendered(false)

  
 }
  

 
  return (

    <div>

    {isStartRendered ? (
    <div>
      <h1>Welcome to Nat Trivia</h1>
      
        
      <button onClick={handleClick}>Start</button> 
      </div>) : null }
      
        {isRendered ? 
          <section>
    <Question questions={questions} />
    <div className="answers">{}</div>
        <button>🎵 🤫</button>
        <button>🔉 🔇</button>
        </section> : null }
    
      
    </div>
  )
}
export default Trivia
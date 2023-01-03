import React, {useState} from 'react'

import Answers from './Answers'

const Question = ({questions}) => {
    
    const [isRendered, setIsRendered] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [points, setPoints] = useState(0)
    let [wrongAnswer, setWrongAnswer] = useState(0)    
    const [hearts, setHearts] = useState(["❤️", "❤️", "❤️"])
    
    const showQuestions = questions[currentQuestion].questionText
    
    const listOfHearts = hearts.map(heart => <span>{heart}</span>)
    

   

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
                    setPoints(points + 1)
                    
                } else {
                    setWrongAnswer(wrongAnswer + 1)
                                        
                    if(wrongAnswer === 0){
                        setHearts(["❤️", "❤️"])

                    } else if(wrongAnswer === 1) {
                        setHearts(["❤️"])
                    } else {
                        setHearts([])
                    }
                   
                    
                    
                    
                    
                    
                }
        

        const nextQuestion = currentQuestion + 1
        setCurrentQuestion(nextQuestion)
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        } else {
            
        } 
    }

   

  return (
    <div className="questions">
        <section>
        <button>🌙 ☀️</button>
         <h2>Points: {points}</h2>
         <h3>Question {currentQuestion} / {questions.length}</h3>
         <h3>Life's left :</h3>
         <div className="heartEmoji-stack"> 
        {listOfHearts}
         </div>
         
         </section>
        <p>{showQuestions}</p>
        <section>
            {questions[currentQuestion].answerOptions.map((answerOption) => 
            <button 
                onClick={() => handleAnswerClick(answerOption.isCorrect)} key={questions.id}>{answerOption.answerText}
            </button>)}
        </section>
        <section>
            
            <button>↩️</button>
        </section>
    </div>
  )
}
export default Question

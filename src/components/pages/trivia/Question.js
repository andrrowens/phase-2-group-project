import React, {useState, useEffect} from 'react'
import Answers from './Answers'

const Question = ({questions, questionNumber, setQuestionNumber}) => {
    console.log(questions.answers)
   
    const [question, setQuestion] = useState(null)

    useEffect (() => {
        setQuestion(questions[questionNumber -1])
    }, [questions, questionNumber])

    // const answerSelections = questions[question].answers.map(answer => <Answers {...answer}/>)

  return (
    <div className="questions">
        <section>
        <button>🌙 ☀️</button>
         <h2>Points 0</h2>
         <h3>Question 0 / {questions.length}</h3>
         <h3>Life ❤️ ❤️ ❤️</h3>
         </section>
        <p>{question?.questionText}</p>
        <section>
            <Answers />
        </section>
        <section>
            
            <button>↩️</button>
        </section>
    </div>
  )
}
export default Question

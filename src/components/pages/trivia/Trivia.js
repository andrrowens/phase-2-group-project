import React, {useState} from 'react'
import Question from './Question'



const Trivia = ({questions}) => {
  console.log(questions)
 const [questionNumber, setQuestionNumber] = useState(1)
//  const [clickedAnswer, setClickedAnswer] = useState(null)
  // const [answer, setAnswer] = useState('')
  // const [correct, setCorrect] = useState(false)
  // const [incorrect, setIncorrect] = useState(false)
  // const questionsArr = questions.map(question => 
  //   <Question  key={question.id} question={question.questionText}/> )
  // const charCompArr = characters.map(char => 
  //   <Character {...char} key={char.id}/>)
  // const mappedAnswers = questions?.answers.map((answer) => 
  //   <Answers key={questions.id}{...answer}/>)
  

 
  return (
    <div>
      
      <section><h1>Welcome to Nat Trivia</h1></section>
      <button>Start</button>
      <section>
    <Question questions={questions} questionNumber={questionNumber} setQuestion={setQuestionNumber}/>
    <div className="answers">{}</div>
        <button>🎵 🤫</button>
        <button>🔉 🔇</button>
    
      </section>
    </div>
  )
}
export default Trivia
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import GameOver from "./GameOver";



const Question = ({ questions, id }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  let [wrongAnswer, setWrongAnswer] = useState(0);
  const [hearts, setHearts] = useState(["❤", "❤", "❤"]);
  const [stillPlaying, setStillPlaying] = useState(true)
  const navigate = useNavigate();

  

  const showQuestions = questions[currentQuestion].questionText;

  const listOfHearts = hearts.map((heart) => <span className="">{heart} key={heart.id} </span>);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setPoints(points + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);

      if (wrongAnswer === 0) {
        setHearts(["❤", "❤"]);
      } else if (wrongAnswer === 1) {
        setHearts(["❤"]);
      } else {
        setHearts([])
        setStillPlaying(false)
       navigate("/gameover")
      }
    }

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        
    }
  };
  const mappedAnswers = questions[currentQuestion].answerOptions.map(
    (answerOption) => (
      <button className="answer-btn"
        onClick={() => handleAnswerClick(answerOption.isCorrect)}
        key={questions.id}
      >
        {answerOption.answerText}
       
      </button>
    )
  );

  return (
    <div>
    {stillPlaying ? (
    <div className="question-container">
        
        
        <h1> Points: {points} </h1>
        <h2>
          Question {currentQuestion} / {questions.length}
        </h2>
        <h3>Life's left : {listOfHearts}</h3>
        
      <div className="entire-quiz">
        <p className="questions">{showQuestions}
        </p>
          <span className="answer-span">{mappedAnswers}
          </span>
        </div>
      </div>) : (
      <GameOver points={points}/>)}

      
    </div>
  );
};
export default Question;

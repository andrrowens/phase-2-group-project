import React, { useState } from "react";

import Answers from "./Answers";

const Question = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  let [wrongAnswer, setWrongAnswer] = useState(0);
  const [hearts, setHearts] = useState(["❤️", "❤️", "❤️"]);
  const [totalPoints, setTotalPoints] = useState(true)

  const showQuestions = questions[currentQuestion].questionText;

  const listOfHearts = hearts.map((heart) => <span>{heart}</span>);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setPoints(points + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);

      if (wrongAnswer === 0) {
        setHearts(["❤️", "❤️"]);
      } else if (wrongAnswer === 1) {
        setHearts(["❤️"]);
      } else {
        setHearts([])
        setTotalPoints(false)
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
    {totalPoints ? (
    <div className="questions">
        
        <button>🌙 ☀️</button>
        <h2>Points: {points}</h2>
        <h3>
          Question {currentQuestion} / {questions.length}
        </h3>
        <h3>Life's left : {listOfHearts}</h3>
     
      <p>{showQuestions}</p>
      <section className="answerbtns">{mappedAnswers}</section>
      </div>) : (
      <div className="game-over">
      <h1>Game Over</h1>
      <h2>Total Points: {points}</h2>
      <button>↩️</button>
      </div>)}

      
    </div>
  );
};

export default Question;


import React, { useState } from "react";
import Question from "./Question";


const Trivia = ({ questions }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isStartRendered, setIsStartRendered] = useState(true);
  // const [playSound, setPlaySound] = useState(true)



  const handleClick = (e) => {
    setIsRendered(true);
    setIsStartRendered(false);
    // setPlaySound(true);
  };
    return(

    <div>
      {isStartRendered ? (
        
        <div  className="triv-container">
          <h1 className="triv-title">Welcome to National Park Trivia</h1>
          <div className="wrap">
            <button className="start-btn" onClick={handleClick}>Start Quiz</button>
          </div>
        </div>
      ) : null}

      {isRendered ? (
        <div className="quest-container">
        <section>
          <Question questions={questions} key={questions.id} />
          
          {/* <button>🎵 </button>
          <button onClick={handleClick}>🔉 </button> */}
        </section>
        </div>
      ) : null}
    </div>
  );
};
export default Trivia;


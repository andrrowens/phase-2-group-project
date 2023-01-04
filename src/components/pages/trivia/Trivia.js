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
 

  return (
    <div className="welcome-trivia">
      {isStartRendered ? (
        <div className="trivia-start">
          <h1 className="trivia-welcome">Welcome to Nat Trivia</h1>
          <div className="wrap">
            <button className="start-btn" onClick={handleClick}>Start</button>
          </div>
        </div>
      ) : null}

      {isRendered ? (
        <section>
          <Question questions={questions} />
          
          <button>🎵 </button>
          <button onClick={handleClick}>🔉 </button>
        </section>
      ) : null}
    </div>
  );
};
export default Trivia;

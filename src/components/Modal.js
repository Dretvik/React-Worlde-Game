import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
    const handleRestartClick = () => {
        window.location.reload();
      };
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">Solution: { solution } </p>
                <p>You found the solution in { turn } guesses :) </p>
                <button className="restartButtons" onClick={handleRestartClick}>Try again</button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Nevermind!</h1>
                <p className="solution">Solution: { solution } </p>
                <p>Better luck next time! :) </p>
                <button className="restartButtons" onClick={handleRestartClick}>Try again</button>
            </div>
        )}
    </div>
  )
}

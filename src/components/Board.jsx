import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  // logic for game
  const [state, setState] = useState(Array(9).fill(null));

  // to decide x turn
  const [isXTurn, setIsXTurn] = useState(true);

  // to check winner
  const checkWinner = () => {
    const winnerLogic = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // column
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      // diagonaly
      [0, 5, 8],
      [3, 5, 7]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }
    // if above condition not trye
    return false;
  };

  // to check the winner
  const isWinner = checkWinner();

  // to track click on the square
  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  // Play again handlereset reser game
  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <h1>
          {isWinner} won the Game{" "}
          <button onClick={handleReset}>Play Again</button>
        </h1>
      ) : (
        <>
          <h4>{isXTurn ? "X" : "O"} it's your turn to move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;

import "./GameBoard.css";
import { useState } from "react";

const INITIAL_GAME_BOARD = [];
for (let index = 0; index <= 2; index++)
  INITIAL_GAME_BOARD.push(Array(3).fill(null));

export default function GameBoard({ onSelectedSquare, gameTurns }) {
 
  const gameBoard = INITIAL_GAME_BOARD
 
  for(const turn of gameTurns){
    const {square, symbol} = turn;
    const {rowIndex, colIndex} = square; 
    gameBoard[rowIndex][colIndex] = symbol;
  }

  return (
    <ol id="gameBoard">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => {
                  if (gameBoard[rowIndex][colIndex] === null) onSelectedSquare(rowIndex, colIndex, gameBoard)}}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

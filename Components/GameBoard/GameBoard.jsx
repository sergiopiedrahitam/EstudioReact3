import "./GameBoard.css";
// import { useState } from "react";

// Este creacion del tablero se ejecuta solo la primera vez que se ejecuta el componente
const INITIAL_GAME_BOARD = [];
for (let index = 0; index <= 2; index++)
  INITIAL_GAME_BOARD.push(Array(3).fill(null));

export default function GameBoard({ onSelectedSquare, gameTurns }) {

  function isWinnigSquare(rowIndex, colIndex){
      if(gameTurns.length > 4 && gameTurns[0].hasWinner){
        return gameTurns[0].hasWinner.winningCombination.some(
          (combination)=> 
            combination.row == rowIndex && combination.column == colIndex
          );
      }
    }
 
  //aqui llenamos el tablero con la informacion del gameTurns, 
  // colocando el simbolo en el tablero
  const gameBoard = [...INITIAL_GAME_BOARD.map((array)=>[...array])]

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
                <button
                className={isWinnigSquare(rowIndex,colIndex) ? 'winningSquare':''}
                onClick={() => {
                  if (gameTurns.length > 4 && gameTurns[0].hasWinner) return false
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

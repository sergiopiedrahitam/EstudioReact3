import './App.css';
import { WINNING_COMBINATIONS } from '../data/winningCombinations.js';
import Player from '../Components/Player/Player.jsx';
import GameBoard from '../Components/GameBoard/GameBoard.jsx';
import LogTurns from '../Components/LogTurns/LogTurns.jsx';
import { useState } from 'react';

function App() {

  WINNING_COMBINATIONS

  function setActivePlayer(gameTurns){
    let activePlayer ='X';
    activePlayer = (gameTurns.length>0 && gameTurns[0].symbol=="X")?"O":"X";
    return activePlayer;
  }

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = setActivePlayer(gameTurns)
  const [playerNames, setPlayerNames] = useState({name1:' Jugador 1', name2: 'Jugador 2'});

   function handleChangeName(event, keyName){
            setPlayerNames((...prevPlayerNames) => {
              
              const prevsPlayerNames = {...prevPlayerNames};
              
              
              const otherKey = keyName === 'name1'? 'name2':'name1';
              const newPlayerNames = {
                [keyName]: event.target.value,
                [otherKey] : prevsPlayerNames[0][otherKey],
              };
              return newPlayerNames;
            }
          );
        }

  function handleSelectedSquare(rowIndex, colIndex, gameBoard){
    
    setGameTurns((prevGameTurns)=>{

      const actualSymbol = setActivePlayer(prevGameTurns);

      if (prevGameTurns.length>=4){
        const newGameBoard = [...gameBoard];
        newGameBoard[rowIndex][colIndex]=actualSymbol;
        console.log(newGameBoard);
      };
       
      const actualGameTurns = [
        {square:{rowIndex:rowIndex, colIndex:colIndex},symbol:actualSymbol},
        ...prevGameTurns
      ];
      return actualGameTurns
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer" className='highlight-player '>
              <Player 
              namePlayer={playerNames.name1}
              onChangeName = {handleChangeName} 
              keyName = 'name1'
              playerSymbol="X" isActive={activePlayer == 'X'} >
              </Player>
              <Player 
              namePlayer={playerNames.name2}
              onChangeName = {handleChangeName} 
              keyName = 'name2'
              playerSymbol="O" isActive={activePlayer == 'O'}>
              </Player>
          </ol>
          <GameBoard gameTurns={gameTurns} onSelectedSquare={handleSelectedSquare}/>
          <LogTurns playerNames = {playerNames} gameTurns={gameTurns}/>
        </div>

      </main>
    </>
  )
}

export default App

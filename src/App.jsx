import './App.css';
import { WINNING_COMBINATIONS } from '../data/winningCombinations.js';
import Player from '../Components/Player/Player.jsx';
import GameBoard from '../Components/GameBoard/GameBoard.jsx';
import LogTurns from '../Components/LogTurns/LogTurns.jsx';
import GameOver from '../Components/GameOver/GameOver.jsx';
import { useState } from 'react';

function App() {

  function setHasWinner(prevGameTurns, newGameBoard){
    
    if(prevGameTurns.length < 4)return false;
    if (prevGameTurns.length>=4){
      for (const combination of WINNING_COMBINATIONS){
        let symbolsWinner = {
          firstSymbol:newGameBoard[combination[0].row][combination[0].column],
          secondSymbol:newGameBoard[combination[1].row][combination[1].column],
          thirdSymbol: newGameBoard[combination[2].row][combination[2].column]
        };
        if(symbolsWinner.firstSymbol!=null && symbolsWinner.firstSymbol === symbolsWinner.secondSymbol && 
          symbolsWinner.secondSymbol === symbolsWinner.thirdSymbol
        ){
          return {isWinner: true, winningCombination:combination};
        }
      }
      return false;
  }
 }

  function setActivePlayer(gameTurns){
    let activePlayer ='X';
    
    activePlayer = (gameTurns.length>0 && gameTurns[0].symbol=="X")?"O":"X"; 
    if (gameTurns.length >4 && gameTurns[0].hasWinner) activePlayer = gameTurns[0].symbol;

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

      // setActivePlayer() es una funcion, no un estado, q alterna el valor de X
      const actualSymbol = setActivePlayer(prevGameTurns);

      let newGameBoard = [...gameBoard];
      newGameBoard[rowIndex][colIndex]=actualSymbol;
      // en la proxima linea, queda como parametro newGameBoard, aunque el profesor utilizo como pro gameBoard
      // const hasWinner = setHasWinner(prevGameTurns, newGameBoard);
      const hasWinner = setHasWinner(prevGameTurns, newGameBoard); 
             
      const actualGameTurns = [
        {square:{rowIndex:rowIndex, colIndex:colIndex},
        symbol:actualSymbol,
        hasWinner: hasWinner,
        },
        ...prevGameTurns
      ];
      return actualGameTurns
    });
  }

  function handleRestartGame(){
    setGameTurns([])
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
          {(gameTurns.length > 4 && gameTurns[0].hasWinner) && <GameOver title = '!Revancha!' handleRestartGame={handleRestartGame}></GameOver>}
          {(gameTurns.length > 8 && !gameTurns[0].hasWinner) && <GameOver title = '!Empate!'handleRestartGame={handleRestartGame}></GameOver>}
          
          <GameBoard gameTurns={gameTurns} onSelectedSquare={handleSelectedSquare}/>
          <LogTurns playerNames = {playerNames} gameTurns={gameTurns}/>
        </div>

      </main>
    </>
  )
}

export default App

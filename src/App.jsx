import './App.css';
import Player from '../Components/Player/Player.jsx';
import GameBoard from '../Components/GameBoard/GameBoard.jsx';
import { useState } from 'react';


function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handlePickedSquare(){
    console.log("ahora tiene el turno jugador: "+activePlayer);
    setActivePlayer((lastActivePlayer)=> (activePlayer === 'X') ? 'O':'X');
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="playersContainer" className='highlight-player '>
              <Player initialName={"Jugador 1"} initialSymbol={"X"}></Player>
              <Player initialName={"Jugador 2"} initialSymbol={"O"}></Player>
          </ol>
          <GameBoard onSelectSquare={()=>handlePickedSquare()}/>
          {/* <GameBoard onSelectSquare={handlePickedSquare}/> */}
        </div>
      </main>
      
    </>
  )
}

export default App

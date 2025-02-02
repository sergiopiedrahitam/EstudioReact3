import './App.css'
import Player from '../Components/Player/Player.jsx'

function App() {

  return (
    <>
      <main>
                <div id="game-container">
                <ol id="playersContainer">
                    <Player playerName={"Sergio"} playerSimbol={"X"}></Player>
                    <Player playerName={"Patricia"} playerSimbol={"O"}></Player>
                </ol>
                </div>
            </main>
    </>
  )
}

export default App

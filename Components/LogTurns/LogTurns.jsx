import './LogTurns.css';

export default function LogTurns({gameTurns}){
    return(
        <>
            <ol id="logTurns">
                {gameTurns.map((turn, index) => {
                    return(
                        <li key={index}>
                            <p>Turno: {(gameTurns.length - index)}</p>
                            <p>Jugo Jugador de signo '{turn.symbol}' en la posicion [{turn.square.rowIndex}][{turn.square.colIndex}]
                            </p>
                        </li>
                    );
                })}   
            </ol>
            
        </>
    );
}
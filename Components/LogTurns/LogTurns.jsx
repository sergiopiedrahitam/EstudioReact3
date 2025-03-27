import './LogTurns.css';

export default function LogTurns({playerNames, gameTurns}){
    
    let winnerText = function winnerMessage(turn, playerNames){
        return <span>
            👑 El jugador '{turn.symbol == "X"? playerNames.name1:playerNames.name2}'
            es el ganador 👑
        </span>
    };
   
    return(
        <>
            <ol id="logTurns">
                {gameTurns.map((turn, index) => {
                    const isWinner = turn.hasWinner;
                    return(
                        <li key={index}>

                            <p> hay ganador?: {turn.hasWinner.isWinner ? 'SI, ASI ES!! ':'Nooo'}</p>
                            <p>{isWinner && winnerText(turn, playerNames)}</p>
                            <p>Turno: {(gameTurns.length - index)} : <tex className='estilos'>{turn.symbol == "X"? playerNames.name1:playerNames.name2}</tex></p>
                            <p></p>
                            <p>
                                Turno de {turn.symbol == "X"? playerNames.name1:playerNames.name2} / 
                                de signo '{turn.symbol}' en la posicion [{turn.square.rowIndex}][{turn.square.colIndex}]
                            </p>
                        </li>
                    );
                })}   
            </ol>
            
        </>
    );
}
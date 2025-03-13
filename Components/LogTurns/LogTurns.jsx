import './LogTurns.css';

export default function LogTurns({playerNames, gameTurns}){
    let winnerText = gameTurns.length>0 && gameTurns[0].hasWinner? "Existe un Ganador":'';
    return(
        <>
            <ol id="logTurns">
                {gameTurns.map((turn, index) => {
                    return(
                        <li key={index}>

                            <p> hay ganador?: {turn.hasWinner ? 'SI, ASI ES!! ':'Nooo'}</p>
                            <p></p>
                            <p>Turno: {(gameTurns.length - index)} : <tex className='estilos'>{turn.symbol == "X"? playerNames.name1:playerNames.name2}</tex></p>
                            <p >{winnerText}
                                Turno de {turn.symbol == "X"? playerNames.name1:playerNames.name2}
                                 de signo '{turn.symbol}' en la posicion [{turn.square.rowIndex}][{turn.square.colIndex}]
                            </p>
                        </li>
                    );
                })}   
            </ol>
            
        </>
    );
}
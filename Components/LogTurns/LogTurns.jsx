import './LogTurns.css';

export default function LogTurns({playerNames, gameTurns}){

    return(
        <>
            <ol id="logTurns">
                {gameTurns.map((turn, index) => {
                    return(
                        <li key={index}>
                            <p>Turno: {(gameTurns.length - index)} : <tex className='estilos'>{turn.symbol == "X"? playerNames.name1:playerNames.name2}</tex></p>
                            <p >Turno de {turn.symbol == "X"? playerNames.name1:playerNames.name2} de signo '{turn.symbol}' en la posicion [{turn.square.rowIndex}][{turn.square.colIndex}]
                            </p>
                        </li>
                    );
                })}   
            </ol>
            
        </>
    );
}
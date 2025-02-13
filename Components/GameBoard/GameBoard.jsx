import "./GameBoard.css";
import { useState } from "react";

const INITIAL_GAME_BOARD =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
 ]

export default function GameBoard({onSelectSquare}){
    const [gameBoard, setGameBoard]=useState(INITIAL_GAME_BOARD);

    function handleClickSquare(rowIndex, colIndex){
        console.log (rowIndex +"--"+ colIndex);

        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard = [...prevGameBoard.map((cols)=>[...cols])];
            console.log(prevGameBoard);
            updatedGameBoard[rowIndex][colIndex]= "X";
            console.log(updatedGameBoard);
            return updatedGameBoard;
        });
        onSelectSquare();
    }
   

    return(
        <ol id="gameBoard">
          {gameBoard.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex)=>
                        <li key={colIndex}>
                            <button onClick={()=>handleClickSquare(rowIndex,colIndex)}>{col}</button>
                        </li>)}
                </ol>
            </li>)}  
        </ol>
    );
}
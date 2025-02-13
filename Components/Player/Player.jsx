import { use } from "react";
import "./Player.css"
import { useState } from "react";

export default function Player({initialName, initialSymbol, children}){

    const [isEditing,setIsEditing]= useState(false)
    const [playerName,setPlayerName] = useState(initialName)
    const [symbolName,setSymbolName] = useState(initialSymbol)
   
    function handleChangeClick(){
        setIsEditing((isEditing)=>!isEditing); //valor => true
        // setIsEditing((isEditing)=>!isEditing); //valor => false
      }
    
        function handleNameChange(event){
            setPlayerName(event.target.value);
        }

    function handleSymbolChange(event){
        setSymbolName(event.target.value);
    }
    
    const playerNameField = isEditing
    ? (<input type="text" name="" id="" required placeholder={playerName} onChange={(event)=>handleNameChange(event)}/>)
    : (<span className='player-name'>{playerName}</span>)

    const playerNameSymbol = isEditing
    ? (<input type="text" name="" id="" required placeholder={symbolName} onChange={(event)=>handleSymbolChange(event)}/>)
    : <span className='player-symbol'>{symbolName}</span>

    const buttonChangeValue = isEditing
    ? "Guardar"
    : "Cambiar"

    return (
        <>
            <li className="active">
                <span className='player'>
                    {playerNameField}
                    {playerNameSymbol}
                    {/* <span className='player-simbol'>{playerSimbol}</span> */}
                </span>
                <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
            </li>
        </>
    );
}
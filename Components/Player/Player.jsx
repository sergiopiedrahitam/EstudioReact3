import { use } from "react";
import "./Player.css"
import { useState } from "react";

export default function Player({initialName, playerSymbol, isActive}){

    const [isEditing,setIsEditing]= useState(false)
    const [playerName,setPlayerName] = useState(initialName)
       
    function handleClickButton(){
        setIsEditing((isEditing)=>!isEditing); 
      }
    
    function handleNameChange(event){
            setPlayerName(event.target.value);
        }
      
    const playerNameField = isEditing
    ? (<input type="text" name="" id="" required placeholder={playerName} onChange={(event)=>handleNameChange(event)}/>)
    : (<span className='player-name'>{playerName}</span>)

    const buttonChangeValue = isEditing
    ? "Guardar"
    : "Cambiar"

    return (
        <>
            <li className= {(isActive) ? 'active' : undefined}>
                <span className='player'>
                    {playerNameField}
                    <span className='player-symbol'>{playerSymbol}</span>
                </span>
                <button onClick={()=>handleClickButton()}>{buttonChangeValue}</button>
            </li>
        </>
    );
}
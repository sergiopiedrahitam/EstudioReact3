import { use } from "react";
import "./Player.css"
import { useState } from "react";

export default function Player({playerName, playerSimbol, children}){
    const [isEditing,setIsEditing]= useState(false)

    function handleChangeClick(){
        setIsEditing(!isEditing);
        // asi se cambia el valor del booleano cada vez que hagas click, dependiento del valor que tenga
      }
    
    const playerNameField = isEditing
    ? (<input type="text" name="" id="" required defaultValue={playerName}/>)
    : (<span className='player-name'>{playerName}</span>)

    const buttonChangeValue = isEditing
    ? "Guardar"
    : "Cambiar"

    return (
        <>
            <li>
                <span className='player'>
                    {playerNameField}
                    <span className='player-simbol'>{playerSimbol}</span>
                </span>
                <button onClick={()=>handleChangeClick()}>{buttonChangeValue}</button>
            </li>
        </>
    );
}
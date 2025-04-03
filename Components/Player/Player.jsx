import "./Player.css";
import { useState } from "react";

export default function Player({namePlayer, onChangeName, onChangeSymbol, keyName, keySymbol, playerSymbol, isActive, gameTurnsLength}) {

  const [isEditing, setIsEditing] = useState(false);

  function handleClickButton() {
    setIsEditing((isEditing) => !isEditing);
  }

  const playerNameField = isEditing ? (
    <input
      type="text"
      name=""
      id=""
      required
      placeholder={namePlayer}
      onChange={(event) => onChangeName(event, keyName)}
    />
  ) : (
    <span className="player-name">{namePlayer}</span>
  );

  const playerSymbolField = isEditing ? (
    <input
      type="text"
      name=""
      id=""
      maxLength='1'
      required
      placeholder={playerSymbol}
      onChange={(event) => onChangeSymbol(event, keySymbol, gameTurnsLength)}
    />
  ) : (
    <span className="player-symbol">{playerSymbol}</span>
  );

  const buttonChangeValue = isEditing ? "Guardar" : "Cambiar";

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {playerNameField}
          <span></span>
          {playerSymbolField}
        </span>
        <button onClick={() => handleClickButton()} disabled={!isActive}>
          {buttonChangeValue}
        </button>
      </li>
    </>
  );
}

import "./game.css";
import { useEffect, useState } from "react";
import Intro from "./Intro/Intro";
import DialogBox from "./DialogBox/DialogBox";
const Game = ({ selectedCharacter }) => {
  const [scene, setScene] = useState(0);

  if (scene === 0) return <Intro />;
  else if (scene === 1)
    return (
      <DialogBox
        speakingCharacter={"???"}
        text={"Pewnie się zastanawiasz po co cię tu przywiozłem"}
      />
    );
};
export default Game;

import { useState } from "react";
import "./cipherCharacter.css";
import RoomsQuest from "../../Quests/RoomsQuest/RoomsQuest";
const CipherCharacter = ({ nick }) => {
  const [quest, setQuest] = useState(0);
  return (
    <div id="cipherCharacter">
      <RoomsQuest nick={nick} />
    </div>
  );
};
export default CipherCharacter;

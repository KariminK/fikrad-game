import { useState } from "react";
import "./cipherCharacter.css";
import RoomsQuest from "../../Quests/RoomsQuest/RoomsQuest";
import CaesarQuest from "../../Quests/CaesarQuest/CaesarQuest";
const CipherCharacter = ({ nick }) => {
  const [quest, setQuest] = useState(0);
  const QUESTS = [
    <RoomsQuest
      nick={nick}
      nextQuest={() => {
        setQuest(1);
      }}
    />,
    <CaesarQuest />,
  ];
  return <div id="cipherCharacter">{QUESTS[quest]}</div>;
};
export default CipherCharacter;

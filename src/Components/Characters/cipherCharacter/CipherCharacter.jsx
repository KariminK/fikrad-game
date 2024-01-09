import { useState } from "react";
import "./cipherCharacter.css";
import RoomsQuest from "../../Quests/RoomsQuest/RoomsQuest";
import CaesarQuest from "../../Quests/CaesarQuest/CaesarQuest";
import AsyncAudio from "../../../helpers/asyncAudio";
import punchSound from "/src/assets/sounds/punch.mp3";
import ImageQuest from "../../Quests/ImageQuest/ImageQuest";
const CipherCharacter = ({ nick, onDie }) => {
  const [quest, setQuest] = useState(0);
  const hit = new AsyncAudio(punchSound);
  const nextQuestHandle = async () => {
    if (quest === 0) await hit.asyncPlay(200);
    setQuest(quest + 1);
  };
  const QUESTS = [
    <RoomsQuest nick={nick} nextQuest={nextQuestHandle} onDie={onDie} />,
    <CaesarQuest nick={nick} nextQuest={nextQuestHandle} onDie={onDie} />,
    <ImageQuest nick={nick} nextQuest={nextQuestHandle} onDie={onDie} />,
  ];
  return <div id="cipherCharacter">{QUESTS[quest]}</div>;
};
export default CipherCharacter;

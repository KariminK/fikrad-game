import { useEffect, useState } from "react";
import "./cipherCharacter.css";
import RoomsQuest from "../../Quests/RoomsQuest/RoomsQuest";
import CaesarQuest from "../../Quests/CaesarQuest/CaesarQuest";
import AsyncAudio from "../../../helpers/asyncAudio";
import punchSound from "/src/assets/sounds/punch.mp3";
import ImageQuest from "../../Quests/ImageQuest/ImageQuest";
import backgroundMusic from "/src/assets/sounds/cipherMusic.mp3";
const CipherCharacter = ({ nick, onDie, getAchievement, onCharacterEnd }) => {
  const backgroundMusicSound = new AsyncAudio(backgroundMusic);
  const [quest, setQuest] = useState(0);
  const hit = new AsyncAudio(punchSound);

  useEffect(() => {
    backgroundMusicSound.play();
    backgroundMusicSound.addEventListener("ended", () =>
      backgroundMusicSound.play()
    );
    return () => backgroundMusicSound.pause();
  }, []);

  const nextQuestHandle = async () => {
    if (quest === 0) await hit.asyncPlay(200);
    if (quest === 2) onCharacterEnd();
    setQuest(quest + 1);
  };
  const QUESTS = [
    <RoomsQuest
      nick={nick}
      nextQuest={nextQuestHandle}
      onDie={onDie}
      getAchievement={getAchievement}
    />,
    <CaesarQuest
      nick={nick}
      nextQuest={nextQuestHandle}
      onDie={onDie}
      getAchievement={getAchievement}
    />,
    <ImageQuest
      nick={nick}
      nextQuest={nextQuestHandle}
      onDie={onDie}
      getAchievement={getAchievement}
    />,
  ];
  return <div id="cipherCharacter">{QUESTS[quest]}</div>;
};
export default CipherCharacter;

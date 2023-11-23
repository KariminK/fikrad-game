import "./game.css";
import { useEffect, useState } from "react";
import Intro from "./Intro/Intro";
import Dialog from "./Dialog/Dialog";
import AsyncAudio from "../../helpers/asyncAudio";
import punchSound from "../../assets/sounds/punch.mp3";
import typeSound from "../../assets/sounds/type.mp3";
import DIALOG_DATA from "../../data/dialogs.json";
import introTexts from "../../data/introTexts.json";
const Game = ({ selectedCharacter }) => {
  const [scene, setScene] = useState(1);
  const [chars, setChars] = useState(0);
  const [introTextIndex, setIntroTextIndex] = useState(0);
  const [dialNum, setDialNum] = useState(0);

  const punch = new AsyncAudio(punchSound);
  const type = new AsyncAudio(typeSound);
  const dialogs = DIALOG_DATA.map((dialog) => {
    return {
      ...dialog,
      options: dialog.options.map(({ text, nextDialIndex }) => {
        return {
          text,
          result: () => setDialNum(nextDialIndex),
        };
      }),
    };
  });
  const handleIntro = async () => {
    if (scene != 0) return;
    if (introTextIndex < introTexts.length) {
      if (introTextIndex === 3 && chars === 0) {
        await punch.asyncPlay(1000);
        setChars(chars + 1);
      } else if (
        introTexts[introTextIndex] &&
        chars === introTexts[introTextIndex].length + 10
      ) {
        setIntroTextIndex(introTextIndex + 1);
        setChars(0);
      } else {
        setChars(chars + 1);
        if (chars <= introTexts[introTextIndex].length)
          await type.asyncPlay(10);
      }
    } else {
      setChars(0);
      setScene(1);
    }
  };

  useEffect(() => {
    let timeoutid = setTimeout(handleIntro, 100);
    return () => clearTimeout(timeoutid);
  }, [chars]);

  if (scene === 0)
    return <Intro texts={introTexts} index={introTextIndex} chars={chars} />;
  else if (scene === 1)
    return (
      <Dialog
        speakingCharacter={dialogs[dialNum].speakingCharacter}
        text={dialogs[dialNum].text}
        options={dialogs[dialNum].options}
      />
    );
};
export default Game;

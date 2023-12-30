import { useEffect, useState } from "react";
import AsyncAudio from "../../../helpers/asyncAudio";
import punchSound from "../../../assets/sounds/punch.mp3";
import typeSound from "../../../assets/sounds/type.mp3";
import "./intro.css";
import introTexts from "../../../data/introTexts.json";

const Intro = ({ scene, onIntroEnd }) => {
  const [chars, setChars] = useState(0);
  const [introTextIndex, setIntroTextIndex] = useState(0);
  const punch = new AsyncAudio(punchSound);
  const type = new AsyncAudio(typeSound);
  const handleIntro = async () => {
    if (scene != 0) return;
    if (introTextIndex < introTexts.length) {
      if (introTextIndex === 3 && chars === 0) {
        await punch.asyncPlay(1000);
        setChars(chars + 1);
      } else if (
        introTexts[introTextIndex] &&
        chars === introTexts[introTextIndex].length + 20
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
      onIntroEnd();
    }
  };
  useEffect(() => {
    let timeoutid = setTimeout(handleIntro, 50);
    return () => clearTimeout(timeoutid);
  }, [chars]);

  return (
    <div className="intro">
      <p>
        {introTexts[introTextIndex]
          ? introTexts[introTextIndex].slice(0, chars)
          : ""}
      </p>
    </div>
  );
};
export default Intro;

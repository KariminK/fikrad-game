import { useEffect, useState } from "react";
import punch from "../../../assets/sounds/punch.mp3";
import "./intro.css";
const Intro = ({ text }) => {
  const [chars, setChars] = useState(0);
  const [introTextIndex, setIntroTextIndex] = useState(0);
  const punchSound = new Audio(punch);
  const introTexts = [
    "Idziesz przez miasto chłodnym wieczorem...",
    "Nagle słyszysz czyjeś kroki od tyłu",
    "Odwracasz się, i...",
    "Odzyskujesz przytomność w dziwnym pomieszczeniu, nie pamiętasz co się wydarzyło",
  ];
  useEffect(() => {
    let timeoutid = setTimeout(async () => {
      if (introTextIndex === 3 && chars === 0) {
        await new Promise((resolve, reject) => {
          punchSound.play();
          punchSound.onended = setTimeout(() => {
            resolve();
          }, 1000);
        });
        setChars(chars + 1);
      } else if (
        introTexts[introTextIndex] &&
        chars === introTexts[introTextIndex].length + 10
      ) {
        setIntroTextIndex(introTextIndex + 1);
        setChars(0);
      } else if (introTextIndex > 3) {
        setChars(0);
      } else {
        setChars(chars + 1);
      }
    }, 100);
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

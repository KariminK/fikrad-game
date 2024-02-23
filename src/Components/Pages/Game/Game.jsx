import "./game.css";
import { useState } from "react";
import Intro from "../../Scenes/Start game/Intro";
import IntroDialog from "../../Scenes/IntroDialog/IntroDialog";
import Notification from "../../Notification/Notification";
import DIALOG_DATA from "../../../data/dialogs.json";

import Clock from "./Clock/Clock";
import LoseScreen from "../../Scenes/LoseScreen/LoseScreen";
import CipherCharacter from "../../Characters/cipherCharacter/CipherCharacter";
import sound from "/src/assets/sounds/notification.wav";

const Game = ({ selectedCharacter, onCharacterEnd, updateAchievements }) => {
  const [scene, setScene] = useState(0);
  const [dialNum, setDialNum] = useState(0);
  const [nick, setNick] = useState("");
  const dialogs = DIALOG_DATA.map((dialog) => {
    let nextDial;
    if (dialog.type === "text") {
      nextDial = dialog.answers;
    }
    return {
      ...dialog,
      options: dialog.options
        ? dialog.options.map(({ text, nextDialIndex }) => {
            return {
              text,
              result: () => {
                if (nextDialIndex === 11) setScene(2);
                else setDialNum(nextDialIndex);
              },
            };
          })
        : nextDial,
    };
  });
  const currentDialog = dialogs[dialNum];
  const handleNeutralAnswer = (text, nextDial, dialID) => {
    if (dialID === "INSERT_NICK") {
      setNick(text);
      setDialNum(nextDial);
      updateAchievements("SETTED_NICK");
    }
  };
  const handleAnswer = (text, nextDial, dialID) => {
    setDialNum(nextDial);
  };

  switch (scene) {
    case 0:
      return <Intro scene={scene} onIntroEnd={() => setScene(1)} />;
    case 1:
      return (
        <>
          <IntroDialog
            dial={currentDialog}
            onNonNeutralAnswer={handleAnswer}
            onNeutralAnswer={handleNeutralAnswer}
            nick={nick}
            dialNum={dialNum}
          />
        </>
      );
    case 2:
      return (
        <div className="game">
          <Clock onRunOutOfTime={() => setScene(3)} />
          <CipherCharacter
            nick={nick}
            onDie={() => setScene(3)}
            getAchievement={updateAchievements}
            onCharacterEnd={() => onCharacterEnd(0)}
          />
        </div>
      );
    case 3:
      return <LoseScreen />;
  }
};
export default Game;

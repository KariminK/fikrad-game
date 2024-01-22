import "./game.css";
import { useState } from "react";
import Intro from "../../Scenes/Start game/Intro";
import IntroDialog from "../../Scenes/IntroDialog/IntroDialog";
import Notification from "../../Notification/Notification";
import DIALOG_DATA from "../../../data/dialogs.json";
import ACHIEVEMENTS_DATA from "../../../data/achievements.json";
import AchievementsButton from "../../Buttons/Achievements button/AchievementsBtn";
import Achievements from "../../Dialog Boxes/Achievements/Achievements";
import Clock from "./Clock/Clock";
import LoseScreen from "../../Scenes/LoseScreen/LoseScreen";
import CipherCharacter from "../../Characters/cipherCharacter/CipherCharacter";
const Game = ({ selectedCharacter }) => {
  const [scene, setScene] = useState(0);
  const [dialNum, setDialNum] = useState(0);
  const [nick, setNick] = useState("");
  const [achievements, setAchievements] = useState(ACHIEVEMENTS_DATA);
  const [showAchievements, setShowAchievements] = useState(false);
  const [notification, setNotification] = useState({
    text: "",
    heading: "",
    icon: "",
  });
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
      setNotification({
        text: "Ustawiłeś swój nick",
        heading: "Miło cię poznać",
        icon: "",
      });
      updateAchievements("SETTED_NICK");
    }
  };
  const handleAnswer = (text, nextDial, dialID) => {
    setDialNum(nextDial);
  };
  const updateAchievements = (name) => {
    let newAchievements = JSON.parse(JSON.stringify(achievements)).map(
      (achievement) => {
        console.log(achievement);
        if (achievement.id === name) {
          return { ...achievement, isDone: 1 };
        } else {
          return achievement;
        }
      }
    );
    setAchievements(newAchievements);
  };

  switch (scene) {
    case 0:
      return <Intro scene={scene} onIntroEnd={() => setScene(1)} />;
    case 1:
      return (
        <>
          <AchievementsButton onButtonClick={() => setShowAchievements(true)} />
          {showAchievements && (
            <Achievements
              achievements={achievements}
              onAchievementsHide={() => setShowAchievements(false)}
            />
          )}

          <IntroDialog
            dial={currentDialog}
            onNonNeutralAnswer={handleAnswer}
            onNeutralAnswer={handleNeutralAnswer}
            nick={nick}
            dialNum={dialNum}
          />

          {notification.text !== "" && (
            <Notification
              text={notification.text}
              heading={notification.heading}
              icon={notification.icon}
              onNotificationHide={() =>
                setNotification({ text: "", heading: "", icon: "" })
              }
            />
          )}
        </>
      );
    case 2:
      return (
        <div className="game">
          <Clock onRunOutOfTime={() => setScene(3)} />
          <AchievementsButton onButtonClick={() => setShowAchievements(true)} />
          <CipherCharacter
            nick={nick}
            onDie={() => setScene(3)}
            getAchievement={updateAchievements}
          />
          {showAchievements && (
            <Achievements
              achievements={achievements}
              onAchievementsHide={() => setShowAchievements(false)}
            />
          )}
          {notification.text !== "" && (
            <Notification
              text={notification.text}
              heading={notification.heading}
              icon={notification.icon}
              onNotificationHide={() =>
                setNotification({ text: "", heading: "", icon: "" })
              }
            />
          )}
        </div>
      );
    case 3:
      return <LoseScreen />;
  }
};
export default Game;

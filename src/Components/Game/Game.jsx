import "./game.css";
import { useEffect, useState } from "react";
import Intro from "./Intro/Intro";
import Dialog from "./Dialog/Dialog";
import Notification from "./Notification/Notification";
import DIALOG_DATA from "../../data/dialogs.json";

const Game = ({ selectedCharacter }) => {
  const [scene, setScene] = useState(0);
  const [dialNum, setDialNum] = useState(0);
  const [nick, setNick] = useState("");
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
              result: () => setDialNum(nextDialIndex),
            };
          })
        : nextDial,
    };
  });

  const handleNeutralAnswer = (text, nextDial, dialID) => {
    if (dialID === "INSERT_NICK") {
      setNick(text);
      setDialNum(nextDial);
      setNotification({
        text: "Przeszedłeś 1 poziom!",
        heading: "Brawo!!!",
        icon: "",
      });
    }
  };
  const handleAnswer = (text, nextDial, dialID) => {
    setDialNum(nextDial);
    setNotification({
      text: "jest git",
      heading: "Brawo!!!",
      icon: "",
    });
  };

  if (scene === 0)
    return <Intro scene={scene} onIntroEnd={() => setScene(1)} />;
  else if (scene === 1)
    return (
      <>
        <Dialog
          dial={dialogs[dialNum]}
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
};
export default Game;

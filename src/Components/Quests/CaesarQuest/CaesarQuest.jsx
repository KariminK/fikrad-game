import "./caesarQuest.css";
import "../quest.css";
import DialogBox from "../../Dialog Boxes/Game/DialogBox";
import { useState } from "react";
import PasswordForm from "../../Dialog Boxes/Quests/PasswordForm/PasswordForm";
const CaesarQuest = ({ nick, nextQuest }) => {
  const [dialNum, setDialNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const dialogs = [
    {
      text: "Ładnie sobie poradziłeś... Widocznie cała twoja wiedza nie wyparowała. To dobrze, przydasz nam się",
      option: [
        {
          text: "Do czego?",
          result: () => setDialNum(1),
        },
      ],
    },
    {
      text: "Nie powinieneś zadawać pytań, zważywszy na to, że czas ucieka",
      option: [
        {
          text: "MÓW CO MAM ROBIĆ",
          result: () => setDialNum(2),
        },
        {
          text: "WYPUŚĆ MNIE",
          result: () => setDialNum(3),
        },
      ],
    },
    {
      text: "Et tu, brute, contra me? Ap 13 18. Zapamiętaj to",
      option: [
        {
          text: "Co to znaczy",
          result: () => setDialNum(4),
        },
      ],
    },
    {
      text: "Przejdźmy do zadania",
      option: [
        {
          text: "no mów",
          result: () => setDialNum(2),
        },
      ],
    },
    {
      type: "text",
      text: "Z jakiej gry/książki pochodzi ten cytat: Ńjyón qeq abfnjweh uśqnkicb ńjirbq cpjq e iwźłnq, zś aśók rnj abfnjweh ageój .",
    },
  ];
  const handleTextInput = (e) => {
    setAnswer(e.target.value);
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && answer.toLowerCase() === "wiedźmin") nextQuest();
  };
  return (
    <div id="CaesarQuest" className="quest">
      <DialogBox
        speakingCharacter={"???"}
        nick={"karimin"}
        type={dialogs[dialNum].type ?? "normal"}
        text={dialogs[dialNum].text}
        options={dialogs[dialNum].option}
        handleTextInput={handleTextInput}
        handleEnterPress={handleEnterPress}
      />
    </div>
  );
};
export default CaesarQuest;

import "./roomsQuest.css";
import "../quest.css";
import Map from "../../Dialog Boxes/Quests/Map/Map.jsx";
import DialogBox from "../../Dialog Boxes/Game/DialogBox.jsx";
import PasswordForm from "../../Dialog Boxes/Quests/PasswordForm/PasswordForm.jsx";
import { useState } from "react";
import Hints from "../../Dialog Boxes/Quests/Hints/Hints.jsx";
import Room from "../../Dialog Boxes/Quests/Room/Room.jsx";
import qrCode from "/src/assets/misc/QRCode.png";
import barcode from "/src/assets/misc/barcode.png";
import Answer from "../../Dialog Boxes/Quests/Answer/Answer.jsx";
import sound from "/src/assets/sounds/wrong answer.wav";
const RoomsQuest = ({ nick, nextQuest, onDie, getAchievement }) => {
  const [showMap, setShowMap] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [room, setRoom] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const areaClickHandle = (area) => {
    setRoom(area);
  };
  const thingClickHandle = (thing) => {
    if (thing.name === "wrong") {
      setAnswer("");
      onDie();
    } else {
      setAnswer(thing.name);
    }
  };
  const passwordChangeHandle = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandle = () => {
    if (password === "2137") {
      getAchievement("PAPIEZ");
      nextQuest();
    } else {
      const wrongAnswerSound = new Audio(sound);
      wrongAnswerSound.play();
    }
  };
  let answerElement;
  switch (answer) {
    case "___7":
      answerElement = (
        <Answer
          imgSource={qrCode}
          id={"kitchenAnswer"}
          onClose={() => setAnswer("")}
        />
      );
      break;
    case "__3_":
      answerElement = (
        <Answer
          id={"basementAnswer"}
          text={"95 95 51 95"}
          onClose={() => setAnswer("")}
        />
      );
      break;
    case "2___":
      answerElement = (
        <Answer
          id={"livingRoomAnswer1"}
          imgSource={barcode}
          onClose={() => setAnswer("")}
        />
      );
      break;
    case "_1__":
      answerElement = (
        <Answer
          id={"livingRoomAnswer2"}
          text={"true"}
          onClose={() => setAnswer("")}
        />
      );
      break;
  }
  return (
    <div className="quest" id="roomsQuest">
      <DialogBox
        speakingCharacter={"???"}
        nick={nick}
        text={
          "Twoim pierwszym zadaniem będzie znalezienie kodu ukrytego w jednym z pomieszczeń w tym budynku. Możesz skorzystać z 4 podpowiedzi, które wygasną 20 sekund po odkryciu. Jeśli chociaż dotkniesz złej rzeczy - dostajesz kulkę w tył głowy"
        }
        type={"normal"}
        options={[
          {
            text: "Pokaż mapę",
            result: () => {
              setShowHints(false);
              setShowMap(true);
              setShowPasswordForm(false);
            },
          },
          {
            text: "Wpisz hasło",
            result: () => {
              setShowHints(false);
              setShowMap(false);
              setShowPasswordForm(true);
            },
          },
          {
            text: "Pokaż podpowiedzi",
            result: () => {
              setShowMap(false);
              setShowPasswordForm(false);
              setShowHints(true);
            },
          },
        ]}
      />
      {showMap && (
        <Map
          onAreaClick={areaClickHandle}
          onCloseMap={() => setShowMap(false)}
        />
      )}
      {room && (
        <Room
          room={room.title}
          onRoomClose={() => setRoom("")}
          onThingClick={thingClickHandle}
        />
      )}
      {showPasswordForm && (
        <PasswordForm
          onPasswordChange={passwordChangeHandle}
          password={password}
          onConfirmPassword={confirmPasswordHandle}
        />
      )}
      <Hints hide={!showHints} />
      {answerElement}
    </div>
  );
};
export default RoomsQuest;

import Map from "./DialogBoxes/Map/Map.jsx";
import DialogBox from "../../../../DialogBox/DialogBox";
import PasswordForm from "./DialogBoxes/PasswordForm/PasswordForm";
import "./roomsQuest.css";
import { useState } from "react";
import Hints from "./DialogBoxes/Hints/Hints.jsx";
import Room from "./DialogBoxes/Room/Room.jsx";
const RoomsQuest = ({ nick }) => {
  const [showMap, setShowMap] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [room, setRoom] = useState("");
  const areaClickHandle = (area) => {
    setRoom(area);
  };
  return (
    <div className="roomsQuest">
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
      {room && <Room room={room.title} onRoomClose={() => setRoom("")} />}
      {showPasswordForm && <PasswordForm />}
      <Hints hide={!showHints} />
    </div>
  );
};
export default RoomsQuest;

import Map from "./Map/Map";
import DialogBox from "../../../../DialogBox/DialogBox";
import "./roomsQuest.css";
import { useState } from "react";
const RoomsQuest = ({ nick }) => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="roomsQuest">
      <DialogBox
        speakingCharacter={"???"}
        nick={nick}
        text={
          "Twoim pierwszym zadaniem będzie znalezienie kodu ukrytego w jednym z pomieszczeń w tym budynku."
        }
        type={"normal"}
        options={[
          {
            text: "Pokaż mapę",
            result: () => setShowMap(true),
          },
          {
            text: "Wpisz hasło",
            result: () => setShowMap(true),
          },
        ]}
      />
      {showMap && <Map />}
    </div>
  );
};
export default RoomsQuest;

import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import ChooseCharacter from "./Components/ChooseCharacter/ChooseCharacter";
import Game from "./Components/Game/Game";
function App() {
  const [view, setView] = useState(2);
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const playGameHandle = () => {
    setView(1);
  };
  const selectCharacterHandle = (e, characterNum) => {
    switch (characterNum) {
      case "I":
        setSelectedCharacter(1);
        break;
      case "II":
        setSelectedCharacter(2);
        break;
      case "III":
        setSelectedCharacter(3);
        break;
    }
    setView(2);
  };
  if (view === 0) return <Menu onPlayGame={playGameHandle} />;
  else if (view === 1)
    return <ChooseCharacter onChooseCharacter={selectCharacterHandle} />;
  else if (view === 2) return <Game selectedCharacter={selectedCharacter} />;
}

export default App;

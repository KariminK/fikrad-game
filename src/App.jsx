import { useState } from "react";
import Menu from "./Components/Pages/Menu/Menu";
import Game from "./Components/Pages/Game/Game";
import ChooseCharacter from "./Components/Scenes/ChooseCharacter/ChooseCharacter";
function App() {
  const [view, setView] = useState(0);
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

import { useState } from "react";
import Menu from "./Components/Pages/Menu/Menu";
import Game from "./Components/Pages/Game/Game";
import ChooseCharacter from "./Components/Scenes/ChooseCharacter/ChooseCharacter";
function App() {
  const [view, setView] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [characters, setCharacters] = useState([
    {
      name: "Marian Rejewski",
      isDone: false,
      img: "https://ipn.gov.pl/dokumenty/zalaczniki/1/1-811116.jpg",
      link: "https://pl.wikipedia.org/wiki/Marian_Rejewski",
    },
    {
      name: "Andrew kowalski",
      isDone: false,
      img: "https://ipn.gov.pl/dokumenty/zalaczniki/1/1-811116.jpg",
    },
  ]);
  const playGameHandle = () => {
    setView(2);
  };
  const [selectedFont, setSelectedFont] = useState("normal");
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
    setView(3);
  };
  const onFontSelect = (font) => {
    console.log(font);
    console.log("f-" + selectedFont);
    switch (font) {
      case "mała":
        setSelectedFont("small");
        break;
      case "średnia":
        setSelectedFont("medium");
        break;
      case "duża":
        setSelectedFont("big");
        break;
    }
  };
  const characterEndHandle = (id) => {
    let newCharacters = JSON.parse(JSON.stringify(characters));
    newCharacters = newCharacters.map((character, index) => {
      console.log(index);
      if (index == id) return { ...character, isDone: true };
      else return character;
    });
    console.log(id);
    console.log(newCharacters);
    setCharacters(newCharacters);
    setView(2);
  };
  let currentView;
  switch (view) {
    case 0:
      currentView = (
        <div id="launch">
          <button id="launchBtn" onClick={() => setView(1)}>
            Kliknij, żeby wystartować grę
          </button>
        </div>
      );
      break;
    case 1:
      currentView = (
        <Menu onPlayGame={playGameHandle} onFontSelect={onFontSelect} />
      );
      break;
    case 2:
      currentView = (
        <ChooseCharacter
          onChooseCharacter={selectCharacterHandle}
          characters={characters}
        />
      );
      break;
    case 3:
      currentView = (
        <Game
          selectedCharacter={selectedCharacter}
          onCharacterEnd={characterEndHandle}
        />
      );
      break;
  }
  return <div className={"f-" + selectedFont}>{currentView}</div>;
}

export default App;

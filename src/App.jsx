import { useState } from "react";
import Menu from "./Components/Pages/Menu/Menu";
import Game from "./Components/Pages/Game/Game";
import ACHIEVEMENTS_DATA from "./data/achievements.json";
import Achievements from "./Components/Dialog Boxes/Achievements/Achievements";
import AchievementsButton from "./Components/Buttons/Achievements button/AchievementsBtn";
import ChooseCharacter from "./Components/Scenes/ChooseCharacter/ChooseCharacter";
import sound from "/src/assets/sounds/notification.wav";
import Notification from "./Components/Notification/Notification";
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
  ]);
  const [achievements, setAchievements] = useState(ACHIEVEMENTS_DATA);
  const [showAchievements, setShowAchievements] = useState(false);
  const playGameHandle = () => {
    setView(2);
  };
  const [notification, setNotification] = useState({
    text: "",
    heading: "",
    icon: "",
  });
  const updateAchievements = (name) => {
    let newAchievements = JSON.parse(JSON.stringify(achievements)).map(
      (achievement) => {
        if (achievement.id === name) {
          const achievementSound = new Audio(sound);
          achievementSound.play();
          setNotification({
            text: achievement.description,
            heading: achievement.title,
            icon: "",
          });
          return { ...achievement, isDone: 1 };
        } else {
          return achievement;
        }
      }
    );
    setAchievements(newAchievements);
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
        <>
          <AchievementsButton onButtonClick={() => setShowAchievements(true)} />
          {showAchievements && (
            <Achievements
              achievements={achievements}
              onAchievementsHide={() => setShowAchievements(false)}
            />
          )}
          <ChooseCharacter
            onChooseCharacter={selectCharacterHandle}
            characters={characters}
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
      break;
    case 3:
      currentView = (
        <>
          <AchievementsButton onButtonClick={() => setShowAchievements(true)} />
          {showAchievements && (
            <Achievements
              achievements={achievements}
              onAchievementsHide={() => setShowAchievements(false)}
            />
          )}
          <Game
            selectedCharacter={selectedCharacter}
            onCharacterEnd={characterEndHandle}
            updateAchievements={updateAchievements}
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
      break;
  }
  return <div className={"f-" + selectedFont}>{currentView}</div>;
}

export default App;

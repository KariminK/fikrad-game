import "./menu.css";
import CompView from "../../Scenes/Intro/CompView";
import MenuView from "../../Scenes/Intro/MenuView";
import TeamView from "../../Scenes/Intro/TeamView";
import backgroundMusic from "/src/assets/sounds/menuMusic.mp3";

import { useState, useEffect } from "react";
const Menu = ({ onPlayGame }) => {
  const [currentView, setCurrentView] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrentView(1);
      setTimeout(() => {
        setCurrentView(2);
      }, 4000);
    }, 4000);
  }, []);
  const menuMusic = new Audio(backgroundMusic);
  useEffect(() => {
    if (currentView == 2) {
      menuMusic.play();
      menuMusic.onended = () => menuMusic.play();
    }
  }, [currentView]);
  switch (currentView) {
    case 0:
      return <TeamView />;
    case 1:
      return <CompView />;
    case 2:
      return (
        <MenuView
          onPlayGame={() => {
            menuMusic.pause();
            onPlayGame();
          }}
        />
      );
    default:
      return <h1>404 not found</h1>;
  }
};
export default Menu;

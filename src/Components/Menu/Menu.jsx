import "./menu.css";
import CompView from "./Intro pages/CompView";
import MenuView from "./Intro pages/MenuView";
import TeamView from "./Intro pages/TeamView";
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
  switch (currentView) {
    case 0:
      return <TeamView />;
    case 1:
      return <CompView />;
    case 2:
      return <MenuView onPlayGame={onPlayGame} />;
    default:
      return <h1>404 not found</h1>;
  }
};
export default Menu;

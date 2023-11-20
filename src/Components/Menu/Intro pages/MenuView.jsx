import logoAnimation from "../../../assets/logos/gameLogoAnim.gif";
import { useState } from "react";
import RulesDialog from "../Dialog boxes/Rules dialog/RulesDialog";
import AboutDialog from "../Dialog boxes/About dialog/AboutDialog";
import MenuButton from "../Button/MenuButton";
const MenuView = ({ onPlayGame }) => {
  const [openRules, setOpenRules] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const changeOpenRules = () =>
    openRules ? setOpenRules(false) : setOpenRules(true);
  const changeOpenAbout = () =>
    openAbout ? setOpenAbout(false) : setOpenAbout(true);
  return (
    <div id="menu">
      <div className="logoDiv">
        <img src={logoAnimation} alt="" id="gameLogo" />
      </div>
      <div className="menubtns">
        <MenuButton text={"Graj"} onButtonClick={onPlayGame} />
        <MenuButton text={"Zasady"} onButtonClick={changeOpenRules} />
        <MenuButton text={"O twórcach"} onButtonClick={changeOpenAbout} />
      </div>
      {openRules ? <RulesDialog closeRulesHandle={changeOpenRules} /> : ""}
      {openAbout ? <AboutDialog onCloseAbout={changeOpenAbout} /> : ""}
    </div>
  );
};
export default MenuView;

import logoAnimation from "../../../assets/logos/gameLogoAnim.gif";
import { useState } from "react";
import RulesDialog from "../Dialog boxes/RulesDialog";
import AboutDialog from "../Dialog boxes/AboutDialog";
import MenuButton from "../Button/MenuButton";
import SourcesDialog from "../Dialog boxes/SourcesDialog";
const MenuView = ({ onPlayGame }) => {
  const [openRules, setOpenRules] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openSources, setOpenSources] = useState(false);
  const changeOpenRules = () =>
    openRules ? setOpenRules(false) : setOpenRules(true);
  const changeOpenAbout = () =>
    openAbout ? setOpenAbout(false) : setOpenAbout(true);
  const changeOpenSources = () =>
    openSources ? setOpenSources(false) : setOpenSources(true);

  return (
    <div id="menu">
      <div className="logoDiv">
        <img src={logoAnimation} alt="" id="gameLogo" />
      </div>
      <div className="menubtns">
        <MenuButton text={"Graj"} onButtonClick={onPlayGame} />
        <MenuButton text={"Zasady"} onButtonClick={changeOpenRules} />
        <MenuButton text={"O twórcach"} onButtonClick={changeOpenAbout} />
        <MenuButton text={"Źródła"} onButtonClick={changeOpenSources} />
      </div>
      {openRules ? <RulesDialog onCloseRules={changeOpenRules} /> : ""}
      {openAbout ? <AboutDialog onCloseAbout={changeOpenAbout} /> : ""}
      {openSources ? <SourcesDialog onCloseSources={changeOpenSources} /> : ""}
    </div>
  );
};
export default MenuView;

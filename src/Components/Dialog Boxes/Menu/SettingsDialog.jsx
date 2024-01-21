import "./menuDialog.css";
import SettingsBtn from "../../Buttons/SettingsBtn/SettingsBtn";
import MenuButton from "../../Buttons/Button/MenuButton";
import { useState } from "react";
const SettingsDialog = ({ onFontSelect, onSettingsClose }) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const handleFontSizeSelect = (e, index) => {
    if (e.target.id) return;
    setActiveBtn(index);
    onFontSelect(e.target.textContent);
  };
  const fontSizes = ["mała", "średnia", "duża"];
  const fontsizesActive = fontSizes.map((el, index) => {
    return (
      <SettingsBtn
        text={el}
        onClick={(e) => handleFontSizeSelect(e, index)}
        isActive={index === activeBtn}
        key={index}
      />
    );
  });
  return (
    <div className="menuDialogBox">
      <h1>Ustawienia</h1>
      <form>
        <h2>Wielkość czcionki: </h2>
        <div className="fontSizes">{...fontsizesActive}</div>
        <MenuButton text={"Zamknij"} onButtonClick={onSettingsClose} />
      </form>
    </div>
  );
};
export default SettingsDialog;

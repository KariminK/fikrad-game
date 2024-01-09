import "./menuDialog.css";
import teamLogo from "/src/assets/logos/logo wgw company.png";
import MenuButton from "../../Buttons/Button/MenuButton";
const AboutDialog = ({ onCloseAbout }) => {
  return (
    <div className="menuDialogBox">
      <img src={teamLogo} alt="Hot water company" />
      <ul>
        <li>Kacper Błoszko - kod gry, grafiki</li>
        <li>Natalia Czarnik - fabuła, zadania</li>
      </ul>
      <MenuButton text={"Zamknij"} onButtonClick={onCloseAbout} />
    </div>
  );
};
export default AboutDialog;

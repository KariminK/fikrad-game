import "../dialog.css";
import teamLogo from "../../../../assets/logos/logo wgw company.png";
import MenuButton from "../../Button/MenuButton";
const AboutDialog = ({ onCloseAbout }) => {
  return (
    <div className="dialog">
      <img src={teamLogo} alt="Hot water company" />
      <ul>
        <li>Kacper Błoszko - kod gry</li>
        <li>Natalia Czarnik - menu gry, research</li>
        <li>Krystian Zarych - research, pytania</li>
        <li>Maja Kieca - grafiki</li>
      </ul>
      <MenuButton text={"Zamknij"} onButtonClick={onCloseAbout} />
    </div>
  );
};
export default AboutDialog;

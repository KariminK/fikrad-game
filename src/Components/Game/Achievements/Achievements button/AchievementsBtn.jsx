import icon from "../../../../assets/icons/trophyIcon.jpg";
import "./achievementsBtn.css";
const AchievementsButton = ({ onButtonClick }) => {
  return (
    <button className="achievements-btn" onClick={onButtonClick}>
      <img src={icon} alt="Osiągnięcia" />
    </button>
  );
};
export default AchievementsButton;

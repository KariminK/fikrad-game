import icon from "../../../../assets/icons/trophyIcon.jpg";
import "./AchievementsBtn.css";
const AchievementsButton = ({ onButtonClick }) => {
  return (
    <button className="achievements-btn" onClick={onButtonClick}>
      <img src={icon} alt="Osiągnięcia" />
    </button>
  );
};
export default AchievementsButton;

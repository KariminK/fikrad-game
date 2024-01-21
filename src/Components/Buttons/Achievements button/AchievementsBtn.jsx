import icon from "/src/assets/icons/trophyIcon.jpg";
import "./achievementsBtn.css";
import hoverSound from "/src/assets/sounds/hover.wav";
import clickSound from "/src/assets/sounds/click.wav";
const AchievementsButton = ({ onButtonClick }) => {
  const hover = new Audio(hoverSound);
  const click = new Audio(clickSound);
  return (
    <button
      className="achievements-btn"
      onClick={() => {
        click.play();
        onButtonClick();
      }}
      onMouseEnter={() => hover.play()}
    >
      <img src={icon} alt="Osiągnięcia" />
    </button>
  );
};
export default AchievementsButton;

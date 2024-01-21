import "./menuButton.css";
import hoverSound from "/src/assets/sounds/hover.wav";
import clickSound from "/src/assets/sounds/click.wav";
const MenuButton = ({ onButtonClick, text }) => {
  const hover = new Audio(hoverSound);
  const click = new Audio(clickSound);
  return (
    <button
      className="menuBtn"
      onClick={() => {
        click.play();
        onButtonClick();
      }}
      onMouseEnter={() => hover.play()}
    >
      {text}
    </button>
  );
};
export default MenuButton;

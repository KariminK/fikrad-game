import "./menuButton.css";
const MenuButton = ({ onButtonClick, text }) => {
  return (
    <button className="menuBtn" onClick={onButtonClick}>
      {text}
    </button>
  );
};
export default MenuButton;

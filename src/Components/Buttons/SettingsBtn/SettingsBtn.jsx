import "./settingsBtn.css";
const SettingsBtn = ({ onClick, text, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <button
      className="font-size-btn"
      id={isActive ? "active" : ""}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </button>
  );
};
export default SettingsBtn;

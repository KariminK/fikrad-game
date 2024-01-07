import "./passwordForm.css";
import "../dialogs.css";
const PasswordForm = ({ onPasswordChange, password, onConfirmPassword }) => {
  return (
    <div id="passwordForm">
      <h1>Wpisz hasło: </h1>
      <input
        type="text"
        name="questPass"
        id="questPassInput"
        value={password}
        onChange={(e) => onPasswordChange(e)}
        onKeyUp={(e) => (e.key == "Enter" ? onConfirmPassword() : "")}
      />
    </div>
  );
};
export default PasswordForm;

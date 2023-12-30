import "./passwordForm.css";
import "../dialogs.css";
const PasswordForm = () => {
  return (
    <div id="passwordForm">
      <h1>Wpisz hasło: </h1>
      <input type="text" name="questPass" id="questPassInput" />
    </div>
  );
};
export default PasswordForm;

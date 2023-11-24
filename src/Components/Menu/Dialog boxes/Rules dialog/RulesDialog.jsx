import "../menuDialog.css";
import MenuButton from "../../Button/MenuButton";
const RulesDialog = ({ closeRulesHandle }) => {
  const fullScreenHandle = () => {
    document.body.requestFullscreen();
  };
  return (
    <div className="menuDialogBox">
      <h2>Zasady:</h2>
      <ol>
        <li>Odpowiedzi zatwierdzaj enterem</li>
        <li>
          <button onClick={fullScreenHandle}>Włącz pełny ekran</button>{" "}
          (polepszy to doświadczenie z gry){" "}
        </li>
        <li>graj uczciwie</li>
        <li>
          daj diaksa na <a href="minecraftmapy.pl">minecraftmapy.pl</a>
        </li>
        <li>baw się dobrze :D</li>
      </ol>
      <MenuButton text={"Zamknij"} onButtonClick={closeRulesHandle} />
    </div>
  );
};
export default RulesDialog;

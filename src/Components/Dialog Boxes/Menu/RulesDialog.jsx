import "./menuDialog.css";
import MenuButton from "../../Buttons/Button/MenuButton";
const RulesDialog = ({ onCloseRules }) => {
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
        <li>Klikaj ostrożnie, niektóre przedmioty mogą okazać się zdradliwe</li>
        <li>Uważnie podejmuj decyzje</li>
        <li>Możesz zmienić rozmiar czcionki w ustawieniach w menu gry</li>
        <li>
          Gra wymaga korzystania z wiedzy dostępnej w internecie oraz różnych
          zewnętrznych stron internetowych
        </li>
        <li>Baw się dobrze!</li>
        <li>
          PS: przydatny{" "}
          <a href="https://calcoolator.pl/szyfr-cezara.html" target="_blank">
            link
          </a>{" "}
          ;&#93;
        </li>
      </ol>
      <MenuButton text={"Zamknij"} onButtonClick={onCloseRules} />
    </div>
  );
};
export default RulesDialog;

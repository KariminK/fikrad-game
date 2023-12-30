import "./menuDialog.css";
import MenuButton from "../../Buttons/Button/MenuButton";
const SourcesDialog = ({ onCloseSources }) => {
  return (
    <div className="menuDialogBox">
      <h1>Źródła:</h1>
      <ol>
        <li>
          Tła: <a href="https://www.bing.com/create">Stworzone z bing</a>
        </li>
        <li>
          Dźwięki:{" "}
          <ul>
            <li>
              Dźwięk klawiatury od{" "}
              <a
                target="blank"
                href="https://pixabay.com/users/sennafoxy-17762344/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14391"
              >
                Senna
              </a>{" "}
              z{" "}
              <a
                target="blank"
                href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14391"
              >
                Pixabay
              </a>
            </li>
            <li>
              Dźwięk uderzenia z{" "}
              <a
                target="blank"
                href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=37333"
              >
                Pixabay
              </a>
            </li>
          </ul>
        </li>
      </ol>
      <MenuButton text={"Zamknij"} onButtonClick={onCloseSources} />
    </div>
  );
};
export default SourcesDialog;

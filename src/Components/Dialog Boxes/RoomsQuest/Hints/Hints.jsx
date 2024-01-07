import "../dialogs.css";
import "./hints.css";
import Hint from "../../../Buttons/Hint/Hint";
const Hints = ({ hide }) => {
  return (
    <div id="hints" className={hide ? "hide" : ""}>
      <h1>Podpowiedzi</h1>
      <ul>
        <Hint text={"Podano do stołu"} />
        <Hint text={"czaszka, ASCII"} />
        <Hint
          text={
            "Never gonna give you up Never gonna let you down Never gonna run around and desert you"
          }
        />
        <Hint text={"Feels like I'm walking on sunshine!"} />
      </ul>
    </div>
  );
};
export default Hints;

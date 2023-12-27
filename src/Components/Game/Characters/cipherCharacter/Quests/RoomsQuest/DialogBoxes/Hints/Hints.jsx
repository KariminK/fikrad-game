import "../dialogs.css";
import "./hints.css";
import Hint from "./Hint/Hint";
const Hints = ({ hide }) => {
  return (
    <div id="hints" className={hide ? "hide" : ""}>
      <h1>Podpowiedzi</h1>
      <ul>
        <Hint text={"Podano do stołu"} />
        <Hint
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam!"
          }
        />
        <Hint
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam!"
          }
        />
        <Hint
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam!"
          }
        />
      </ul>
    </div>
  );
};
export default Hints;

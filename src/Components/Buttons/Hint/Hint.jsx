import { useEffect, useState } from "react";
import "./hint.css";
import hoverSound from "/src/assets/sounds/hover.wav";
import clickSound from "/src/assets/sounds/click.wav";
const Hint = ({ text }) => {
  const [hidden, setHidden] = useState(true);
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(20);
  const hover = new Audio(hoverSound);
  const click = new Audio(clickSound);
  useEffect(() => {
    if (timer) {
      const intervalID = setInterval(() => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setHidden(true);
          setTimer(false);
        }
      }, 1000);
      return () => clearInterval(intervalID);
    }
  }, [timer, seconds]);
  const hintClickHandle = () => {
    if (hidden && seconds === 20) {
      setHidden(false);
      setTimer(true);
    }
  };
  return (
    <li
      onClick={() => {
        click.play();
        hintClickHandle();
      }}
      onMouseEnter={() => hover.play()}
      className={
        "hint" +
        (hidden ? " hidden" : "") +
        (seconds < 0 ? " expired" : "") +
        (seconds % 2 && seconds > 0 ? " whiteMark" : "")
      }
    >
      {hidden
        ? seconds === 20
          ? "Pokaż podpowiedź"
          : "Podpowiedź wygasła"
        : text + ``}
      {!hidden && (
        <span className={seconds % 2 && seconds > 0 ? " whiteMark" : ""}>
          Pozostało {seconds} sek
        </span>
      )}
    </li>
  );
};
export default Hint;

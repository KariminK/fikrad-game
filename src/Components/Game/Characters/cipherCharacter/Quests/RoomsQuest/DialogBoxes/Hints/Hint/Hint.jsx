import { useEffect, useState } from "react";
import "./hint.css";
const Hint = ({ text }) => {
  const [hidden, setHidden] = useState(true);
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(20);
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
      onClick={hintClickHandle}
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

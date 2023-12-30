import { useEffect, useState } from "react";
import "./clock.css";
const Clock = ({ onRunOutOfTime }) => {
  const [seconds, setSeconds] = useState(600);
  const minutes = Math.floor(seconds / 60);
  const calculatedSeconds = seconds >= 60 ? seconds - 60 * minutes : seconds;
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (seconds === 0) onRunOutOfTime();
      setSeconds(seconds - 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [seconds]);
  return (
    <h1 id="clock">
      {minutes < 10 ? "0" + minutes : minutes}:
      {calculatedSeconds < 10 ? "0" + calculatedSeconds : calculatedSeconds}
    </h1>
  );
};
export default Clock;

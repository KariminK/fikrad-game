import { useEffect } from "react";
import "./loseScreen.css";
import sound from "/src/assets/sounds/dead.mp3";
const LoseScreen = () => {
  const clickHandle = (e) => {
    location.reload();
  };
  const deadSound = new Audio(sound);
  useEffect(() => {
    deadSound.play();
    return () => deadSound.pause();
  }, []);
  return (
    <div className="loseScreen" onKeyUp={(e) => keyPresshandle(e)}>
      <h1>Umarłeś</h1>
      <p onClick={clickHandle}>Kliknij, żeby kontynuować</p>
    </div>
  );
};
export default LoseScreen;

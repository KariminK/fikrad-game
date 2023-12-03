import "./loseScreen.css";
const LoseScreen = () => {
  const clickHandle = (e) => {
    location.reload();
  };
  return (
    <div className="loseScreen" onKeyUp={(e) => keyPresshandle(e)}>
      <h1>Umarłeś</h1>
      <p onClick={clickHandle}>Kliknij, żeby kontynuować</p>
    </div>
  );
};
export default LoseScreen;

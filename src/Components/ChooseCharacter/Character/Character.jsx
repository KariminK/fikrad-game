import "./character.css";
const Character = ({ characterNum, isDone, characterIMG, altMsg }) => {
  if (isDone) {
    return (
      <button className="character">
        <img src={characterIMG} alt={altMsg} />
      </button>
    );
  } else {
    return <button className="character">{characterNum}</button>;
  }
};
export default Character;

import "./character.css";
import hoverSound from "/src/assets/sounds/sweep.wav";
const Character = ({
  characterNum,
  isDone,
  characterIMG,
  altMsg,
  onChooseCharacter,
}) => {
  const hover = new Audio(hoverSound);
  if (isDone) {
    return (
      <button
        className="character"
        onClick={(e) => onChooseCharacter(e, characterNum)}
        onMouseEnter={() => hover.play()}
      >
        <img src={characterIMG} alt={altMsg} />
      </button>
    );
  } else {
    return (
      <button
        className="character"
        onClick={(e) => onChooseCharacter(e, characterNum)}
        onMouseEnter={() => hover.play()}
      >
        {" "}
        {characterNum}
      </button>
    );
  }
};
export default Character;

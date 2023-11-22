import "./character.css";
const Character = ({
  characterNum,
  isDone,
  characterIMG,
  altMsg,
  onChooseCharacter,
}) => {
  if (isDone) {
    return (
      <button
        className="character"
        onClick={(e) => onChooseCharacter(e, characterNum)}
      >
        <img src={characterIMG} alt={altMsg} />
      </button>
    );
  } else {
    return (
      <button
        className="character"
        onClick={(e) => onChooseCharacter(e, characterNum)}
      >
        {" "}
        {characterNum}
      </button>
    );
  }
};
export default Character;

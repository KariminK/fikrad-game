import "./chooseCharacter.css";
import Character from "../../Buttons/Character/Character";
const ChooseCharacter = ({ onChooseCharacter }) => {
  return (
    <div className="chooseCharacter">
      <Character
        characterNum={"I"}
        isDone={false}
        characterIMG={""}
        altMsg={"Rafał"}
        onChooseCharacter={onChooseCharacter}
      />
      <Character
        characterNum={"II"}
        isDone={false}
        characterIMG={""}
        altMsg={"Andrzej"}
        onChooseCharacter={onChooseCharacter}
      />
      <Character
        characterNum={"III"}
        isDone={false}
        characterIMG={""}
        altMsg={"Ryszard"}
        onChooseCharacter={onChooseCharacter}
      />
    </div>
  );
};
export default ChooseCharacter;

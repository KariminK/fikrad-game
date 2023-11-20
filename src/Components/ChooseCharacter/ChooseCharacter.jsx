import "./chooseCharacter.css";
import Character from "./Character/Character";
const ChooseCharacter = ({ onCharacterChoose }) => {
  return (
    <div className="chooseCharacter">
      <Character
        characterNum={"I"}
        isDone={false}
        characterIMG={""}
        altMsg={"Rafał"}
      />
      <Character
        characterNum={"II"}
        isDone={false}
        characterIMG={""}
        altMsg={"Andrzej"}
      />
      <Character
        characterNum={"III"}
        isDone={false}
        characterIMG={""}
        altMsg={"Ryszard"}
      />
    </div>
  );
};
export default ChooseCharacter;

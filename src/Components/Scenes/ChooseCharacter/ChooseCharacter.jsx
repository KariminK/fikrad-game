import "./chooseCharacter.css";
import Character from "../../Buttons/Character/Character";
const ChooseCharacter = ({ onChooseCharacter, characters }) => {
  return (
    <div className="chooseCharacter">
      {characters.map((character, index) => {
        return (
          <Character
            characterNum={index + 1}
            isDone={character.isDone}
            characterIMG={character.img}
            altMsg={character.name}
            onChooseCharacter={onChooseCharacter}
            link={character.link}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default ChooseCharacter;

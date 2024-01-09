import "../quest.css";
import "./imageQuest.css";
import DialogBox from "../../Dialog Boxes/Game/DialogBox";
import imageBase64 from "/src/data/image.txt";
import { useState } from "react";
const ImageQuest = () => {
  const [dialNum, setDialNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const dialogs = [
    {
      text: "Dobra, teraz będzie trudniej",
      option: [
        {
          text: "Mów",
          result: () => setDialNum(1),
        },
      ],
    },
    {
      text: "Dostałem polecenie z góry. Przyjmuję cię do pracy. Jest to oferta nie do odrzucenia. Przyjmujesz?",
      option: [
        {
          text: "Tak",
          result: () => setDialNum(2),
        },
        {
          text: "Nie",
          result: () => setDialNum(3),
        },
      ],
    },
    {
      text: "Świetnie, zanim poznasz swoją tożsamość z przed naszej wątpliwej przygody, dam ci pierwsze zlecenie. Przejeliśmy od BND tajny obrazek wysłany przez generała do jakiegoś szeregowego pułkownika. Twoim celem jest jedynie podać mi, co na nim jest",
      option: [
        {
          text: "Pokaż mi go",
          result: () => setDialNum(3),
        },
      ],
    },
    {
      text: "Trzymaj",
      type: "text",
      attachments: [
        <a href={imageBase64} target="blank">
          Załącznik nr 1
        </a>,
      ],
    },
  ];
  return (
    <div className="quest" id="ImageQuest">
      <DialogBox
        speakingCharacter={"???"}
        nick={"karimin"}
        type={dialogs[dialNum].type ?? "normal"}
        text={dialogs[dialNum].text}
        options={dialogs[dialNum].option}
        attachmentsElements={dialogs[dialNum].attachments}
      />
    </div>
  );
};
export default ImageQuest;

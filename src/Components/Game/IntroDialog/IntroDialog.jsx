import { useEffect, useState } from "react";
import DialogBox from "../DialogBox/DialogBox";
import "./introDialog.css";
const IntroDialog = ({
  dial,
  dialNum,
  nick,
  onNeutralAnswer,
  onNonNeutralAnswer,
}) => {
  const { speakingCharacter, text, attachments, options, type, id } = dial;
  const [inputTxt, setInputTxt] = useState("");
  let attachmentsElements = [];
  if (attachments)
    attachmentsElements = attachments.map((att) => {
      return (
        <a href={att.url} target="blank" className="attachment">
          {att.name}
        </a>
      );
    });
  const handleTextInput = (e) => setInputTxt(e.target.value);
  const handleEnterPress = (e) => {
    if (e.key === "Enter" && options.length !== 0) {
      if (options[0].text === "") {
        onNeutralAnswer(inputTxt, options[0].nextDialIndex, id);
      } else if (options[0].text.toLowerCase() === inputTxt.toLowerCase()) {
        onNonNeutralAnswer(inputTxt, options[0].correctNextDial, id);
      } else {
        onNonNeutralAnswer(inputTxt, options[0].incorrectNextDial, id);
      }
    }
  };
  return (
    <div className={`dialog ${type === "text" ? "dialog-text" : ""}`}>
      <DialogBox
        dialNum={dialNum}
        speakingCharacter={speakingCharacter}
        nick={nick}
        type={type}
        text={text}
        attachmentsElements={attachmentsElements}
        options={options}
        handleTextInput={handleTextInput}
        handleEnterPress={handleEnterPress}
      />
    </div>
  );
};
export default IntroDialog;

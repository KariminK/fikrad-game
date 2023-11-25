import { useEffect, useState } from "react";
import "./dialog.css";
const Dialog = ({
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
      <div className="dialogBox" id={`dialog${dialNum}`}>
        <div className="dial">
          <h1>{speakingCharacter}</h1>
          <p>{text.replace("nick", nick)}</p>
        </div>
        <div className="attachments">{...attachmentsElements}</div>
        <div className="options">
          {type === "normal" &&
            options &&
            options.map((option, index) => {
              return (
                <button className="option" onClick={option.result} key={index}>
                  {option.text}
                </button>
              );
            })}
          {type === "text" && (
            <input
              type="text"
              name="answer"
              className="dialogTextInput"
              onChange={handleTextInput}
              onKeyDown={handleEnterPress}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Dialog;

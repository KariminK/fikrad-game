import "./dialogBox.css";
const DialogBox = ({
  dialNum = -1,
  speakingCharacter,
  nick,
  attachmentsElements = [],
  options,
  handleTextInput,
  handleEnterPress,
  type,
  text,
}) => {
  return (
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
  );
};
export default DialogBox;

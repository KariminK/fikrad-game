import "./dialogBox.css";
import hoverSound from "/src/assets/sounds/hover.wav";
import clickSound from "/src/assets/sounds/click.wav";

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
  const hover = new Audio(hoverSound);
  const click = new Audio(clickSound);
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
              <button
                className="option"
                onClick={() => {
                  click.play();
                  option.result();
                }}
                onMouseEnter={() => hover.play()}
                key={index}
              >
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

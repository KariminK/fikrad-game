import "./dialog.css";
const Dialog = ({ speakingCharacter, text, options, dialNum }) => {
  return (
    <div className="dialog">
      <div className="dialogBox">
        <div className="dial">
          <h1>{speakingCharacter}</h1>
          <p>{text}</p>
        </div>
        <div className="options">
          {options
            ? options.map((option, index) => {
                return (
                  <button
                    className="option"
                    onClick={option.result}
                    key={index}
                  >
                    {option.text}
                  </button>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Dialog;

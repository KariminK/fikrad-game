const DialogBox = ({ speakingCharacter, text, options }) => {
  return (
    <div className="dialogBox">
      <h1>{speakingCharacter}</h1>
      <p>{text}</p>
      <div className="options">
        {options
          ? options.map((option) => {
              return (
                <button className="option" onClick={option.result}>
                  {option.text}
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default DialogBox;

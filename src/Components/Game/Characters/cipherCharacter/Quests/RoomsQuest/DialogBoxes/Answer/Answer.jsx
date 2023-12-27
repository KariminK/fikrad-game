import "./answer.css";
const Answer = ({ imgSource, id, text, onClose }) => {
  return (
    <div className="answer" id={id}>
      {imgSource && <img src={imgSource} alt="_ _ _ 7" />}
      {text && <p>{text}</p>}
      <button className="closeBtn" onClick={onClose}>
        Zamknij
      </button>
    </div>
  );
};
export default Answer;

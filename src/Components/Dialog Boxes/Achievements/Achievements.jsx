import "./achievements.css";
const Achievements = ({ achievements, onAchievementsHide }) => {
  console.log(achievements);
  const keyUpHandle = (e) => {
    if (e.key == "Escape") {
      onAchievementsHide();
    }
  };
  return (
    <div className="achievements">
      <h1>Osiągnięcia</h1>
      <ul>
        {achievements.length > 0
          ? achievements?.map((achievement) => {
              return (
                <li
                  key={achievement.id}
                  className={
                    achievement.isDone
                      ? "achievement"
                      : "achievement achievement-undone"
                  }
                >
                  {achievement.icon === "" ? (
                    <div className="undefinedAchievementIcon">
                      <span>{achievement.isDone ? "!" : "?"}</span>
                    </div>
                  ) : (
                    <img
                      src={achievement.icon}
                      alt=""
                      className="achievement-icon"
                    />
                  )}
                  <div className="achievement-description">
                    <h1 style={{ color: achievement.color }}>
                      {achievement.title}
                    </h1>
                    <p>{achievement.isDone ? achievement.description : ""}</p>
                  </div>
                </li>
              );
            })
          : ""}
      </ul>
      <button className="achievements-close" onClick={onAchievementsHide}>
        Zamknij
      </button>
    </div>
  );
};
export default Achievements;

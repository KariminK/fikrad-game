import "./achievements.css";
const Achievements = ({ achievements, onAchievementsHide }) => {
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
          ? achievements.map((achievement) => {
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
                    <span className="undefinedAchievementIcon">!</span>
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
                    <p>{achievement.description}</p>
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

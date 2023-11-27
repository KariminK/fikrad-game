import { useEffect, useState } from "react";
import "./notification.css";
const Notification = ({ text, icon, heading, onNotificationHide }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onNotificationHide();
      }, 1000);
    }, 5000);
  }, []);
  if (text !== "") {
    return (
      <div className={isVisible ? "notification" : "notification hiding"}>
        {icon ? (
          <img src={icon} className="icon" />
        ) : (
          <h1 className="icon">!</h1>
        )}
        <div className="descripition">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
};
export default Notification;

import kitchenIMG from "/src/assets/misc/rooms/kitchen.jpeg";
import React from "react";
import ImageMapper from "react-img-mapper";
import "../dialogs.css";
import "./room.css";
const Room = ({ room, onRoomClose }) => {
  const MAPS = {
    kitchen: {
      name: "kitchen map",
      areas: [
        {
          id: "21a3befd-c97b-476d-8e0c-7c98399988bf",
          title: "furnance",
          shape: "rect",
          name: "___7",
          fillColor: "#FFFF00A0",
          strokeColor: "black",
          coords: [545, 602, 610, 627],
        },
      ],
    },
    "living room": {
      name: "living room map",
      areas: [],
    },
    basement: {
      name: "basement map",
      areas: [],
    },
  };
  const IMAGES = {
    kitchen: kitchenIMG,
    "living room": kitchenIMG,
    basement: kitchenIMG,
  };
  return (
    <div id="roomMap">
      <button id="closeRoomMapBtn" onClick={onRoomClose}>
        Powrót
      </button>
      <ImageMapper
        width={"700"}
        src={IMAGES[room]}
        map={MAPS[room]}
        onClick={(area) => onAreaClick(area)}
      />
    </div>
  );
};
export default Room;

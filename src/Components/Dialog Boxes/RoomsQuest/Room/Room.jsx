import kitchenIMG from "/src/assets/misc/rooms/kitchen.jpeg";
import React from "react";
import ImageMapper from "react-img-mapper";
import "../dialogs.css";
import "./room.css";
const Room = ({ room, onRoomClose, onThingClick }) => {
  const MAPS = {
    kitchen: {
      name: "kitchen map",
      areas: [
        {
          title: "book",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            258, 570, 443, 570, 427, 531, 407, 500, 351, 530, 295, 500, 270,
            532,
          ],
        },
        {
          title: "drawer",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [628, 437, 677, 458, 676, 508, 628, 483],
        },
        {
          title: "dish",
          shape: "rect",
          name: "___7",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [487, 540, 550, 560],
        },
        {
          title: "dish2",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            472, 482, 485, 490, 485, 482, 486, 507, 477, 526, 453, 526, 440,
            510, 440, 488, 447, 482,
          ],
        },
        {
          title: "dish3",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [319, 475, 382, 499],
        },
        {
          title: "window",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [601, 125, 700, 73, 700, 380, 600, 355],
        },
        {
          title: "shelf",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [41, 148, 86, 160, 86, 576, 41, 619],
        },
        {
          title: "pot1",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [308, 344, 347, 368],
        },
        {
          title: "pot2",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            362, 328, 362, 337, 368, 337, 368, 347, 373, 348, 373, 353, 362,
            352, 362, 367, 404, 367, 404, 353, 393, 353, 393, 348, 398, 348,
            398, 337, 404, 337, 404, 328,
          ],
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
        onClick={(area) => onThingClick(area)}
      />
    </div>
  );
};
export default Room;

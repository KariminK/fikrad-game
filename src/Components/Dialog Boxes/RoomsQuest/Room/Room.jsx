import kitchenIMG from "/src/assets/misc/rooms/kitchen.jpeg";
import basementIMG from "/src/assets/misc/rooms/basement.jpeg";
import livingRoomIMG from "/src/assets/misc/rooms/living room.jpeg";
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
    basement: {
      name: "basement map",
      areas: [
        {
          title: "ak47",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            390, 563, 408, 564, 410, 567, 449, 571, 450, 567, 456, 567, 467,
            566, 467, 569, 475, 570, 475, 573, 481, 574, 530, 584, 519, 606,
            495, 597, 473, 596, 467, 605, 458, 605, 456, 600, 461, 590, 435,
            593, 413, 608, 400, 603, 400, 587, 415, 579, 390, 575,
          ],
        },
        {
          title: "barrel",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [634, 559, 700, 658],
        },
        {
          title: "bootle1",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            325, 398, 354, 398, 353, 364, 348, 359, 345, 358, 345, 347, 334,
            347, 330, 359, 328, 364, 325, 364,
          ],
        },
        {
          title: "bootle2",
          shape: "poly",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            595, 180, 615, 180, 615, 153, 610, 145, 610, 139, 600, 139, 600,
            148, 595, 150,
          ],
        },
        {
          title: "skull",
          shape: "poly",
          name: "__3_",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [
            158, 268, 158, 264, 163, 264, 163, 257, 157, 254, 157, 240, 148,
            229, 134, 229, 127, 238, 127, 242, 132, 245, 135, 259, 140, 265,
            149, 268,
          ],
        },
      ],
    },
    "living room": {
      name: "living room map",
      areas: [
        {
          title: "rick astley",
          shape: "rect",
          name: "2___",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [160, 120, 195, 170],
        },
        {
          title: "poster1",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [212, 118, 270, 200],
        },
        {
          title: "poster2",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [295, 100, 390, 240],
        },
        {
          title: "minecraft poster",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [174, 232, 255, 330],
        },
        {
          title: "poster3",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [266, 263, 342, 362],
        },
        {
          title: "poster4",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [358, 261, 414, 363],
        },
        {
          title: "poster5",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [438, 257, 493, 327],
        },
        {
          title: "sans",
          shape: "rect",
          name: "wrong",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [452, 147, 510, 227],
        },
        {
          title: "isaac",
          shape: "rect",
          name: "_1__",
          fillColor: "#FFFFF0A0",
          strokeColor: "#2b0064",
          coords: [410, 128, 440, 165],
        },
      ],
    },
  };
  const IMAGES = {
    kitchen: kitchenIMG,
    basement: basementIMG,
    "living room": livingRoomIMG,
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

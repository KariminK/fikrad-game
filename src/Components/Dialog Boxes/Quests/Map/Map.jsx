import mapImg from "/src/assets/misc/map.png";
import React from "react";
import ImageMapper from "react-img-mapper";
import "./map.css";
import "../dialogs.css";
const Map = ({ onCloseMap, onAreaClick }) => {
  const MAP = {
    name: "my-map",
    areas: [
      {
        id: "21a3befd-c97b-476d-8e0c-7c98399988bf",
        title: "kitchen",
        shape: "rect",
        name: "13",
        fillColor: "#00ff194c",
        strokeColor: "black",
        coords: [60, 397, 260, 548],
      },
      {
        id: "21a3befd-c97b-476d-8e0c-",
        title: "living room",
        shape: "rect",
        name: "13",
        fillColor: "#FF0000A0",
        strokeColor: "black",
        coords: [127, 80, 288, 255],
      },
      {
        id: "21a3befd-c97b",
        title: "basement",
        shape: "rect",
        name: "13",
        fillColor: "#11AAFFA0",
        strokeColor: "black",
        coords: [294, 259, 395, 396],
      },
    ],
  };

  return (
    <div id="map">
      <button id="closeMapBtn" onClick={onCloseMap}>
        Zamknij mapę
      </button>
      <ImageMapper
        width={"670"}
        src={mapImg}
        map={MAP}
        onClick={(area) => onAreaClick(area)}
      />
    </div>
  );
};
export default Map;

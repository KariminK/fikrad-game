import mapImg from "/src/assets/misc/map.jpg";
import React from "react";
import ImageMapper from "react-img-mapper";
const Map = () => {
  const MAP = {
    name: "my-map",
    areas: [
      {
        id: "21a3befd-c97b-476d-8e0c-7c98399988bf",
        title: "B-site",
        shape: "poly",
        name: "13",
        fillColor: "#00ff194c",
        strokeColor: "black",
        coords: [126, 57, 166, 57, 195, 75, 195, 133, 127, 133],
      },
      {
        id: "21a3befd-c97b-476d-8e0c-",
        title: "T-spawn",
        shape: "rect",
        name: "13",
        fillColor: "#FF0000A0",
        strokeColor: "black",
        coords: [225, 677, 370, 730],
      },
      {
        id: "21a3befd-c97b",
        title: "CT-spawn",
        shape: "rect",
        name: "13",
        fillColor: "#FF0000A0",
        strokeColor: "black",
        coords: [438, 115, 515, 195],
      },
    ],
  };

  return (
    <div id="map">
      <ImageMapper width={"780"} src={mapImg} map={MAP} />
    </div>
  );
};
export default Map;

import { useEffect, useState } from "react";

import "./intro.css";

const Intro = ({ texts, index, chars }) => {
  return (
    <div className="intro">
      <p>{texts[index] ? texts[index].slice(0, chars) : ""}</p>
    </div>
  );
};
export default Intro;

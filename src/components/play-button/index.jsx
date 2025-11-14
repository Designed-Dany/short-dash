import React from "react";
import "/src/scss/play.scss";
import playImg from "./play-icon.png";

function Play() {
  return (
    <button className="play-btn">
      <img src={playImg} alt="" />
    </button>
  );
}

export default Play;

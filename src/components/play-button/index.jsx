import React from "react";
import "/src/scss/play.scss";
import playImg from "./play-icon.png";
import stopImg from "./stop-icon.png";

function Play({ isRunning, timerStart }) {
  return (
    <button onClick={timerStart} className="play-btn">
      {isRunning ? <img src={stopImg} /> : <img src={playImg} alt="" />}
    </button>
  );
}

export default Play;

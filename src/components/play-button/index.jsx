import React from "react";
import "/src/scss/play.scss";
import playImg from "./play-icon.png";
import stopImg from "./stop-icon.png";
import pauseImg from "./pause-icon.png";

function Play({ isPause, isRunning, timerStart }) {
  return (
    <button
      onClick={timerStart}
      className={isPause ? "pause-play" : "play-btn"}
    >
      {isRunning ? (
        <img src={isPause ? pauseImg : stopImg} />
      ) : (
        <img src={isPause ? pauseImg : playImg} alt="" />
      )}
    </button>
  );
}

export default Play;

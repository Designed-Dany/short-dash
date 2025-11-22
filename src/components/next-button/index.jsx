import React from "react";
import "/src/scss/next.scss";
import nextImg from "./next-icon.png";
import pauseImg from "./pause-icon.png";

function Next({ isPause, nextTimer }) {
  return (
    <button onClick={nextTimer} className={isPause ? "pause-btn" : "next-btn"}>
      <img src={isPause ? pauseImg : nextImg} width={30} alt="" />
    </button>
  );
}

export default Next;

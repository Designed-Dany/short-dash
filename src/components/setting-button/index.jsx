import React from "react";
import settingImg from "./setting-icon.png";
import pauseImg from "./pause-icon.png";
import "/src/scss/setting.scss";

function Setting({ isPause }) {
  return (
    <button className={isPause ? "pause-btn" : "setting-btn"}>
      <img
        className="setting-btn__icon"
        width={30}
        src={isPause ? pauseImg : settingImg}
        alt=""
      />
    </button>
  );
}

export default Setting;

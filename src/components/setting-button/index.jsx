import React from "react";
import settingImg from "./setting-icon.png";
import "/src/scss/setting.scss";

function Setting() {
  return (
    <button className="setting-btn">
      <img className="setting-btn__icon" width={30} src={settingImg} alt="" />
    </button>
  );
}

export default Setting;

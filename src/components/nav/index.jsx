import React from "react";
import brainImg from "./focus-img.png";
import shortBreak from "./short-break-icon.png";
import "/src/scss/nav.scss";

function Nav({ isPause }) {
  return (
    <>
      <button className={isPause ? "nav-pause" : "nav"}>
        <img
          width={25}
          height={25}
          className="nav-img"
          src={isPause ? shortBreak : brainImg}
        />
        <p>{isPause ? "Short Break" : "Focus"}</p>
      </button>
    </>
  );
}

export default Nav;

import React from "react";
import brainImg from "./focus-img.png";
import "/src/scss/nav.scss";

function Nav() {
  return (
    <>
      <button className="nav">
        <img width={25} height={25} className="nav-img" src={brainImg} />
        <p>Focus</p>
      </button>
    </>
  );
}

export default Nav;

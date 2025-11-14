import React from "react";
import "/src/scss/next.scss";
import nextImg from "./next-icon.png";

function Next() {
  return (
    <button className="next-btn">
      <img src={nextImg} width={30} alt="" />
    </button>
  );
}

export default Next;

import "./scss/app.scss";
import "./scss/libs/_normalize.scss";
import Time from "./components/time-block";
import React, { useState } from "react";

function App() {
  const [isBackground, setIsBackground] = useState(false);

  return (
    <>
      <div className={isBackground ? "pause-wrapper" : "wrapper"}>
        <Time setIsBackground={setIsBackground} />
      </div>
    </>
  );
}

export default App;

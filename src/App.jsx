import "./scss/app.scss";
import "./scss/libs/_normalize.scss";
import Nav from "./components/nav/index";
import Time from "./components/time-block";
import Play from "./components/play-button";
import Next from "./components/next-button";
import Setting from "./components/setting-button";

function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Time />
        <div className="content">
          <Setting />
          <Play />
          <Next />
        </div>
      </div>
    </>
  );
}

export default App;

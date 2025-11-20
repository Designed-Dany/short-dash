import "./scss/app.scss";
import "./scss/libs/_normalize.scss";
import Nav from "./components/nav/index";
import Time from "./components/time-block";

function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Time />
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;

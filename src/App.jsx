import "./scss/app.scss";
import "./scss/libs/_normalize.scss";
import Time from "./components/time-block";

function App() {
  return (
    <>
      <div className="wrapper">
        <Time />
      </div>
    </>
  );
}

export default App;

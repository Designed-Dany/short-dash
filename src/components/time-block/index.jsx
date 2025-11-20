import React, { useState, useEffect } from "react";
import "/src/scss/time.scss";
import Play from "../play-button";
import Setting from "../setting-button";
import Next from "../next-button";
function Time() {
  const timerList = [1500, 1800, 2100, 2400, 2700, 3000]; // массив таймеров
  const [timeLeft, setTimeLeft] = useState(timerList[0]); // первый таймер
  const [isRunning, setIsRunning] = useState(false); // стоп или плэй таймера
  const [currentIndex, setCurrentIndex] = useState(0); // текущий индекс

  const nextTimer = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === timerList.length - 1 ? 0 : prevIndex + 1;
      setTimeLeft(timerList[nextIndex]);
      return nextIndex;
    });
    setIsRunning(false);
  };

  useEffect(() => {
    let timerId;

    if (timeLeft <= 0) {
      return;
    }

    if (isRunning) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <>
      <div className="timer">
        <div className="minutes">
          {minutes}
          <br />
          {seconds < 10 ? "0" : ""}
          {seconds}
        </div>
        {timeLeft <= 0 && <p>Время истекло</p>}
        <div className="timer__nav">
          <Setting />
          <Play isRunning={isRunning} timerStart={toggleTimer} />
          <Next nextTimer={nextTimer} />
        </div>
      </div>
    </>
  );
}

export default Time;

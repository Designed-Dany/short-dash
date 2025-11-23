import React, { useState, useEffect } from "react";
import "/src/scss/time.scss";
import Play from "../play-button";
import Setting from "../setting-button";
import Next from "../next-button";
import Nav from "/src/components/nav/index";

function Time({ setIsBackground }) {
  const timerList = [5, 1800, 2100, 2400, 2700, 3000]; // массив таймеров
  const [timeLeft, setTimeLeft] = useState(timerList[0]); // первый таймер
  const [isRunning, setIsRunning] = useState(false); // стоп или плэй таймера
  const [currentIndex, setCurrentIndex] = useState(0); // текущий индекс
  const [isPause, setIsPause] = useState(false);

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

  const shortPause = () => {
    setTimeLeft(15);
    setIsPause(true);
    setIsBackground(true);

    if (isPause == true) {
      setTimeLeft(timerList[currentIndex]);
      setIsPause(false);
      setIsBackground(false);
    }
  };

  return (
    <>
      <Nav isPause={isPause} />
      <div className={isPause ? "timer__break" : "timer"}>
        <div className="minutes">
          {minutes}
          <br />
          {seconds < 10 ? "0" : ""}
          {seconds}
        </div>
        {timeLeft <= 0 ? shortPause() : ""}
        <div className="timer__nav">
          <Setting isPause={isPause} />
          <Play
            isPause={isPause}
            isRunning={isRunning}
            timerStart={toggleTimer}
          />
          <Next isPause={isPause} nextTimer={nextTimer} />
        </div>
      </div>
    </>
  );
}

export default Time;

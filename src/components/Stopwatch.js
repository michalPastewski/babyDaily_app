import {React, useState, useRef } from 'react';

import Button from '../components/Button';
import Stoper from './Stoper';

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
    setIsPause(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  const stopTimer = () => {
    setIsActive(false);
    setIsPause(false);
    clearInterval(countRef.current);
    setTimer(0);
  }

  const handlePause = () => {
    setIsPause(true);
    clearInterval(countRef.current);
  }

  return (
    <>
    {isActive && !isPause 
      ? <Button title="pause" onClick={handlePause} />
      : <Button title="start" onClick={startTimer} />
    }
      <Stoper time={timer}/>
      <Button title="stop" onClick={stopTimer} />
    </>
  );
}

export default Stopwatch;
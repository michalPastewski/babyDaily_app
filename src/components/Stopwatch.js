import {React, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button';
import Stoper from './Stoper';
import { add, resetCheckbox } from '../state/meal';

const Stopwatch = () => {
  const label = useSelector(state => state.meal.label);
  const dispatch = useDispatch();

  const dataToFill = {
    start: '',
    end: '',
    time: '',
    type: null
  }
  const [state, setState] = useState(dataToFill);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    if(!isActive){
      const startTime = new Date();
      setState({...state, start: localeTimeFormat(startTime)});
      setIsActive(true);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    };
  }

  const stopTimer = () => {
    const endTime = new Date();
    if(timer > 2) {  //in finall version 59
      setState({...state,
        date: new Date(),
        end: localeTimeFormat(endTime),
        time: `${timeHours}:${timeMinutes} h`,
          type: label
        });
        setIsSended(true);
      } else {
      setState(dataToFill);
    }
      setIsActive(false);
      dispatch(resetCheckbox());
      setTimer(0);
    }

  useEffect(() => {
    if(isSended) {
      dispatch(add(state));
      setIsSended(false);
    }
    !isActive && clearInterval(countRef.current);
  },[isSended, isActive])

  const localeTimeFormat = (time) => time.toLocaleTimeString().slice(0,-3);
  const timeSetting = (elm) => (elm >= 10) ? elm : `0${elm}`;

  const timeSeconds = timeSetting(Math.floor(timer % 60));
  const timeMinutes = timeSetting(Math.floor((timer / 60) % 60));
  const timeHours = timeSetting(Math.floor(timer / 3600));

  return (
    <>
      <Button title="start" onClick={startTimer} />
      <Stoper hours={timeHours} minutes={timeMinutes} seconds={timeSeconds}/>
      <Button title="stop" onClick={stopTimer} />
    </>
  );
}

export default Stopwatch;
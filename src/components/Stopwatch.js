import {React, useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import styles from '../styles/meal.module.css';
import Button from '../components/Button';
import { add, resetCheckbox } from '../state/meal';
import { useAuth } from '../context/AuthContext';

const Stopwatch = () => {
  const {currentUser} = useAuth();
  const label = useSelector(state => state.meal.label);
  const dispatch = useDispatch();

  const dataToFill = {
    date: '',
    mail: '',
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
        date: endTime.toLocaleDateString(),
        mail: currentUser.email,
        end: localeTimeFormat(endTime),
        time: `${hours}:${minutes} h`,
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
  },[isSended, isActive, dispatch, state]);

  const localeTimeFormat = (time) => time.toLocaleTimeString().slice(0,-3);
  const timeSetting = (elm) => (elm >= 10) ? elm : `0${elm}`;

  const seconds = timeSetting(Math.floor(timer % 60));
  const minutes = timeSetting(Math.floor((timer / 60) % 60));
  const hours = timeSetting(Math.floor(timer / 3600));

  return (
    <>
      <Button title="start" onClick={startTimer} />
      <div className={styles.timer}>
        <div>{`${hours}:${minutes}:${seconds}`}</div>
      </div>
      <Button title="stop" onClick={stopTimer} />
    </>
  );
}

export default Stopwatch;
import {React, useState} from 'react';
import '../styles/app.css';

const Stopper = () => {
  const [hours, setNewHours] = useState(0);
  const [minutes, setNewMinutes] = useState(0);
  const [seconds, setNewSeconds] = useState(0);

  const timeSetting = (elm) => (elm >= 10) ? elm : `0${elm}`;

  return (
    <div className="stopper">
      <div>{timeSetting(hours)}<span>:</span></div>
      <div>{timeSetting(minutes)}<span>:</span></div>
      <div>{timeSetting(seconds)}</div>
    </div>
  );
}

export default Stopper;
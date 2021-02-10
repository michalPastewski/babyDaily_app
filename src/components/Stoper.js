import React from 'react';
import styles from '../styles/meal.module.css';

const Stoper = ({time}) => {
  const timeSetting = (elm) => (elm >= 10) ? elm : `0${elm}`;

  const seconds = timeSetting(Math.floor(time % 60));
  const minutes = timeSetting(Math.floor((time / 60) % 60));
  const hours = timeSetting(Math.floor(time / 3600));

return (
  <div className={styles.timer}>
    <div>{`${hours}:${minutes}:${seconds}`}</div>
  </div>
);
}

export default Stoper;
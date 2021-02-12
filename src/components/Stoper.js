import React from 'react';
import styles from '../styles/meal.module.css';

const Stoper = ({ hours, minutes, seconds}) => {
  
return (
  <div className={styles.timer}>
    <div>{`${hours}:${minutes}:${seconds}`}</div>
  </div>
);
}

export default Stoper;
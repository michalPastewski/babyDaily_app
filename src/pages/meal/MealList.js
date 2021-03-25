import React from 'react';
import styles from '../../styles/meal.module.css';

const dataList = ({ data }) => {

return (
  <div className={styles.table__row} key={data.id}>
    <div className={styles.table__item}>{data.date}</div>
    <div className={styles.table__item}>{data.start}</div>
    <div className={styles.table__item}>{data.end}</div>
    <div className={styles.table__item}>{data.time}</div>
    <div className={styles.table__item}>{data.type.join(', ')}</div>
  </div>
  );
}

export default dataList;
import React from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/meal.module.css';

const MealTable = () => {
  const dataList = useSelector(state => state.meal.data);
  return (
    <section className={styles.table}>
        <header className={styles.table__row}>
          <div className={styles.table__item}>DATA</div>
          <div className={styles.table__item}>START</div>
          <div className={styles.table__item}>KONIEC</div>
          <div className={styles.table__item}>CZAS</div>
          <div className={styles.table__item}>RODZAJ</div>
        </header>
        {
          dataList.reverse().map((data) => (
                <div className={styles.table__row} key={data.id}>
                  <div className={styles.table__item}>{data.date}</div>
                  <div className={styles.table__item}>{data.start}</div>
                  <div className={styles.table__item}>{data.end}</div>
                  <div className={styles.table__item}>{data.time}</div>
                  <div className={styles.table__item}>{data.type.join(', ')}</div>
                </div>))
        }
    </section>
  )
}

export default MealTable;
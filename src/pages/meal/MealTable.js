import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../../state/meal';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/meal.module.css';

const MealTable = () => {
  const {currentUser} = useAuth();
  const dispatch = useDispatch();
  const dataList = useSelector(state => state.meal.data)
                    .filter((item) => item["mail"].includes(currentUser.email))
                    .sort((a, b)=> {
                      const current = parseInt(a.date.split('.').reverse().reduce((acc, cur) => acc + cur));
                      const next = parseInt(b.date.split('.').reverse().reduce((acc, cur) => acc + cur));
                      return current > next ? 1 : -1;
                    });

  useEffect(() => dispatch(fetchMeals()), [dispatch]);

  return (
    <section className={styles.table__section}>
      <div className={styles.table}>
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
      </div>
    </section>
  )
}

export default MealTable;
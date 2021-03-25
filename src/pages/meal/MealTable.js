import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals } from '../../state/meal';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/meal.module.css';
import MealList from './MealList';

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
  
const [mealList, setMealList] = useState(dataList);

let { mealTableId } = useParams();

  const day = new Date().toLocaleDateString();
  // const week = new Date().get;
  const month = new Date().toLocaleDateString().split('.').slice(1).join('.');
  let newMealList = [];

  if(mealTableId === 'today') {
    newMealList = dataList.filter(meal => meal.date === day)
  }

  // if(mealTableId === 'all-week') {
  //   newMealList = dataList.filter(meal => meal.date === week)
  // }

  if(mealTableId === 'all-month') {
    newMealList = dataList.filter(meal => meal.date.split('.').slice(1).join('.') === month)
  }

  useEffect(() => {
    setMealList(newMealList)
  }, [mealTableId]);

  useEffect(() => dispatch(fetchMeals()), [dispatch, mealList]);

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
          mealList.length === 0
          ? dataList.map((meal) => (
              <MealList  data={meal} key={meal.id}/> 
            )).reverse()
          : mealList.map((meal) => (
            <MealList  data={meal} key={meal.id}/> 
          )).reverse()
        }
      </div>
    </section>
  )
}

export default MealTable;
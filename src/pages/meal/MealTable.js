import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals, remove } from '../../state/meal';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/meal.module.css';
import MealList from './MealList';

const MealTable = ({ showBin, onClickShow, filter }) => {
   const { currentUser } = useAuth();
   const dispatch = useDispatch();
   const dataList = useSelector((state) => state.meal.data)
      .filter((item) => item['mail'].includes(currentUser.email))
      .sort((a, b) => {
         const current = parseInt(
            a.date
               .split('.')
               .reverse()
               .reduce((acc, cur) => acc + cur),
         );
         const next = parseInt(
            b.date
               .split('.')
               .reverse()
               .reduce((acc, cur) => acc + cur),
         );
         return current > next ? 1 : -1;
      });

   let mealTab = [];
   const day = new Date().toLocaleDateString();
   const month = new Date().toLocaleDateString().split('.').slice(1).join('.');

   if (filter === 'all-month') {
      mealTab = dataList.filter(
         (meal) => meal.date.split('.').slice(1).join('.') === month,
      );
   }
   if (filter === 'today') {
      mealTab = dataList.filter((meal) => meal.date === day);
   }

   const handleOnRemove = (id) => {
      dispatch(remove(id));
   };

   useEffect(() => dispatch(fetchMeals()), [dispatch]);

   if (showBin) {
      return (
         <div className={styles.table__section}>
            <div className={styles.table}>
               <header className={styles.table__row}>
                  <div className={styles.table__item}>DATA</div>
                  <div className={styles.table__item}>START</div>
                  <div className={styles.table__item}>KONIEC</div>
                  <div className={styles.table__item}>CZAS</div>
                  <div className={styles.table__item}>USUŃ</div>
               </header>
               {!filter
                  ? dataList
                       .map((meal) => (
                          <MealList
                             key={meal.id}
                             showBin={showBin}
                             onRemove={handleOnRemove}
                             onClickShow={onClickShow}
                             data={meal}
                          />
                       ))
                       .reverse()
                  : mealTab
                       .map((meal) => (
                          <MealList
                             key={meal.id}
                             showBin={showBin}
                             onRemove={handleOnRemove}
                             onClickShow={onClickShow}
                             data={meal}
                          />
                       ))
                       .reverse()}
            </div>
         </div>
      );
   }

   return (
      <div className={styles.table__section}>
         <div className={styles.table}>
            <header className={styles.table__row}>
               <div className={styles.table__item}>DATA</div>
               <div className={styles.table__item}>START</div>
               <div className={styles.table__item}>KONIEC</div>
               <div className={styles.table__item}>CZAS</div>
               <div className={styles.table__item}>RODZAJ</div>
            </header>
            {!filter
               ? dataList
                    .map((meal) => <MealList data={meal} key={meal.id} />)
                    .reverse()
               : mealTab
                    .map((meal) => <MealList data={meal} key={meal.id} />)
                    .reverse()}
         </div>
      </div>
   );
};

export default MealTable;

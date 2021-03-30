import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals, remove } from '../../state/meal';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/meal.module.css';
import MealList from './MealList';
import Loader from '../../components/Loader';

const MealTable = ({ showBin, onClickShow, filter }) => {
   const { currentUser } = useAuth();
   const dispatch = useDispatch();
   const data = useSelector((state) => state.meal);

   const isLoading = data.isLoading;
   const mealList = data.data
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

   let mealFilter = [];
   const day = new Date().toLocaleDateString();
   const month = new Date().toLocaleDateString().split('.').slice(1).join('.');

   if (filter === 'all-month') {
      mealFilter = mealList.filter(
         (meal) => meal.date.split('.').slice(1).join('.') === month,
      );
   }
   if (filter === 'today') {
      mealFilter = mealList.filter((meal) => meal.date === day);
   }

   const handleOnRemove = (id) => {
      dispatch(remove(id));
   };

   useEffect(() => dispatch(fetchMeals()), [dispatch]);

   if (isLoading) {
      return (
         <div className={styles.table__section}>
            <div className={styles.table}>
               <header className={styles.table__row}>
                  <div className={styles.table__item}>DATA</div>
                  <div className={styles.table__item}>START</div>
                  <div className={styles.table__item}>KONIEC</div>
                  <div className={styles.table__item}>CZAS</div>
                  {showBin ? (
                     <div className={styles.table__item}>USUŃ</div>
                  ) : (
                     <div className={styles.table__item}>RODZAJ</div>
                  )}
               </header>
            </div>
            <Loader />
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
               {showBin ? (
                  <div className={styles.table__item}>USUŃ</div>
               ) : (
                  <div className={styles.table__item}>RODZAJ</div>
               )}
            </header>
            {!filter
               ? mealList
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
               : mealFilter
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
};

export default MealTable;

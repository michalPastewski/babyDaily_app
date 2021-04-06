import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeals, remove } from '../../state/meal';

import styles from '../../styles/meal.module.css';
import MealList from './MealList';
import Loader from '../../components/Loader';

const MealTable = ({ showBin, onClickShow, filter }) => {
   const dispatch = useDispatch();
   const data = useSelector((state) => state.meal.data);
   const isLoading = useSelector((state) => state.meal.isLoading);
   const [mealList, setMealList] = useState([]);
   let mealFilter = [];

   const createMealList = (data) => {
      const mealList = data
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
         })
         .sort((a, b) => {
            const current = parseInt(a.start.split(':').join(''));
            const next = parseInt(b.start.split(':').join(''));
            return current > next ? 1 : -1;
         });

      return mealList;
   };

   const formatDate = (date) => {
      const formatDate = date.toLocaleDateString();
      let createNewDate = [];
      if (formatDate.charAt() !== '0') {
         createNewDate = formatDate.split('');
         createNewDate.unshift('0');
         return createNewDate.join('');
      }
      return formatDate;
   };

   const day = new Date();
   const month = new Date().toLocaleDateString().split('.').slice(1).join('.');

   if (filter === 'all-month') {
      mealFilter = mealList.filter((meal) => meal.date.split('.').slice(1).join('.') === month);
   }
   if (filter === 'today') {
      mealFilter = mealList.filter((meal) => {
         const createDate = formatDate(day);
         return meal.date === createDate;
      });
   }

   const handleOnRemove = (id) => {
      dispatch(remove(id));
   };

   useEffect(() => dispatch(fetchMeals()), [dispatch]);
   useEffect(() => setMealList(createMealList(data)), [data]);

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

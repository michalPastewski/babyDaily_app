import React, { useState } from 'react';

import MealTable from './MealTable';
import styles from '../../styles/meal.module.css';

const MealDisplay = ({ onFormShow }) => {
   const [showBin, setShowBin] = useState(false);
   const [mealFilter, setMealFilter] = useState('');

   const handleOnAdd = () => onFormShow();

   const handleOnDelete = () => setShowBin(!showBin);

   const handleOnFiltered = (e) => {
      setMealFilter(e.target.name);
   };

   return (
      <section className={styles.table__content}>
         <div className={styles.table__nav}>
            <div className={styles.table__nav__list}>
               <div>
                  <button
                     className={
                        mealFilter === ''
                           ? styles.nav__button__active
                           : styles.nav__button
                     }
                     name=""
                     onClick={handleOnFiltered}
                  >
                     wszystko
                  </button>
                  <button
                     className={
                        mealFilter === 'today'
                           ? styles.nav__button__active
                           : styles.nav__button
                     }
                     name="today"
                     onClick={handleOnFiltered}
                  >
                     dzisiaj
                  </button>
                  <button
                     className={
                        mealFilter === 'all-month'
                           ? styles.nav__button__active
                           : styles.nav__button
                     }
                     name="all-month"
                     onClick={handleOnFiltered}
                  >
                     miesiąc
                  </button>
               </div>
               <div className={styles.table__nav__list__nested}>
                  {showBin ? (
                     <button
                        className={styles.nav__button}
                        onClick={handleOnDelete}
                     >
                        rodzaj
                     </button>
                  ) : (
                     <button
                        className={styles.nav__button}
                        onClick={handleOnDelete}
                     >
                        usuń
                     </button>
                  )}
                  <button className={styles.nav__button} onClick={handleOnAdd}>
                     dodaj
                  </button>
               </div>
            </div>
         </div>
         <MealTable
            showBin={showBin}
            onClickShow={handleOnDelete}
            filter={mealFilter}
         />
      </section>
   );
};

export default MealDisplay;

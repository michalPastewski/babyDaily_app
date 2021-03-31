import React, { useState } from 'react';
import mealImg from '../../assets/icons/feeding-bottle.svg';
import styles from '../../styles/meal.module.css';

import PageWrapper from '../../components/PageWrapper';
import PageIcon from '../../components/PageIcon';
import MealCheckboxes from './MealCheckboxes';
import MealForm from './MealForm';
import Stopwatch from '../../components/Stopwatch';
import MealDisplay from './MealDisplay';

const Meal = () => {
   const [show, setShow] = useState(false);
   const [displayMeal, setDisplayMeal] = useState(false);

   const showForm = () => {
      setShow(!show);
   };

   const handleOnDisplayMeal = () => {
      setDisplayMeal(!displayMeal);
   };

   return (
      <PageWrapper title="POSIŁKI">
         <MealForm show={show} isClicked={showForm} />
         <section className={styles.header}>
            <PageIcon image={mealImg} alt="bottle-icon" />
            <MealCheckboxes />
         </section>
         <section className={styles.stopwatch__section}>
            <Stopwatch />
         </section>
         <div className={styles.table__content}>
            <button className={styles.table__button} onClick={handleOnDisplayMeal}>
               wyświetl posiłki
            </button>
            {displayMeal && <MealDisplay onFormShow={showForm} />}
         </div>
      </PageWrapper>
   );
};

export default Meal;

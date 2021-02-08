import React from 'react';
import mealImg from '../assets/icons/feeding-bottle.svg';
import styles from '../styles/meal.module.css';

import PageWrapper from "../components/PageWrapper";
import PageIcon from "../components/PageIcon";
import MealCheckbox from '../components/MealCheckbox';
import Button from '../components/Button';
import Stopwatch from '../components/Stopwatch';
import MealTable from '../components/MealTable';

const Meal = () => {
   return (
      <PageWrapper title="POSIŁKI">
         <section className={styles.header}>
            <PageIcon image={mealImg} alt="bottle-icon"/>
            <MealCheckbox />
            <Button title="add" onClick={() => console.log("click")}/>
         </section>
         <section className={styles.stopwatch__section}>
            <Stopwatch />
         </section>
         <section className={styles.list__section}>
            <MealTable />
         </section>
      </PageWrapper>
   );
}

export default Meal;
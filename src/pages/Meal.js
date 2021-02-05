import React from 'react';
import mealImg from '../assets/icons/feeding-bottle.svg';
import styles from '../styles/meal.module.css';

import PageWrapper from "../components/PageWrapper";
import PageIcon from "../components/PageIcon";
import MealCheckbox from '../components/MealCheckbox';
import Button from '../components/Button';
import Stopper from '../components/Stopper';

const Meal = () => {
   return (
      <PageWrapper title="POSIŁKI">
         <section className={styles.header}>
            <PageIcon image={mealImg} alt="bottle-icon"/>
            <MealCheckbox />
            <Button title="add" onClick={() => console.log("click")}/>
         </section>
         
         <section className={styles.active__section}>
            <Button title="start" />
            <Stopper />
            <Button title="stop" />
         </section>
      </PageWrapper>
   );
}

export default Meal;
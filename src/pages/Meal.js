import React,  { useState }from 'react';
import mealImg from '../assets/icons/feeding-bottle.svg';
import styles from '../styles/meal.module.css';

import PageWrapper from "../components/PageWrapper";
import PageIcon from "../components/PageIcon";
import MealCheckboxes from '../components/MealCheckboxes';
import Button from '../components/Button';
import MealForm from '../components/MealForm';
import Stopwatch from '../components/Stopwatch';
import MealTable from '../components/MealTable';

const Meal = () => {
   const [show, setShow] = useState(false);
   
   const handleOnClick = () => {
      setShow(!show);
   }

   return (
      <PageWrapper title="POSIŁKI">
         <MealForm show={show} isClicked={handleOnClick}/>
         <section className={styles.header}>
            <PageIcon image={mealImg} alt="bottle-icon"/>
            <MealCheckboxes />
            <Button title="dodaj" onClick={handleOnClick}/>
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
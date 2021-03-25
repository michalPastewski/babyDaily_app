import React,  { useState }from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import mealImg from '../../assets/icons/feeding-bottle.svg';
import styles from '../../styles/meal.module.css';
import { useAuth } from "../../context/AuthContext";

import PageWrapper from "../../components/PageWrapper";
import PageIcon from "../../components/PageIcon";
import MealCheckboxes from './MealCheckboxes';
import MealForm from './MealForm';
import Stopwatch from '../../components/Stopwatch';
import MealDisplay from './MealDisplay';

import MealTable from './MealTable';

const Meal = () => {
   const [show, setShow] = useState(false);
   const [displayMeal, setDisplayMeal] = useState(false);
   const {currentUser} = useAuth();

   const showForm = () => {
      setShow(!show);
   }

   const handleOnDisplaMeal = () => {
      setDisplayMeal(!displayMeal);
   }

   return (
            <PageWrapper title="POSIŁKI">
               <MealForm show={show} isClicked={showForm}/>
               <section className={styles.header}>
                  <PageIcon image={mealImg} alt="bottle-icon"/>
                  <MealCheckboxes />
               </section>
               <section className={styles.stopwatch__section}>
                  <Stopwatch />
               </section>
               <div className={styles.table__content}>
                  <button onClick={handleOnDisplaMeal}>
                     <Link to="/meal">wyświetl posiłki</Link>
                  </button>
               {
                  displayMeal && <MealDisplay onFormShow={showForm}/>
               }
               </div>
            </PageWrapper>
   );
}

export default Meal;
import {React, useState} from 'react';
import mealImg from '../assets/icons/feeding-bottle.svg';
import styles from '../styles/meal.module.css';

import PageWrapper from "../components/PageWrapper";
import PageIcon from "../components/PageIcon";

const Meal = () => {
   const [value, setNeValue] = useState(100);

   const handleChangeValue = (e) => {
    return setNeValue(e.target.value);
   }

   return (
      <PageWrapper title="POSIŁKI">
         <section className={styles.header}>
            <PageIcon image={mealImg} alt="bottle-icon"/>

            <div className={styles.checkbox__menu}>
               <div className={styles.checkbox__menu__section}>
                  <input type="checkbox" id="one" name="one" className={styles.input} />
                  <label for="one" className={styles.lable}>pierś</label>
               </div>
               <div className={styles.checkbox__menu__section}>
                  <input type="checkbox" id="two" name="two" className={styles.input} />
                  <label for="two" className={styles.lable}>butelka</label>
               </div>
               <div className={styles.checkbox__menu__section}>
                  <input type="checkbox" id="three" name="three"  className={styles.input} />
                  <label for="three" className={styles.lable}>mleko modyfikowane</label>
               </div>
               <div className={styles.checkbox__menu__section}>
                  <input type="number" id="num"  name="num" className={styles.input__num} value={value} onChange={handleChangeValue}/>
                  <label for="num" className={styles.lable}>ml</label>
               </div>
            </div>

            <div>
               <button className={styles.add__button}>add</button>
            </div>
         </section>
      </PageWrapper>
   );
}

export default Meal;
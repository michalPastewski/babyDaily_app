import { React, useState } from 'react';
import styles from '../../styles/meal.module.css';
import MealCheckbox from './MealCheckbox';

import { useDispatch } from 'react-redux';
import { addLabel, removeLabel } from '../../state/meal';

const MealCheckboxes = () => {
   const dispatch = useDispatch();

   const [value, setNewValue] = useState(0);

   const handleChangeValue = (e) => {
      e.preventDefault();
      setNewValue(e.target.value);
   };

   const handleOnSubmit = (e) => {
      e.preventDefault();
      value > 0 ? dispatch(addLabel(`${value} ml`)) : dispatch(removeLabel(`${value} ml`));
      setNewValue(0);
   };

   return (
      <div className={styles.checkbox__menu}>
         <MealCheckbox label="pierś" />
         <MealCheckbox label="butelka" />
         <MealCheckbox label="mleko modyfikowane" />

         <div className={styles.checkbox__menu__section}>
            <input
               type="number"
               id="num"
               name="num"
               className={styles.input__num}
               value={value === 0 ? '' : value}
               placeholder="ilość mleka"
               onChange={handleChangeValue}
            />
            <label htmlFor="num">ml</label>
            <button type="submit" onClick={handleOnSubmit} className={styles.input__num__button}>
               +
            </button>
         </div>
      </div>
   );
};

export default MealCheckboxes;

import { React, useState } from 'react';
import styles from '../styles/meal.module.css';
import Checkbox from './Checkbox';

const MealCheckboxes = () => {
  // const [value, setNewValue] = useState(100);

  // const handleChangeValue = (e) => {
  //   return setNewValue(e.target.value);
  // }


  return (
    <div className={styles.checkbox__menu}>
      <Checkbox label="pierś" />
      <Checkbox label="butelka" />
      <Checkbox label="mleko modyfikowane" />

      {/* <div className={styles.checkbox__menu__section}>
        <input type="number" id="num"  name="num" className={styles.input__num} value={value} onChange={handleChangeValue}/>
        <label htmlFor="num" className={styles.lable}>ml</label>
      </div> */}
    </div>
  )
};

export default MealCheckboxes;
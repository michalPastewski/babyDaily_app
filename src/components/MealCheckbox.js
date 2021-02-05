import { React, useState } from 'react';
import styles from '../styles/meal.module.css';

const MealCheckbox = () => {
  const [value, setNeValue] = useState(100);

  const handleChangeValue = (e) => {
    return setNeValue(e.target.value);
  }

  return (
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
  )
};

export default MealCheckbox;
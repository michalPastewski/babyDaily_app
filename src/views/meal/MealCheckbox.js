import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/meal.module.css';

import { addLabel, removeLabel } from '../../state/meal';

const MealCheckbox = ({ label }) => {
   const isChecked = useSelector((state) => state.meal.isChecked);
   const dispatch = useDispatch();

   const [checked, setChecked] = useState(false);

   const handleOnCheck = () => {
      !checked ? dispatch(addLabel(label)) : dispatch(removeLabel(label));
      setChecked(!checked);
   };

   useEffect(() => {
      if (isChecked === null && checked) setChecked(false);
   }, [isChecked, checked]);

   return (
      <div className={styles.checkbox__menu__section} onClick={handleOnCheck}>
         <span className={checked ? styles.checkbox__checked : styles.checkbox__check}></span>
         {label}
      </div>
   );
};

export default MealCheckbox;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/meal.module.css';

import { addLabel, removeLabel } from '../state/meal';

const Checkbox = ({label}) => {
  const isChecked = useSelector(state => state.meal.isChecked)
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleOnCheck = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    checked ? dispatch(addLabel(label)) : dispatch(removeLabel(label));
  });

  useEffect(() => {
    if(isChecked === false) setChecked(isChecked);
  }, [isChecked])

  return (
    <div className={styles.checkbox__menu__section} onClick={handleOnCheck}>
      <span className={checked ? styles.checkbox__checked : styles.checkbox__check}></span>
      {label}
    </div>
  );
}

export default Checkbox;
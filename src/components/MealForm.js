import React, { useState } from 'react';
import styles from '../styles/meal.module.css';

import MealCheckboxes from './MealCheckboxes';
import Button from './Button';
import FormItem from './FormItem';

const MealForm = ({ show, isClicked}) => {

  let display = null;
  show ? display = "grid" : display = "none";

  const onClose = (e) => {
    e.preventDefault();
    isClicked();
  }

  return (
      <form className={styles.form} style={{display: `${display}`}}>
        <FormItem name="date" type="date" title="Data" style={styles.input__date}/>
        <FormItem name="start" type="time" title="Godzina rozpoczęcia" style={styles.input__start}/>
        <FormItem name="end" type="time" title="Godzina zakończenia" style={styles.input__end}/>
        <div className={styles.form__checkboxes}>
          <MealCheckboxes />
        </div>
        <div className={styles.form__button}>
          <Button title="zamknij" onClick={onClose}/>
          <Button title="dodaj" />
        </div>
      </form>
  );
}

export default MealForm;
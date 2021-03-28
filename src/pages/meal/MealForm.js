import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/meal.module.css';
import { useAuth } from '../../context/AuthContext';

import MealCheckboxes from './MealCheckboxes';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import { resetCheckbox, add } from '../../state/meal';

const MealForm = ({ show, isClicked }) => {
   const { currentUser } = useAuth();
   const label = useSelector((state) => state.meal.label);
   const dispatch = useDispatch();
   const dataToFill = {
      mail: '',
      date: '',
      start: '',
      end: '',
      time: '',
      type: [],
   };

   const [state, setState] = useState(dataToFill);
   const [isSended, setIsSended] = useState(false);

   const mealTime = () => {
      const startTime = state['start']
         .split(':')
         .reduce((acc, curr) => acc + curr);
      const endTime = state['end'].split(':').reduce((acc, curr) => acc + curr);

      const time = endTime - startTime;
      const formatTime = time.toString().split('');

      if (formatTime.length <= 1) {
         return `00:0${formatTime[0]} h`;
      } else if (formatTime.length <= 2) {
         return `00:${formatTime[0]}${formatTime[1]} h`;
      } else if (formatTime.length <= 3) {
         return `0${formatTime[0]}:${formatTime[1]}${formatTime[2]} h`;
      } else {
         return `${formatTime[0]}${formatTime[1]}:${formatTime[2]}${formatTime[3]} h`;
      }
   };

   const onChange = (name, value) => {
      setState({ ...state, [name]: value });
   };

   const onSend = (e) => {
      e.preventDefault();
      if (label.length === 0) {
         label.push('---');
      }

      setState({
         ...state,
         date: state.date.split('-').reverse().join('.'),
         mail: currentUser.email,
         time: mealTime(),
         type: label,
      });
      setIsSended(true);
      dispatch(resetCheckbox());
      isClicked();
   };

   const onClose = (e) => {
      e.preventDefault();
      setState(dataToFill);
      dispatch(resetCheckbox());
      isClicked();
   };

   useEffect(() => {
      if (isSended) {
         dispatch(add(state));
         setState(dataToFill);
         setIsSended(false);
      }
   });

   let display = null;
   show ? (display = 'grid') : (display = 'none');

   return (
      <form
         className={styles.form}
         style={{ display: `${display}` }}
         onSubmit={onSend}
      >
         <FormItem
            name="date"
            type="date"
            title="Data"
            value={state.date}
            style={styles.input__date}
            onChanged={onChange}
         />
         <FormItem
            name="start"
            type="time"
            title="Początek"
            value={state.start}
            style={styles.input__start}
            onChanged={onChange}
         />
         <FormItem
            name="end"
            type="time"
            title="Koniec"
            value={state.end}
            style={styles.input__end}
            onChanged={onChange}
         />
         <div className={styles.form__checkboxes}>
            <MealCheckboxes />
         </div>
         <div className={styles.form__button}>
            <Button title="zamknij" onClick={onClose} />
            <Button title="dodaj" />
         </div>
      </form>
   );
};

export default MealForm;

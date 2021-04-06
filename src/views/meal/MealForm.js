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
      const startTime = state['start'].split(':').reduce((acc, curr) => acc + curr);
      const endTime = state['end'].split(':').reduce((acc, curr) => acc + curr);
      const totalTime = endTime - startTime;

      const formatTime = (time) => {
         const formattingTime = [];
         const hours = Math.floor(time / 60);
         const minutes = time % 60;

         formattingTime.push(hours);
         formattingTime.push(minutes);
         return formattingTime;
      };

      const timeResult = formatTime(totalTime);
      if (timeResult[0] < 10 && timeResult[1] < 10) {
         return `0${timeResult[0]}:0${timeResult[1]} h`;
      }
      if (timeResult[0] < 10 && timeResult[1] >= 10) {
         return `0${timeResult[0]}:${timeResult[1]} h`;
      }
      if (timeResult[0] >= 10 && timeResult[1] < 10) {
         return `${timeResult[0]}:0${timeResult[1]} h`;
      }
      if (timeResult >= 10 && timeResult >= 10) {
         return `${timeResult[0]}:${timeResult[1]} h`;
      }
      return timeResult;
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
   }, [isSended, dataToFill, state, dispatch]);

   let display = null;
   show ? (display = 'block') : (display = 'none');

   return (
      <div className={styles.form} style={{ display: `${display}` }}>
         <form className={styles.form__content} onSubmit={onSend}>
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
               <Button title="✖️" onClick={onClose} />
               <Button title="✔️" />
            </div>
         </form>
      </div>
   );
};

export default MealForm;

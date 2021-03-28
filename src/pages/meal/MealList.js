import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../context/AuthContext';
import { fetchMeals, remove } from '../../state/meal';
import styles from '../../styles/meal.module.css';

const MealList = ({ data, showBin, onRemove, onClickShow }) => {
   const handleOnClick = (id) => {
      onRemove(id);
      onClickShow();
   };

   return (
      <div className={styles.table__row} key={data.id}>
         <div className={styles.table__item}>{data.date}</div>
         <div className={styles.table__item}>{data.start}</div>
         <div className={styles.table__item}>{data.end}</div>
         <div className={styles.table__item}>{data.time}</div>
         {showBin ? (
            <div
               className={styles.table__item}
               onClick={() => handleOnClick(data.id)}
            >
               <button>❌</button>
            </div>
         ) : (
            <div className={styles.table__item}>{data.type.join(', ')}</div>
         )}
      </div>
   );
};

export default MealList;

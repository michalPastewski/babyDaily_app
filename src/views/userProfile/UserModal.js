import React, { useRef, useState } from 'react';
import styles from '../../styles/userProfile.module.css';

import { useAuth } from '../../context/AuthContext';

const UserModal = ({ title, label, name, type, placeholder, showModal }) => {
   const { updateNameProfile, updateEmail } = useAuth();
   const valueRef = useRef();
   const [error, setError] = useState('');

   async function handleOnSubmit(e) {
      e.preventDefault();

      try {
         if (valueRef.current.name === 'name') {
            await updateNameProfile(valueRef.current.value);
         }

         if (valueRef.current.name === 'email') {
            await updateEmail(valueRef.current.value);
         }
         showModal();
      } catch {
         setError('Coś poszło nie tak... Spróbuj jeszcze raz :)');
      }
   }

   return (
      <div>
         <form onSubmit={handleOnSubmit}>
            <fieldset className={styles.form__content}>
               <legend className={styles.form__title}>{title}</legend>

               <div className={styles.form__item}>
                  <label className={styles.form__item__label}>{label}</label>
                  <input
                     ref={valueRef}
                     name={name}
                     type={type}
                     className={styles.form__item__input}
                     placeholder={`${placeholder}`}
                     required
                  ></input>
               </div>

               <div className={styles.form__buttons}>
                  <button className={styles.button} onClick={showModal}>
                     anuluj
                  </button>
                  <button className={styles.button}>wyślij</button>
               </div>
            </fieldset>
         </form>
      </div>
   );
};

export default UserModal;

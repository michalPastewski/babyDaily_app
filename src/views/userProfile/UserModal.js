import React, { useRef, useState } from 'react';
import styles from '../../styles/userProfile.module.css';

import { useAuth } from '../../context/AuthContext';

const UserModal = ({ title, label, name, type, placeholder, showModal, password }) => {
   const { updateNameProfile, updateEmail, reAuthenticate } = useAuth();
   const valueRef = useRef();
   const passwordRef = useRef();
   const [error, setError] = useState('');

   async function handleOnSubmit(e) {
      e.preventDefault();

      try {
         if (valueRef.current.name === 'babyName') {
            await updateNameProfile(valueRef.current.value);
         }

         if (valueRef.current.name === 'email') {
            await reAuthenticate(passwordRef.current.value);
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
               {error && <div>{error}</div>}
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
               {password && (
                  <div className={styles.form__item}>
                     <label className={styles.form__item__label}>hasło</label>
                     <input
                        ref={passwordRef}
                        type="password"
                        className={styles.form__item__input}
                        placeholder="wpisz hałso aby potwierdzić"
                        min-length="6"
                        required
                     ></input>
                  </div>
               )}

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

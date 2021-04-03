import React, { useRef, useState } from 'react';
import styles from '../../styles/userProfile.module.css';

import { useAuth } from '../../context/AuthContext';
import '../../styles/app.css';

const UpdateUserForm = ({ type, title, name, label, showForm }) => {
   const valueRef = useRef();
   const passwordRef = useRef();
   const confirmRef = useRef();
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');

   const { reAuthenticate, updatePassword, deleteProfile, currentUser } = useAuth();

   async function handleOnSubmit(e) {
      e.preventDefault();

      try {
         if (valueRef.current.value === currentUser.email) {
            await reAuthenticate(passwordRef.current.value);
            await deleteProfile();
         }

         if (passwordRef.current.value === confirmRef.current.value) {
            await reAuthenticate(valueRef.current.value);
            await updatePassword(passwordRef.current.value);
            setSuccess('hasło zostało zmienione');
            passwordRef.current.value = '';
            confirmRef.current.value = '';
            valueRef.current.value = '';
            setTimeout(() => showForm(), 3000);
         }
      } catch {
         passwordRef.current.value = '';
         confirmRef.current.value = '';
         valueRef.current.value = '';
         setError('Cos poszło nie tak... na pewno wprowadzono prawidłowe dane?');
      }
   }

   return (
      <form onSubmit={handleOnSubmit}>
         <fieldset className={styles.form__content}>
            {success && <div className="success">{success}</div>}
            {error && <div className="error">{error}</div>}
            <legend className={styles.form__title}>{title}</legend>

            <div className={styles.form__item}>
               <label className={styles.form__item__label}>{name}</label>
               <input
                  ref={valueRef}
                  type={type}
                  className={styles.form__item__input}
                  placeholder={`wpisz ${name}`}
               ></input>
            </div>

            <div className={styles.form__item}>
               <label className={styles.form__item__label}>{label}</label>
               <input
                  ref={passwordRef}
                  type="password"
                  className={styles.form__item__input}
                  placeholder={`wpisz ${label}`}
                  minLength="6"
                  required
               ></input>
            </div>

            <div className={styles.form__item}>
               <label className={styles.form__item__label}>potwierdź hasło</label>
               <input
                  ref={confirmRef}
                  type="password"
                  className={styles.form__item__input}
                  placeholder="potwierdź hasło"
                  required
               ></input>
            </div>

            <div className={styles.form__buttons}>
               <button className={styles.button} onClick={showForm}>
                  anuluj
               </button>
               <button className={styles.button}>wyślij</button>
            </div>
         </fieldset>
      </form>
   );
};

export default UpdateUserForm;

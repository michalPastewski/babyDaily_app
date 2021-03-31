import React, { useRef, useState } from 'react';
import styles from '../../styles/userProfile.module.css';

const UpdateUserForm = ({ type, title, name, label, showForm, onSubmit }) => {
   const valueRef = useRef();
   const passwordRef = useRef();
   const confirmRef = useRef();
   const [error, setError] = useState('');

   const handleOnSubmit = () => {
      if (passwordRef.current.value === confirmRef.current.value) {
         return onSubmit(valueRef.current.value, passwordRef.current.value);
      }
      setError('Cos poszło nie tak... Spróbuj ponownie później :)');
   };

   return (
      <form onSubmit={handleOnSubmit}>
         {error && <div>{error}</div>}

         <fieldset className={styles.form__content}>
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

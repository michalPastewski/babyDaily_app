import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/logging.module.css';
import '../../styles/app.css';

const SignUp = () => {
   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmRef = useRef();
   const babyNameRef = useRef();
   const { signUp, updateNameProfile } = useAuth();
   const history = useHistory();
   const [error, setError] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError('Password do not match');
      }

      try {
         setError('');
         await signUp(emailRef.current.value, passwordRef.current.value);
         await updateNameProfile(babyNameRef.current.value);
         history.push('/');
      } catch {
         setError('Rejestracja się nie powiodła');
      }
   }

   return (
      <form onSubmit={handleSubmit} className={styles.logging__forms}>
         <fieldset className={styles.logging__form}>
            <legend>Rejestracja</legend>
            {error && <div className="error">{error}</div>}
            <label htmlFor="babyName">Imię dziecka:</label>
            <input type="text" id="babyName" name="babyName" ref={babyNameRef} />

            <label htmlFor="login">E-mail:</label>
            <input type="email" id="email" name="email" ref={emailRef} required />

            <label htmlFor="password">Hasło:</label>
            <input type="password" id="password" name="password" minLength="6" ref={passwordRef} required />

            <label htmlFor="confirm">Potwierdź hasło:</label>
            <input type="password" id="confirm" name="confirm" minLength="6" ref={passwordConfirmRef} required />

            <button>rejestruj</button>
         </fieldset>
      </form>
   );
};

export default SignUp;

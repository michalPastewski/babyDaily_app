import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/logging.module.css';


const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
      .catch(error => setError(`Wprowadziłeś błędne dane`));
  }

  return (
    <section className={styles.logging__section}>
      <h4>ABY KORZYSTAĆ Z APLIKACJI TRZEBA BYĆ ZALOGOWANYM</h4>

      <form onSubmit={handleSubmit}>
        <fieldset className={styles.logging__form}>
          <legend>Logowanie</legend>
            <label htmlFor='login'>Login:</label>
            <input type='email' id='email' name='email' ref={emailRef} autoFocus required />

            <label htmlFor='password'>Hasło:</label>
            <input type='password' id='password' name='password' minLength='6' ref={passwordRef}  required />

            <button>zaloguj</button>
        </fieldset>

        { error &&  <div><h4>{error}</h4></div> }

        <div className={styles.logging__info}>
          <p>Potrzebujesz konto??
            <Link to='/sign-up' className={styles.logging__link}>Przejdź do rejestracji</Link>
          </p>
          <p>Uciekło Ci z pamięci hasło??
            <Link to='/forgot-password' className={styles.logging__link}>Tu je resetujemy 🙂</Link>
          </p>
        </div>

      </form>
    </section>
  );
}

export default SignIn;
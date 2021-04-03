import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/logging.module.css';
import '../../styles/app.css';

const SignIn = () => {
   const emailRef = useRef();
   const passwordRef = useRef();
   const { signIn } = useAuth();

   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      signIn(emailRef.current.value, passwordRef.current.value).catch((error) => {
         setError(error.message);
      });
   };

   return (
      <section className={styles.logging__section}>
         <h4>ABY KORZYSTAĆ Z APLIKACJI TRZEBA BYĆ ZALOGOWANYM</h4>

         <form onSubmit={handleSubmit}>
            <fieldset className={styles.logging__form}>
               {error && <div className="error">{error}</div>}

               <legend>Logowanie</legend>
               <label htmlFor="login">E-mail:</label>
               <input type="email" id="email" name="email" ref={emailRef} autoFocus required />

               <label htmlFor="password">Hasło:</label>
               <input type="password" id="password" name="password" minLength="6" ref={passwordRef} required />

               <button>zaloguj</button>
            </fieldset>

            <div className={styles.logging__info}>
               <div className={styles.logging__info__item}>
                  <p>Potrzebujesz konto??</p>
                  <Link to="/sign-up" className={styles.logging__link}>
                     Przejdź do rejestracji
                  </Link>
               </div>
               <div className={styles.logging__info__item}>
                  <p>Uciekło Ci z pamięci hasło??</p>
                  <Link to="/forgot-password" className={styles.logging__link}>
                     Tu je resetujemy
                  </Link>
               </div>
            </div>
         </form>
      </section>
   );
};

export default SignIn;

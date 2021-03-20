import React, { useRef, useState }from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

import styles from '../../styles/logging.module.css';

const ForgotPassword = () => {
  const emailRef = useRef();
  const history = useHistory();
  const {resetPassword} = useAuth();

  const [error, setError] = useState('');
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      await resetPassword(emailRef.current.value);
      setMessage('Aby dokończyć reset hasła sprawdź swojego maila');
      setTimeout(() => history.push('/'), 10000);
    } catch {
      setError('Zmian hasła nie powiodła się. Sprawdź poprawność maila');
    }
  }

  return (
    <>
    {
      !message
      ? <form onSubmit={handleSubmit} className={styles.logging__forms}>
          <fieldset className={styles.logging__form}>
            <legend>Reset hasła</legend>

            <label htmlFor='email'>podaj email:</label>
            <input type='email' id='email' name='email' ref={emailRef} required/>

            {error && <div><h4>{error}</h4></div>}

            <button>Potwierdź</button>
          </fieldset>
        </form>
      : <div>{message}</div>
    }
    </>
  );
}

export default ForgotPassword;
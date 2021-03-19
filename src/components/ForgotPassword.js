import React, { useRef, useState }from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const emailRef = useRef();
  const history = useHistory();
  const {resetPassword} = useAuth();

  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      await resetPassword(emailRef.current.value);
      history.push('/');
    } catch {
      setError('Zmian hasła nie powiodła się. Spróbuj poonwnie');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Reset hasła</legend>

        <label htmlFor='email'>podaj email</label>
        <input type='email' id='email' name='email' ref={emailRef} required/>

        {error && <div><h4>{error}</h4></div>}

        <button>Potwierdź</button>
      </fieldset>
      <Link to='/'>zaloguj się</Link>
    </form>
  );
}

export default ForgotPassword;
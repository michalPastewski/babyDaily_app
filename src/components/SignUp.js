import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if(passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError('Password do not match');
  //   }

  //   try {
  //     setError('')
  //     setLoading(true)
  //     await signUp(emailRef.current.value, passwordRef.current.value)
  //   } catch {
  //     setError('Faild to create an accoound')
  //   }

  //   setLoading(false);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    signUp(emailRef.current.value, passwordRef.current.value)
      .then(() => setError(''))
      .then(() => {
        emailRef.current.value = '';
        passwordConfirmRef.current.value = '';
        passwordRef.current.value = '';
      })
      .catch(() => setError('Failed to create an accoount'));

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Rejestracja</legend>
        { error && <div>{error}</div> }
  
        <label htmlFor='login'>Login:</label>
        <input type='email' id='email' name='email' ref={emailRef} required />
  
        <label htmlFor='password'>Hasło:</label>
        <input type='password' id='password' name='password' minLength='6' ref={passwordRef}  required />
  
        <label htmlFor='confirm'>Potwierdź hasło:</label>
        <input type='password' id='confirm' name='confirm' minLength='6' ref={passwordConfirmRef}  required />
  
        <button disabled={loading} >rejestruj</button>
      </fieldset>
    </form>
  );
}

export default SignUp; 
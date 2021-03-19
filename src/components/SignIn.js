import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
    .catch(user => console.log(user))
      .catch(error => setError(`Wprowadziłeś błędne dane`));
  }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Logowanie</legend>
          <label htmlFor='login'>Login:</label>
          <input type='email' id='email' name='email' ref={emailRef} required />
  
          <label htmlFor='password'>Hasło:</label>
          <input type='password' id='password' name='password' minLength='6' ref={passwordRef}  required />
  
          <button>zaloguj</button>
        </fieldset>

       { error &&  <div><h4>{error}</h4></div> }
    
        <div>
          Potrzebujesz konto?? <Link to='/sign-up'>Przejdź do rejestracji</Link>
        </div>
        <div>
          Uciekło Ci z pamięci hasło?? <Link to='/forgot-password'>Tu je resetujemy :)</Link>
        </div>
    </form>
  );
}

export default SignIn;
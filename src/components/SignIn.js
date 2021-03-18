import React from 'react';

const SignIn = () => (
  <form>
      <fieldset>
      <legend>Logowanie</legend>
        <label for='login'>Login:</label>
        <input type='email' id='email' name='email' required />

        <label for='password'>Hasło:</label>
        <input type='password' id='password' name='password' minLength='6' required />

        <button>zaloguj</button>
      </fieldset>
  </form>
);

export default SignIn;
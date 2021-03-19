import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  const signOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading &&  children }
    </AuthContext.Provider>
  )
}
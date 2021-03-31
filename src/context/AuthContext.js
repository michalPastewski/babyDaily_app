import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState();
   const [loading, setLoading] = useState(true);

   const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

   const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

   const resetPassword = (email) => auth.sendPasswordResetEmail(email);

   const signOut = () => auth.signOut();

   const updateNameProfile = (name) => auth.currentUser.updateProfile({ displayName: name });

   const updateEmail = (userEmail) => {
      return currentUser.updateEmail(userEmail);
   };
   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
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
      resetPassword,
      updateNameProfile,
      updateEmail,
   };

   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

import React from 'react';
import { useAuth } from '../context/AuthContext';

const Sleep = () => {
   const { currentUser } = useAuth();

   return (
      <section>
         <h1>sen</h1>
      </section>
   );
};

export default Sleep;

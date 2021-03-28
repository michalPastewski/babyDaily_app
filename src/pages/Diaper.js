import React from 'react';
import { useAuth } from '../context/AuthContext';

const Diaper = () => {
   const { currentUser } = useAuth();

   return (
      <section>
         <h1>zmiana pieluch</h1>
      </section>
   );
};

export default Diaper;

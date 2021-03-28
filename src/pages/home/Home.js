import React from 'react';

import { useAuth } from '../../context/AuthContext';
import PageWrapper from '../../components/PageWrapper';
import MainHome from './MainHome';
import SignIn from '../../components/Logging/SignIn';

const Home = () => {
   const { currentUser } = useAuth();

   return (
      <PageWrapper title="babyDaily">
         {!currentUser ? <SignIn /> : <MainHome />}
      </PageWrapper>
   );
};

export default Home;

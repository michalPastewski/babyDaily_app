import React, { useState } from 'react';

import PageWrapper from '../components/PageWrapper';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Home = () => {
   const [logIn, setLogIn] = useState(false);

   return (
   <PageWrapper title='babyDaily'>
      <div>
         <p>
            Pierwsze kilkanaście tygodni po przyjściu dziecka na świat, wskazane jest dokładne monitorowanie jego podstawowych aktywności. <br/>
            Są to przede wszystkim: godziny i czas karmienia,  częstotliwość zaminy pieluszek i ich zawartość oraz sen.
         </p>
         <hr/>
         <p>
            Chcąc ułatwić rodzicom i tak trudny czas, powstał babyDaily stanowiący praktycznym dziennikiem dostępny zawsze i wszędzie
         </p>
      </div>
      {
         !logIn
         ?  <SignUp />
         :  <SignIn />
      }

   </PageWrapper>
)}

export default Home;
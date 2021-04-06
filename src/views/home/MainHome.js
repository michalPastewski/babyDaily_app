import React from 'react';
import styles from '../../styles/home.module.css';

const MainHome = () => (
   <div className={styles.main__content}>
      <h3 className={styles.content__header}>Witaj</h3>
      <div>
         <p>
            Pierwsze kilkanaście tygodni po przyjściu dziecka na świat, wskazane jest dokładne monitorowanie jego
            podstawowych aktywności. <br />
            Są to przede wszystkim: godziny i czas karmienia, częstotliwość zaminy pieluszek i ich zawartość oraz sen.
         </p>
         <hr />
         <p>
            Chcąc ułatwić rodzicom i tak trudny czas, powstał babyDaily stanowiący praktycznym dziennikiem dostępny
            zawsze i wszędzie
         </p>
      </div>
   </div>
);

export default MainHome;

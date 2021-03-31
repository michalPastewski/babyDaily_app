import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import className from 'classnames';
import styles from '../styles/navigation.module.css';
import { useAuth } from '../context/AuthContext';

import bottleImg from '../assets/icons/feeding-bottle.svg';
import diaper from '../assets/icons/diaper.svg';
import moon from '../assets/icons/moon.svg';
import baby from '../assets/icons/smiling-baby.svg';

const Navigation = () => {
   const { signOut, currentUser } = useAuth();
   const [babyName, setBabyName] = useState('');

   const handleLogOut = () => {
      signOut();
   };

   useEffect(() => {
      if (currentUser) {
         setBabyName(currentUser.displayName);
      }
   }, [currentUser]);

   return (
      <nav className={styles.navigation}>
         <div className={styles.logo__section}>
            <NavLink to="/" className={styles.navigation__logo}>
               <h1 className={styles.navigation__logo__h}>babyDaily</h1>
            </NavLink>
            <div className={styles.navigation__item}>
               <img src={baby} className={styles.navigation__item__img} />
               <span>{babyName}</span>
            </div>
         </div>

         <div className={styles.navigation__list}>
            <NavLink to="/meal" className={styles.navigation__list__link}>
               <img src={bottleImg} className={styles.navigation__list__img} />
            </NavLink>
            <NavLink to="/diaper" className={styles.navigation__list__link}>
               <img src={diaper} className={styles.navigation__list__img} />
            </NavLink>
            <NavLink to="/sleep" className={styles.navigation__list__link}>
               <img src={moon} className={styles.navigation__list__img} />
            </NavLink>
         </div>
         <div className={styles.button__section}>
            <Link to="/user-profile" className={styles.link}>
               <button
                  className={className({
                     [styles.navigation__item]: true,
                     [styles.navigation__button]: true,
                  })}
               >
                  Profil
               </button>
            </Link>
            {currentUser ? (
               <button
                  className={className({
                     [styles.navigation__item]: true,
                     [styles.navigation__button]: true,
                  })}
                  onClick={handleLogOut}
               >
                  Wyloguj
               </button>
            ) : (
               <Link to="/" className={styles.link}>
                  <button
                     className={className({
                        [styles.navigation__item]: true,
                        [styles.navigation__button]: true,
                     })}
                  >
                     Zaloguj
                  </button>
               </Link>
            )}
         </div>
      </nav>
   );
};

export default Navigation;

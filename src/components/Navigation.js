import React from 'react';
import { Link, NavLink } from "react-router-dom";
import className from 'classnames';
import styles from'../styles/navigation.module.css';
import { useAuth } from "../context/AuthContext";

import bottleImg from '../assets/icons/feeding-bottle.svg';
import diapre from '../assets/icons/diaper.svg';
import moon from '../assets/icons/moon.svg';
import baby from '../assets/icons/smiling-baby.svg';


const Navigation = () => {
   const { signOut, currentUser } = useAuth();

   const handleLogOut = () => {
      signOut();
   }

   return (
      <nav className={styles.navigation}>
         <div className={styles.logo__section}>
            <NavLink to="/" className={styles.navigation__logo}>
               <h1 className={styles.navigation__logo__h}>babyDaily</h1>
            </NavLink>
            <div className={styles.navigation__item}><img src={baby} className={styles.navigation__item__img} />
               <span>Wojtek</span>
            </div>
         </div>

         <div className={styles.navigation__list}>
            <NavLink to="meal" className={styles.navigation__list__link}>
               <img src={bottleImg} className={styles.navigation__list__img} />
            </NavLink>
            <NavLink to="diaper" className={styles.navigation__list__link}>
               <img src={diapre} className={styles.navigation__list__img} />
            </NavLink>
            <NavLink to="sleep" className={styles.navigation__list__link}>
               <img src={moon} className={styles.navigation__list__img} />
            </NavLink>
         </div>
         <div className={styles.button__section} >
            <button className={className({
               [styles.navigation__item]: true,
               [styles.navigation__button]: false,
               [styles.navigation__button__disabled]: true,})
            }
               disabled={true}
            >
               raport
            </button>
            {
               currentUser
               ? <button onClick={handleLogOut}>Wyloguj</button>
               : <button><Link to='/'>Zaloguj</Link></button>
            }
         </div>
      </nav>
   )
}

export default Navigation;


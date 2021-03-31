import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import className from 'classnames';

import styles from '../../styles/userProfile.module.css';
import { useAuth } from '../../context/AuthContext';
import UserInfo from './UserInfo';

const UserProfile = () => {
   const { currentUser } = useAuth();

   return (
      <PageWrapper title="Twój profil">
         <UserInfo />
         <div className={styles.form}></div>3
         <div>
            <form>
               <fieldset
                  className={className({
                     [styles.form__content]: true,
                     [styles.delete__form]: true,
                  })}
               >
                  <legend className={styles.form__title}>usuwanie profilu</legend>
                  <div>
                     <label className={styles.form__item__label}>email</label>
                     <input
                        className={className({
                           [styles.form__item__input]: true,
                           [styles.delete__form__input]: true,
                        })}
                        type="email"
                        required
                        placeholder="podaj swojego maila"
                     ></input>

                     <label className={styles.form__item__label}>hasło</label>
                     <input
                        className={styles.form__item__input}
                        type="password"
                        required
                        placeholder="podaj aktualne hasło"
                     ></input>
                  </div>

                  <button className={className({ [styles.button]: true, [styles.delete__button]: true })}>
                     usuń profil
                  </button>
               </fieldset>
            </form>
         </div>
      </PageWrapper>
   );
};

export default UserProfile;

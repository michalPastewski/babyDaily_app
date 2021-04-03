import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import className from 'classnames';

import styles from '../../styles/userProfile.module.css';
import UserInfo from './UserInfo';
import UpdateUserForm from './UpdateUserForm';

const UserProfile = () => {
   const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
   const [showDeleteForm, setShowDeleteForm] = useState(false);

   const handleOnNewPasswordForm = () => setShowNewPasswordForm(!showNewPasswordForm);

   const handleOnDeleteForm = () => setShowDeleteForm(!showDeleteForm);

   return (
      <PageWrapper title="Twój profil">
         <UserInfo />
         <div className={styles.form}></div>
         <div>
            {showNewPasswordForm ? (
               <UpdateUserForm
                  title="zmiana hasła"
                  type="password"
                  name="aktualne hasło"
                  label="nowe hasło"
                  showForm={handleOnNewPasswordForm}
               />
            ) : (
               <fieldset className={styles.form__content}>
                  <legend className={styles.form__title}>zmiana hasla</legend>
                  <h5>Pamiętaj!!</h5>
                  <p>Zmiany hasła należy dokonywać w celu zachowania bezpieczeństwa Twoich dancyh.</p>
                  <p>Hasło musi zawierać minimum 6 znaków</p>
                  <button className={styles.button} onClick={handleOnNewPasswordForm}>
                     uaktualnij
                  </button>
               </fieldset>
            )}
         </div>
         <div>
            {showDeleteForm ? (
               <UpdateUserForm
                  title="usuwanie profilu"
                  type="email"
                  name="email"
                  label="hasło"
                  showForm={handleOnDeleteForm}
               />
            ) : (
               <fieldset className={styles.form__content}>
                  <legend className={styles.form__title}>zmiana hasla</legend>
                  <h5>Uwaga!!</h5>
                  <p>
                     Usunięcie profilu jest równoznaczne z całkowitym i nieodwracalnym usunięciem wszystkich danych
                     przechowywanych w aplikacji.
                  </p>
                  <p>Dlatego zastanó∑ się czy na pewno chcesz usunąć swój profil</p>
                  <button
                     className={className({ [styles.button]: true, [styles.delete__button]: true })}
                     onClick={handleOnDeleteForm}
                  >
                     usuń profil
                  </button>
               </fieldset>
            )}
         </div>

         {/* <div>
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
         </div> */}
      </PageWrapper>
   );
};

export default UserProfile;

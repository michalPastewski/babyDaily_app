import React, { useState } from 'react';

import styles from '../../styles/userProfile.module.css';
import { useAuth } from '../../context/AuthContext';
import UserModal from './UserModal';
import UpdateUserForm from './UpdateUserForm';

const UserInfo = () => {
   const { currentUser, updateEmail } = useAuth();
   const [showNameModal, setShowNameModal] = useState(false);
   const [showEmailModal, setShowEmailModal] = useState(false);

   const handleOnNameModal = () => {
      setShowNameModal(!showNameModal);
   };

   const handleOnEmailModal = () => {
      setShowEmailModal(!showEmailModal);
   };

   function handleOnSubmit(newEmail, password) {
      updateEmail(newEmail);
   }

   return (
      <div className={styles.header}>
         <div className={styles.header__content}>
            <p className={styles.header__item}>
               Imię dziecka:<span className={styles.header__item__content}>{currentUser.displayName}</span>
            </p>
            <button className={styles.button} onClick={handleOnNameModal}>
               uaktualnij
            </button>
         </div>
         {showNameModal && (
            <UserModal
               type="text"
               title="nowe imię"
               label="Imię"
               placeholder="wpisz aktualne imię"
               showModal={handleOnNameModal}
            />
         )}

         <div className={styles.header__line}></div>
         <div className={styles.header__content}>
            <p className={styles.header__item}>
               Twój mail:<span className={styles.header__item__content}>{currentUser.email}</span>
            </p>
            <button className={styles.button} onClick={handleOnEmailModal}>
               uaktualnij
            </button>
         </div>
         {showEmailModal && (
            <UpdateUserForm
               type="email"
               title="Twój nowy email"
               name="nowy email"
               label="hasło"
               showForm={handleOnEmailModal}
               onSubmit={handleOnSubmit}
            />
            // <UserModal
            //    type="email"
            //    name='email'
            //    title="nowy email"
            //    label="Email"
            //    placeholder="podaj nowy email"
            //    showModal={handleOnEmailModal}
            // />
         )}
      </div>
   );
};

export default UserInfo;

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
               name="babyName"
               password={false}
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
            <UserModal
               type="email"
               name="email"
               password={true}
               title="nowy email"
               label="email"
               placeholder="podaj nowy email"
               showModal={handleOnEmailModal}
            />
         )}
      </div>
   );
};

export default UserInfo;

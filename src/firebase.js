import firebase from 'firebase/app';
import 'firebase/auth';

export const DATABASE_URL = 'https://babydaily-5eb19-default-rtdb.firebaseio.com';

const firebaseConfig = {
   apiKey: 'AIzaSyAuMrI5i2QiYNYy1jBoga_v2mHiPL-zKGA',
   authDomain: 'babydaily-5eb19.firebaseapp.com',
   projectId: 'babydaily-5eb19',
   storageBucket: 'babydaily-5eb19.appspot.com',
   messagingSenderId: '375560059090',
   appId: '1:375560059090:web:b21c85da20ec00e804d50b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const credential = firebase.auth.EmailAuthProvider.credential();
export const auth = firebase.auth();

export default firebaseApp;

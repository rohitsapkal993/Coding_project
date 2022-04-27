import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyA4HY76MhZ8W4NLYCrZceQ_KM_FIQabR2M",
    authDomain: "familychat-d0ee9.firebaseapp.com",
    databaseURL: "https://familychat-d0ee9.firebaseio.com",
    projectId: "familychat-d0ee9",
    storageBucket: "familychat-d0ee9.appspot.com",
    messagingSenderId: "867238255505",
    appId: "1:867238255505:web:d582b739f0f6f315ca5830",
    measurementId: "G-TVVJNWP1SS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
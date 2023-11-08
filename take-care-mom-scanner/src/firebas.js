//import firebase from 'firebase';
 import { initializeApp } from "firebase/app";
//import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";



// const firebaseConfig = {
//     apiKey: "AIzaSyCAbJpIClDK5L-rICgvZc1sBcuPwp_yGrY",
//     authDomain: "takecaremom-e2cc9.firebaseapp.com",
//     databaseURL: "https://takecaremom-e2cc9-default-rtdb.firebaseio.com",
//     projectId: "takecaremom-e2cc9",
//     storageBucket: "takecaremom-e2cc9.appspot.com",
//     messagingSenderId: "478603319889",
//     appId: "1:478603319889:web:16fe688fc691adf1e5f670",
//     measurementId: "G-K36E9498W4"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDnupKSAsT3jBQkDfqGbxACuJM_RuvYQBU",
  authDomain: "takecaremomapp.firebaseapp.com",
  projectId: "takecaremomapp",
  storageBucket: "takecaremomapp.appspot.com",
  messagingSenderId: "91282224941",
  appId: "1:91282224941:web:3e590aa7c64a1c531b85a4"
};

  // Initialize Firebase
  //const app = firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(database);
  //const database = firebase.firestore();
  const app = initializeApp(firebaseConfig);

// Get a reference to the database service
//const database = getDatabase(app);
// const database = firebase.firestore();
//   export default database;
export default app;
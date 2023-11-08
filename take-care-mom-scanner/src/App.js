import logo from './logo.svg';
import './App.css';
import { createWorker } from 'tesseract.js';
import Tesseract from 'tesseract.js';
import { useState ,useEffect} from 'react';
import sampleImage from './assets/images.jpeg';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Upload from './Upload/Upload.js';
import { collection, getDocs } from "firebase/firestore"; 
 import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyCKg-mGLcGthhMx4czEMds_k8GOXLSF12I",
//   authDomain: "takecaremom-60f9b.firebaseapp.com",
//   projectId: "takecaremom-60f9b",
//   storageBucket: "takecaremom-60f9b.appspot.com",
//   messagingSenderId: "259931007890",
//   appId: "1:259931007890:web:11d252d2e932c653daef4b",
//   measurementId: "G-WEYE16SP51"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


//create new firebase project
// validate if safety number present.


<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>

function App() {
 var x=1;
  const db = getFirestore();
  const [data1 , setData] = useState([]);
//   useEffect(async() => {
  
//         const querySnapshot = await getDocs(collection(db, "list"));
// querySnapshot.forEach((doc) => {
//   var data=`${doc.id} => ${doc.data()}`
//   console.log(`${doc.id} => ${doc.data()}`);
//   setData(data);
// });
//   },[x]);
  return (
    // <p spellCheck="true" >{e}</p>
<Upload data={data1}></Upload>

  );
}

export default App;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCKg-mGLcGthhMx4czEMds_k8GOXLSF12I",
//   authDomain: "takecaremom-60f9b.firebaseapp.com",
//   projectId: "takecaremom-60f9b",
//   storageBucket: "takecaremom-60f9b.appspot.com",
//   messagingSenderId: "259931007890",
//   appId: "1:259931007890:web:11d252d2e932c653daef4b",
//   measurementId: "G-WEYE16SP51"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
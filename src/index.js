import { initalizeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js' ;
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, get, child } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js' ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1e_FBAv4P1krAwTKVyP3F5g4knp4Hew",
  authDomain: "valuestudy.firebaseapp.com",
  databaseURL: "https://valuestudy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "valuestudy",
  storageBucket: "valuestudy.appspot.com",
  messagingSenderId: "1092513324979",
  appId: "1:1092513324979:web:b6823acdd1d63aca5935c6"
};

// Initialize Firebase
const app = initalizeApp(firebaseConfig);

// get ref to database services
const db = getDatabase();

const reference = ref(db, 'users/' + userID);
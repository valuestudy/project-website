// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1e_FBAv4P1krAwTKVyP3F5g4knp4Hew",
  authDomain: "valuestudy.firebaseapp.com",
  projectId: "valuestudy",
  storageBucket: "valuestudy.appspot.com",
  messagingSenderId: "1092513324979",
  appId: "1:1092513324979:web:b6823acdd1d63aca5935c6"
};

const app = initalizeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database

var SurveyDB = firebase.database().ref('Survey');

document.getElementByID('Survey').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var message = getElementVal('message');

  saveMessages(name,email, message);

}

const saveMessages = (name, email, message) => {
    var newSurvey = SurveyDB.push();

    newSurvey.set({
      name : name,
      email : email ,
      message : message,
    });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
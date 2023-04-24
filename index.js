 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBKCFBvnlDYroN4kje6McSAe_xYBs4ZiaU",
   authDomain: "ltparts.firebaseapp.com",
   databaseURL: "https://ltparts-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "ltparts",
   storageBucket: "ltparts.appspot.com",
   messagingSenderId: "205822829542",
   appId: "1:205822829542:web:6adc2795da4a5cd01f2c27"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 // Getting all objects of html
var fullName = document.getElementById("fullname")
var email = document.getElementById("Email")
var password = document.getElementById("Password")


// function for storing data
window.signup = function(e){
  e.preventDefault();
  var obj = {
    fullName: fullName.value,
    email: email.value,
    password: password.value
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  console.log(obj)
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcsJMzk1KDtraiqgp39N00DkotKwiHeAE",
    authDomain: "netflix-9b899.firebaseapp.com",
    databaseURL: "https://netflix-9b899-default-rtdb.firebaseio.com",
    projectId: "netflix-9b899",
    storageBucket: "netflix-9b899.appspot.com",
    messagingSenderId: "702994771511",
    appId: "1:702994771511:web:54da2692c7651217a659b2",
    measurementId: "G-8ZWK9F394T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(auth);
const authForm = document.querySelector('#authenticationForm');
const email = authForm.querySelector('input[type="email"]');
const password = authForm.querySelector('input[type="password"]');

authForm.querySelector('button[id="signUp"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    });

authForm.querySelector('button[id="signIn"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    });


document.querySelector('button[id="signOut"]')
    .addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        signOut(auth)
            .then(() => {
                console.log('Sign out');
            })
            .catch((error) => {
                console.log(error);
            });
    });

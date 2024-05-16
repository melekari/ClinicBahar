// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD42l6piqsuW2yPuhFiEiLyhhz8iHRh-V8",
    authDomain: "clinic-69f76.firebaseapp.com",
    databaseURL: "https://clinic-69f76-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clinic-69f76",
    storageBucket: "clinic-69f76.appspot.com",
    messagingSenderId: "644331833450",
    appId: "1:644331833450:web:bf2edd143a8e3f734fe213",
    measurementId: "G-27HNHFQKLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signUpBtn = document.getElementById('btnSignup');
const signInBtn = document.getElementById('btnSignin');
const signUpName = document.getElementById("signup-name");
const signUpMail = document.getElementById("signup-mail");
const signUpPassword = document.getElementById("signup-pswd");
const signInMail = document.getElementById("signin-mail");
const signInPassword = document.getElementById("signin-pswd");

var name = signUpName.value;

function signInWithEmailPassword() {
    var email = signInMail.value;
    var password = signInPassword.value;

    console.log(email, password);

    // [START auth_signin_password]
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            toProfile();
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    // [END auth_signin_password]
}

function signUpWithEmailPassword() {
    var email = signUpMail.value;
    var password = signUpPassword.value;

    // [START auth_signup_password]
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            alert('Account created successfully. Please SignIn to your account.');
            writeUserData
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    // [END auth_signup_password]
}


function writeUserData(userId, name) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name
    });
}

signUpBtn.addEventListener('click', signUpWithEmailPassword);
signInBtn.addEventListener('click', signInWithEmailPassword);
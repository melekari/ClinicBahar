// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD42l6piqsuW2yPuhFiEiLyhhz8iHRh-V8",
    authDomain: "clinic-69f76.firebaseapp.com",
    projectId: "clinic-69f76",
    storageBucket: "clinic-69f76.appspot.com",
    messagingSenderId: "644331833450",
    appId: "1:644331833450:web:96f9990b94fe3c1f4fe213",
    measurementId: "G-Y793VC9GE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentUser;

const lblUsername = document.getElementById("username");
const lblMail = document.getElementById("email");

if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    lblUsername.innerHTML = displayName;
    lblMail.innerHTML = email;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

const lblUserName = document.getElementById("user-name");
const lblUserMail = document.getElementById("user-email");
const lblUserTreatment = document.getElementById("user-treatment");

//Update profile
const userName = document.getElementById("txtUserName");
const btnSave = document.getElementById("btnSave");

onAuthStateChanged(auth, (user) => {
    if (user) {
        const email = user.email;
        const uid = user.uid;

        //update user
        function writeUserData() {
            var name = userName.value;
            const db = getDatabase();
            set(ref(db, 'users/' + uid), {
                username: name
            });
            alert("Saved");
        }

        //get user data
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                lblUserName.innerHTML = snapshot.val().username;
                lblUserMail.innerHTML = "E-mail: " + email;
                lblUserTreatment.innerHTML = "Tedavisi alınan hastalık: " + snapshot.val().treatment;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        btnSave.addEventListener('click', writeUserData);
    } else {

    }
});



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCezX5LKhIYDUO0_p7ofZBjT4tVM-B1es0",
    authDomain: "find-sport-groups.firebaseapp.com",
    projectId: "find-sport-groups",
    storageBucket: "find-sport-groups.appspot.com",
    messagingSenderId: "534946228785",
    appId: "1:534946228785:web:d0b7e1c9b23b2878d44310"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

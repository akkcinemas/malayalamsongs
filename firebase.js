import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDlZC-YvhfSTF-eHzKnWRVrwgduobEJW0s",
    authDomain: "malayalamsongs-5916d.firebaseapp.com",
    projectId: "malayalamsongs-5916d",
    storageBucket: i"malayalamsongs-5916d.firebasestorage.app",
    messagingSenderId:"44232575519",
    appId: "1:44232575519:web:392711e715c2f26d7d232a
    measurementId: "G-QG2EK6YKDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

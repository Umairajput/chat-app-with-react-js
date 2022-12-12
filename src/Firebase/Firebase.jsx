import { doc, setDoc, getFirestore ,getDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvyu3enxTv2nFN4pYr-eU0zmFsjmfEHLk",
    authDomain: "react-chat-app-b258c.firebaseapp.com",
    projectId: "react-chat-app-b258c",
    storageBucket: "react-chat-app-b258c.appspot.com",
    messagingSenderId: "501765988231",
    appId: "1:501765988231:web:489345ce7ef6f757b97d22",
    measurementId: "G-XGRW7M7HP7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    app,
    auth,
    db,
    firebaseConfig,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    getDoc,
    initializeApp,
    getAuth
}
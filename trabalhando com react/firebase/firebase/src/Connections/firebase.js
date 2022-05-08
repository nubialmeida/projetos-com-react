import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyCuRQta2TODBpWhVTY65IU_lmU6du14M",
    authDomain: "react-e0481.firebaseapp.com",
    projectId: "react-e0481",
    storageBucket: "react-e0481.appspot.com",
    messagingSenderId: "730063030235",
    appId: "1:730063030235:web:dbc4db0548256626b349fe",
    measurementId: "G-SDBQ8539VN",
};

const fireConnection = initializeApp(firebaseConfig);
const db = getFirestore();

export { fireConnection, db };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDzIT_JVqLgsxit71KS2ulYr44UXzAb3OI",
    authDomain: "bingo-5b085.firebaseapp.com",
    databaseURL: "https://bingo-5b085.firebaseio.com",
    projectId: "bingo-5b085",
    storageBucket: "bingo-5b085.appspot.com",
    messagingSenderId: "864945342006",
    appId: "1:864945342006:web:f939ad69a4f5c32e9cba97"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
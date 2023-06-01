"use client";

import { createContext, useState } from "react";

export const UserContext = createContext("");

export default function UserProvider({ children }) {
  const[user, setUser]= useState('test')
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  );
}

/*
import { getAuth, onAuthStateChanged } from "firebase/auth";

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


  const [user,SetUser]=useState({})
  const auth = getAuth();
onAuthStateChanged(auth, (_user) => {
  if (_user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = _user.uid;
    console.log('_user',_user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});

*/
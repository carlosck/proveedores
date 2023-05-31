import react, { useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default function Login(){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [errorLogin,setErrorLogin]= useState('')
    

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

    const validateLogin=()=>{
        sendLogin();
    }
    const sendLogin=()=>{
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth,email.trim(), password)
        .then((userCredential) => {
            console.log('user --->',userCredential)
            // Signed in 
            const user = userCredential.user;
            console.log('user --->',user)
            // ...
          })
        .catch(error => {
            console.log('error--->',error.code);
        
        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            setErrorLogin('That email address is invalid!');
        }
        
        if (error.code === 'auth/user-not-found') {
            console.log('Invalid Email ');
            setErrorLogin('Invalid Email ');
        }

        if (error.code === 'auth/wrong-password') {
            console.log('Invalid Password ');
            setErrorLogin('Invalid Password ');
        }

        console.error(error);
        });
    }
    

    return(
        <main class="mdl-layout__content mdl-color--grey-100">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">

                <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
                    <div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Login</h2>
                    </div>
                    
                    <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                        {errorLogin && <p>{errorLogin}</p>}

                        <input class="mdl-textfield__input" type="email" placeholder='E-Mail' name='mail' value={email} onChange={ (e) => setEmail(e.currentTarget.value) }/>
                        &nbsp;&nbsp;&nbsp;
                        <input class="mdl-textfield__input" type="password" placeholder='password' name='password' value={password} onChange= { (e) => setPassword(e.currentTarget.value) }/>
                        <br/><br/>
                        <button class="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-in" name="signin" onClick={validateLogin}>Sign In</button>
                        
                
                
                    </div>
                </div>
            </div>
            
        </main>
        
    )
}
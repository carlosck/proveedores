"use client";
import react, { useState} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default function Login({user,setUser}){
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [errorLogin,setErrorLogin]= useState('')
    
    console.log('currentUser',user)
     const firebaseConfig = {
        
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
            const userresponse = userCredential.user;
            console.log('user --->',userresponse)
            setUser(userresponse);
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
        <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">

                <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
                    <div className="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
                        <h2 className="mdl-card__title-text">Login</h2>
                    </div>
                    
                    <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                        {errorLogin && <p>{errorLogin}</p>}

                        <input className="mdl-textfield__input" type="email" placeholder='E-Mail' name='mail' value={email} onChange={ (e) => setEmail(e.currentTarget.value) }/>
                        &nbsp;&nbsp;&nbsp;
                        <input className="mdl-textfield__input" type="password" placeholder='password' name='password' value={password} onChange= { (e) => setPassword(e.currentTarget.value) }/>
                        <br/><br/>
                        <button className="mdl-button mdl-js-button mdl-button--raised" id="quickstart-sign-in" name="signin" onClick={validateLogin}>Sign In</button>
                        
                
                
                    </div>
                </div>
            </div>
            
        </main>
        
    )
}
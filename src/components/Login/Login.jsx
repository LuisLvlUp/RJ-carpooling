import React, { useState, useEffect } from 'react';
import Form from './Form';
import Main from '../Main';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';
import { BrowserRouter } from 'react-router-dom';
import { initTheme, ThemeContext } from '../Shared/theme';


const fire = firebase.initializeApp({
    apiKey: "AIzaSyBwmdBSidzsQ9o5-eoMc97VtEQLdiChceo",
    authDomain: "loginandnav.firebaseapp.com",
    projectId: "loginandnav",
    storageBucket: "loginandnav.appspot.com",
    messagingSenderId: "585280011800",
    appId: "1:585280011800:web:685f73136a2476dec38d6d"
})


const Login = () => {

    const [context, setContext] = useState(initTheme)
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError("Error correo invalido o campo vacio");
                    break;

                case "auth/wrong-password":
                    setPasswordError("Contrasenia incorrecta");
                    break;
            }
        });
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch (err.code) {
                case "auth/email-alredy-in-use":
                case "auth/invalid-email":
                    setEmailError("error correo invalido o campo vacio");
                    break;

                case "auth/weak-password":
                    setPasswordError("contrasenia invalida");
                    break;
            }
        });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            }
            else{
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);



    return (
    <div>
        {user ? (
            <BrowserRouter>
                <ThemeContext.Provider value={[context, setContext]}>
                    <Main handleLogout={handleLogout}/>
                </ThemeContext.Provider>
            </BrowserRouter>
        ) : (
            <BrowserRouter>
                <Form 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            </BrowserRouter>
        )}
    </div>
  )
}

export default Login

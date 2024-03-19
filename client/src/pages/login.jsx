import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router';

export const Login = (user) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignup = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    
    return (
        <section>
            <form>
                {isSignUpActive && <legend>Sign Up</legend>}
                {!isSignUpActive && <legend>Sign In</legend>}

                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" onChange={handleEmailChange} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={handlePasswordChange} />
                        </li>
                    </ul>
                    {isSignUpActive && <button type="button" onClick={handleSignup}>Sign Up</button>}
                    {!isSignUpActive && <button type="button" onClick={handleSignIn}>Sign In</button>}

                </fieldset>
                {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
                {!isSignUpActive && <a onClick={handleMethodChange}>Create an Account</a>}

            </form>
        </section>
    );
};

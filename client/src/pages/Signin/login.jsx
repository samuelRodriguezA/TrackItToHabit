import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignup = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/dashboard");
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
            .then(() => {
                navigate("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const styles = {
        section: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        },
        formContainer: {
            width: '20%',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        },
        form: {
            width: '100%',
            textAlign: 'center'
        },
        legend: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333'
        },
        fieldset: {
            border: 'none'
        },
        ul: {
            listStyle: 'none',
            padding: '0'
        },
        li: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            color: '#333'
        },
        input: {
            width: '95%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        },
        button: {
            padding: '10px',
            width: '100px',
            backgroundColor: '#ffff',
            color: '#333',
            border: 'none',
            fontSize: '14px',
            textAlign: 'center',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px',
            marginRight: '20px'
        },
        button2: {
            padding: '10px 30%',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px'
        },
        link: {
            display: 'block',
            color: '#007bff',
            fontSize: '13px',
            textDecoration: 'none',
            marginTop: '10px',
            marginBottom: '10px',
            cursor: 'pointer'
        },
        header: {
            width: '20%',
            backgroundColor: '#333',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '10px 10px 0 0'
        },
        headerTitle: {
            color: '#fff', // Change text color to white
            marginLeft: '20px' // Add margin-left for separation from the button
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <h1 style={styles.headerTitle}>TrackItToHabit</h1>
                {isSignUpActive && <a onClick={handleMethodChange} style={styles.button}>Log In</a>}
                {!isSignUpActive && <a onClick={handleMethodChange} style={styles.button}>Register</a>}
            </div>
            <div style={styles.formContainer}>
                <form style={styles.form}>
                    {isSignUpActive && <legend style={styles.legend}>Sign Up</legend>}
                    {!isSignUpActive && <legend style={styles.legend}>Sign In</legend>}

                    <fieldset style={styles.fieldset}>

                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input type="text" id="email" onChange={handleEmailChange} style={styles.input} />

                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input type="password" id="password" onChange={handlePasswordChange} style={styles.input} />

                        <a href="#" style={styles.link}>Forgot password?</a>
                        {isSignUpActive && <button type="button" onClick={handleSignup} style={styles.button2}>Sign Up</button>}
                        {!isSignUpActive && <button type="button" onClick={handleSignIn} style={styles.button2}>Sign In</button>}
                    </fieldset>

                </form>
            </div>

        </section>
    );
};
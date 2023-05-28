/* eslint-disable no-unused-vars */
import React from 'react'
import './SignUpScreen.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
const SignUpScreen = () => {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const register = async (e) => {
        // e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, emailRef.current.value, passwordRef.current.value);
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(`provide a valid email and password`)
            console.log(errorCode, errorMessage);
            // ..
        }
    };

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(firebaseAuth, emailRef.current.value, passwordRef.current.value);
           console.log('Signed in successfully'); // Signed in successfully
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(`wrong password or email`)
            console.log(errorCode, errorMessage);
            // Failed to sign in
        }
    };




    return (
        <div className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input
                    ref={emailRef}
                    type='email' 
                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    placeholder='Email' required />
                <input
                    ref={passwordRef}
                    type='password' placeholder='Password' required />
                <button
                    onClick={signIn}
                    type='submit'>Sign In</button>
                <h4>
                    <span className='signUpScreen__gray'>New to Netflix? </span>
                    <button
                        onClick={register}
                        className='signUpScreen__link'>Sign up now.</button>
                </h4>
            </form>
        </div>

    )
}

export default SignUpScreen

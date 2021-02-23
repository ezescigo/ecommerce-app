import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = ({ hidden, onClick, onClose }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '' 
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials('');

    } catch (error) {
        console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value })
  };

  return (
    <div className={`sign-in ${hidden}`}>
      <div className='exit-button-container'>
        <h3>Already registered?</h3>
        <div className='exit-button'>
          <span onClick={onClose}>&#x2716;</span>
        </div>
      </div>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
            name="email" 
            type="email" 
            value={email}
            handleChange={handleChange}
            label="Email address" 
            required
        />
        <FormInput  
            name="password" 
            type="password" 
            value={password}
            handleChange={handleChange}  
            label="Password"
            required 
        />
        <div className='buttons'>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
            <CustomButton type="button" inverted onClick={onClick}>Register</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
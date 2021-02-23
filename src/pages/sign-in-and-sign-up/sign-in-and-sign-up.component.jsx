import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ history }) => {
  const [SignUpHidden, setSignUpHidden] = useState('hidden');

  const closePage = () => {
    history.push('/');
  }

  return(
    <div className='sign-in-and-sign-up'>
      <SignIn onClick={() => setSignUpHidden('')} onClose={() => closePage()} />
      <SignUp hidden={SignUpHidden} onClick={() => setSignUpHidden('hidden')} onClose={() => closePage()} />
    </div>
)};

export default withRouter(SignInAndSignUpPage);
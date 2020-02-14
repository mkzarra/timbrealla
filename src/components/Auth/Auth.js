import React, { useContext } from 'react';

import Card from '../UI/Card';
import './Auth.css';
import { AuthContext } from '../../context/auth-context';

function Auth() {
  const authContext = useContext(AuthContext);

  function loginHandler() {
    authContext.login();
  }
 
  return (
    <div className="auth">
      <Card>
        <h2>Welcome to Timbrealla!</h2>
        <p>A place to share your Stories</p>
        <button onClick={loginHandler}>Continue</button>
      </Card> 
    </div>
  );
}

export default Auth;
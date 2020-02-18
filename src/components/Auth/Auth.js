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
        <h2>Welcome!</h2>
        <p>Timbrealla is ike a game of telephone. We start our stories, and we edit others. The expectation is that our original story will not last long, and we build on each others' ideas. <strong>The rules are NO HATE SPEECH and no NSFW content.</strong> Let's write some stories together!</p>
        <button onClick={loginHandler}>Continue</button>
      </Card> 
    </div>
  );
}

export default Auth;
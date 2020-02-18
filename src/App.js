import React, { useContext } from 'react';

import Auth from './components/Auth/Auth';
import Stories from './components/Stories/Stories';
import { AuthContext } from './context/auth-context'
import './App.css'

function App() {
  const authContext = useContext(AuthContext);

  return  (
    <div>
      <header>
        <h1>Timbrealla!</h1>
      </header>
      {authContext.authStatus ? <Stories /> : <Auth />}
    </div>
  );
}

export default App;

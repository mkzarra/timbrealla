import React, { useContext } from 'react';

import Auth from './components/Auth/Auth';
import Stories from './components/Stories/Stories';
import { AuthContext } from './context/auth-context';
import Logo from './assets/img/timbreallaLogo.png';
import './App.css';

function App() {
  const authContext = useContext(AuthContext);



  return  (
    <div>
      <header>
        <div>
          <span>
            <div>
              <img src={Logo} alt="timbrealla logo"/>
            </div>
          </span>
        </div>
      </header>
      {authContext.authStatus ? <Stories /> : <Auth />}
    </div>
  );
}

export default App;

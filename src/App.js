import React, { useContext } from 'react';

import Auth from './components/Auth/Auth';
import Creations from './components/Creations/Creations';
import { AuthContext } from './context/auth-context'

function App() {
  const authContext = useContext(AuthContext);
  if (authContext.authStatus) return <Creations />

  return <Auth />
}

export default App;

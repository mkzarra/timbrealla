import React, { useContext } from 'react';

import Auth from './components/Auth/Auth';
import Stories from './components/Stories/Stories';
import { AuthContext } from './context/auth-context'

function App() {
  const authContext = useContext(AuthContext);
  if (authContext.authStatus) return <Stories />

  return <Auth />
}

export default App;

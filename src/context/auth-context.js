import React, { useState } from 'react';

export const AuthContext = React.createContext({
  authStatus: false,
  login: function() {}
});

function AuthContextProvider(props) {
  const [authStatus, setAuthStatus] = useState(false);

  function loginHandler() {
    setAuthStatus(true);
  }

  return (
    <AuthContext.Provider value={{ login: loginHandler, authStatus }}>
      {...props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
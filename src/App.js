import React, { useContext } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Stories from './components/Stories/Stories';
import { AuthContext } from './context/auth-context';
import Header from './Header';

function App() {
  const { authStatus, setAuthStatus } = useContext(AuthContext);

  const routes = authStatus ? (
    <Switch>
      <Route path="/" component={Stories} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  function backToLandingHandler() {
    return setAuthStatus(false);
  }

  return  (
    <div>
      <Header backToLanding={backToLandingHandler} />
      {routes}
    </div>
  );
}

export default withRouter(App);

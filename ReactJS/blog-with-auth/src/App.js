import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Homepage,
  AuthPage,
  Create,
  Profile
} from './pages';

import {
  Layout,
  PrivateRoute
} from './commons';

import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/auth" component={AuthPage} />
              <PrivateRoute path="/create" component={Create} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;

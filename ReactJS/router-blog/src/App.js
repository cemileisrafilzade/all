import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import {
  Homepage,
  Create,
  Article
} from './pages'

function App() {
  return (
    <Router>
      <header>
        <NavLink exact to="/">Homepage</NavLink>
        <NavLink to="/create">Create</NavLink>
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/create" component={Create} />
        <Route path="/article/:id" component={Article} />
        <Route render={() => (<h1>404</h1>)} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import{
  Homepage,
  Create
} from './pages'
function App() {
  return (
   <Router>
     <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route path='/create' component={Create}/>
     <Route render={() =>(<h1>404</h1>)}/>
</Switch>
   </Router>
  );
}

export default App;

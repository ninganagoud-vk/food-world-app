import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';
import Ingredients from './components/ingredients';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            strict
            component={Dashboard}
          />
          <Route
            path='/ingredients/:id'
            exact
            strict
            component={Ingredients}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/banner/Main';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/banner' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;

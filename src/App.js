import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/banner/Main';
import MainBannerRadium from './components/banner-radium/Main';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/banner' component={Main} />
        <Route path='/banner-radium' component={MainBannerRadium} />
      </Switch>
    </Router>
  );
}

export default App;

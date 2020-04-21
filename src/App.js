import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/banner/Main';
import MainBannerRadium from './components/banner-radium/Main';
import Button from './components//button/Main';
import BannerStyled from './components/banner-styled/Main';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/banner' component={Main} />
        <Route path='/banner-radium' component={MainBannerRadium} />
        <Route path='/button' component={Button} />
        <Route path='/banner-styled' component={BannerStyled} />
      </Switch>
    </Router>
  );
}

export default App;

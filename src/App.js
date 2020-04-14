import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './LandingPage/LandingPage';
import { Search } from './Search/Search';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}></Route>
      <Route path='/' component={LandingPage}></Route>
    </Switch>
  );
}

export default App;

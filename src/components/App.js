import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from '../pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default hot(module)(App);

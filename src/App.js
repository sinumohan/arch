import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Diagram from './Diagram';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route component={Diagram} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

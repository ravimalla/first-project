import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'

import AddNewRequestPage from './containers/AddNewRequestPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/new" component={AddNewRequestPage}/>
          </Switch>
      </Router>
    );
  }
}

export default App;

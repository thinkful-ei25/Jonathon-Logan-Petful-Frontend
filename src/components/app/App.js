import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {array} from './testArray.js/array'
import Dashboard from '../dashboard/Dashboard'
import './App.css';


class App extends Component {

  render() {
    console.log(array)
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    )
  }
}

export default App;

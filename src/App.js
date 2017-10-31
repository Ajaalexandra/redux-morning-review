import React, { Component } from 'react';

import { connect } from 'react-redux'
// import { handleNameChange, handleAgeChange, handleCityChange, increaseCount } from './reducers/reducer'
import * as actionCreators from './reducers/reducer'

console.log(actionCreators)

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    console.log(this.props)

    return (
      <div className="App">
        <button></button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actionCreators)(App);

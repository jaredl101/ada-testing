import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


// Component Imports:
import Header from '../Header/Header';
import Bodyweight from '../Bodyweight/Bodyweight';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BODYWEIGHT' })
  }

  render() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path ='/' component={Bodyweight} />
      </div>
    </Router>
  );
  }
}

export default connect()(App);

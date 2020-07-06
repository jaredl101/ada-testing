import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


// Component Imports:
import Header from '../Header/Header';
import Chart from '../Chart/Chart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path ='/' component={Chart} />
      </div>
    </Router>
  );
}

export default App;

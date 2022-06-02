import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router
} from "react-router-dom";

import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Home />
      </Router>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Link to="/custumers">Custumers</Link><br/>
            <Link to="/custumers/30000000">Custumers 30000000</Link>
          </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import {AppRouter} from './Components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            {AppRouter()}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

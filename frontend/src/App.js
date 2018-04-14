import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {AppRouter, Navbar} from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MuiThemeProvider>
            <header className="App-header">
            </header>
            <Navbar />
            {AppRouter()}
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom' ;
import MapView from './MapView';
import SearchAndShow from './SearchAndShow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#TakeMeToTheTheater</h1>
        </header>
        <body>
          <Route exact path="/" render={() => (
            <MapView/>,
            <SearchAndShow/>
          )}/>
        </body>
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

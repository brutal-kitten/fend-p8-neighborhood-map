import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import MapView from './MapView';
import SearchAndShow from './SearchAndShow'



class App extends Component {

  state = {
    map: {}
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#TakeMeToTheTheater</h1>
        </header>
        <div className="wrap">
          <Route exact path="/" render={() => (
            <SearchAndShow/>
          )}/>
          <Route exact path="/" render={() => (
            <MapView/>
          )}/>
        </div>
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

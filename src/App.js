import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import MapView from './MapView';
import SearchAndShow from './SearchAndShow'



class App extends Component {

  state = {
    locations: [
      {title: "Teatr Dramatyczny" , location: {lat: 52.231672, lng: 21.008181}},
      {title: "Roma Musical Theater" , location: {lat: 52.227561, lng: 21.008323}},
      {title: "Kwadrat Theater" , location: {lat: 52.235969, lng: 21.008606}},
      {title: "Och-Teatr" , location: {lat: 52.214326, lng: 20.980349}},
      {title: "Capitol Theater" , location: {lat: 52.241328, lng: 21.003365}},
      {title: "Polish National Opera" , location: {lat: 52.243530, lng: 21.010739}}
    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#TakeMeToTheTheater</h1>
        </header>
        <div className="wrap">
          <Route exact path="/" render={() => (
            <SearchAndShow locations={this.state.locations}/>
          )}/>
          <Route exact path="/" render={() => (
            <MapView locations={this.state.locations}/>
          )}/>
        </div>
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

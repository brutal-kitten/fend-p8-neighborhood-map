import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import MapView from './MapView';
import SearchAndShow from './SearchAndShow'



class App extends Component {

  state = {
    locations: [],
    error: false
  }

  componentDidMount() {
    if(true){
    fetch(`https://api.foursquare.com/v2/venues/search?near=Warsaw&categoryId=4bf58dd8d48988d137941735,4bf58dd8d48988d1ac941735,4bf58dd8d48988d136941735&intent=checkin&radius=6000&client_id=1OSAFTMJJMB3INATMRRB2GG5CUAB4XVTRNAEX3QZRELOEESI&client_secret=3KRL4IJWA5MMJAZFAL23T14F3OGZBOKJQOFZWRXAQFI12BMI&v=20180323`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.response.venues);
      this.setState({ locations: result.response.venues})
    })
    .catch((err) => {
      console.log(err);
      this.setState({ error: true });
    })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#TakeMeToTheater</h1>
        </header>
        {this.state.error ? (
          <div><h3> Ops! Try again</h3></div>
        ) : (
          <div className="wrap">
            <Route exact path="/" render={() => (
              <SearchAndShow locations={this.state.locations}/>
            )}/>
            <Route exact path="/" render={() => (
              <MapView
               locations={this.state.locations}
               google={window.google}/>
            )}/>
          </div>)
      }
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

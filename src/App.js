import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import SearchAndShow from './SearchAndShow'
import MapContainer from './MapContainer'


let markers = [];

class App extends Component {

  state = {
    locations: [],
    selectedPlaces: [],
    error: false,
    openInfoWindow: false,
    selectedMarker: {},
    fetchAgain: true

  };


  componentDidMount() {

    if(this.state.fetchAgain) {
    fetch(`https://api.foursquare.com/v2/venues/search?near=Warsaw&categoryId=4bf58dd8d48988d137941735,4bf58dd8d48988d1ac941735,4bf58dd8d48988d136941735&intent=checkin&radius=6000&url&venuePhotos=1&client_id=1OSAFTMJJMB3INATMRRB2GG5CUAB4XVTRNAEX3QZRELOEESI&client_secret=3KRL4IJWA5MMJAZFAL23T14F3OGZBOKJQOFZWRXAQFI12BMI&v=20180323`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.response);
      this.setState({
        locations: result.response.venues,
        selectedPlaces: result.response.venues,
        fetchAgain: false
      })
    })
    .catch((err) => {
      console.log(err);
      this.setState({ error: true });
    })
  /*  .then(() => {
      this.state.locations.map((item) => {
        console.log(item.id);
        let link = "https://api.foursquare.com/v2/venues/" + item.id + "/photos?client_id=1OSAFTMJJMB3INATMRRB2GG5CUAB4XVTRNAEX3QZRELOEESI&client_secret=3KRL4IJWA5MMJAZFAL23T14F3OGZBOKJQOFZWRXAQFI12BMI&v=20180323";

        fetch(link)
         .then((response) => response.json())
         .then((result) => {
           console.log(item.id);
           console.log(result);

         })
         .catch((err) => {
           console.log(err);
         });

       }

     )}
    )
*/
  };

 this.state.locations.map((item) => {
   let link = "https://api.foursquare.com/v2/venues/" + item.id + "/photos?client_id=1OSAFTMJJMB3INATMRRB2GG5CUAB4XVTRNAEX3QZRELOEESI&client_secret=3KRL4IJWA5MMJAZFAL23T14F3OGZBOKJQOFZWRXAQFI12BMI&v=20180323";

   fetch(link)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  })

  }

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
    this.setState({
      openInfoWindow: true,
      selectedMarker: marker
    });
  };

  onInfoWindowClose = (marker) => {
    this.setState({
      openInfoWindow: false,
      selectedMarker: {}
    });
  };

  onItemClick = (name, e) => {
    this.name = name.toString();

    let selected = markers.filter(marker => marker.props.name == name);

    this.setState({
      openInfoWindow: true,
      selectedMarker: selected[0].marker
    });

  };


  addToArray = (e) => {
    if(e && !markers.includes(e)) {
      markers.push(e);

    }
  };

  searchForPlace = (place) => {
    place = place.toLowerCase();

    let filtered = this.state.locations.filter(item => item.name.toLowerCase().includes(place));

    this.setState({
      selectedPlaces: filtered
    })

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
              <SearchAndShow
               selectedPlaces={this.state.selectedPlaces}
               showListing={this.showListing}
               hideListing={this.hideListing}
               onItemClick={this.onItemClick}
               searchForPlace={this.searchForPlace}
               />
            )}/>
            <Route exact path="/" render={() => (
              <div id="map" role="application">
                <MapContainer
                  google={window.google}
                  onMarkerClick={this.onMarkerClick}
                  onInfoWindowClose={this.onInfoWindowClose}
                  state={this.state}
                  addToArray={this.addToArray}
                />
              </div>
            )}/>
          </div>)
      }
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

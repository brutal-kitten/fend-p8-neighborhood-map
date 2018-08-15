import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import SearchAndShow from './SearchAndShow';
import MapContainer from './MapContainer';
import MenuButton from './MenuButton';
import img from './powered-by-foursquare-white.png'


let markers = [];

class App extends Component {

  state = {
    locations: [],
    selectedPlaces: [],
    error: false,
    openInfoWindow: false,
    selectedMarker: {},
    fetchAgain: true,
    showSidebar: true

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
  };

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

    let selected = markers.filter(marker => marker.props.name === name);

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

  activateToggle = () => {
    (this.state.showSidebar) ? (this.setState({ showSidebar: false })) : (this.setState({ showSidebar: true }))
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuButton activateToggle={this.activateToggle}/>
          <h1 className="App-title">Theaters in Warsaw</h1>
        </header>
        {this.state.error ? (
          <div><h3> Ops! Try again</h3></div>
        ) : (
          <div className="wrap">
            { this.state.showSidebar && (
            <Route exact path="/" render={() => (
              <SearchAndShow
               selectedPlaces={this.state.selectedPlaces}
               showListing={this.showListing}
               hideListing={this.hideListing}
               onItemClick={this.onItemClick}
               searchForPlace={this.searchForPlace}
               />
            )}/>
          )}
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
        <footer>
          <p>Made with love to culture</p>
          <p><img className="foursquare" src={img} alt="powered by foursquare" /></p>
        </footer>
      </div>
    );
  }
}

export default App;

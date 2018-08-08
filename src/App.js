import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom' ;
import MapView from './MapView';
import SearchAndShow from './SearchAndShow'




class App extends Component {

  state = {
    locations: [],
    markers: [],
    error: false,
  }

  componentDidMount() {
    let cache;
    if(this.state.locations !== cache){
    fetch(`https://api.foursquare.com/v2/venues/search?near=Warsaw&categoryId=4bf58dd8d48988d137941735,4bf58dd8d48988d1ac941735,4bf58dd8d48988d136941735&intent=checkin&radius=6000&client_id=1OSAFTMJJMB3INATMRRB2GG5CUAB4XVTRNAEX3QZRELOEESI&client_secret=3KRL4IJWA5MMJAZFAL23T14F3OGZBOKJQOFZWRXAQFI12BMI&v=20180323`)
    .then((response) => response.json())
    .then((result) => {
      cache = result.response.venues;
      console.log(cache);
      this.setState({ locations: result.response.venues})
    })
    .catch((err) => {
      console.log(err);
      this.setState({ error: true });
    })
    }
  }




  showListing = () => {
    console.log("show!");
  //  let bounds = new window.google.maps.LatLngBounds();

  //  for(var i = 0; i < markers.length; i++) {
    //  markers[i].setMap(map);
      //bounds.extend(markers[i].position);
    //}
    //map.fitBounds(bounds);
  }

  hideListing = () => {
    console.log('hide!');
  /*  for (var i = 0; i < markers.length; i++){
      markers[i].setMap(null);
    } */
  }

showMarkers = (map, bounds, largeInfoWindow) => {

  let markers= [];

  this.state.locations.forEach((item) => {
    let position = {lat: item.location.lat, lng: item.location.lng};
    let title = item.name;
    let marker = new window.google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: window.google.maps.Animation.DROP,
      id: item.id
  });

    bounds.extend(marker.position);

    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfoWindow, map);
    });

    markers.push(marker);

  });



  function populateInfoWindow (marker, infowindow, map)  {
    if(infowindow.marker != marker) {
      infowindow.marker = marker;

      infowindow.setContent(
        '<div>' + marker.title + '<div>' + '<div>' + 'adress' + '<div>');
      infowindow.open(map, marker);
      infowindow.addListener('closeclick', function(){
        infowindow.setMarker = null;
      });
    }
  }
  
}

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.232658, lng: 21.004934},
          zoom: 13
        });


    let largeInfoWindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds();

    this.showMarkers(map, bounds, largeInfoWindow);

    map.fitBounds(bounds);
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
               locations={this.state.locations}
               showListing={this.showListing}
               hideListing={this.hideListing}/>
            )}/>
            <Route exact path="/" render={() => (
              <MapView
               initMap={this.initMap}
               />
            )}/>
          </div>)
      }
        <footer>Made with love to culture</footer>
      </div>
    );
  }
}

export default App;

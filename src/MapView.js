import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import scriptLoader from 'react-async-script-loader'

class MapView extends Component {


  componentWillReceiveProps({isScriptLoadSucceed}){
    if(isScriptLoadSucceed) {
      this.initMap();
    } else {
      alert("script not loaded");
    }
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.232658, lng: 21.004934},
          zoom: 13
        });

    var locations = [
      {title: "Teatr Dramatyczny" , location: {lat: 52.231672, lng: 21.008181}},
      {title: "Roma Musical Theater" , location: {lat: 52.227561, lng: 21.008323}},
      {title: "Kwadrat Theater" , location: {lat: 52.235969, lng: 21.008606}},
      {title: "Och-Teatr" , location: {lat: 52.214326, lng: 20.980349}},
      {title: "Capitol Theater" , location: {lat: 52.241328, lng: 21.003365}},
      {title: "Polish National Opera" , location: {lat: 52.243530, lng: 21.010739}}
    ]

    let markers = [];

    let largeInfoWindow = new window.google.maps.InfoWindow();
    var bounds = new window.google.maps.LatLngBounds();

    function populateInfoWindow(marker, infowindow) {

      if(infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '<div>');
        infowindow.open(map, marker);
        infowindow.addListener('closeclick', function(){
          infowindow.setMarker = null;
        });
      }
    }

    locations.forEach((item) => {
      let position = item.location;
      let title = item.title;
      let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: window.google.maps.Animation.DROP,
        id: item.title
      });

      markers.push(marker);

      bounds.extend(marker.position);

      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfoWindow);
      });
    });

    map.fitBounds(bounds);
  }

  render() {
    return (
      <div id="map"  role="application">
      </div>
    )
  }

}



export default scriptLoader(
  ["https://maps.googleapis.com/maps/api/js?key=AIzaSyD5Ns3nRSYw0-ydAGkx_4mzUM-BykeoIXg&v=3"]
)(MapView)

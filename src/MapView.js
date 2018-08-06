import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import scriptLoader from 'react-async-script-loader'
import PropTypes from 'prop-types'

class MapView extends Component {

  static propTypes = {
    locations: PropTypes.array.isRequired
  }

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

      this.props.locations.forEach((item) => {
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
  ["https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyD5Ns3nRSYw0-ydAGkx_4mzUM-BykeoIXg&v=3"]
)(MapView)

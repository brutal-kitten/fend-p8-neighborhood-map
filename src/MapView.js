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

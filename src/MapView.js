import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import scriptLoader from 'react-async-script-loader'
import PropTypes from 'prop-types'


class MapView extends Component {


  componentWillReceiveProps({isScriptLoadSucceed}){
    if(isScriptLoadSucceed) {
      this.props.initMap();
    } else {
      alert("script not loaded");
    }
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

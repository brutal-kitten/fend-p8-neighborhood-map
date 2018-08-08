import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <div className="map" role="application">
        <Map google={this.props.google} zoom={13}>
          <Marker
            onClick={this.onMarkerClick}
            name={"current location"}
          />
          <InfoWindow
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>hello</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD5Ns3nRSYw0-ydAGkx_4mzUM-BykeoIXg"
})(MapContainer)

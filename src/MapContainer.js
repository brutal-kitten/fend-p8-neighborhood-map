import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <div className="map" role="application">
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{lat: 52.232658, lng: 21.004934}}
          >
          {this.props.state.locations.map((place) => (

            <Marker
              onClick={this.onMarkerClick}
              name={place.name}
              position={{lat: place.location.lat, lng: place.location.lng}}
              animation={this.props.google.maps.Animation.DROP}
              key={place.id}
            />
          ))
          }
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

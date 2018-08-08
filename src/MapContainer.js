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
              onClick={this.props.onMarkerClick}
              name={place.name}
              position={{lat: place.location.lat, lng: place.location.lng}}
              animation={ (place.name === this.props.state.selectedMarker.name) ? (
                this.props.google.maps.Animation.BOUNCE) : 0
              }
              key={place.id}
            />
          ))
          }
          <InfoWindow
            visible={this.props.state.openInfoWindow}
            marker={this.props.state.selectedMarker}
            onClose={this.props.onInfoWindowClose}>
            <div>
              <h1>{this.props.state.selectedMarker.name}</h1>
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

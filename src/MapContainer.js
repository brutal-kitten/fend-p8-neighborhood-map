import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  bounds = new this.props.google.maps.LatLngBounds();




  render() {
    this.props.state.locations.map((item) => {
      this.bounds.extend({lat: item.location.lat, lng: item.location.lng});
    });

    return (

        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{lat: 52.232658, lng: 21.004934}}
          bounds={this.bounds}
          >
          {this.props.state.selectedPlaces.map((place) => (

            <Marker
              onClick={this.props.onMarkerClick}
              name={place.name}
              position={{lat: place.location.lat, lng: place.location.lng}}
              animation={ (place.name === this.props.state.selectedMarker.name) ? (
                this.props.google.maps.Animation.BOUNCE) : 0
              }
              key={place.id}
              adress={place.location.address}
              ref={this.props.addToArray}
            />
          ))
          }
          <InfoWindow
            visible={this.props.state.openInfoWindow}
            marker={this.props.state.selectedMarker}
            onClose={this.props.onInfoWindowClose}>
            <div className="InfoWindow">
              <h2>{this.props.state.selectedMarker.name}</h2>
              {

              }
              <p>{this.props.state.selectedMarker.adress}</p>

            </div>
          </InfoWindow>
        </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD5Ns3nRSYw0-ydAGkx_4mzUM-BykeoIXg"
})(MapContainer)

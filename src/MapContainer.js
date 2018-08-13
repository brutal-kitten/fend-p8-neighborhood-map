import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';


export const photos = [
    { id: "4ca21ef554c8a1cd4af9ad4b", link : "https://igx.4sqi.net/img/general/100x100/7808246_d-UUgTsgbiHlf9h--Zr3hOCb9VXU7Ev21vZyCI-_xcI.jpg" },
    { id: "4d0e4406903d370433f6c855", link : "https://igx.4sqi.net/img/general/100x100//19118745_VOUXzmWV6OE7sWc6UGZICGZSSihiNV_gr-57SO-xw-M.jpg" },
    { id:"4b8ed695f964a520113a33e3", link : "https://igx.4sqi.net/img/general/100x100/67404_0xrHw3aX35Ex7ZESK-bYp5lS_cLYTLdyX0NILzZpRE0.jpg" },
    { id: "4f21a7f0e4b0bcea1167e0d5", link : "https://igx.4sqi.net/img/general/100x100/75380169_YBmZxjkhN-wSlNhxIGZ-LQFYjSLcEOoCF6QunXDUy10.jpg" },
    { id: "506c0083e4b07af6df1c3a37", link : "https://igx.4sqi.net/img/general/100x100/62694435_AUZQR4j2XJ2ube94WHNulmb6TT13CUS5ES66Vpyac8w.jpg" },
    { id: "4c78f4e697028cfadd60d9fe", link : "https://igx.4sqi.net/img/general/100x100/57709928_Im-jWAZUg8odxOzKYMIcUy1mphtYIT_5bd9SKBCzBao.jpg" },
    { id: "4c49f09d6594be9aafc6c125", link : "https://igx.4sqi.net/img/general/100x100/79867393_kXCxNYlSd5_qqf-9nymmezTInK4N1hxt6gkQl9f6IPM.jpg" },
    { id: "4ce56c3e834ba35dd9e4991a", link : "https://igx.4sqi.net/img/general/100x100/8441078_DIUl_qWPAmzSf-kOseylZPeS9wAFLVxvuHK9LxaV8Ys.jpg" },
    { id: "4c78f2e92d3ba143c3828cd0", link : "https://igx.4sqi.net/img/general/100x100/49449216_EvZniyUwXHhwrHiZLJtj6AgAJ8FewrQHWogfK6-7Ldk.jpg" },
    { id: "4c1be27ae9c4ef3bdeb945aa", link : "https://igx.4sqi.net/img/general/100x100/36992172_Frsx-LXfWpcdOANBgyqTC85btedTGImAWtjTJiUO5kM.jpg" },
    { id: "4cc19ec7f4448cfa4d085898", link : "https://igx.4sqi.net/img/general/100x100//62222072_fiLhf14gzgYTEBMVL00Tab-5YUZkVhYcNfDybwMemwk.jpg" },
    { id: "4dc93508b0fbf26798c55e0d", link : "https://igx.4sqi.net/img/general/100x100//6491315_qk_NuNJs2CjnDAFXV_O0x1ijU1FmMtUAmb3CpI0U_vM.jpg" },
    { id: "4cc9c0083d99b713346a3653", link : "https://igx.4sqi.net/img/general/100x100/EQQcbEeyg5X8dLDfiafbCDFngHcmrcNqvem3Wuw1PQU.jpg" },
    { id: "4d2a0307849f3704860a8441", link : "https://igx.4sqi.net/img/general/100x100/27501418_NYe5aRg6KubL7r7L9cEEbg93mZrdODH9oVsIpvmg6SI.jpg" },
    { id: "4c8baff49ef0224b2585667b", link : "https://igx.4sqi.net/img/general/100x100/58177234_JpnMrjWs4eIxzW7BpwFPJDptL_KvtSLnp31NKSYMows.jpg" },
    { id: "4baf854cf964a520bf063ce3", link : "https://igx.4sqi.net/img/general/100x100/DN3UCGOBBOMNRC0JGNK0FPJW2PPATK0T3JCQAVKNVB5BKLRW.jpg" },
    { id: "51b756c7498e9e3b00436040", link : false },
    { id: "4ba3cd0cf964a520f46038e3", link : false },
    { id: "4c763a4c604a3704c1c78449", link : false },
    { id: "4b737dc2f964a52011b12de3", link : "https://igx.4sqi.net/img/general/100x100/16242079_jc-YgaJycbSjNFajpIRheuPPXDEsojgi7UN58HI5hQk.jpg" },
    { id: "4bf58aa894b2a5931fc8abee", link : "https://igx.4sqi.net/img/general/100x100/81925269_JRpIJHwpoZoINExe5b-5ewC_ogVvqTLHMCAOvrVf7LE.jpg" },
    { id: "4b99fd73f964a520119a35e3", link : "https://igx.4sqi.net/img/general/100x100//28756_c8KSdJTFyumI5sXZIBskSAu1fus1nCq_Fll8_UbGe6c.jpg" },
    { id: "4d448ca7befe236aa71df6e2", link : "https://igx.4sqi.net/img/general/100x100/41819799_e0FxcQlyD1N6ruxaC8J3lHeqqfXA39XXiHi0nayQsQo.jpg" },
    { id: "4cf3fc90e3b9a093679d4c53", link : "https://igx.4sqi.net/img/general/100x100/11075851_dJOcigopJ5_UAIEPsysUskSiDe-ZktyARz5bFqbVeQ4.jpg" },
    { id: "4f8489f8e4b0f8430ec67283", link : false },
    { id: "4cf40fe5e942548137ea78c5", link: false },
    { id: "51812f1dabd80b25bc0bba54", link: "http://via.placeholder.com/100x100" },
    { id: "4bd7206329eb9c743f3f96e1", link: "https://igx.4sqi.net/img/general/100x100/28756_Lyidnm1D4EWFD3x9x9fnAggjrx2vNGv0uiGQO4PETdY.jpg" }
  ];

export class MapContainer extends Component {

  bounds = new this.props.google.maps.LatLngBounds();



  getPhoto = () => {
    let id = this.props.state.selectedMarker.id;
    console.log(id);
    let filter = photos.filter(item => item.id === id);
    console.log(filter);
    let url = filter[0].link ? filter[0].link : "http://via.placeholder.com/100x100";
    console.log(url);
    return url;
  }


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
              id={place.id}
            />
          ))
          }
          <InfoWindow
            visible={this.props.state.openInfoWindow}
            marker={this.props.state.selectedMarker}
            onClose={this.props.onInfoWindowClose}>
            <div className="InfoWindow">
              <h2>{this.props.state.selectedMarker.name}</h2>
              {this.props.state.openInfoWindow ? (
                <p className="picture">
                  <image src = {this.getPhoto()} />
                </p>
              ) : null}
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

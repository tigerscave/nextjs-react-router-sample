import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <div>
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: 35.586, lng: 139.736 }}
      tilt={parseInt(props.tilt)}
      mapTypeId={'hybrid'}
    >
      {props.isMarkerShown && <Marker position={{ lat: 35.586, lng: 139.736 }} />}
    </GoogleMap>
    <select onChange={props.handleSelectChange}>
      <option value={0}>0</option>
      <option value={10}>10</option>
      <option value={45}>45</option>
      <option value={60}>60</option>
      <option value={100}>100</option>
      <option value={180}>180</option>
    </select>
  </div>
))

class GoogleMapExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilt: 0,
    }

    this.handleSelectChange = e => {
      this.setState({
        tilt: e.target.value
      })
    }

  }
  render(){
    const { tilt } = this.state;
    return (
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          handleSelectChange={this.handleSelectChange}
          tilt={tilt}
        />
      </div>
    );
  }
}

export default GoogleMapExample;
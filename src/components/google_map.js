import React, {Component} from 'react';
const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return  <div id="map"></div>
  }
}

export default GoogleMap;
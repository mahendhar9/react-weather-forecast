import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from './chart.js';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  showData(cityData) {
    const temps = cityData.list.map(obj => obj.main.temp);
    const pressures = cityData.list.map(obj => obj.main.pressure);
    const humidities = cityData.list.map(obj => obj.main.humidity);
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;

    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          <p>{cityData.city.name}</p>
        </td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pressures} color="orange" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.showData)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
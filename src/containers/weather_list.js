import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from './chart.js';

class WeatherList extends Component {

  showData(cityData) {
    const temps = cityData.list.map(obj => obj.main.temp)
    const pressures = cityData.list.map(obj => obj.main.pressure)
    const humidities = cityData.list.map(obj => obj.main.humidity)

    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" /></td>
        <td><Chart data={pressures} color="orange" /></td>
        <td><Chart data={humidities} color="blue" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
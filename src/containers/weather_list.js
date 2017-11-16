import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  showData(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import '../style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-xs-center">React - Weather Forecast</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

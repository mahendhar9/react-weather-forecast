import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    if(this.state.term.length > 1) {
      this.props.fetchWeather(this.state.term);
      this.setState({term: ''});
    } else {
      alert('Please enter a city.');
    }

  }

  render() {
    return (
     <form onSubmit={(event) => this.onFormSubmit(event)} className="input-group">
       <input
         placeholder="Type a city name, ex: New York"
         className="form-control"
         value={this.state.term}
         onChange={(event) => this.onInputChange(event)}
       />
       <span className="input-group-btn">
         <button type="submit" className="btn btn-danger">Submit</button>
       </span>
     </form>
     )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

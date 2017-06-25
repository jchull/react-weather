import React from "react";
import StationList from "./station-list";

class StationSearch extends React.Component {

  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      isLoading: true
    });
    event.preventDefault();
    return fetch('http://api.wunderground.com/api/' + process.env.REACT_APP_WEATHER_API_KEY + '/geolookup/q/' + this.state.value + '.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({stationList: responseJson.location.nearby_weather_stations.pws.station, isLoading: false});
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  handleClear(event) {
    this.setState({value: ""});
    event.preventDefault();
  }


  render() {
    if (this.state.isLoading) {
      return (
          <div className="loading">Loading...</div>
      );
    } else {
      return (
          <div className="station">
            <form onSubmit={this.handleSubmit}>
              <label>
                Zipcode:
                <input type="text"
                       value={this.state.value}
                       onChange={this.handleChange}/>
              </label>
              <input type="submit"
                     value="Submit"/>
              <button onClick={this.handleClear}>Clear</button>
              <StationList stations={this.state.stationList}/>
            </form>
          </div>
      );
    }
  }
}


export default StationSearch;
// Example usage: <StationSearch/>

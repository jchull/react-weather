import React from "react";
import StationList from "./station-list";
import Forecast from "../forecast/forecast";

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
          this.setState({
            stationList: responseJson.location.nearby_weather_stations.pws.station.slice(0, 5),
            isLoading: false
          });
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
      return null;
      // return (
      //     <div className="loading">Loading ...</div>
      // );
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
              {this.state.stationList ?
                  <div>
                    {/* Not showing station list for now, just use first station city
                    <StationList stations={this.state.stationList}/>*/}
                    <Forecast station={this.state.stationList[0]}/>
                  </div>
                  : <span><br/>Enter zipcode to view weather forecast</span>}

            </form>
          </div>
      );
    }
  }
}


export default StationSearch;
// Example usage: <StationSearch/>

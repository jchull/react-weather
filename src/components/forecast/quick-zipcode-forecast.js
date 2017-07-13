import React from "react";
import {Forecast} from "./forecast";

class QuickZipcodeForecast extends React.Component {

  constructor() {
    super();
    this.state = {zipcode: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.zipcode) {
      return fetch("http://api.wunderground.com/api/" + process.env.REACT_APP_WEATHER_API_KEY + "/geolookup/q/" + this.state.zipcode + ".json")
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              station: responseJson.location.nearby_weather_stations.pws.station[0]
            });
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
    }
  }

  handleClear(event) {
    this.setState({zipcode: ""});
    event.preventDefault();
  }


  render() {
    return (
        <form>
          <label htmlFor="zipcode">Zipcode</label>
          <input type="text"
                 name="zipcode"
                 id="zipcode"
                 value={this.state.zipcode}
                 onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleClear}>Clear</button>
          <Forecast station={this.state.station}/>
        </form>
    );
  }
}


export  {QuickZipcodeForecast};
// Example usage: <QuickZipcodeForecast/>

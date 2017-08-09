import React from "react";
import {Forecast} from "./forecast";
import StationService from "../../services/station";

class QuickZipcodeForecast extends React.Component {

  constructor() {
    super();
    this.stationService = new StationService(process.env.REACT_APP_WEATHER_API_KEY);
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
      return this.stationService.getNearestStationToZipcode(this.state.zipcode)
          .then(nearestStation => {
            this.setState({
              station: nearestStation
            });
            return nearestStation;
          })
          .catch(console.error);
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


export {QuickZipcodeForecast};
// Example usage: <QuickZipcodeForecast/>

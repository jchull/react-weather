import React from "react";

import ForecastDay from "./forecast-day";

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: []
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    return fetch('http://api.wunderground.com/api/' + process.env.REACT_APP_WEATHER_API_KEY + '/forecast/q/' + this.props.station.state + '/' + this.props.station.city + '.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            forecast: responseJson.forecast.txt_forecast.forecastday,
            isLoading: false
          });
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  };

  render() {
    if (this.state.isLoading) {
      return (
          <span>Loading Forecast...</span>
      );
    }

    let forecastElements = [];
    if (this.state.forecast)
      this.state.forecast.forEach(item => forecastElements.push(<ForecastDay forecast={item}
                                                                             key={item.period}/>));

    return (
        <div className="forecast">
          <h1>Weather forecast for {this.props.station.city}</h1>
          <div>
            {forecastElements ? forecastElements : <span>Forecast unavailable</span>}
          </div>
        </div>
    );
  }
}

export default Forecast;

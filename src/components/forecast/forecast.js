import React from "react";

import {ForecastSegment} from "./forecast-segment";

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: undefined,
    };
  }

  getForecastByStation(station) {
    if (this.props.station) {
      return fetch('http://api.wunderground.com/api/' + process.env.REACT_APP_WEATHER_API_KEY + '/forecast/q/' + station.state + '/' + station.city + '.json')
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
    }
  };

  render() {
    if (!this.props.station) {
      return null;
    } else if (!this.state.forecast) {
      this.getForecastByStation(this.props.station);
    }

    let forecastElements = [];
    if (this.state.forecast)
      this.state.forecast.forEach(item => forecastElements.push(<ForecastSegment forecast={item}
                                                                                 key={item.period}/>));

    return (
        <div className="forecast">
          <h1>Weather forecast for {this.props.station.city}, {this.props.station.state}</h1>
          {forecastElements ? <div>{forecastElements}</div> : <span>Forecast unavailable</span>}
        </div>
    );
  }
}

export {Forecast};

import React from "react";

import {ForecastSegment} from "./forecast-segment";
import {ForecastService} from "../../services/forecast";

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.forecastService = new ForecastService(process.env.REACT_APP_WEATHER_API_KEY);
    this.state = {
      forecast: undefined,
    };
  }

  getForecastByStation(station) {
    return this.forecastService
        .getForecastForStateCity(station.state, station.city)
        .then((forecast) => {
          this.setState({
            forecast: forecast.forecastday,
            isLoading: false
          });
          return forecast;
        })
        .catch((error) => {
          console.error(error);
        });
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

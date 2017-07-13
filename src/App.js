import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {QuickZipcodeForecast} from "./components/forecast/quick-zipcode-forecast";

class App extends Component {
  render() {
    return (
        <div className="weather-app">
          <div className="header">
            <img src={logo}
                 className="logo"
                 alt="logo"/>
            <h2>React Weather</h2>
          </div>
          {process.env.REACT_APP_WEATHER_API_KEY.endsWith("WeatherUnderground!") ?
              <div className="warn">
                <span>{process.env.REACT_APP_WEATHER_API_KEY}</span><br/>
                <a href="https://www.wunderground.com/weather/api">Weather Underground API</a>
              </div>
              :
              <QuickZipcodeForecast/>
          }
        </div>
    );
  }
}

export default App;

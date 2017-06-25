import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import StationSearch from "./components/station/station-search";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo}
                 className="App-logo"
                 alt="logo"/>
            <h2>React Weather</h2>
          </div>
          {process.env.REACT_APP_WEATHER_API_KEY.endsWith("WeatherUnderground!") ?
              <div className="warn">
                <span>{process.env.REACT_APP_WEATHER_API_KEY}</span><br/>
                <a href="https://www.wunderground.com/weather/api">Weather Underground API</a>
              </div>
              :
              <StationSearch></StationSearch>
          }
        </div>
    );
  }
}

export default App;

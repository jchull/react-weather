import React, { Component } from 'react';

class Forecast extends React.Component {
  render() {
    return (
        <div className="forecast">
          <h1>Weather forecast for {this.props.station}</h1>
        </div>
    );
  }
}

export default Forecast;
// Example usage: <Forecast zip="80220" />
//http://api.wunderground.com/api/Your_Key/geolookup/q/80220.json

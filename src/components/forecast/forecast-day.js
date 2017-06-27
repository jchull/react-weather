import React from "react";

class ForecastDay extends React.Component {


  render() {
    return (
        <div className="forecast-day"
             style={{
               display: "inline-block",
               width: '120px',
               height: '200px',
               textAlign: 'center',
               boxShadow: '1px 1px 1px #ABABAB',
               margin: '4px'
             }}>
          <div style={{
            backgroundColor: '#0b6bab',
            height: '50px',
            padding: '4px'
          }}>
            <span style={{
              fontSize: '120%',
              fontWeight: 700,
              color: '#FFF'
            }}>
              {this.props.forecast.title}
              </span>
          </div>
          <div>
            <img src={this.props.forecast.icon_url}/>

          </div>
        </div>
    );
  }
}

export default ForecastDay;
// Example usage: <ForecastDay forecast="{Object}" />
//http://api.wunderground.com/api/Your_Key/geolookup/q/80220.json

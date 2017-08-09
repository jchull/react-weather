import React from "react";

class ForecastSegment extends React.Component {

  render() {
    return (
        <div className="forecast-segment">
          <div className="segment-header">
              {this.props.forecast.title}
          </div>
          <div>
            <img src={this.props.forecast.icon_url} alt={this.props.forecast.conditions}/>
          </div>
        </div>
    );
  }
}

export {ForecastSegment};
// Example usage: <ForecastSegment forecast="{Object}" />

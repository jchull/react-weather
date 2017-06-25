import React from "react";
import StationListItem from "./station-list-item";

class StationList extends React.Component {

  render() {
    let stationElements = [];
    if(this.props.stations){
      this.props.stations.forEach(item => stationElements.push(<StationListItem station={item} key={item.id}/>))
    }
    return (
        <ul className="station-list">
          {stationElements}
        </ul>
    );
  }
}


export default StationList;
// Example usage: <StationList stations={this.state.stationList}/>


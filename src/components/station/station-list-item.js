import React from "react";

class StationListItem extends React.Component {

  render() {

    return (
        <li className="station-list-item" key={this.props.station.id}>
          Station ID: {this.props.station.id}
        </li>
    );
  }
}


export default StationListItem;
// Example usage: <StationListItem station={item} key={item.id}/>

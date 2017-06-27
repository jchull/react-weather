import React from "react";

class StationListItem extends React.Component {

  render() {

    return (
        <button className="station-list-item">
          {this.props.station.id}
        </button>
    );
  }
}


export default StationListItem;
// Example usage: <StationListItem station={item} key={item.id}/>

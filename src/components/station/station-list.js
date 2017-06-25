import React from "react";
import StationListItem from "./station-list-item";

class StationList extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
        <div className="station-list">
          TODO: add list items
          <StationListItem></StationListItem>
        </div>
    );
  }
}


export default StationList;
// Example usage: <StationList/>

import React from "react";

class StationSearch extends React.Component {

  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    return fetch('http://api.wunderground.com/api/' + process.env.REACT_APP_WEATHER_API_KEY + '/geolookup/q/' + this.state.value + '.json')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }

  handleClear(event) {
    this.setState({value: ""});
    event.preventDefault();
  }


  render() {

    return (
        <div className="station">
          <form onSubmit={this.handleSubmit}>
            <label>
              Zipcode:
              <input type="text"
                     value={this.state.value}
                     onChange={this.handleChange}/>
            </label>
            <input type="submit"
                   value="Submit"/>
            <button onClick={this.handleClear}>Clear</button>
          </form>
        </div>
    );
  }
}


export default StationSearch;
// Example usage: <StationSearch/>

class StationService {

  constructor(api_key) {
    this.BASE_URL = `http://api.wunderground.com/api/${api_key}/geolookup/q/`;
  }

  getNearestStationToZipcode(zipcode) {
    return fetch(this.BASE_URL + zipcode + '.json')
        .then(response => response.json())
        .then(station => station.location.nearby_weather_stations.pws.station[0])
        .catch(console.error);
  };

}

export {StationService}

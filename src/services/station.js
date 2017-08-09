class StationService {

  constructor(api_key) {
    this.geoLookupUrl = `http://api.wunderground.com/api/${api_key}/geolookup/q/`;
  }

  getNearestStationToZipcode(zipcode) {
    return fetch(this.geoLookupUrl + zipcode + '.json')
        .then(response => response.json())
        .then(station => station.location.nearby_weather_stations.pws.station[0])
        .catch(console.error);
  };

}

export {StationService}

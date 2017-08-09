class ForecastService {

  constructor(api_key) {
    this.BASE_URL = `http://api.wunderground.com/api/${api_key}/forecast/q/`;
  }

  getForecastByStation(station) {
    return fetch(this.BASE_URL + station.state + '/' + station.city + '.json')
        .then(response => response.json())
        .then(forecast => forecast.forecast.txt_forecast)
        .catch(error => {
          console.error(error);
        });
  };

}

export {ForecastService}

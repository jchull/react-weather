class ForecastService {

  constructor(api_key) {
    this.forecastUrl = `http://api.wunderground.com/api/${api_key}/forecast/q/`;
  }

  getForecastForStateCity(state, city) {
    return fetch(this.forecastUrl + state + '/' + city + '.json')
        .then(response => response.json())
        .then(forecast => forecast.forecast.txt_forecast)
        .catch(console.error);
  };

}

export {ForecastService}

class ForecastService {

  constructor(api_key) {
    this.BASE_URL = `http://api.wunderground.com/api/${api_key}/forecast/q/`;
  }

  getForecastForStateCity(state, city) {
    return fetch(this.BASE_URL + state + '/' + city + '.json')
        .then(response => response.json())
        .then(forecast => forecast.forecast.txt_forecast)
        .catch(console.error);
  };

}

export {ForecastService}

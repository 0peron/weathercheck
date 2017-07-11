
export const fetchWeatherData = (stateName, cityName) => {
    return function(dispatch) {
        var apiKey = '070d4f7d9e1206a5';
        var query = (stateName + "/" + cityName);
        var url = "https://api.wunderground.com/api/" + apiKey + "/forecast/q/" + query + ".json";
        console.log(url);
        return fetch(url, {
            method: 'GET',
        })
            .then(function(response) {
            return response.json();
        })
            .then(function(data) {
            console.log('this data', data);
            var forecast = data.forecast.simpleforecast.forecastday;
            return dispatch(
                weatherSuccess(cityName, forecast)
            );
        })
            .catch(function(error) {
            console.log('catch', error);
        });
    };
};

const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const weatherSuccess = (cityName, forecast) => ({
        type: WEATHER_SUCCESS,
        cityName: cityName,
        forecast: forecast
});

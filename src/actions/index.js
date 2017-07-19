const WEATHER_SUCCESS = 'WEATHER_SUCCESS';
export const weatherSuccess = (forecast, cityName) => ({
    type: WEATHER_SUCCESS,
    cityName: cityName,
    forecast: forecast,
    id: Math.random()
});


const requestData= () => ({
    type: 'REQUEST_DATA'
})

export const fetchWeatherData = (stateName, cityName) => {
    return(dispatch) => {
        dispatch(requestData)
        const apiKey = '070d4f7d9e1206a5';
        const query = (stateName + "/" + cityName);
        const url = "https://api.wunderground.com/api/" + apiKey + "/forecast/q/" + query + ".json";
        const json = {};
        console.log(url);
        fetch(url)
        .then(responce => responce.json())
        .then(json => {
            console.log(json.forecast, cityName,)
            dispatch(weatherSuccess(json.forecast, cityName))
                     })
        .catch(ex => console.log('parsing failed', ex))
    }
}



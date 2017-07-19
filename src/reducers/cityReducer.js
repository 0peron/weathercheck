const initialWeatherState = {
    loading: true,
    cityName: '',
    forecast: []
};


const cityReducer = (state = initialWeatherState, action) => {
    if (action.type === 'REQUEST_DATA') {
        return {
            ...state,
            loading: true
        }
    }
    else if (action.type === 'WEATHER_SUCCESS') {
        return {
            ...state,
            loading: false,
            forecast: action.forecast,
            cityName: action.cityName
        }
    }

    else{
        return state;
    }
};


export default cityReducer

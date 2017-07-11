const initialWeatherState = {
    forecast: []
};


const cityReducer = (state = initialWeatherState, action) => {
    if (action.type === ADD_ID) {
        return state.concat({
            cityName: action.cityName,
            forecast: action.forecast
        });
    }
    else{
        return state;
    }
};

export default cityReducer

import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions/index';

const WeatherSearch = ({ weatherSearch }) => (
        <div className="weatherSearch">
          <form onSubmit={(event) => {
            event.preventDefault();
            let stateName = event.target.stateName.value;
            let cityName = event.target.cityName.value;
            weatherSearch(cityName, stateName);
            event.target.cityName.value = '';
            event.target.stateName.value= '';
            console.log(cityName, stateName);
          }} className="js-search-form">
          <h1>Weather Check</h1>
          <h4>Select State and City</h4>
          <label form="query"></label>
            <select name="stateName">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
          <input name='cityName' type="text" className="cityName" placeholder="City"/>
          <button type="submit" className="forecastSearch">Search</button>
        </form>
      </div>
);

const mapDistpatchtoProps = (dispatch) => ({
    weatherSearch: (cityName, stateName) => dispatch(fetchWeatherData(stateName, cityName))
});

export default connect(null, mapDistpatchtoProps)(WeatherSearch);

 import React from 'react'
 import { Component } from 'react';
 import { connect } from 'react-redux';
import { fetchWeatherData } from '../actions'

class Results extends Component {

componentDidMount() {
    this.props.dispatch(fetchWeatherData())
}

    render() {
        return (
            <div>
            {this.props.loading ?
             <p></p>
             :
            <div className="show-results">
                <div className="currentWeather">
                    <h3 className="location">Current Weather</h3>
                    <p>in {this.props.cityName}</p>
                    <p>As of {this.props.forecast.simpleforecast.forecastday[0].date.pretty}</p>
                    <h4>Today</h4>
                    <p><img src={this.props.forecast.simpleforecast.forecastday[0].icon_url}></img>
                    {this.props.forecast.simpleforecast.forecastday[0].conditions}</p>
                    <p>H: {this.props.forecast.simpleforecast.forecastday[0].high.fahrenheit}° L: {this.props.forecast.simpleforecast.forecastday[0].low.fahrenheit}°</p>
                    <p> chance of rain: {this.props.forecast.simpleforecast.forecastday[0].pop}%</p>
                    <p> Wind: {this.props.forecast.simpleforecast.forecastday[0].avewind.dir} {this.props.forecast.simpleforecast.forecastday[0].avewind.mph} mph</p>
                </div>
                <div className="threeDayContainer">
                    <div className='dayOne'>
                        <h4>{this.props.forecast.simpleforecast.forecastday[1].date.weekday}</h4>
                        <p><img src={this.props.forecast.simpleforecast.forecastday[1].icon_url}></img>
                        {this.props.forecast.simpleforecast.forecastday[1].conditions}</p>
                        <p>H: {this.props.forecast.simpleforecast.forecastday[1].high.fahrenheit}° L: {this.props.forecast.simpleforecast.forecastday[1].low.fahrenheit}°</p>
                        <p> chance of rain: {this.props.forecast.simpleforecast.forecastday[1].pop}%</p>
                        <p> Wind: {this.props.forecast.simpleforecast.forecastday[1].avewind.dir} {this.props.forecast.simpleforecast.forecastday[1].avewind.mph} mph</p>
                    </div>
                    <div className="dayTwo">
                        <h4>{this.props.forecast.simpleforecast.forecastday[2].date.weekday}</h4>
                        <p><img src={this.props.forecast.simpleforecast.forecastday[2].icon_url}></img>
                        {this.props.forecast.simpleforecast.forecastday[2].conditions}</p>
                        <p>H: {this.props.forecast.simpleforecast.forecastday[2].high.fahrenheit}° L: {this.props.forecast.simpleforecast.forecastday[2].low.fahrenheit}°</p>
                        <p> chance of rain: {this.props.forecast.simpleforecast.forecastday[2].pop}%</p>
                        <p> Wind: {this.props.forecast.simpleforecast.forecastday[2].avewind.dir} {this.props.forecast.simpleforecast.forecastday[2].avewind.mph} mph</p>
                    </div>
                    <div className="dayThree">
                        <h4>{this.props.forecast.simpleforecast.forecastday[3].date.weekday}</h4>
                        <p><img src={this.props.forecast.simpleforecast.forecastday[3].icon_url}></img>
                        {this.props.forecast.simpleforecast.forecastday[3].conditions}</p>
                        <p>H: {this.props.forecast.simpleforecast.forecastday[3].high.fahrenheit}° L: {this.props.forecast.simpleforecast.forecastday[3].low.fahrenheit}°</p>
                        <p> chance of rain: {this.props.forecast.simpleforecast.forecastday[3].pop}%</p>
                        <p> Wind: {this.props.forecast.simpleforecast.forecastday[3].avewind.dir} {this.props.forecast.simpleforecast.forecastday[3].avewind.mph} mph</p>
                    </div>
                </div>
            </div>
            }
            </div>




        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        cityName: state.cityName,
        forecast: state.forecast,
        loading: state.loading
    }

}



 export default connect(mapStateToProps)(Results);

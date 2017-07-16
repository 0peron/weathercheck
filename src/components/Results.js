 import React from 'react'
 import { connect } from 'react-redux';
import { fetchWeatherData } from '/src/actions'

componentDidMount() {
    this.props.dispatch(fetchWeatherData())
}

 const Results = (props) => (
     <div className="show-results">
     this.props.forecast.map((forecast, index) => (
     <p key={index}>{forecast[0].conditions}</p>
 ))
     </div>
 )
const mapStateToProps = (state) => {
    console.log('this is state', state.forecast);
    return {
        cityName: state.cityName,
        forecast: state.forecast
    }
}

 export default connect(mapStateToProps)(Results);


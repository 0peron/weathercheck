 import React from 'react'

 const Results = (props) => (
     <div className="show-results">
     <div className="currentWeather">
     <h3 className="location">Current Weather</h3>
     <p>As of {date}</p>
     <h4>Today</h4>
     <p><img src={icon_url0}/> {conditions0}</p>
     <p>H: {high0}° L: {low0}°</p>
     <p> chance of rain: {pop0}%</p>
     <p> Wind: {windDirection0} {windMph0} mph</p>
     </div>
     <div className="threeDayContainer">
     <div className="dayOne">
     <h4>{day1}</h4>
     <p><img src={icon_url1}/> {conditions1}</p>
     <p>H: {high1}° L: {low1}°</p>
     <p> chance of rain: {pop1}%</p>
     <p> Wind: {windDirection1} {windMph1} mph</p>
     </div>
     <div className="dayTwo">
     <h4>{day2}</h4>
     <p><img src={icon_url2}/> {conditions2}</p>
     <p>H: {high2}° L: {low2}°</p>
     <p> chance of rain: {pop2}%</p>
     <p> Wind: {windDirection2} {windMph2} mph</p>
     </div>
     <div className="dayThree">
     <h4>{day3}</h4>
     <p><img src={icon_url3}/> {conditions3}</p>
     <p>H: {high3}° L: {low3}°</p>
     <p> chance of rain: {pop3}%</p>
     <p> Wind: {windDirection3} {windMph3} mph</p>
     </div>
     </div>
     </div>
 )

 export default Results

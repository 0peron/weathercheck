import React, { Component } from 'react';
import WeatherSearch from './components/Search'
import Results from './components/Results'


class App extends Component {
  render() {
      return(
          <div>
            <WeatherSearch />
            <Results />
          </div>
      )
  }
}

export default App

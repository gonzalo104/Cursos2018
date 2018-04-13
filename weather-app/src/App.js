import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList'


//const cities = ["san luis potosi,mx"]
const cities = ["san luis potosi,mx","Bogotá,col","Buenos Aires,ar","Ciudad de México,mx","Madrid,es"]


class App extends Component {
  render() {
    return (
      <div className="App">
        
     
     <LocationList cities={cities}></LocationList>
     



      </div>
    );
  }
}

export default App;

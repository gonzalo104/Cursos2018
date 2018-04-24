import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper' 
import AppBar from 'material-ui/AppBar'
import {setCity} from './actions'
import PropTypes from 'prop-types'


const cities = ["san luis potosi,mx","Bogotá,col","Buenos Aires,ar","Ciudad de México,mx","Madrid,es"]



class App extends Component {
  
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`)
    this.setState({city})   
    this.props.setCity(city)
  }

  constructor(){
    super()
    this.state = {
      city: null
    }
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title="Weather App"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail">
                {
                  this.state.city &&
                  <ForecastExtended city={this.state.city}></ForecastExtended>
                }               
              </div>
            </Paper>
          </Col>
        </Row>  
        </Grid>
      </MuiThemeProvider>
    );
  }
}

App.propTypes={
  setCity:  PropTypes.func.isRequired,
}


const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
})

export default connect(null, mapDispatchToPropsActions)(App)
//export default AppConnected
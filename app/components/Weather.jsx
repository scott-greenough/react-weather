var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    debugger;
    that.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then (function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
        debugger;
        if (isLoading) {
          return <h3>Fetching weather...</h3>;
        } else if(temp && location) {
          return <WeatherMessage location={location} temp={temp}/>;
        }
    }
    return (
      <div>
        <h3>Get Weather</h3>
        <br/>
        <WeatherForm onSearch={this.handleSearch}/>
        <br/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
import React from "react";
import Moment from "react-moment";
const Current = ({ locationData = {}, getWeatherImage, searchedCity }) => {
  console.log(locationData);
  // console.log(searchedCity)
  const {
    clouds,
    feels_like,
    humidity,
    temp,
    rain,
    snow,
    uvi,
    wind_speed,
    wind_gust,
    visibility,
    weather,
  } = locationData.current || {};
  const {city,state} = searchedCity["0"] || 'Current Location'
  const icon = weather ? weather["0"].icon : "01d";
  return (
    <section className="container col-8">
      {city ? (
        <div className="text-center text-capitalize">
          <h1><Moment format="dddd MMM do YYYY"></Moment></h1>
          <h2>
            {`${city}, ${state}`} 
          </h2>
        </div>
      ) : (
        <div className="text-center text-capitalize"><h1><Moment format="dddd MMM do YYYY"></Moment></h1><h2 id="cityTxtEl">
          Current Location 
        </h2></div>
      )}
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col text-center">
              <p id="tempEl">Temp: {temp}°F </p>
              <p id="curfeelsEl">Feels like: {feels_like} °F</p>
              <p id="curWindSpeedEl">Wind: {wind_speed} mph</p>
              <p id="curWindSpeedEl">Gust: {wind_gust} mph</p>

            </div>
            <div className="col text-center">
              <div className="text-center">
                <img
                  className="img-fluid"
                  id="weatherImg"
                  src={`${getWeatherImage(icon)}`}
                  alt="Weather Icon"
                />
              </div>
              <p id="curDescriptionEl" className="text-center">
                {weather ? weather["0"].main : 'Sunny'}
              </p><p>UV Index: {uvi}</p>
            </div>
            <div className="col text-center">
              <p id="curHumidityEl">Humidity: {humidity}</p>
              <p id="curCloudsEl">Clouds:{clouds}</p>
              <p id="curVisibilityEl">Visibility: {visibility}</p>
              {rain ? <p id="curRainEl">Rain: {rain["1h"]} in</p> : ""}
              {snow ? <p id="curRainEl">Snow: {snow["1h"]} in</p> : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Current;

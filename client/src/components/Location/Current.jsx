// import React, { useState } from "react";
import React from "react";
import Moment from "react-moment";
const Current = ({ locationData = {}, getWeatherImage, searchedCity,units}) => {
  // console.log(locationData);
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
    sunrise,
    sunset,
    pressure,
    // wind_deg
  } = locationData.current || {};
  const { city, state } = searchedCity["0"] || "Current Location";
  
  const icon = weather ? weather["0"].icon : "01d";
  // const [windDirection,setWindDirection]= useState('')
 
  return (
    <section className="container col-8 text-center ">
      <h1>
        <Moment format="dddd MMMM Do YYYY"></Moment>
      </h1>
      {city ? (
        <div className="text-center text-capitalize">
          <h2>{`${city}, ${state}`}</h2>
        </div>
      ) : (
        <div className="text-center text-capitalize">
          <h2 id="cityTxtEl">Current Location</h2>
        </div>
      )}
      <div className="d-flex flex-wrap justify-content-around">
          
            <div className="text-center m-auto">
            <div className="text-center">
                <img
                  className="img-fluid"
                  id="weatherImg"
                  src={`${getWeatherImage(icon)}`}
                  alt="Weather Icon"
                />
              </div>  <p id="curDescriptionEl" className="text-center">
                {weather ? weather["0"].main : "Sunny"}
              </p>
              <p id="tempEl">Temp: {Math.round(temp) || 0} {units[0]} </p>
              <p id="curfeelsEl">Feels like: {Math.round(feels_like)||0} {units[0]}</p>
               <p id="curWindSpeedEl">Wind: {wind_speed} {units[1]} {}</p>
             
            
            </div>
            <div className=" m-auto text-center">
            
             {wind_gust ? (
                <p id="curWindSpeedEl">Gust: {wind_gust} {units[1]}</p>
              ) : (
                ""
              )}
              <p>UV Index: {uvi}</p>
              {sunrise ? (
                <p>
                  Sunrise:{" "}
                  <Moment unix format="h:mm">
                    {sunrise}
                  </Moment>{" "}
                  am
                </p>
              ) : (
                ""
              )}
              {sunset ? (
                <p>
                  Sunset:{" "}
                  <Moment unix format="h:mm">
                    {sunset}
                  </Moment>{" "}
                  pm
                </p>
              ) : (
                ""
              )}
            </div>
            <div className=" m-auto text-center">
              <p id="curHumidityEl">Humidity: {humidity}%</p>
              <p id="curCloudsEl">Clouds:{clouds}%</p>
              <p id="curVisibilityEl">Visibility: {visibility}m</p>
              {rain ? <p id="curRainEl">Rain: {rain["1h"]}mm</p> : ""}
              {snow ? <p id="curRainEl">Snow: {snow["1h"]}mm</p> : ""}
              <p>Pressure: {pressure} hPa</p>
            </div>
          </div>
    </section>
  );
};
export default Current;

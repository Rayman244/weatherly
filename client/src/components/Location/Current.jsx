
import React from "react";



const Current = ({locationData={}})=>{
  console.log(locationData)
const {clouds,feels_like,humidity,temp,rain,uvi,wind_speed,visibility,weather } = locationData.current || {}
console.log(weather ? weather['0'] : 'load')
return (<section className="container col-8">
        <h2 id="cityTxtEl" className="text-center text-capitalize">
          Current Location
        </h2>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col text-center">
                <p id="tempEl">Temp: {temp} </p>
                <p id="curWindSpeedEl">Wind:{wind_speed}</p>
                <p id="curfeelsEl">Feels like: {feels_like}</p>
                <p>UV Index: {uvi}</p>
              </div>
              <div className="col text-center">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    id="weatherImg"
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="Weather Icon"
                  />
                </div>
                <p id="curDescriptionEl" className="text-center">{weather ? weather['0'].main : 'load'}</p>
              </div>
              <div className="col text-center">
                <p id="curHumidityEl">Humidity: {humidity}</p>
                <p id="curCloudsEl">Clouds:{clouds}</p>
                <p id="curVisibilityEl">Visibility: {visibility}</p>
                <p id="curRainEl">Rain: { rain ? rain['1h'] : 0} in</p>
              </div>
            </div>
          </div>
        </div>
      </section>)
} 
export default Current;

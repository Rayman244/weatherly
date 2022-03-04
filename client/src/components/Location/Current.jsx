import React from "react";

const Current = ()=>{
return (<section className="container col-9">
        <h2 id="cityTxtEl" className="text-center text-capitalize">
          Current Location
        </h2>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col text-center">
                <p id="tempEl">Temp:</p>
                <p id="curWindSpeedEl">Wind:</p>
                <p id="curfeelsEl">Feels like:</p>
                <p>UV Index: <span id="curUvIndexEl"></span></p>
              </div>
              <div className="col text-center">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    id="weatherImg"
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                  />
                </div>
                <p id="curDescriptionEl" className="text-center"></p>
              </div>
              <div className="col text-center">
                <p id="curHumidityEl">Humidity:</p>
                <p id="curCloudsEl">Clouds:</p>
                <p id="curVisibilityEl">Visibility:</p>
                <p id="curRainEl">Rain:</p>
              </div>
            </div>
            <section>
              <h3 className="text-center">5 Day Forecast</h3>
              <div
                className="weekForecastContainer d-flex justify-content-between"
              ></div>
            </section>
          </div>
        </div>
      </section>)
} 
export default Current;

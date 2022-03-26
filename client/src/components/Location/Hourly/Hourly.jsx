import React from "react";
import {Card} from "react-bootstrap"
import "./styles.css";
import Moment from "react-moment";
const Hourly = ({ locationData,getWeatherImage }) => {
  // console.log(locationData);
  const { hourly } = locationData || [];
  return (
    <div className="container-fliud p-3" id="hourDiv">
      <h3>Next Few Hours</h3>
      <div className="d-flex flex-wrap justify-content-around">
        {hourly
          ? hourly.slice(1, 7).map((hour, index) => {
              // console.log(hour)
              return (
                <Card style={{ width: '10rem', textAlign:'center', margin:'8px'}} key={index}>
                <Card.Img variant="top" src={`${getWeatherImage(hour.weather['0'].icon)}`} />
                <Card.Body>
                  <Card.Title><Moment unix format='h a'>{hour.dt}</Moment></Card.Title>     

                  <p>Temp: {Math.round(hour.temp)}°F</p>
                 <p>Feels: {Math.round(hour.feels_like)}°F</p>
                 <p>Wind: {Math.round(hour.wind_speed)} mph</p>
                 <p>Gust: {Math.round(hour.wind_gust)} mph</p>
                </Card.Body>
              </Card>
                // <div className="card hourCard" key={index}>
                //   <p>Temp: {hour.temp}°F</p>
                //   <p>Feels Like: {hour.feels_like}°F</p>
                //   <p>Wind: {hour.wind_speed} mph</p>
                // </div>
              );
            })
          : []}
      </div>
    </div>
  );
};

export default Hourly;

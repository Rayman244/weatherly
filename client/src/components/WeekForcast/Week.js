import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import './styles.css'
const Week = ({locationData,getWeatherImage})=>{
    const {daily} = locationData || []
    // console.log(daily);
    return (<div className="container-fluid p-3" id='weekContainer'>
        <h3>Rest of the Week</h3>
        <div className="d-flex">
             {daily
          ? daily.slice(1, 7).map((day, index) => {
              // console.log(day)
              return (
                <Card style={{ width: '18rem', textAlign:'center', margin:'8px'}} key={index}>
                <Card.Img variant="top" src={`${getWeatherImage(day.weather['0'].icon)}`} />
                <Card.Body>
                <Card.Title><Moment unix format=' ddd DD'>{day.dt}</Moment></Card.Title>
                 <p >Temp: {day.temp.day}°F</p>
                  <p>Feels: {day.feels_like.day}°F</p>
                 <p>Wind: {day.wind_speed} mph</p>
                 <p>Gust: {day.wind_gust} mph</p> 

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
        </div></div>
    )
}
export default Week
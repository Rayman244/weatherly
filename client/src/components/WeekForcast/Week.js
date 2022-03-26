import React from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import './styles.css'
const Week = ({locationData,getWeatherImage})=>{
    const {daily} = locationData || []
    // console.log(daily);
    return (<div className="container-fluid p-3" id='weekContainer'>
        <h3>Rest of the Week</h3>
        <div className="d-flex flex-wrap justify-content-around">
             {daily
          ? daily.slice(1, 7).map((day, index) => {
              // console.log(day)
              return (
                <Card style={{ width: '10rem', textAlign:'center', margin:'8px'}} key={index}>
                <Card.Img variant="top" src={`${getWeatherImage(day.weather['0'].icon)}`} />
                <Card.Body>
                <Card.Title><Moment unix format=' ddd Do'>{day.dt}</Moment></Card.Title>
                 <p >Temp: {Math.round(day.temp.day)}°F</p>
                  <p>Feels: {Math.round(day.feels_like.day)}°F</p>
                 <p>Wind: {Math.round(day.wind_speed)} mph</p>
                 <p>Gust: {Math.round(day.wind_gust)} mph</p> 

                </Card.Body>
              </Card>
               
              );
            })
          : []}
        </div></div>
    )
}
export default Week
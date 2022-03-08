import React from "react";
import './styles.css'
const Hourly = ({locationData}) => {
    console.log(locationData)
    const {hourly} = locationData || []
    return (
        <div className="container"id="hourDiv" >
            <h3>Next Few Hours</h3>
            <div className="d-flex justify-content-between">

           
            {hourly ? hourly.slice(0,7).map((hour,index)=>{
                return (<div className="card hourCard" key={index}>
                    <p>{hour.temp}</p>
                    <p>Feels Like{hour.feels_like}</p>
                    <p>{hour.wind_speed}</p>
                    
                    </div>)
            }):[]}
             </div>
        </div>
    )
}

export default Hourly
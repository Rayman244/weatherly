import React from "react";

const Alerts = ({locationData})=>{
    const {alerts} = locationData || []
    console.log(locationData)
    return (
        <div className="container">
            {locationData ? 
        <h3>Alerts</h3>
          /* {locationData ? alerts.map((alert,index)=>{
            return (<div className="card" key={index}>
             <p>Event: {alert.event}</p> <p>From: {alert.sender_name}</p><p>{alert.description}</p></div>)
          }):<></>} */:<h3>Alerts</h3>
        }
        </div>
    )
}

export default Alerts
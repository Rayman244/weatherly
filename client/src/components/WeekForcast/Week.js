import React from "react";

const Week = ({locationData})=>{
    console.log(locationData);
    if(locationData){
        console.log(locationData.daily);
        // locationData.daily.map((day)=>{
        //     return console.log(day);
        // })
    }
    // locationData ? locationData.daily.map((day)=>{
    //     return console.log(day);
    // }):console.log('hi')
    return (
        <div>
            {/* {locationData ? locationData.daily.map((day)=>{
                return console.log(day);
            }):<p>Search a Location</p>} */}
        </div>
    )
}
export default Week
import React, { useState } from "react";
// import { SAVE_LOCATION } from "../utils/mutations";
// import Auth from "../utils/auth";
// import { showCurLocation } from "../utils/api";
// import { useMutation } from '@apollo/client';
import Current from "../components/Location/Current";
import Search from "../components/Search/Search";
import Hourly from "../components/Location/Hourly/Hourly";
import Week from "../components/WeekForcast/Week";
import Alerts from "../components/Alerts/Alerts";
const Home = () => {
  // const [addSavedLocation] = useMutation(SAVE_LOCATION);  
  const [locationData, setLocationData]=useState({});
  const showCurLocation = async () => {
    return await navigator.geolocation.getCurrentPosition(success, error);
  }
  
  // Getting current location
  async function success(pos) {
    const crd = await pos.coords;
    const{latitude,longitude} = crd
    return gerCurLocation(latitude, longitude);
    
  
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
   const gerCurLocation = async (lat,lon) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
  
    const data = await response.json();
    setLocationData(data)
    return data
    
  };
  
  const getCurrentLocation = async () => {
    try {
      const response = await showCurLocation();
     const data = response
     setLocationData(data)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
   <div className="d-flex">
      <Search />
       <button onClick={getCurrentLocation}>Get Current Locstion</button>
      <Current locationData={locationData} />
    </div>
    <Hourly locationData={locationData}/>
    <Week locationData={locationData}/>
   <Alerts locationData={locationData}/>
    </>
  );
};

export default Home;

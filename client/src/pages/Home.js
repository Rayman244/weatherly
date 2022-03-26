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

import Map from "../components/Map/Map";

import "./styles.css"

const Home = () => {
  // const [addSavedLocation] = useMutation(SAVE_LOCATION);  
  const [locationData, setLocationData]=useState({});
  const [unitType,setUnitType] = useState('imperial')
  const [units,setUnits] = useState(['°F','mph'])
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(1);

  const [searchedCity,setSearchedCity] = useState("")
  const showCurLocation = async () => {
    return await navigator.geolocation.getCurrentPosition(success, error);
  }
  
  // Getting current location
  async function success(pos) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const crd = await pos.coords;
    const{latitude,longitude} = crd
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}`)
    const data = await response.json();
    console.log(data);
    setSearchedCity([{"city":data['0'].name,"state":data['0'].state}])
    weatherMap('precipitation_new',center[0],center[1],zoom)
    return gerCurLocation(latitude, longitude);
    
  
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
   const gerCurLocation = async (lat,lon) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
  
    const data = await response.json();
    setLocationData(data)
    
    return data
    
  };
  const findCity = async (city) => {
    // console.log(city);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      
      throw new Error("something went wrong!");
    }
  
    const data = await response.json();
    setLocationData(data)
    setSearchedCity([{"city":data['0'].name,"state":data['0'].state}])
    gerCurLocation(data[0].lat,data[0].lon)
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

  function getWeatherImage(imgId) {
    var imgUrl = `https://openweathermap.org/img/wn/${imgId}@2x.png`;
    return imgUrl;
  }
  
  const weatherMap= async (layer,lat,lon,z)=>{
    const API_KEY = process.env.REACT_APP_API_KEY;

    try{
      const response = await fetch(`https://tile.openweathermap.org/map/${layer}/${z}/${lat}/${lon}.png?appid=${API_KEY}`)
      // const data = await response.json()
      console.log(response);
    }catch(err){
      console.log("error in weathermap", err);
    }
  }
  // console.log(weatherMap('TA2',));
  
  return (
    <>
   <div className="d-flex"id="home">
      <Search findCity={findCity} getCurrentLocation={getCurrentLocation} setUnitType={setUnitType} setUnits={setUnits}/>
      <Current locationData={locationData} getWeatherImage={getWeatherImage} searchedCity={searchedCity} units={units}/>
    </div>
    <Hourly locationData={locationData} getWeatherImage={getWeatherImage}/>
   
    <Map />
    <Week locationData={locationData} getWeatherImage={getWeatherImage}/>
   <Alerts locationData={locationData}/>
    </>
  );
};

export default Home;

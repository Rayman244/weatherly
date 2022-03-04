import React, { useState, useEffect } from "react";
import { SAVE_LOCATION } from "../utils/mutations";

// import { Button, Form, FormControl, Container, Row, Col } from "react-bootstrap";
import Auth from "../utils/auth";
import { searchLocation } from "../utils/api";
// import { saveLocationIds, getSavedLocationIds } from "../utils/localStorage";
import { useMutation } from '@apollo/client';
import Current from "../components/Location/Current";
import Search from "../components/Search/Search";

const Home = () => {
  const [addSavedLocation] = useMutation(SAVE_LOCATION);
  // create state for holding returned api data
  // const [searchedLocations, setSearchedLocation] = useState([]);
  // create state for holding our search field data
  // const [searchInput, setSearchInput] = useState("");

  // create state to hold saved LocaitonId values
  // const [savedLocationIds] = useState(getSavedLocationIds());

  // set up useEffect hook to save `savedRecipeIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   return () => saveLocationIds(savedLocationIds);
  // });
  

  function showCurWeather() {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  showCurWeather()
  
  // Getting current location
  function success(pos) {
    const crd = pos.coords;
    const{latitude,longitude} = crd
    return searchLocation(latitude, longitude);
    

  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // create function to handle saving a location to our database
  const handleSaveLocation = async (cityname) => {
    
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await addSavedLocation({
        variables: {
          location:cityname
        }
      });

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

    } catch (err) {
      console.log(JSON.parse(JSON.stringify(err)))
    }
  };

  return (
    <div>
      <Search/>
      <Current/>
    </div>
      
  );
};

export default Home;

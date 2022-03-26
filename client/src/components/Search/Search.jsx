import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PinMapFill } from "react-bootstrap-icons";

const Search = ({ findCity, getCurrentLocation, setUnitType, setUnits }) => {
  let [city, setCity] = useState("");
  let [searchedCities, setSearchedCities] = useState([]);
  return (
    <section className="col-3">
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="cityName">Search City Name:</Form.Label>
            <Form.Control
              id="cityName"
              placeholder="Philadelphia"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              onSubmit={(e) => {
                console.log(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="unitSelector">Unit Type:</Form.Label>
            <Form.Select
              id="unitSelector"
              onChange={(e) => {
                switch (e.target.value) {
                  case "Metric":
                    setUnits(["°C", "m/s"]);
                    break;
                  case "Standard":
                    setUnits(["°K", "v"]);
                    break;
                  default:
                    setUnits(["°F", "mph"]);
                }

                return setUnitType(e.target.value);
              }}
            >
              <option>Imperial</option>
              <option>Metric</option>
              <option>Standard</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex flex-wrap justify-content-between">
            <Button
              className="my-2"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(city);
                setSearchedCities(searchedCities.push(city));
                console.log(searchedCities)
                // if (searchedCities.length > 1) {
                //   
                //   localStorage.setItem("searchedCities", searchedCities);
                // } else {
                // localStorage.setItem("searchedCities",city)

                // }
                findCity(city);
                setCity = "";
              }}
            >
              Search
            </Button>
            <div>
              <Button className="my-2" onClick={getCurrentLocation}>
                <PinMapFill />
              </Button>
            </div>
          </div>
        </fieldset>
      </Form>
      {/* <section id="searchedContainer">
        {searchedCities? searchedCities.slice(1,5).map((cit,index)=>{
          return(
            <Button key={index} value={cit}>{cit}</Button>
          )
        }) : <p>Search a City</p>}
      </section> */}
    </section>
  );
};
export default Search;

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PinMapFill } from "react-bootstrap-icons";

const Search = ({ findCity, getCurrentLocation, setUnitType, setUnits }) => {
  let [city, setCity] = useState("");
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
              onSubmit={(e)=>{
                console.log(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="unitSelector">Unit Type:</Form.Label>
            <Form.Select
              id="unitSelector"
              onChange={(e) => {
                switch(e.target.value){
                  case("Metric"):setUnits(["°C",'m/s']);
                  break;
                  case("Standard"):setUnits(["°K","v"]);
                  break;
                  default:setUnits(['°F',"mph"])
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
                // console.log(city)
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
      <section id="searchedContainer"></section>
    </section>
  );
};
export default Search;
